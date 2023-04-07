import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleSwitch from './ToggleSwitch'





function SubCategory() {
 
  return ( <>

    <div className="col-12">
        <h2 className='text-center text-white bg-dark py-3 mt-3'>Sub-Category</h2>
    </div>
   
    <Button className='mt-3 mb-3 text-white' variant="dark"> Add Sub-Category </Button>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Category Name</th>
          <th>Add On</th>
          <th>Action</th>
        

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Date</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
         
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Date</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
          
          
        </tr>
        <tr>
        <td>2</td>
          <td>Jacob</td>
          <td>Date</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
          
          
        </tr>
      </tbody>
    </Table>


{
  
    

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

    
 }



</>
  );
}

export default SubCategory;