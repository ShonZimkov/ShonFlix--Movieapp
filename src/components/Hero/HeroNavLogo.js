/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react'


const styles = css`
  font-size: 22px;
    /* color: #cb6ad2; */
    color: red;
    font-weight: 900;
    user-select: none;
`

const HeroNavLogo = () => {
  return (
    <h2 css={styles}>ShonFlix</h2>
  )
}

export default HeroNavLogo