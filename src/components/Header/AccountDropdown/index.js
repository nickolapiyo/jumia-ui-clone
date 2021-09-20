import React from "react";
//Styles
import { Wrapper, Content } from "./AccountDropdown.styles";
//Images
import User from '../../../images/user.svg';
import ArrowDown from '../../../images/arrow-down.svg'

function AccountDropdown(){
    return(
        <Wrapper>
            <Content>
                <label>
                    <span>
                        <img src={User} alt='user'/>
                        {/* <svg 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24" 
                            xmlns="http://www.w3.org/2000/svg">
                             <image xlinkHref={ArrowDown} />
                        </svg> */}
                    </span>
                    Account
                    <span>
                        <img src={ArrowDown} alt='arrow-down'/>
                    </span>
                </label>
            </Content>
        </Wrapper>
    );
}

export default AccountDropdown;
