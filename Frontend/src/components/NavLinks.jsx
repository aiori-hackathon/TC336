import { Link, Router } from "react-router-dom"
const NavLinks = () => {
  return (
    <div className="flex gap-8 text-[16px] text-gray-300 h-full items-center font-medium">
        <Link to="/">Home</Link>
        <Link to="/validate">Validator</Link>
        <Link to="/architecture">Architecture</Link>
        <Link to="/history">History</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default NavLinks