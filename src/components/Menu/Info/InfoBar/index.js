import React from 'react';
//Styles
import { Wrapper, Text, Heading, Content } from './InfoBar.styles';
//Images
import Help from '../../../../images/Webp.net-resizeimage-(1).png';
import Return from '../../../../images/icone-2-return.png';
import Sell from '../../../../images/icone-2-payment.png'

const InfoBar = () => {
    return (
        <Wrapper>
            <a href="/">
                <img src={Help} alt='help-img' />
                <Text>
                    <Heading>HELP CENTER</Heading>
                    <Content>Guide To Customer Care</Content> 
                </Text>
            </a>

            <a href="/">
                <img src={Return} alt='return-img' />
                <Text>
                    <Heading>EASY RETURN</Heading>
                    <Content>Quick Refund</Content> 
                </Text>
            </a>

            <a href="/">
                <img src={Sell} alt='sell-img' />
                <Text>
                    <Heading>SELL ON JUMIA</Heading>
                    <Content>Millions Of Visitors</Content> 
                </Text>
            </a>
        </Wrapper>
    )
}

export default InfoBar;