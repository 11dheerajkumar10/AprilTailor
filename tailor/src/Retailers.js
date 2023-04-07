import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleSwitch from './ToggleSwitch'





function Retailers() {
 
  return ( <>

    <div className="col-12">
        <h2 className='text-center text-white bg-dark py-3 mt-3'>Retailers Data</h2>
    </div>
   
    <Button className='mt-3 mb-3 text-white' variant="dark"> Add Retailer </Button>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Status</th>
          <th>Action</th>
          <th>Roles</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>{<ToggleSwitch/>}</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
         
          <td><Dropdown>
                 <Dropdown.Toggle variant="white" id="dropdown-basic">
                   Select Role
                 </Dropdown.Toggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                   <Dropdown.Item href="#/action-2">HR</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Manager else</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
         </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>{<ToggleSwitch/>}</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
          
          <td><Dropdown>
                 <Dropdown.Toggle variant="white" id="dropdown-basic">
                   Select Role
                 </Dropdown.Toggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                   <Dropdown.Item href="#/action-2">HR</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Manager else</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
         </td>
        </tr>
        <tr>
        <td>2</td>
          <td>Jacob</td>
          <td>{<ToggleSwitch/>}</td>
          <td><Button variant="dark" >
            Edit
          </Button></td>
          
          <td><Dropdown>
                 <Dropdown.Toggle variant="white" id="dropdown-basic">
                   Select Role
                 </Dropdown.Toggle>

                 <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                   <Dropdown.Item href="#/action-2">HR</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Manager else</Dropdown.Item>
                 </Dropdown.Menu>
               </Dropdown>
         </td>
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

export default Retailers;