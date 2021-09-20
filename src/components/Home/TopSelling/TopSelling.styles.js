import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 8px 0;
    padding: 0 8px;
    width: 100%;
    display:flex;
`;

export const Content = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
`;

export const Header = styled.div`
    padding-left: 16px;
`;

export const Items = styled.div`
    /*padding-left: 16px;*/
    display: flex;
`;

export const Item = styled.div`
    height: 260px;
    /* width: 180px; */
    width: 15.8%;
    background: #fff;
    margin: 5px;
    display: flex;
    position: relative;

    a {
        text-decoration: none;
        width: 100%;
        flex-grow: 1;
        display: inline-block;
        outline: 0;

        img {
            height: auto;
            width: 100%;
            display: block;
            border-style: none;
        }
    }
`;

export const Description = styled.div`
    font-size: .875rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 4px 8px;
`;

export const Price = styled.div`
    font-size: 1rem;
    text-align: left;
    font-weight: 500;
    /* padding: 4px 8px; */
    padding: 0 8px;
`;

export const PriceBefore = styled.div`
    font-size: .75rem;
    text-decoration: line-through;
    font-weight: 400;
    color: #75757a;
    /* padding: 4px 8px; */
    padding: 0 8px;
`;

export const Tag = styled.div`
    top: 8px;
    right: 8px;
    position: absolute;
    font-size: .875rem;
    height: 24px;
    min-width: 40px;
    color: #f68b1e;
    background-color: #feefde;
    line-height: 1.2;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    border-radius: 2px;
`;


