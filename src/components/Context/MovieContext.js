import React, { useState, createContext, useEffect } from 'react'

export const MovieContext = createContext("")

export const MovieState = ({ children }) => {
    const API_KEY = "2e0fa68219006829644faf6ce126ac59"

    const [hiddenMenu, sethiddenMenu] = useState(true)
    const [activeLink, setactiveLink] = useState("Popular")
    const [popularMovies, setpopularMovies] = useState([])
    const [search1, setsearch] = useState("")
    const [currentpage, setcurrentpage] = useState(1)
    const [movies, setmovies] = useState([])
    const [isloading, setisloading] = useState(false)
    const [showPagination, setshowPagination] = useState(true)

    const getPopularMovies = async () => {
        const popularMoviesResponse = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
        );
        const popularMoviesData = await popularMoviesResponse.json()
        setpopularMovies(popularMoviesData)
    }

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentpage}`)
        const data = await response.json()
        if (search1.trim() === "") {
            setmovies(data)
        }

    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search1.trim() === "") {
          return;
        }
        const searchResponse = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search1}&page=${currentpage}`
        );
        const searchData = await searchResponse.json();
        setmovies(searchData);
        setshowPagination(false);
      };
    
      const newPage = (direction) => {
        if (direction === "next") {
          setcurrentpage(currentpage + 1);
          setisloading(true);
        } else if (direction === "previous" && currentpage !== 1) {
          setcurrentpage(currentpage - 1);
        }
      };

    useEffect(() => {
        getPopularMovies()
    }, [])

    useEffect(() => {
        if(search1.trim() === ""){
            setshowPagination(true)
        }
        getMovies()
    }, [search1, currentpage])


    useEffect(() => {
        const loadingTimeout = setTimeout(()=>{
            setisloading(false)
        },1300)
        return()=> clearTimeout(loadingTimeout)

    }, [movies , currentpage])

    useEffect(() => {
        handleSearch()
    }, [search1])


    return (
        <MovieContext.Provider value={{
            hiddenMenu,
            sethiddenMenu,
            activeLink,
            setactiveLink,
            popularMovies,
            search1,
            setsearch,
            currentpage,
            setcurrentpage,
            movies,
            setmovies,
            getPopularMovies,
            getMovies,
            handleSearch,
            isloading,
            setisloading,
            showPagination, 
            setshowPagination,
            newPage,


        }}>
            {children}
        </MovieContext.Provider>
    );
};