import { Link, Router } from "react-router-dom"
const NavLinks = () => {
  return (
    <div className="flex gap-8 text-[16px] text-gray-300 h-full items-center font-medium">
        <Link to="/">Home</Link>
        <Link to="/validate">Validator</Link>
        <Link to="">Architecture</Link>
        <Link to="">History</Link>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
    </div>
  )
}

export default NavLinks