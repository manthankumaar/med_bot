import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Cards';
import NavBar from "./components/NavBar";
import thermo from './assets/icons8-temperature.gif'
import o2 from './assets/o2.png'
import blood from './assets/blood-pressure.png'
import { Row, Container, Col } from "react-bootstrap";
export default function App() {
  return(
  <div className="App">
          <NavBar />
          <Container>
    
              <div className='container'>
                  <Row>
                      <Col><Card
                          title='temperature'
                          imageUrl={thermo}
                          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, magna in mattis tempus, orci elit consectetur enim, sit amet vestibulum justo dui sed libero. Donec auctor dolor et tortor placerat, ac ultrices urna posuere. Fusce sodales sapien eu ullamcorper ullamcorper. Proin vitae dapibus neque.'
                      /></Col>
                      <Col><Card
                          title='O2'
                          imageUrl={o2}
                          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, magna in mattis tempus, orci elit consectetur enim, sit amet vestibulum justo dui sed libero. Donec auctor dolor et tortor placerat, ac ultrices urna posuere. Fusce sodales sapien eu ullamcorper ullamcorper. Proin vitae dapibus neque.'
                      /></Col>
                      <Col> <Card
                          title='blood-pressure'
                          imageUrl={blood}
                          body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, magna in mattis tempus, orci elit consectetur enim, sit amet vestibulum justo dui sed libero. Donec auctor dolor et tortor placerat, ac ultrices urna posuere. Fusce sodales sapien eu ullamcorper ullamcorper. Proin vitae dapibus neque.'
                      /></Col>
    
   
                  </Row>
                  </div>
              
     </Container>
  </div>
  )
}