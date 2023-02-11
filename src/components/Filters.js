import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'


const Filters = () => {
// const [rate, setRate] = React.useState(3)
//obtengo lo creado en context y reducers para productState y hago un destructuring de productState

const {
    productState:{byStock, byFastDelivery, sort, byRating}, 
    productDispatch,} = CartState()
console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div className='filters'>
        <span className='title'>Filter products</span>
        <span>
            <Form.Check inline label="Ascending" name="grop1" type='radio' id={`inline-1`}
        onChange={() => productDispatch({type: 'SORT_BY_PRICE', payload: 'lowToHigh',})} checked={sort === "lowToHigh" ? true : false} />
        
        </span>
        <span>
            <Form.Check inline label="Descending" name="grop1" type='radio' id={`inline-2`}
            onChange={() => productDispatch({type: 'SORT_BY_PRICE', payload: 'highToLow',})} checked={sort === "highToLow" ? true : false} />
        </span>
        <span>
            <Form.Check inline label="Include Out of Stock" name="grop1" type='checkbox' id={`inline-3`} 
           onChange={()=>productDispatch({type:"FILTER_BY_STOCK"})} checked={byStock} />
        </span>
        <span>
            <Form.Check inline label="Fast Delivery Only" name="grop1" type='checkbox' id={`inline-4`}
            onChange={()=>productDispatch({type:"FILTER_BY_DELIVERY"})} checked={byFastDelivery} />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating 
                rating={byRating} //cambio a rate
                onClick={(i) => productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1,
                })} // cambio a dispatch
                style={{cursor:"pointer"}} />
        </span>
        <Button variant="light"
        onClick={()=>productDispatch({type:"CLEAR_FILTERS"})}>Clear Filters</Button>
        
    </div>
  )
}

export default Filters