import styled from "styled-components";
import { NavLink } from "react-router-dom";

// colors
const navBackground = "#262626";
const darkRed = "#d05045";
const lightRed = "#deada1";


// Navigation Component
export const NavComp = styled.nav`
    display: flex;
    background: ${navBackground};
    padding: 12px 3% 7px 3%;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-family: 'Special Elite', cursive;
        color: white;
        font-size: 30px;
        font-weight: bold;
        .red {
            color: ${darkRed};
        }
        .line-through {
            color: white;
            text-decoration: line-through;
            font-weight: normal;
            text-transform: uppercase;
        }
    }
    .navigation-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        img {
            width: 5%;
            height: 5%;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;

const activeClassName = 'active-nav-item';

export const NavItem = styled(NavLink).attrs({
    activeClassName
})`
color: ${darkRed};
font-family: 'Encode Sans Expanded', sans-serif;
text-decoration: none;
margin-right: 3%;
font-size: 18px;
text-shadow: -0.5px -0.5px .5px rgba(255,255,255,.1), .5px .5px .5px rgba(255,255,255,.1);
&:hover {
    color: ${lightRed};
    text-decoration: underline;
}
&.${activeClassName} {
    color: white;
    &:hover {
        color: ${lightRed};
    }
}
`

// Login/Signup Component

export const FormComp = styled.div`
    width: 30%;
    position: absolute;
    top: 30vh;
    left: 10%;
    form {
        display: flex;
        flex-direction: column;
        input {
            background: #d7dddd;
            font-size: 16px;
            padding: 7px;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px dotted ${navBackground};
            font-family: 'Encode Sans Expanded', sans-serif;
            &:focus {
                outline: none;
                border-bottom: 1px solid ${navBackground};
            }
        }
        button {
            align-self: center;
            color: white;
            font-weight: bold;
            background: ${darkRed};
            padding: 10px 10%;
            font-size: 18px;
            font-family: 'Encode Sans Expanded', sans-serif;
            border: none;
            border-radius: 3px;
            text-shadow: 3px 2px 3px rgba(38, 38, 38,.4);
            box-shadow: 3px 2px 3px rgba(38, 38, 38,.4);
            &:focus {
                outline: none;
            }
        }
    }
`;

// Carousel Component

export const CarouselComp = styled.div`
    width: 40%;
    height: 92vh;
    position: absolute;
    left: 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    .left-button, .right-button {
        width: 10%;
        font-size: 80px;
        font-weight: bold;
        font-family: 'Encode Sans Expanded', sans-serif;
        color: ${darkRed};
        height: 92vh;
        display: flex;
        align-items: center;
        &:hover {
            cursor: pointer;
            transform: scale(2);
        }
    }
    .left-button {
        justify-content: flex-start;
        padding-left: 2%;
    }
    .right-button {
        justify-content: flex-end;
        padding-right: 2%;
    }
`;

export const CarouselItem = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    p {
        text-align: center;
        font-size: 40px;
        font-family: 'Encode Sans Expanded', sans-serif;
        padding: 0 2%;
        color: ${navBackground};
    }
`;