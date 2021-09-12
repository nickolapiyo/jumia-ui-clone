import React from 'react';
//Styles
import { Wrapper, Content } from './Home.styles';
//Components
import Menu from '../Menu';

const Home = () => {
    return (
        <Wrapper>
            <Content>
                <Menu/>
            </Content>
        </Wrapper>
    );
}

export default Home;