import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 8px 0;
    width: 100%;
    flex-wrap: wrap;
    flex: 0 1 auto;
    display: flex;
`;

export const Content = styled.div`
    width: 25%;
    padding: 0 8px;

    a {
        padding: 8px;
        align-items: center;
        display: flex;
        background-color: #fff;
        border-radius: 4px;
        text-decoration: none;

        span {
            font-size: 1rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 500;
            padding-left: 16px;
            width: 100%;
            overflow: hidden;
            color: #282828;
        }
    }
`;

export const Link = styled.div`
    font-size: 0;
    flex-shrink: 0;
    
    img {
        border-style: none;
        width: 40px;
        height: 40px;
    }

    /* span {
        font-size: 1rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        padding-left: 16px;
        width: 100%;
        overflow: hidden;
        color: #282828;
    } */
`;