import {
  PLAY_SCREEN_CANVAS_ID,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  COLS_COUNT,
  ROWS_COUNT,
  BLOCK_SIZE,
  NEXT_CANVAS_ID,
  NEXT_BOARD_WIDTH,
  NEXT_BOARD_HEIGHT,
  BLOCK_LIGHT_GREEN_SOURCES,
  BLOCK_DARK_GREEN_SOURCES,
} from '@/consts'
import { GameTheme } from '@/types'

export class Asset {
  // ブロック用Imageの配列
  static blockImages: HTMLImageElement[] = []
  static darkGreenBlockImages: HTMLImageElement[] = []
  static lightGreenBlockImages: HTMLImageElement[] = []
  // 初期化処理
  // callback には、init完了後に行う処理を渡す
  static init(callback?: (args?: unknown) => any) {
    let loadCnt = 0
    // ライトモードの緑
    for (let i = 0; i < BLOCK_LIGHT_GREEN_SOURCES.length; i++) {
      let img = new Image()
      img.src = BLOCK_LIGHT_GREEN_SOURCES[i]
      img.onload = function () {
        loadCnt++
        Asset.lightGreenBlockImages.push(img)
        // 全ての画像読み込みが終われば、callback実行
        if (loadCnt >= BLOCK_LIGHT_GREEN_SOURCES.length && callback) {
          callback()
        }
      }
    }
    loadCnt = 0
    // ダークモードの緑
    for (let i = 0; i < BLOCK_DARK_GREEN_SOURCES.length; i++) {
      let img = new Image()
      img.src = BLOCK_DARK_GREEN_SOURCES[i]
      img.onload = function () {
        loadCnt++
        Asset.darkGreenBlockImages.push(img)
        // 全ての画像読み込みが終われば、callback実行
        if (loadCnt >= BLOCK_DARK_GREEN_SOURCES.length && callback) {
          callback()
        }
      }
    }
  }
}

export class Game {
  public mainCanvas: HTMLCanvasElement | null
  public mainCtx: CanvasRenderingContext2D | null
  public nextCanvas: HTMLCanvasElement | null
  public nextCtx: CanvasRenderingContext2D | null
  public gameTheme: GameTheme
  public score: Score | null
  private observers: Function[]
  private field: Field | null
  private timer: NodeJS.Timer | null
  private mino: Mino | null
  private nextMino: Mino | null
  constructor() {
    this.mainCanvas = null
    this.mainCtx = null
    this.nextCanvas = null
    this.nextCtx = null
    this.score = null
    this.observers = []
    this.field = null
    this.timer = null
    this.mino = null
    this.nextMino = null
    this.gameTheme = 'dark-green'
    this.initMainCanvas()
    this.initNextCanvas()
  }

  public addObserver(observer: Function) {
    this.observers.push(observer)
  }

  private notifyObserver(propertyName: string, oldValue: any, newValue: any) {
    for (let i = 0; i < this.observers.length; i++) {
      let o = this.observers[i]
      o.apply(this, [propertyName, oldValue, newValue])
    }
  }

  // メインキャンバスの初期化
  initMainCanvas() {
    this.mainCanvas = document.getElementById(
      PLAY_SCREEN_CANVAS_ID
    ) as HTMLCanvasElement
    this.mainCtx = this.mainCanvas.getContext('2d')
    this.mainCanvas.width = SCREEN_WIDTH
    this.mainCanvas.height = SCREEN_HEIGHT
    this.mainCanvas.style.border = '2px solid #30363D'
    this.mainCanvas.style.borderRadius = '6px'
  }

  // ネクストキャンバスの初期化
  initNextCanvas() {
    this.nextCanvas = document.getElementById(
      NEXT_CANVAS_ID
    ) as HTMLCanvasElement
    this.nextCtx = this.nextCanvas.getContext('2d')
    this.nextCanvas.width = NEXT_BOARD_WIDTH
    this.nextCanvas.height = NEXT_BOARD_HEIGHT
  }

