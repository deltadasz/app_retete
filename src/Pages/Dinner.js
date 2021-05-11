import React, { useState, useEffect } from 'react';
import { db } from '../components/Firebase';
import '../components/CardUI.css';
import { Card, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Dinner() {
  const [retete, setRetete] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  const ref = db.collection('retete');


  function getRetete() {
    setLoading(true);
    ref.where('tip','==',"Dinner").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRetete(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getRetete();
  }, []);


  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="retete">
      {retete.map((reteta) => (
        <div className="carduri-retete" key={reteta.id}>
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={reteta.picture_url}/>
            <Card.Body>
              <Card.Title>{reteta.nume}</Card.Title>
              <Card.Text>{reteta.descriere}</Card.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Ingredients
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>{reteta.ingrediente}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
          </Card>

        </div>
      ) )}

    </div>
  );
}

export default Dinner;
