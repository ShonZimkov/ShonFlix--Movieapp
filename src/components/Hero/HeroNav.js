/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Container from '../ReusableComponents/Container';
import HeroNavMenu from './HeroNavMenu';
import HeroNavLogo from './HeroNavLogo';
import HeroNavSearch from './HeroNavSearch';
import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext'

const HeroNav = () => {
    const {hiddenMenu, sethiddenMenu} = useContext(MovieContext)

    return (
        <nav css={styles}>
            <Container>
                <div className="wrapper">
                    <HeroNavLogo></HeroNavLogo>
                    <HeroNavMenu></HeroNavMenu>
                </div>
                <HeroNavSearch></HeroNavSearch>
                <i 
                onClick={()=>sethiddenMenu(!hiddenMenu)}
                id="burgerMenu" 
                className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
                ></i>
            </Container>
        </nav>
    );
};


const styles = css`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #212229;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #f9a5ff;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default HeroNav;