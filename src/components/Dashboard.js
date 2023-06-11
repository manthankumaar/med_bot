import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Cards';
import thermo from '../assets/icons8-temperature.gif'; 
import o2 from '../assets/o2.png'; 
import blood from '../assets/blood-pressure.png'; 

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="card-container">
            <Card
              title="Temperature"
              imageUrl={thermo}
              body="Last recorded Body temp: 36"
            />
          </div>
        </Col>
        <Col>
          <div className="card-container">
            <Card
              title="O2"
              imageUrl={o2}
              body="Current O2 level: 98%"
            />
          </div>
        </Col>
        <Col>
          <div className="card-container">
            <Card
              title="Blood-pressure"
              imageUrl={blood}
              body="Current blood-pressure: 90bpm"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
