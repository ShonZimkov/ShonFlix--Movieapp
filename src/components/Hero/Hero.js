/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react'
import Output from '../Output/Output';
import HeroNav from './HeroNav';


const Hero = () => {
    return(
        <section css={styles}>
            <HeroNav/>
            <Output/>
        </section>
    );
};

const styles = css`
    width: 100%;
    min-height: 100vh;
    background: gray;
`

export default Hero;  