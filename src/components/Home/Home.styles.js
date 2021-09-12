import styled from 'styled-components';
import HomeBg from '../../images/home-bg.jpg';

export const Wrapper = styled.div`
    min-width: 1200px;
    position: relative;
    background: center 0 no-repeat url(${HomeBg});
    background-color:#FE9900;    
    flex-grow: 1; 
    padding-bottom: 56px;
    display: block;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    padding: 16px 0;
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;    
    flex: 0 1 auto;
    display: flex;
    /*height: 500px; */
    min-height: 100vh;
`;