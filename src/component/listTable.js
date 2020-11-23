import React, {Fragment, useState} from 'react'
import ListTable from './table'
import { Button, Form, Input, Modal,ModalHeader, ModalBody, ModalFooter,Label,Col, FormGroup } from 'reactstrap'

function List() {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    
    return (
        <Fragment>
            <div className="row">
            <div className="col-lg-3">
            <Form className="mt-3">
                <Input type="text" placeholder="Search"/>
            </Form>
           </div>
           <div className="col-lg-9 mt-3 text-md-right">
               <Button onClick={toggle} outline color="primary">Add workflow</Button>           
               <Modal isOpen={modal} toggle={toggle} className="mt-5" >
        <ModalHeader toggle={toggle}>Create New Rule</ModalHeader>
        <ModalBody>
        
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>Module</Label>
        <Col sm={9}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Select Module Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>Rule Name</Label>
        <Col sm={9}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Rule Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>Description</Label>
        <Col sm={9}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Short Description" />
        </Col>
      </FormGroup>
          </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          
          <Button color="primary" onClick={toggle}>Create Rule</Button>{' '}
        </ModalFooter>
      </Modal>
            </div>
            </div>
            <div className="row col-lg-12 mt-5">
                <ListTable />
            </div>
           
        </Fragment>
    )
}

export default List
