import React from 'react'
import {
    Card,CardText, CardBody,Container,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Landing() {
    return (
        
            <div class="mcw cv container-fluid">
            <Card>
                <CardBody>
          <CardTitle tag="h1">Card title</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
                </div>

        
    )
}

export default Landing
