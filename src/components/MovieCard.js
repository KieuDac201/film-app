import React from 'react'
const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const calcVote = (vote) => {
    if(!vote) return
    vote = +vote
    if(vote >= 8){
        return 'tag-green'
    }else if(vote >= 5){
        return 'tag-orange'
    }else{
        return 'tag-red'
    }
}
function MovieCard({poster_path, title, vote_average, overview }) {

    return (
        <div className="movie-card">
            <div className="movie-img">
                <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1529311182341-f6e4767abf24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGZpbG18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt=""/>
            </div>
            <div className="movie-title">
                <h5>{title}</h5>
                <p className={calcVote(vote_average)}>{vote_average}</p>
            </div>
            <div className="movie-desc">
                <h6>overview</h6>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard
