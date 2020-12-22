/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { Fragment } from 'react'
import logo from '../../assets/cardimage.svg';
import { Card, CardBody, CardText, CardTitle,Button, Row } from 'reactstrap'

function OnBording() {
    return (
        <Fragment>
            <div className="row">
                <div className=" col-lg-3 col-sm-3 w-25 p-3">
                <Card className="card">
                        <CardBody>
                        <CardTitle tag="h5">Simple Followup series</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        </CardBody>
                        <img width="100%" src={logo} alt="Card image cap" />

                        <CardBody>
                        <CardText>Set up an on-boarding message for your contacts, and move them to your CRM system. </CardText>
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
          <CardTitle tag="h5">Basic welcome series</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardText>Set up an on-boarding message for your contacts, and analyze their email engagement.</CardText>
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
                <div className="w-25 p-3">
                <Card>
        <CardBody>
          <CardTitle tag="h5">Push-to-CRM workflow</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardText tag="p">Set up an on-boarding message for your contacts, and push the active contacts to your CRM system. </CardText>
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
                <div className="w-25 p-3">
                <Card>
        <CardBody>
          <CardTitle tag="h5">CRM-triggered workflow</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
        </CardBody>
        <img width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardText>Set up an on-boarding message for your CRM contacts/leads, and update information in your CRM system. </CardText>
          <Row>
                            <div className="cl-lg-6 cl-sm-6 mt-2">
                            <Button  color="primary">Use template</Button>{' '}
                            </div>
                            <div className="cl-lg-6 cl-sm-6 mt-2">
                            <Button outline color="primary">Preview</Button>
                            </div>
                        </Row>
        </CardBody>
      </Card>
                </div>
                </div>
               
        </Fragment>
    )
}

export default OnBording


// <div className="row ">
// <div className=" col-lg-3 float-left p-2 w-25 p-3">
// <Card>
//         <CardBody>
//         <CardTitle tag="h5">10-day welcome series</CardTitle>
//         {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
//         </CardBody>
//         <img width="100%" src={logo} alt="Card image cap" />

//         <CardBody>
//         <CardText>Some quick example text to build on </CardText>
//         <Row>
//             <div className="cl-lg-6 mt-2">
//             <Button  color="primary">Use template</Button>{' '}
//             </div>
//             <div className="cl-lg-6 mt-2">
//             <Button outline color="primary">Preview</Button>
//             </div>
//         </Row>
//         </CardBody>
//     </Card>
//     </div>
// </div>