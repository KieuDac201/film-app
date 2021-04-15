import React from 'react'

function Pagination({nextPage, prevPage, currentPage}) {
    return (
        <div className="pagination">
            {currentPage <= 1 ? null: <button onClick={prevPage}>Prev page</button> }
            <div className="current-page">{currentPage}</div>
            {currentPage >= 100 ? null: <button onClick={nextPage}>Next page</button> }
            
        </div>
    )
}

export default Pagination
