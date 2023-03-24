import "./Header.css";
import Logo from "./../../assets/images/logo.svg"
import Hambuger from "./../../assets/images/icon-menu.svg"
import Close from "./../../assets/images/icon-menu-close.svg"
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

type NavItemProps = {
  text: string
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return (
    <h4>{text}</h4>
  )
}

const Header: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <div className="container">
      <div>
        <img
          src={Logo}
          alt="Logo"
          width={60}
          height={40} />
      </div>
      {
        !isTabletOrMobile &&
        <div
          className="nav">
          <NavItem
            text="Home" />
          <NavItem
            text="New" />
          <NavItem
            text="Popular" />
          <NavItem
            text="Trending" />
          <NavItem
            text="Categories" />
        </div>
      }
      {
        (isTabletOrMobile && isMenuOpen) &&
        <div className="side-nav-wrapper">
          <div
            className="side-nav">
            <img
              alt="Close Menu"
              width={24}
              height={24}
              src={Close}
              onClick={() => {
                setIsMenuOpen(false)
              }} />

            <NavItem
              text="Home" />
            <NavItem
              text="New" />
            <NavItem
              text="Popular" />
            <NavItem
              text="Trending" />
            <NavItem
              text="Categories" />
          </div>
        </div>
      }
      {
        isTabletOrMobile &&
        <img
          className="menu"
          src={Hambuger}
          alt="Menu Icon"
          width={24}
          height={24}
          onClick={() => {
            setIsMenuOpen(true)
          }} />
      }
    </div>
  )
}

export default Header;