  // ゲームの開始処理（STARTボタンクリック時）
  start(theme?: GameTheme) {
    // themeがあれば更新
    if (theme) {
      this.gameTheme = theme
    }
    // スコアの初期化
    this.score = new Score()
    // taroのプロパティ値変更を監視
    this.score.addObserver(
      (propertyName: string, oldValue: number, newValue: number) => {
        this.notifyObserver('score_change', oldValue, newValue)
      }
    )

    // フィールドとミノの初期化
    this.field = new Field(this.score)

    // 最初のミノを読み込み
    this.popMino()

    // 初回描画
    this.drawAll()

    // 落下処理
    if (this.timer) clearInterval(this.timer)
    this.timer = setInterval(() => this.dropMino(), 1000)

    // キーボードイベントの登録
    this.setKeyEvent()
  }

  //   ゲームの一時停止
  pause() {
    if (this.timer) clearInterval(this.timer)
    // キーボードイベントの解除
    this.clearKeyEvent()
  }

  //   ゲームの再開
  restart() {
    // 落下処理
    this.timer = setInterval(() => this.dropMino(), 1000)
    // キーボードイベントの登録
    this.setKeyEvent()
  }

  //   ゲームの強制終了
  forceEnd() {
    if (this.timer) clearInterval(this.timer)
    // キーボードイベントの解除
    this.clearKeyEvent()
    // 表示クリア
    this.initMainCanvas()
    this.initNextCanvas()
  }

  // 新しいミノを読み込む
  popMino() {
    this.mino = this.nextMino ?? new Mino(this.gameTheme)
    this.mino.spawn()
    this.nextMino = new Mino(this.gameTheme)

    // ゲームオーバー判定
    if (!this.valid(0, 1)) {
      this.drawAll()
      if (this.timer) clearInterval(this.timer)
      alert('ゲームオーバー')
    }
  }

  //   表示クリア
  clearDraw() {
    ;(this.mainCtx as CanvasRenderingContext2D).clearRect(
      0,
      0,
      SCREEN_WIDTH,
      SCREEN_HEIGHT
    )
    ;(this.nextCtx as CanvasRenderingContext2D).clearRect(
      0,
      0,
      NEXT_BOARD_WIDTH,
      NEXT_BOARD_HEIGHT
    )
  }

  // 画面の描画
  drawAll() {
    // 表示クリア
    this.clearDraw()

    // 落下済みのミノを描画
    if (this.field && this.mainCtx) {
      this.field.drawFixedBlocks(this.mainCtx)
    }

    // 再描画
    if (this.nextMino && this.nextCtx) {
      this.nextMino.drawNext(this.nextCtx)
    }
    if (this.mino && this.mainCtx) {
      this.mino.draw(this.mainCtx)
    }
  }

  // ミノの落下処理
  dropMino() {
    if (this.valid(0, 1)) {
      if (this.mino) this.mino.y++
    } else {
      // Minoを固定する（座標変換してFieldに渡す）
      if (this.mino) {
        ;(this.mino.blocks as Block[]).forEach((e) => {
          e.x += (this.mino as Mino).x
          e.y += (this.mino as Mino).y
        })
      }
      ;(this.field as Field).blocks = (this.field as Field).blocks.concat(
        (this.mino as Mino).blocks as Block[]
      )
      ;(this.field as Field).checkLine()
      this.popMino()
    }
    this.drawAll()
  }

  // 次の移動が可能かチェック
  valid(moveX: number, moveY: number, rot = 0) {
    let newBlocks = (this.mino as Mino).getNewBlocks(moveX, moveY, rot)
    return newBlocks.every((block) => {
      return (
        block.x >= 0 &&
        block.y >= -1 &&
        block.x < COLS_COUNT &&
        block.y < ROWS_COUNT &&
        !(this.field as Field).has(block.x, block.y)
      )
    })
  }

  // 左に移動
  moveLeft() {
    if (this.valid(-1, 0)) (this.mino as Mino).x--
  }

  // 右に移動
  moveRight() {
    if (this.valid(1, 0)) (this.mino as Mino).x++
  }

