import React from "react";
//Styles
import { 
    Wrapper, 
    Content, 
    Header, 
    Items, 
    Item,
    Description,
    Price,
    PriceBefore,
    Tag
} from './TopSelling.styles';
//Images
import Infinix from '../../../images/1.jpg';
import BaseCap from '../../../images/1(1).jpg';
import Tecno from '../../../images/1(2).jpg';
import Twist from '../../../images/1(3).jpg';
import Pods from '../../../images/1(4).jpg';
import Dstv from '../../../images/1(5).jpg';
//import Twist from '../../../images/1(6).jpg';

const TopSelling = () => {
    return (
        <Wrapper>
            <Content>
                <Header>
                    <h3>Top selling items</h3>
                </Header>
                <Items>
                    <Item>
                        <a href='./'>
                            <img src={BaseCap} alt='BaseCap' />
                            <Description>
                                Fashion Unisex Plain Baseball Cap For Men Women + FREE OTG.
                            </Description>
                            <Price>KSh 400</Price>
                            <PriceBefore>KSh 270 - Ksh 299</PriceBefore>
                            <Tag>-33%</Tag>
                        </a>
                    </Item>
                    <Item>
                        <a href='./'>
                            <img src={Infinix} alt='infinix' />
                            <Description>
                                Infinix Smart 5, 32GB + 2GB RAM, 6.6", (Dual SIM), Midnight Black
                            </Description>
                            <Price>KSh 8,995</Price>
                            <PriceBefore>KSh 15,000</PriceBefore>
                            <Tag>-40%</Tag>
                        </a>
                    </Item>
                    <Item>
                        <a href='./'>
                            <img src={Tecno} alt='Tecno' />
                            <Description>
                                Tecno Spark 7, 6.5", 64GB + 3GB RAM (Dual SIM), 5000mAh, 4G,Spruce Green
                            </Description>
                            <Price>KSh 12,498</Price>
                            <PriceBefore>KSh 18,999</PriceBefore>
                            <Tag>-34%</Tag>
                        </a>
                    </Item>
                    <Item>
                        <a href='./'>
                            <img src={Twist} alt='Twist' />
                            <Description>
                                Generic New Magic twist and Curling Sponge
                            </Description>
                            <Price>KSh 340</Price>
                            <PriceBefore>KSh 360</PriceBefore>
                            <Tag>-6%</Tag>
                        </a>
                    </Item>
                    <Item>
                        <a href='./'>
                            <img src={Pods} alt='Pods' />
                            <Description>
                                Fashion Earphone Storage Bag Practical Wear-resistant Durable Silicone Wireless Earphone Case Cover For  2-Black
                            </Description>
                            <Price>KSh 308</Price>
                            <PriceBefore>KSh 540</PriceBefore>
                            <Tag>-43%</Tag>
                        </a>
                    </Item>
                    <Item>
                        <a href='./'>
                            <img src={Pods} alt='Pods' />
                            <Description>
                                Dstv 6s HD Decoder + Dish Kit + 1M Access
                            </Description>
                            <Price>KSh 2,699</Price>
                            <PriceBefore>KSh 2,999</PriceBefore>
                            <Tag>-10%</Tag>
                        </a>
                    </Item>
                </Items>
            </Content>
        </Wrapper>
    );
}

export default TopSelling;