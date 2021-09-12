import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Content = styled.div`    

    label {
        display: flex;
        cursor: pointer;
        font-size: 1rem;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        font-weight: 500;
    }

    span {
        margin: 0 8px;
    }

    img {
        height: 20px;
        width: 20px;
    }

`;