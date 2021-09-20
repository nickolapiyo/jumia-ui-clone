import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 8px;
`;

export const Content = styled.div`
    font-size: .75rem;
    padding: 0 16px;
    background-color: #fff;
    border-radius: 4px;

    h2 {
        padding: 8px 0;
        font-weight: 400;        
    }

    a {
        font-weight: 700;
        text-decoration: underline;
        color: #000;
    }
`;