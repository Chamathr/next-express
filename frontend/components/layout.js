import AppFooter from './footer';
import AppHeader from './header'

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}

export default Layout;