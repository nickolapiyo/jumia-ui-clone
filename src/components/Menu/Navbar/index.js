import React from "react";
// import { FaAppleAlt, FaUtensils } from 'react-icons/fa';
//Styles
import { 
    Wrapper, 
    Nav, 
    NavLink, 
    Apple, 
    Utensils, 
    Briefcase,
    Mobile,
    Desktop,
    Tv,
    Tshirt,
    Gamepad,
    Baby,
    Sports,
    Outdoor,
    More 
} from './Navbar.styles';


const Navbar = () => {
    return (
        <Wrapper>
            <Nav>
                <NavLink to="/">
                    <Apple/> Supermarket
                </NavLink>
                <NavLink to="/">
                    <Utensils/> Health & Beauty
                </NavLink>
                <NavLink to="/">
                    <Briefcase/> Home & Office
                </NavLink>
                <NavLink to="/">
                    <Mobile/> Phones & Tablets
                </NavLink>
                <NavLink to="/">
                    <Desktop/> Computing
                </NavLink>
                <NavLink to="/">
                    <Tv/> Electronics
                </NavLink>
                <NavLink to="/">
                    <Tshirt/> Electronics
                </NavLink>
                <NavLink to="/">
                    <Gamepad/> Gaming
                </NavLink>
                <NavLink to="/">
                    <Baby/> Baby Products
                </NavLink>
                <NavLink to="/">
                    <Sports/> Sporting Goods
                </NavLink>
                <NavLink to="/">
                    <Outdoor/> Garden & Outdoors
                </NavLink>
                <NavLink to="/">
                    <More/> Other categories
                </NavLink>
            </Nav>
        </Wrapper>
    )
}

export default Navbar;