  // 下に移動
  moveBottom() {
    if (this.valid(0, 1)) (this.mino as Mino).y++
  }

  // 回転
  rotate() {
    if (this.valid(0, 0, 1)) (this.mino as Mino).rotate()
  }

  // キーボードイベント設定
  setKeyEvent() {
    const _this = this
    document.onkeydown = function (e: KeyboardEvent) {
      switch (e.code) {
        case 'ArrowLeft': // 左
          _this.moveLeft()
          break
        case 'ArrowRight': // 右
          _this.moveRight()
          break
        case 'ArrowDown': // 下
          _this.moveBottom()
          break
        case 'Space': // スペース
          _this.rotate()
          break
        default:
          break
      }
      _this.drawAll()
    }.bind(this)
  }

  // キーボードイベント解除
  clearKeyEvent() {
    document.onkeydown = function (e: KeyboardEvent) {
      switch (e.code) {
        case 'ArrowLeft': // 左
        case 'ArrowRight': // 右
        case 'ArrowDown': // 下
        case 'Space': // スペース
        default:
          break
      }
    }.bind(this)
  }
}

export class Block {
  // 基準地点からの座標
  // 移動中 ⇒ Minoの左上
  // 配置後 ⇒ Fieldの左上
  public x: number
  public y: number
  public gameTheme: GameTheme
  private type: number
  public image: HTMLImageElement
  constructor(x: number, y: number, gameTheme: GameTheme, type?: number) {
    this.x = x
    this.y = y
    this.type = type ?? 0
    this.gameTheme = gameTheme
    this.image = this.getBlockImages()[0]
    // 描画しないときはタイプを指定しない
    if (type && type >= 0) this.setType(type)
  }

  getBlockImages() {
    switch (this.gameTheme) {
      case 'light-green':
        return Asset.lightGreenBlockImages
      case 'dark-green':
        return Asset.darkGreenBlockImages
      default:
        return Asset.lightGreenBlockImages
    }
  }

  setType(type: number) {
    this.type = type
    this.image = this.getBlockImages()[type]
  }

  // Minoに属するときは、Minoの位置をオフセットに指定
  // Fieldに属するときは、(0,0)を起点とするので不要
  draw(offsetX = 0, offsetY = 0, ctx: CanvasRenderingContext2D) {
    let drawX = this.x + offsetX
    let drawY = this.y + offsetY

    // 画面外は描画しない
    if (
      drawX >= 0 &&
      drawX < COLS_COUNT &&
      drawY >= 0 &&
      drawY < ROWS_COUNT &&
      this.image
    ) {
      ctx.drawImage(
        this.image,
        drawX * BLOCK_SIZE,
        drawY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      )
    }
  }

  // 次のミノを描画する
  // タイプごとに余白を調整して、中央に表示
  drawNext(ctx: CanvasRenderingContext2D) {
    let offsetX = 0
    let offsetY = 0
    switch (this.type) {
      case 0:
        offsetX = 0.5
        offsetY = 0
        break
      case 1:
        offsetX = 0.5
        offsetY = 0.5
        break
      default:
        offsetX = 1
        offsetY = 0.5
        break
    }
    if (this.image) {
      ctx.drawImage(
        this.image,
        (this.x + offsetX) * BLOCK_SIZE * 0.5,
        (this.y + offsetY) * BLOCK_SIZE * 0.5 - 10,
        BLOCK_SIZE * 0.5,
        BLOCK_SIZE * 0.5
      )
    }
  }
}

export class Mino {
  public x: number
  public y: number
  public gameTheme: GameTheme
  private type: number
  public blocks: Block[] | null
  constructor(gameTheme: GameTheme) {
    this.type = Math.floor(Math.random() * 7)
    this.blocks = null
    this.gameTheme = gameTheme
    this.x = 0
    this.y = 0
    this.initBlocks()
  }

