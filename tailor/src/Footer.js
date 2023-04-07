import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import googleplay from './logos/googleplay.png';
import appstore from './logos/appstore.png'
import facebook from './logos/facebook.png'
import youtube from './logos/youtube.png'
import instagram from './logos/instagram.png'
import twitter from './logos/twitter.png'

function Footer() {
  return (
    <div>
          
            
            {/* /////////// FOOTER////////// */}

<Container fluid style={{backgroundColor:'black'}} className='text-white mt-4'>
            <Row style={{marginTop:'-10px'}} className='pt-4'>
                <Col className='col-6' sm={3}>
                    
                 <ul style={{listStyle: 'none'}} > 
                 <p> <strong>USEFUL LINKS</strong> </p>
                 <li>Blog</li> 
                 <li>Careers</li> 
                 <li>Site Map</li> 
                 <li>Corporate Information</li> 
                 <li>Whitehat</li> 
                 </ul> 

                 <ul style={{listStyle: 'none'}}> 
                  <p> <strong>ONLINE SHOPPING</strong> </p>
                  <li>Men</li> 
                  <li>Women</li> 
                  <li>Kids</li> 
                  <li>Tailor Town Insider</li> 

                  </ul> 
                </Col>




                <Col className='col-6' sm={3}>
                <ul style={{listStyle:'none'}}> 
              <p><strong>CUSTOMER POLICIES</strong> </p>
              <li>Contact Us</li> 
              <li>TAQ</li> 
              <li>T&C</li> 
              <li>Terms of Use</li> 
              <li>Track Orders</li> 
              <li>Shipping</li> 
              <li>Cancellation</li>
              <li>Returns</li> 
              <li>Privacy policy</li>
              <li>Grievance Officer</li>
             </ul> 

                </Col>




                <Col className='col-6' sm={3}>
                <p><strong>EXPERIENCE TAILOR TOWN APP ON MOBILE</strong> </p>
                <a style={{textDecoration:'none'}} href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700058906718334_creativeid_480977734745_device_c&gclid=CjwKCAjwoIqhBhAGEiwArXT7K4OmzOuNqQl-gmsRPGklgLIc2OU6D_88w8gXCGypZHOepqwgi229ShoCe34QAvD_BwE&gclsrc=aw.ds&pli=1" target='_blank'> <img height="50px" src={googleplay} alt=""/> </a>
                <a style={{textDecoration:'none'}} href="https://www.apple.com/in/app-store/" target='_blank'><img height="50px" src={appstore} alt=""/></a>

             <p class="mt-4"><strong>KEEP IN TOUCH</strong> </p>
             <a style={{textDecoration:'none'}} href="https://www.youtube.com/watch?v=8xg3vE8Ie_E" target='_blank'> <img class="mx-1" height="30px" src={youtube} alt=""/></a>
             <a style={{textDecoration:'none'}} href="https://twitter.com/taylorswift13?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank'> <img class="mx-1" height="30px" src={twitter} alt=""/> </a>
             <a style={{textDecoration:'none'}} href="https://www.instagram.com/taylorswift/?hl=en" target='_blank'><img class="mx-1" height="30px" src={instagram} alt=""/> </a>
             <a style={{textDecoration:'none'}} href="https://www.facebook.com/TaylorSwift/" target='_blank'><img class="mx-1" height="30px" src={facebook} alt=""/> </a>
                </Col>
                




                <Col className='col-6' sm={3}>
                <ul style={{listStyle: 'none'}} > 
                 <p> <strong>CONTACT US</strong> </p>
                 <li>tailortown@gmail.com</li> 
                 <li>+91 7000 697 913</li> 
                 <li><br/></li> 
                 <li>Shop No: 215</li> 
                 <li>DB MAll, MP Nagar</li> 
                 <li>Bhopal 462003</li> 
                 </ul> 

                 

                  
                </Col>
            </Row>

     </Container>

    </div>
  )
}

export default Footer