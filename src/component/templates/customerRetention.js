/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { Fragment } from 'react'
import logo from '../../assets/cardimage.svg';
import { Card, CardBody, CardText, CardTitle,Button, Row } from 'reactstrap'

function CustomerRetention() {
    return (
        <Fragment>
            <div className="row">
                <div className=" col-lg-3 col-sm-3 w-25 p-3">
                <Card>
                        <CardBody>
                        <CardTitle tag="h5">Getting product reviews</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        </CardBody>
                        <img width="100%" src={logo} alt="Card image cap" />

                        <CardBody>
                        <CardText>Some quick example text to build on </CardText>
                        <Row>
                            <div className="cl-lg-6 mt-2">
                            <Button  color="primary">Use template</Button>{' '}
                            </div>
                            <div className="cl-lg-6 mt-2">
                            <Button outline color="primary">Preview</Button>
                            </div>
                        </Row>
                        </CardBody>
                    </Card>
                    </div>
                <div className=" w-25 p-3">
                <Card>
        <CardBody>
          <CardTitle tag="h5">Simple loyalty building</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick exampleasda asd s</CardText>
          <Row>
                            <div className="cl-lg-6 mt-2">
                            <Button  color="primary">Use template</Button>{' '}
                            </div>
                            <div className="cl-lg-6 mt-2">
                            <Button outline color="primary">Preview</Button>
                            </div>
                        </Row>
        </CardBody>
      </Card>
                </div>
                <div className=" w-25 p-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>card 3</h3>
                        </div>
                        <div className="card-body">
                        <img width="100%" src={logo} alt="Card image cap" />
                        <p>Some quick example text to build on</p>
                        </div>
                        <div className="card-footer">
                        <Row>
                            <div className="cl-lg-6 mt-2">
                            <Button  color="primary">Use template</Button>{' '}
                            </div>
                            <div className="cl-lg-6 mt-2">
                            <Button outline color="primary">Preview</Button>
                            </div>
                        </Row> 
                        </div>
                    </div>
                </div>
                <div className=" w-25 p-3"></div>
                </div>
               
        </Fragment>
    )
}

export default CustomerRetention
