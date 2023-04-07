import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Link} from 'react-router-dom';
import Users from './Users';
import Dashboard from './Dashboard';
import Category from './Category';
import Roles from './Roles';
import SubCategory from './SubCategoty';
import Retailers from './Retailers';
import logo1 from './logo1.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaUserTie} from 'react-icons/fa';
import {BiCategory} from 'react-icons/bi';
import {GiPikeman} from 'react-icons/gi'
import {GrUserManager} from 'react-icons/gr'
import {IoIosMan} from 'react-icons/io'
import {FaToolbox} from 'react-icons/fa'
import {MdLocalOffer} from 'react-icons/md'
import {AiTwotoneInsurance} from 'react-icons/ai'
import Footer from './Footer';
import './App.css';

function SecondPage() {

   
  return (
<>    
<div className="fullpage">
    
     <Container fluid>

        <Row>

            <Col className=" col-12 bg-dark logo-div " xs={2} md={3} lg={2}>
                <img id='logo' src={logo1} alt="" />
            </Col>

            <Col className="col-12 bg-dark heading" xs={10} md={9} lg={10}>
            <h1 className='text-white text-center pt-4'>Tailor Town</h1>
            <p style={{fontFamily:'TimesNewRoman'}} className='text-white text-center' >Kaam Wahi Soch Nayi</p>
            </Col>
 
        



        <Row style={{height:'80vh'}}>

               <Col className='col' style={{backgroundColor:'black'}} sm={3} md={3} lg={2}>
               
                  <ul className='list-unstyled'>
                  
        
                         <li className='text-center mt-4'> <Link className='sidebar-content text-white text-decoration-none' to="/"> <h4> Dashboard </h4></Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/users"> <FaUserTie/>  Users</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/roles"> <FaToolbox/> Roles</Link> </li> 
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/category"> <BiCategory/> Category</Link> </li> 
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/subcategory"> <BiCategory/> Sub-Category</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/retailers"> <GiPikeman/> Retailers</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/customers"> <IoIosMan/> Customers</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/offerzone"> <MdLocalOffer/> Offer Zone</Link> </li>
                         <li className='mt-4 mx-4'> <Link className='sidebar-content text-white text-decoration-none' to="/thirdpartyproduct"><AiTwotoneInsurance/> Third Party Product</Link> </li>
                 
                  </ul>
                
               </Col>



              <Col className="bg-white content-area col-12" sm={9} md={9} lg={10}>
           
               <Routes>
                 <Route path='/' element={<Dashboard/>} />
                 <Route path='/users' element={<Users/>} />
                 <Route path='/roles' element={<Roles/>} />
                 <Route path='/category' element={<Category/>} />
                 <Route path='/subcategory' element={<SubCategory/>} />
                 <Route path='/retailers' element={<Retailers/>} />
               </Routes>
             
               </Col>
 
          </Row>


      

          </Row> 




         
     </Container>
    
    
    
   {/* <Container fluid>
      <Row>
          <Col>
                 <Footer/>
          </Col>
      </Row>
   </Container>  */}
   
    
    
    
    
    
</div>
</>
  )
}

export default SecondPage