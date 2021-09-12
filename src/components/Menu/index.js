import React from 'react';
//Styles
import { Wrapper, Content } from './Menu.styles';
//Components
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Info from './Info';

const Menu = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Slideshow />
            <Info />
        </Wrapper>
    );
}

export default Menu;