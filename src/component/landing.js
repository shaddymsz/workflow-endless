import React from 'react';
import {Card,CardText, CardBody,Container, CardTitle, CardSubtitle, Row, Col} from 'reactstrap';
import List from './listTable';

function Landing() {
    return (
       <Container>
        <Row>
        <Col >
        <Card>
          <CardBody>
          <CardTitle tag="h2" className="text-center text-md-left">Workflow Rules</CardTitle>
          <CardSubtitle className="mb-2 text-muted mt-3">Workflow rules allow you to perform certain automatic actions on specific records based on filter criteria. Workflow automations can send emails, update fields, create records and much more.</CardSubtitle>
          <CardText >
          <Row> 
          <Col><List/></Col>
          </Row>
          </CardText>
        </CardBody>
      </Card>
       </Col>
      </Row>
      </Container>        
    )
}

export default Landing
