import React from 'react'
import { AiFillStar, AiOutlineStar } from'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
  //Se crea un array con 5 elementos, se itera por cada uno comparando con rating
  
  return (
    <>
    {[...Array(5)].map((_,i) => (
      <span key={i} onClick={() => onClick(i)} style={style}>
        {rating > i?(<AiFillStar fontSize="15px"/>):(<AiOutlineStar fontSize="15px"/>)}
      </span>
    ))}
    </>
  )
}

export default Rating