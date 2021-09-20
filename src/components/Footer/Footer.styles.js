import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #323232;
    color: #c7c7cd;
`;

export const Subscribe = styled.div`
    background-color: #282828;
    margin-bottom: 16px;
`;

export const SubscribeContent = styled.div`
    max-width: 1184px;
    padding: 24px 0;
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;
    flex: 0 1 auto;
    display: flex;
`;

export const Logo = styled.div`
    width: 25%;
    padding: 0 8px;
    img {
        /*height:*/
    } 
`;

export const Newsletter = styled.div`
    /*display: flex;*/
    width: 50%;
    font-size: .75rem;
`;

export const NewsletterTitle = styled.div`
    padding-bottom: 8px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    font-size: .75rem;
`;

export const NewsletterContent = styled.div`
    color: #c7c7cd;
`;

export const NewsletterForm = styled.form`
    color: #c7c7cd;
    padding-top: 16px;
`;

export const Form = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const EmailDiv = styled.div`
    margin-right: 8px;
    flex-grow: 1;
    padding-bottom: 20px;
    position: relative;
    color: #c7c7cd;

    input {
        font-size: .75rem;
        background-color: #fff;
        border: 1px solid #fff;
        padding-left: 32px;
        width: 100%;
        padding: 8px;
        box-shadow: none;
        color: #282828;
        border-radius: 4px;
        overflow: visible;
    }
`;

export const Btn = styled.div`
    display: flex;
    font-size: .75rem;
    color: #c7c7cd;

    button {
        padding: 0 16px;
        font-size: .75rem;
        line-height: 1.2;
        background-color: rgba(0,0,0,0);
        padding: 8px;
        text-transform: uppercase;
        border: 1px solid #fff;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        color: #fff;
        margin: 0 4px;
    }
`;

export const Download = styled.div`
    width: 25%;
    padding-right: 8px;
    padding-left: 20px;
    font-size: .75rem;
    color: #c7c7cd;
    margin-left: auto;
`;

export const DownloadHeader = styled.div`
    display: flex;

    div {
        padding-left: 16px;

        span {
            padding-bottom: 8px;
            text-transform: uppercase;
            font-weight: 700;
            color: #fff;
            display: block;
        }
    }
`;

export const DownloadContent = styled.div`
    padding-top: 16px;
    display: flex;

    a {
        margin-right: 8px;
        padding: 4px;
        display: inline-flex;
        font-size: .75rem;
        line-height: 1.2;
        background-color: rgba(0,0,0,0);
        border: 1px solid #fff;
        border-radius: 4px;
    }
`;

export const AboutUs = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 24px;
    flex-wrap: wrap;
    flex: 0 1 auto;
`;

export const AboutUsCol = styled.div`
    width: 25%;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 8px;

    span {
        padding-bottom: 16px;
        text-transform: uppercase;
        font-size: .75rem;
        font-weight: 700;
        color: #fff;
        display: block;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: .75rem;
        /*color: #c7c7cd;*/
    }

    a {
        text-decoration: none;
        color: #c7c7cd;
        padding-bottom: 4px;
        display: inline-block;
        background-color: rgba(0,0,0,0);
    }
`;

export const AboutUsInt = styled.div`
    width: 25%;
    align-content: flex-start;
    padding: 8px 0;
    margin: 0;
    flex-wrap: wrap;
    flex: 0 1 auto;
    display: flex;


    span {
        padding-bottom: 16px;
        text-transform: uppercase;
        font-size: .75rem;
        font-weight: 700;
        color: #fff;
        display: block;
        width: 100%;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: .75rem;
        flex-direction: column;
        display: flex;
        padding: 0 8px;
    }

    a {
        text-decoration: none;
        color: #c7c7cd;
        padding-bottom: 4px;
        display: inline-block;
        background-color: rgba(0,0,0,0);
    }
`;