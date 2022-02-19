import SearchAppBar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <SearchAppBar />
      <main>{children}</main>
    </>
  )
}

export default Layout;