import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Layout from '@/components/Layout'
import { TetrisProvider } from '@/contexts/TetrisProvider'

const App: React.VFC = () => {
  return (
    <TetrisProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </TetrisProvider>
  )
}

export default App
