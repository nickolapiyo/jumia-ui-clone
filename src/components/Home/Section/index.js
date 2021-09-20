import React from 'react';
//Styles
import { Wrapper, Content, Link } from './Section.styles';
//Images
import FoodImg from '../../../images/ICONE_FOOD-.png';
import GlobalImg from '../../../images/JumiaGlobal.png';
import AirtimeImg from '../../../images/JumiaOne_2.png';
import StoreImg from '../../../images/Official-Store_ICON_JBF21.png';

const Section = () => {
    return (
        <Wrapper>
            <Content>
                <a href='./'>
                    <Link>
                        <img src={StoreImg} alt='store-img' />
                    </Link>
                    <span>Official Stores</span>
                </a>
            </Content>
            <Content>
                <a href='./'>
                    <Link>
                        <img src={GlobalImg} alt='global-img' />
                    </Link>
                    <span>Jumia Global</span>
                </a>
            </Content> 
            <Content> 
                <a href='./'>
                    <Link>
                        <img src={AirtimeImg} alt='airtime-img' />
                    </Link>
                    <span>Airtime & Bills</span>
                </a>
            </Content>
            <Content>
                <a href='./'>
                    <Link>
                        <img src={FoodImg} alt='food-img' />                        
                    </Link>
                    <span>Food Festival</span>
                </a>
            </Content>
        </Wrapper>
    );
}

export default Section;