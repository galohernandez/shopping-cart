import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  //se invoca a cart state
  const {state:{cart}, dispatch, productDispatch } = CartState()

  return (
  <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
    <Container>
      <Navbar.Brand>
        <Link to="/">React Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className="search">
        <FormControl
          style={{ width: 500 }}
          placeholder="Search a product"
          className="m-auto"
          onChange={(e) => productDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}
        />
      </Navbar.Text>

      <Dropdown alignright="true">
        <Dropdown.Toggle variant="success">
          <FaShoppingCart color="white" fontSize="25px" />
          {/* aqui se presentara la cantidad de productos presentes en el cart */}
          <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: 370 }}>
          {/* <span style={{ padding: 10 }}>Cart is empty!</span> */}
          {cart.length>0?(
            <>
             {cart.map((product)=>(
              <span className="cartitem"  key={product.id}>
                <img src={product.image} alt={product.name} className="cartItemImg"/>
                <div className="cartItemDetail">
                  <span>{product.name}</span>
                  <span>$ {product.price.split(".")[0]}</span>
                </div>
                <AiFillDelete fontSize="20px" style={{cursor: "pointer"}} onClick={
                  () => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })} />

              </span>
             ))}
             <Link to="/cart">
               <Button style={{width: "95%", margin: "0 10px"}}>
                Go to Cart
               </Button>
             </Link>
            </>
          ):(
             <span style={{ padding: 10 }}>Cart is empty!</span>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Navbar>
)};

export default Header;
