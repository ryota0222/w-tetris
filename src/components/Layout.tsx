import Header from '@/components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-700">
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex h-full">
          <main
            className={`container mx-auto pt-2`}
            style={{ maxWidth: '800px' }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
