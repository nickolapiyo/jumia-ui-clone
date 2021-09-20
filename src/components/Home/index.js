import React from 'react';
//Styles
import { Wrapper, Content } from './Home.styles';
//Components
import Menu from '../Menu';
import Section from './Section';
import TopSelling from './TopSelling';
import Info from './Info';

const Home = () => {
    return (
        <Wrapper>
            <Content>
                <Menu/>
                <Section />
                <TopSelling />
                <Info />
            </Content>
        </Wrapper>
    );
}

export default Home;