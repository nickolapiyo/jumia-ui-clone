import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { 
    FaAppleAlt, 
    FaUtensils, 
    FaBriefcase,
    FaMobileAlt,
    FaDesktop,
    FaTv,
    FaTshirt,
    FaGamepad,
    FaBaby,
    FaDumbbell,
    FaGripfire,
    FaEllipsisH 
} from 'react-icons/fa';

export const Wrapper = styled.div`
    flex-shrink: 0;
    width: 206px;
    position: relative;    
`;

export const Nav = styled.nav`
    display: flex;
    position: absolute;
    font-size: .75rem;
    width: 100%; 
    height: 384px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%);
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 4px;
    background-color: #fff;
`;

export const NavLink = styled(Link)`
    display: flex;
    padding-left: 8px;
    height: 32px;
    text-decoration: none;
    color: black;
    align-items: center;
`;

export const Apple = styled(FaAppleAlt)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Utensils = styled(FaUtensils)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Briefcase = styled(FaBriefcase)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Mobile = styled(FaMobileAlt)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Desktop = styled(FaDesktop)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Tv = styled(FaTv)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Tshirt = styled(FaTshirt)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Gamepad = styled(FaGamepad)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Baby = styled(FaBaby)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Sports = styled(FaDumbbell)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const Outdoor = styled(FaGripfire)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;

export const More = styled(FaEllipsisH)`
    margin-right: 4px;
    width: 20px;
    height: 20px;
`;