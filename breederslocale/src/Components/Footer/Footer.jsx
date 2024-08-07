/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="footer">
        <UpperFooter/>
        <LowerFooter/>
    </div>
  )
}

export default Navigation

function UpperFooter() {
    return (
        <div className="upper-footer">
            <div className="company-details"></div>
            <div className="footer-groups">
                <div className="footer-group footer-company">
                    <h4>Company</h4>
                    <ul>
                        <CustomLink to="/">Careers</CustomLink>
                        <CustomLink to="/about">Blog</CustomLink>
                        <CustomLink to="/contact">Contact</CustomLink>
                    </ul>
                </div>
                <div className="footer-group footer-legal">
                <h4>Company</h4>
                    <ul>
                        <CustomLink to="/">Terms of Use</CustomLink>
                        <CustomLink to="/about">Privacy Policy</CustomLink>
                        <CustomLink to="/contact">Cookies Policy</CustomLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function LowerFooter() {
    return (
        <div className="lower-footer">
            <h4>Breeders-Digest, 2024</h4>
            <div className="footer-socials"></div>
        </div>
    )
}

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