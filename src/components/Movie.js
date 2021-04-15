import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'



const API = 'https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=15a2fd8e2e70968f669be994cd2629d3&page='

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=15a2fd8e2e70968f669be994cd2629d3&query='

function Movie() {
    const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputValue) {
            return
        }
        fetchApi(SEARCH_API + inputValue)
        setInputValue('')
    }
    async function fetchApi(api){
        const res = await fetch(api);
        const data = await res.json();
        console.log(data.results)
        setMovies(data.results)
        setIsEmpty(false)
    }
    
    useEffect(() => {
        fetchApi(API + currentPage)
    },[currentPage])

    const nextPage = (action) => {
            setCurrentPage(currentPage + 1) 
    }

    const prevPage = (action) => {
            setCurrentPage(currentPage - 1) 
    }
    return (
        <div className="movie">
            <div className="movie-search">
                <h3>Movie App</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search here..." value={inputValue} onChange={onChangeInput}/>
                </form>
            </div>
            {!movies.length ? <Empty /> : null}
            <div className="movie-container">
                {movies.map(movie => <MovieCard {...movie} key={movie.id} />)}
            </div>
            <Pagination nextPage={nextPage} prevPage={prevPage} currentPage={currentPage}/>
        </div>
    )
}

const Empty =  () => {
    return <h1 className="empty">Empty</h1>
}

export default Movie
