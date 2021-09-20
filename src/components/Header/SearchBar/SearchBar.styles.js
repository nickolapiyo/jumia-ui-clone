import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    padding: 0 8px;
    max-width: 100%;
    flex-grow: 1;
`;
// export const Wrapper = styled.div`
//     display: flex;
//     align-items: center;
//     height: 75px;
//     padding: 0 20px;
// `;

export const Content = styled.div`
    /*position: relative;*/
    align-items: center;
    display: flex;
    border: 1px solid #c7c7cd;
    border-radius: 4px;
    width: 100%;

    img {
        /*margin-right: 0 8px;*/
        right: 8px;
        left: 8px;
        fill: #75757a;
        margin: 8px 8px;
    }

    input {
        margin-right: 8px;
        height: 100%;
        box-shadow: none;
        flex-grow: 1;
        overflow: hidden;
        border: 0;
        margin: 0; 
        border: 0;
        :focus {
            outline: none;
        }       
    }

    /* button {
        margin-left: 4px;
        margin-right: 8px;
        display: none;
    } */
`;

export const Button = styled.button`
    margin-left: 8px;
    flex-shrink: 0;
    padding: 8px 12px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    position: relative;
    overflow: hidden;
    color: #fff;
    background-color: #f68b1e;
    cursor: pointer;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    font-size: .875rem;
    line-height: 1rem;
    font-weight: 500;
`;
