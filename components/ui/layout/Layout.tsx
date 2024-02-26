import Nav from "./nav/Nav"

type PropsTypes = {
    children: React.ReactNode
}

const Layout = ({ children } : PropsTypes) => {
  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default Layout