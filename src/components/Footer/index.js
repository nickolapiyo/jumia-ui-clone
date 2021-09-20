import React from "react";
//Styles
import { 
    Wrapper, 
    Subscribe, 
    SubscribeContent, 
    Logo, 
    Newsletter,
    NewsletterTitle,
    NewsletterContent,
    NewsletterForm,
    Form,
    EmailDiv,
    Btn,
    Download,
    DownloadHeader,
    DownloadContent,
    AboutUs,
    AboutUsCol,
    AboutUsInt
} from "./Footer.styles";
//Images
import LogoImg from '../../images/logo-dark.png';
import Cart from '../../images/cart-img.png';
import AppStoreImg from '../../images/app-store.png';
import GooglePlayImg from '../../images/google-play.png';

const Footer = () => {
    return (
        <Wrapper>
            <Subscribe>
                <SubscribeContent>
                    <Logo>
                        <img src={LogoImg} alt='logo' />
                    </Logo>
                    <Newsletter>
                        <NewsletterTitle>new to jumia?</NewsletterTitle>
                        <NewsletterContent>
                            Subscribe to our newsletter to get updates on our latest offers!
                        </NewsletterContent>
                        <NewsletterForm>
                            <Form>
                                <EmailDiv>
                                    <input type='email' placeholder='Enter E-mail Address' />
                                </EmailDiv>
                                <Btn>
                                    <button name='gender' value='male'>Male</button>
                                    <button name='gender' value='female'>Female</button>
                                </Btn>
                            </Form>
                        </NewsletterForm>
                        
                    </Newsletter>
                    <Download>
                        <DownloadHeader>
                            <img src={Cart}alt='' />
                            <div>
                                <span>DOWNLOAD JUMIA FREE APP</span>
                                Get access to exclusive offers!
                            </div>
                        </DownloadHeader>
                        <DownloadContent>
                            <a href='/'>
                                <img src={AppStoreImg} alt='appstore' />
                            </a>
                            <a href='/'>
                                <img src={GooglePlayImg} alt='googleplay' />
                            </a>
                        </DownloadContent>
                    </Download>
                </SubscribeContent>
            </Subscribe>
            <AboutUs>
                <AboutUsCol>
                    <span>LET US HELP YOU</span>
                    <ul>
                        <li>
                            <a href="/">Help Center </a>
                        </li>
                        <li>
                            <a href="/">How to shop on Jumia?</a>
                        </li>
                        <li>
                            <a href="/">Shipping and delivery </a>
                        </li>
                        <li>
                            <a href="/">Return Policy</a>
                        </li>
                        <li>
                            <a href="/">Corporate and Bulk Purchase</a>
                        </li>
                        <li>
                            <a href="/">COVID-19 Health Kit</a>
                        </li>
                        <li>
                            <a href="/">Advertise with Jumia</a>
                        </li>
                        <li>
                            <a href="/">Jumia Logistics Services</a>
                        </li>
                        <li>
                            <a href="/">Report a Product</a>
                        </li>
                    </ul>
                </AboutUsCol>
                <AboutUsCol>
                    <span>ABOUT JUMIA</span>
                    <ul>
                        <li>
                            <a href="/">About Us </a>
                        </li>
                        <li>
                            <a href="/">Jumia Careers</a>
                        </li>
                        <li>
                            <a href="/">Jumia Express </a>
                        </li>
                        <li>
                            <a href="/">Terms and Conditions</a>
                        </li>
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Jumia Anniversary</a>
                        </li>
                        <li>
                            <a href="/">Advertise with Jumia</a>
                        </li>
                        <li>
                            <a href="/">Jumia Logistics Services</a>
                        </li>
                        <li>
                            <a href="/">Report a Product</a>
                        </li>
                    </ul>
                </AboutUsCol>
                <AboutUsCol>
                    <span>MAKE MONEY WITH JUMIA</span>
                    <ul>
                        <li>
                            <a href="/">Sell on Jumia </a>
                        </li>
                        <li>
                            <a href="/">Become a Sales Consultant</a>
                        </li>
                        <li>
                            <a href="/">Become a Logistics Service Partner </a>
                        </li>
                        <li>
                            <a href="/">Jumia City Partner Program</a>
                        </li>
                        <li>
                            <a href="/">Order & Pick Up Point Application</a>
                        </li>
                    </ul>
                </AboutUsCol>
                <AboutUsInt>
                    <span>JUMIA INTERNATIONAL</span>
                    <ul>
                        <li>
                            <a href="/">Algeria </a>
                        </li>
                        <li>
                            <a href="/">Ivory Coast</a>
                        </li>
                        <li>
                            <a href="/">Egypt </a>
                        </li>
                        <li>
                            <a href="/">Ghana</a>
                        </li>
                        <li>
                            <a href="/">Morocco</a>
                        </li>
                        <li>
                            <a href="/">Nigeria</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Senegal </a>
                        </li>
                        <li>
                            <a href="/">Tunisia</a>
                        </li>
                        <li>
                            <a href="/">Uganda </a>
                        </li>
                        <li>
                            <a href="/">South Africa</a>
                        </li>
                        <li>
                            <a href="/">Zando</a>
                        </li>
                    </ul>
                </AboutUsInt>
            </AboutUs>
        </Wrapper>
    );
}

export default Footer;