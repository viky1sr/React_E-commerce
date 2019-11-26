import styled from 'styled-components';
import Navbar from "./Navbar";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:1.4em;
    background:transparent;
    color: var(--mainWhite);
    &:hover {       
    background: var(--mainGray);
    color: var(--mainDark);
    }
`;
export const NavWR = styled.nav`
      background: var(--mainBlue);
    .nav-link{
    color : var(--mainWhite) !important;
    font-size : 1.3rem;
    text-transform : capitalize;
    }
`;