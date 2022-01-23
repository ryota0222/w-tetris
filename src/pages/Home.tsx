import { useDarkMode } from '@/hooks/useDarkMode'
import PlayScreen from '@/components/PlayScreen'

const Home = () => {
  const { toggle, isDarkMode } = useDarkMode()
  return (
    <div>
      Home
      <button onClick={() => toggle()}>
        toggle {isDarkMode ? 'dark' : 'light'}
      </button>
      <PlayScreen />
    </div>
  )
}

export default Home
