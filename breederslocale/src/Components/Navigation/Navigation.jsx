/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="header">
      <Link to="/" className="site-title">Site Name</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      
    </nav>
  )
}

export default Navigation

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}