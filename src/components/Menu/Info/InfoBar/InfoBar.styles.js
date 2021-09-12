import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 16px;
    height: calc(50% - 8px);
    flex-wrap: wrap;
    align-content: space-around;
    flex-grow: 1;
    display: flex;
    background-color: #fff;
    border-radius: 4px;

    a {
        width: 100%;
        align-items: center;
        display: flex;
        text-decoration: none;

        img {
            margin-right: 8px;
            flex-shrink: 0;
            border-style: none;
            height: 34px;
            width: 34px;
        }

        /* div {
            overflow: hidden;
            color: #282828;
        } */
    }
`;

export const Text = styled.div`
    overflow: hidden;
    color: #282828;
`;

export const Heading = styled.div`
    font-size: .875rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    overflow: hidden;
`;

export const Content = styled.div`
    font-size: .75rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;