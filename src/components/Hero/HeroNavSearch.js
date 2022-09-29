/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";



const HeroNavSearch = () => {
  const { search1 ,setsearch,handleSearch , activeLink} = useContext(MovieContext)

  return (
    <form css={styles} onSubmit={handleSearch}>
      {activeLink !== "Popular" &&(
        <input 
        value={search1} 
        onChange={(e)=>setsearch(e.target.value)} 
        type='text' 
        placeholder='Serach for movies...'/>
        )}
        {/* <button onClick={()=>handleSearch()}>search</button> */}
    </form>
  )
}

const styles = css`
  height: 40px;
  min-height: 40px;
  input {
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: red;
    &::placeholder {
      color: red;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 860px) {
    input {
      width: 220px;
    }
  }
`;

export default HeroNavSearch;