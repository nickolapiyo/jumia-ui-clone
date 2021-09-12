import React from 'react';
//Styles
import { Wrapper } from './Prime.styles';
//Images
import PrimeGif from '../../../../images/Webp.net-resizeimage.gif';

const Prime = () => {
    return (
        <Wrapper>
            <a href='/'>
                <img src={PrimeGif} alt='prime-gif' />
            </a>
        </Wrapper>
    );
}

export default Prime;
