
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";



import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles.js";
import { useSelector } from "react-redux";

const Navigation = () => {

  const { currentUser } = useSelector((state) => state.user)

  const isCartOpen = useSelector(selectIsCartOpen)


  console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()

  }

  return (
    <>
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
