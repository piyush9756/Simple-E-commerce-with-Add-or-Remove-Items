import React from 'react'
import { useDispatch } from "react-redux";
import { createNewProduct } from "../Redux/Slices/adminSlice";
import { useState } from "react";
import { Button, Col, Container, Row ,Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function NewProduct() {
    
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState();
    const [image,setImage] = useState("");
    const [isPreviewed, setPreview] = useState(false);
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(createNewProduct({title,description,category,price,image}));
    }
    const handlePreview = ()=>{
      setPreview(!isPreviewed);
    }
  return (
    <Container className="fw-semibold d-flex flex-column align-items-center">
      <Row>
        <Col lg={12}>
          <h1>Add A New Product</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit} >
      <Row>
        <Col lg={6}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
          required
          name="title"
          type="text"
          placeholder="Enter Title"
          onChange={(e)=>{setTitle(e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
          onChange={(e)=>{setCategory(e.target.value)}}>
            <option  value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Col lg={6}>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
          required
          name="price"
          placeholder="Enter Product Price"
          type="number"
          onChange={(e)=>{setPrice(e.target.value)}}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
          required
          placeholder="Enter Image Link"
          name="image"
          type="text"
          onChange={(e)=>{setImage(e.target.value)}}
          />
        </Form.Group>
        </Col>
        <Col lg={12}>

        <Form.Group>
          <Form.Label>description</Form.Label>
          <Form.Control
          name="description"
          placeholder="Enter The Product Description"
          required
          type="text"
          as="textarea"
          rows={3}
          onChange={(e)=>{setDescription(e.target.value)}}
          />
        </Form.Group>
        </Col>
        
        <Button type="submit" className="my-3">Submit</Button>
        
        
      </Row>
      </Form>
      {/* Preview */}
      <Container >
      <Row className=" mt-3 ">
        <h3>Preview Your Product</h3>
        <p className="fw-semibold text-secondary">make sure to fill all the inputs</p>
        <Button onClick={handlePreview}>Preview</Button>
      </Row>
      {isPreviewed && 
      <Row className="justify-content-center mt-3">
      <Col lg={3} className=" py-2">
      <Card className="border-2 border-secondary rounded-5 bg-hover">
          <Card.Header>
          <Card.Img 
          variant="top" 
          src={image} 
          className="img-fluid p-4" alt={title}
          />
          </Card.Header>
              <Card.Body className="d-flex flex-column  justify-content-around overflow-hidden">
                  <Card.Title className="fw-bold text-black">
                      {title}
                  </Card.Title>
                  <Card.Text className="fw-semibold fs-6 text-secondary">
                  {description}
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <strong className="text-black"> Price: ${price}</strong>
              </Card.Footer>
          
      </Card>
      </Col>
    </Row>
      }
      
      </Container>
    </Container>
  )
}
