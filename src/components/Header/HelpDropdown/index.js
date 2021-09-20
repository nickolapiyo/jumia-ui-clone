import React from "react";
//Styles
import { Wrapper, Content } from "./HelpDropdown.styles";
//Images
import Help from '../../../images/information.svg';
import ArrowDown from '../../../images/arrow-down.svg';

function HelpDropdown(){
  return(
    <Wrapper>
    <Content>
        <label>
            <span>
                <img src={Help} alt='user'/>
            </span>
            Help
            <span>
                <img src={ArrowDown} alt='arrow-down'/>
            </span>
        </label>
    </Content>
</Wrapper>
  );
}

export default HelpDropdown;
