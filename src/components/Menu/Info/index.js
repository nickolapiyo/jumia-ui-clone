import React from 'react';
//Styles
import { Wrapper } from './Info.styles';
//Components
import InfoBar from './InfoBar';
import Prime from './Prime';

const Info = () => {
    return (
        <Wrapper>
            <InfoBar />
            <Prime />
        </Wrapper>
    );
}

export default Info;