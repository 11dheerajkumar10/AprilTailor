import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleSwitch from './ToggleSwitch'
import axios from 'axios';





function Roles() {

    const[data, setData]=useState([])



  const [show, setShow] = useState(false);




   ///////////  FOR EDIT ///////

  const [edit, setEdit] = useState(false);
  const editClose = () => setEdit(false);
  const editShow = () => setEdit(true);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  
//////////////////POST/////////////////////



  const getData = async ()=>{
    const api = await axios.get('http://ecom.tnplab.in:3999/admin/getRoles')
    setData(api.data)
    console.log(api, 'apidata')
  }

  console.log(data, 'data')

  useEffect(()=>{
    getData()
  }, [])


 
  return ( <>

    <div className="col-12">
        <h2 className='text-center text-white bg-dark py-3 mt-3'>Roles</h2>
    </div>
   
    <Button onClick={handleShow} className='mt-3 mb-3 text-white' variant="dark"> Add Role </Button>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Action</th>

        </tr>
      </thead>



  <tbody>
      {
        data && data.map((item,index)=>{
          return (
            <tr key={index}>
          <td>{item.role_id}</td>
          <td>{item.role_name}</td>
          <td><Button style={{width:'70px'}} onClick={editShow} variant="dark" >
            Edit
          </Button></td>
        </tr>
          )
        })
      }


        

        

       
      </tbody>
    </Table>



  
    


    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="e15"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. Shubham Vaidhya"
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




      {/* //////////////// MODAL FOR EDIT///////////////////// */}
    <>
      

      <Modal show={edit} onHide={editClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="e15"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role Name</Form.Label>
              <Form.Control
                type="email"
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
</>
  );
}

export default Roles;