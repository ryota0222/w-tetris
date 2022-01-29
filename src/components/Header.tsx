const Header: React.VFC = () => {
  return (
    <header className="flex justify-between items-center w-full shadow-lg">
      <nav>
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="text-base font-bold text-white md:text-xl">
              <a href="#">w-tetris</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
