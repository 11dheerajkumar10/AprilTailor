import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Dashboard() {
 
     
  const [chart1, setChart1]= useState({
    options: {
      colors:['#000000','#808080'],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
      }
    },
    series: [
      {
        name: "Revenue",
        data: [60, 75, 80, 99, 80, 110, 120]
      },
      {
        name: "Expenditure",
        data: [40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });
     

  return (
    <>

    <Container fluid>

       <Row>

           <Col className="col-4" sm={4} md={4}>
                 
                 <div class="card mt-4 bg-dark" style={{width: '80%' , height: '80%' ,border: '2px solid black'}}>
                     <div class="card-body">
                           <h3 style={{fontWeight:'700', color:'white'}} class="card-title text-center">Total Users</h3>
                           <p style={{fontSize:'40px', color:'white'}} class="card-text text-center">54323</p>
                        
                     </div>
                 </div>

            </Col>

           <Col className="col-4" sm={4} md={4}>
         
           <div class="card mt-4 bg-dark" style={{width: '80%' , height: '80%' ,border: '2px solid black'}}>
                     <div class="card-body">
                           <h3 style={{fontWeight:'700', color:'white'}} class="card-title text-center">Total Retailers</h3>
                           <p style={{fontSize:'40px', color:'white'}} class="card-text text-center">54323</p>
                        
                     </div>
                 </div>

           </Col>

           <Col className="col-4" sm={4} md={4}>

           <div class="card mt-4 bg-dark" style={{width: '80%' , height: '80%',border: '2px solid black'}}>
                     <div class="card-body">
                           <h3 style={{fontWeight:'700', color:'white'}} class="card-title text-center">Total Customers</h3>
                           <p style={{fontSize:'40px', color:'white'}} class="card-text text-center">54323</p>
                        
                     </div>
                 </div>

           </Col>




    </Row>


   </Container>



   <Container className="pt-4 mt-5">

     <Row>

      <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}} className="col-12" sm={6} md={6}>
      <Chart style={{height:'auto',width:'80%'}}
              options={chart1.options}
              series={chart1.series}
              type="bar"
              width="500"
            />
      </Col>

      <Col className="chart2 col-12" sm={6} md={6}>
      <Chart
              options={chart1.options}
              series={chart1.series}
              type="line"
              width="500"
            />
       
      </Col>

      
      </Row>
   </Container>
     
    </>
  )
}

export default Dashboard