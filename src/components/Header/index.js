import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content, LogoImg } from './Header.styles';
//Images
import Logo from '../../images/jumia.png';
//Components
import SearchBar from '../SearchBar';
import AccountDropdown from '../AccountDropdown';
import HelpDropdown from '../HelpDropdown';
import CartLink from '../CartLink';

function Header() {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={Logo} alt='logo image'></LogoImg>
                <SearchBar />
                <AccountDropdown />
                <HelpDropdown />
                <CartLink />
            </Content>
        </Wrapper>
    )
}

export default Header;