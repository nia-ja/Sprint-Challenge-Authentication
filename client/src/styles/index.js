import styled from "styled-components";
import { NavLink } from 'react-router-dom';

// Navigation Component
export const NavComp = styled.nav`
    display: flex;
    background: #439A86;
    padding: 15px 0;
    justify-content: flex-end;
    margin-bottom: 30px;
`;

const activeClassName = 'active-nav-item';

export const NavItem = styled(NavLink).attrs({
    activeClassName
})`
color:  #003742;
text-decoration: none;
margin-right: 2%;
&:hover {
    color: #E9D985;
    text-decoration: underline;
}
&.${activeClassName} {
    color: white;
    &:hover {
        color: #E9D985;
    }
}
`