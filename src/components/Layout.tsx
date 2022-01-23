import Header from '@/components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex h-full">
          <main className="container mx-auto pt-4">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
