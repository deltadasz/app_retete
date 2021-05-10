import React, {useState, useEffect} from 'react';
import {db} from './Firebase'
import './CardUI.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardRetete() {
  const [retete, setRetete]= useState([])
   const fetchRetete=async() => {
    const response = db.collection('retete');
    const data=await response.get();
    data.docs.forEach(item => {
      setRetete([...retete, item.data()])
    })
  }
  useEffect(() => {
    fetchRetete();
  }, [])
  return (
    <div className="Retete">
      {
        retete && retete.map(retete => {
          return(
            <div className="carduri-retete">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={retete.picture_url} />
              <Card.Body>
                <Card.Title>{retete.nume}</Card.Title>
                <Card.Text>
                  {retete.descriere}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>


          )
        })
      }
    </div>
  );
}

export default CardRetete;
