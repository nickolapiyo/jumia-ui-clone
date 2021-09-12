import React from "react";
//Styles
import { Wrapper, Content } from "./CartLink.styles";
//Images
import Cart from '../../images/shopping-cart.svg';
import ArrowDown from '../../images/arrow-down.svg';

function CartLink(){
  return(
    <Wrapper>
    <Content>
        <a href="">
            <span>
                <img src={Cart} alt='user'/>
            </span>
            Cart
        </a>
    </Content>
</Wrapper>
  );
}

export default CartLink;
