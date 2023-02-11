import React, { createContext, useReducer, useContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers'
import { productReducer } from './Reducers'


const Cart = createContext()
faker.seed(99)

const Context = ({children}) => {
//uso de faker
const products = [...Array(20)].map(() => ({
   
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.business(300, 300, true),
    inStock: faker.helpers.arrayElement([0, 3, 4, 5, 1]),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery:faker.datatype.boolean(),
 }))

 //uso de reducer
 const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart:[],
 })

 //nuevo reducer para los filtros
 const [productState, productDispatch]= useReducer(productReducer, {
  byStock: false,
  byRating: 0,
  byFastDelivery: false,
  searchQuery: "",

 })
  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

//se exporta el contexto

export const CartState = () => useContext(Cart)