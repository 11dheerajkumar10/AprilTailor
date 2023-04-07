import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleSwitch from './ToggleSwitch'





function Users() {

  ///////// FOR ADD USER
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///////////  FOR EDIT ///////

  const [edit, setEdit] = useState(false);
  const editClose = () => setEdit(false);
  const editShow = () => setEdit(true);
 
  return ( 
  <>

    <div className="col-12">
        <h2 className='text-center text-white bg-dark py-3 mt-3'>User Data</h2>
    </div>
   
    <Button onClick={handleShow} className='mt-3 mb-3 text-white' variant="dark"> Add User </Button>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Roles</th>
          <th>Status</th>
          <th>Action</th>
          

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>HR</td>
          <td>{<ToggleSwitch/>}</td>
          <td><Button style={{width:'70px'}} onClick={editShow} variant="dark" >
            Edit
          </Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>HR</td>
          <td>{<ToggleSwitch/>}</td>
          <td><Button  style={{width:'70px'}}onClick={editShow} variant="dark" >
            Edit
          </Button></td>
          
        </tr>
        <tr>
        <td>2</td>
          <td>Jacob</td>
          <td>HR</td>
          <td>{<ToggleSwitch/>}</td>
          
          <td><Button style={{width:'70px'}} onClick={editShow} variant="dark" >
            Edit
          </Button></td>
          
          
        </tr>
      </tbody>
    </Table>



  
    




{/* //////////////// MODAL FOR ADD USER///////////////////// */}
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="e15"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. Shubham Vaidhya"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. HR"
                autoFocus
              />
            </Form.Group>

            

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>;





     
      {/* //////////////// MODAL FOR EDIT///////////////////// */}
    <>
      

      <Modal show={edit} onHide={editClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="e15"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. Shubham Vaidhya"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. HR"
                autoFocus
              />
            </Form.Group>


            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={editClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={editClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>;


</>

);
}

export default Users;