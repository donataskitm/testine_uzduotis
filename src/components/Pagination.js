import React from 'react'
import {Button} from 'react-bootstrap';

 const Pagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (  
        <div className="pagination align-items-center justify-content-center">
            {pageNumbers.map(number =>(
                <li key={number} className="page-item  ">
                    <Button variant="success" className="m-1" onClick={() =>paginate(number)}  >{number}</Button>
                </li>
            ))}
        </div> 
    )
}
export default Pagination