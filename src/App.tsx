import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import { AppProvider } from '@/contexts/AppProvider'
import { useEffect } from 'react'

const App: React.VFC = () => {
  useEffect(() => {
    document.oncontextmenu = function () {
      return false
    }
  }, [])
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
