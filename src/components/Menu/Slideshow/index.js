import React from 'react';
//Styles
import { Wrapper } from './Slideshow.styles';
//Images
import Slideshow1 from '../../../images/slidshow-1.jpg';

const Slideshow = () => {
    return (
        <Wrapper>
            <img src={Slideshow1} alt='slideshow'/>
        </Wrapper>
    );
}

export default Slideshow;