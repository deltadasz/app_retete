import React, { useState } from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import './Add_recipe.css';
import { db } from '../components/Firebase';


const Add_recipe = () => {
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [tip, setTip] = useState("");
  const [picture_url, setPicture_url]=useState("");

  const [loader, setLoader] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection('retete')
  .add({
    nume:nume,
    descriere:descriere,
    ingrediente:ingrediente,
    tip:tip,
    picture_url:picture_url
  })
  .then(() => {
    alert("The recipe has been added!");
    setLoader(false);
})
  .catch((error) => {
    alert(error.message);
    setLoader(false);
  });
  setNume('');
  setDescriere('');
  setIngrediente('');
  setTip('');
  setPicture_url('');
};

  return (
    <Container className="form-container">
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="nume_reteta">
      <Form.Label>Recipe name</Form.Label>
      <Form.Control as="textarea" rows={1}  value={nume} onChange={(e) => setNume(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="descriere_reteta">
      <Form.Label>Recipe description</Form.Label>
      <Form.Control as="textarea" rows={3} value={descriere} onChange={(e) => setDescriere(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="ingrediente_reteta">
      <Form.Label>Recipe ingredients</Form.Label>
      <Form.Control as="textarea" rows={3} value={ingrediente} onChange={(e) => setIngrediente(e.target.value)}/>
    </Form.Group>
        <Form.Group controlId="tip-reteta">
          <Form.Label>Recipe type</Form.Label>
          <Form.Control as="select" placeholder="Please select the type of recipe" value={tip} onChange={(e) => setTip(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="nume_reteta">
          <Form.Label>Link a picture</Form.Label>
          <Form.Control as="textarea" rows={1}  value={picture_url} onChange={(e) => setPicture_url(e.target.value)}/>
        </Form.Group>
    <Button variant="secondary" size="lg" type="submit">
      Submit
    </Button>
  </Form>
</Container>
);
}

export default Add_recipe;
