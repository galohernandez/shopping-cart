import React from 'react'
import "./styles.css"
import { Card} from 'react-bootstrap'

export const Footer = () => {
  return (
    // <div>Developed by Galo Hernandez Altamirano - UX-React Programmer - 2023</div>
    <Card style={{backgroundColor: "#343A40" , color:"#fff", textAlign:'Center'}}>
    <Card.Body>
      <Card.Text><strong>Developed by: </strong>  Galo Hernandez Altamirano  -   2023 | <strong>Technologies: </strong> React-Context | Bootstrap</Card.Text>
    </Card.Body>
  </Card>
 
  )
}
