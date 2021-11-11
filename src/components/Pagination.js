import React from 'react'


 const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (  
        <div className="pagination align-items-center justify-content-center">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item">
                    <a onClick={() =>paginate(number)} href='!#' className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </div> 
    )
}
export default Pagination