  initBlocks() {
    let t = this.type
    switch (t) {
      case 0: // I型
        this.blocks = [
          new Block(0, 2, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
          new Block(3, 2, this.gameTheme, t),
        ]
        break
      case 1: // O型
        this.blocks = [
          new Block(1, 1, this.gameTheme, t),
          new Block(2, 1, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
        ]
        break
      case 2: // T型
        this.blocks = [
          new Block(1, 1, this.gameTheme, t),
          new Block(0, 2, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
        ]
        break
      case 3: // J型
        this.blocks = [
          new Block(1, 1, this.gameTheme, t),
          new Block(0, 2, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
        ]
        break
      case 4: // L型
        this.blocks = [
          new Block(2, 1, this.gameTheme, t),
          new Block(0, 2, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
        ]
        break
      case 5: // S型
        this.blocks = [
          new Block(1, 1, this.gameTheme, t),
          new Block(2, 1, this.gameTheme, t),
          new Block(0, 2, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
        ]
        break
      case 6: // Z型
        this.blocks = [
          new Block(0, 1, this.gameTheme, t),
          new Block(1, 1, this.gameTheme, t),
          new Block(1, 2, this.gameTheme, t),
          new Block(2, 2, this.gameTheme, t),
        ]
        break
    }
  }

  // フィールドに生成する
  spawn() {
    this.x = COLS_COUNT / 2 - 2
    this.y = -3
  }

  // フィールドに描画する
  draw(ctx: CanvasRenderingContext2D) {
    ;(this.blocks as Block[]).forEach((block) => {
      block.draw(this.x, this.y, ctx)
    })
  }

  // 次のミノを描画する
  drawNext(ctx: CanvasRenderingContext2D) {
    ;(this.blocks as Block[]).forEach((block) => {
      block.drawNext(ctx)
    })
  }

  // 回転させる
  rotate() {
    ;(this.blocks as Block[]).forEach((block) => {
      let oldX = block.x
      block.x = block.y
      block.y = 3 - oldX
    })
  }

  // 次に移動しようとしている位置の情報を持ったミノを生成
  // 描画はせず、移動が可能かどうかの判定に使用する
  getNewBlocks(moveX: number, moveY: number, rot: number) {
    let newBlocks = (this.blocks as Block[]).map((block) => {
      return new Block(block.x, block.y, this.gameTheme)
    })
    newBlocks.forEach((block) => {
      // 移動させる場合
      if (moveX || moveY) {
        block.x += moveX
        block.y += moveY
      }

      // 回転させる場合
      if (rot) {
        let oldX = block.x
        block.x = block.y
        block.y = 3 - oldX
      }

      // グローバル座標に変換
      block.x += this.x
      block.y += this.y
    })

    return newBlocks
  }
}

export class Score {
  public score: number
  private observers: Function[]
  constructor() {
    this.score = 0
    this.observers = []
  }
  setScore(score: number) {
    this.notifyObserver('score', this.score, this.score + score)
    this.score += score
  }
  // scoreの変更を監視
  addObserver(observer: Function) {
    this.observers.push(observer)
  }
  notifyObserver(propertyName: string, oldValue: number, newValue: number) {
    for (let i = 0; i < this.observers.length; i++) {
      let o = this.observers[i]
      o.apply(this, [propertyName, oldValue, newValue])
    }
  }
}

export class Field {
  public blocks: Block[]
  public score: Score
  constructor(score: Score) {
    this.blocks = []
    this.score = score
  }

  drawFixedBlocks(ctx: CanvasRenderingContext2D) {
    this.blocks.forEach((block) => block.draw(0, 0, ctx))
  }

  checkLine() {
    for (var r = 0; r < ROWS_COUNT; r++) {
      var c = this.blocks.filter((block) => block.y === r).length
      if (c === COLS_COUNT) {
        this.blocks = this.blocks.filter((block) => block.y !== r)
        this.blocks.filter((block) => block.y < r).forEach((upper) => upper.y++)
        this.score.setScore(100)
      }
    }
  }

  has(x: number, y: number) {
    return this.blocks.some((block) => block.x == x && block.y == y)
  }
}
