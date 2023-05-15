import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";



import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles.js";

const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)


  console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()

  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }



  return (
    <>
      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ?
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            : <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>}
          <CartIcon />

        </div>
        {isCartOpen && <CartDropdown />}
      </div> */}
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          {currentUser ?
            <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
            : <NavLink to="/auth">
              SIGN-IN
            </NavLink>}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
