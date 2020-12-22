/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react'
import CustomerRetention from './templates/customerRetention';
import Ecommerce from './templates/eCommerce';
import Nurture from './templates/nurture';
// import logo from '../assets/cardimage.svg';
// import { Card, CardBody, CardText, CardTitle,Button, Row } from 'reactstrap'
import OnBording from './templates/onBording';
import ReEngagement from './templates/reengagement';

function Modal() {
    return (
        <Fragment>
            <div className="mt-4">
            <h4 > Welcome and on-boarding</h4>
            <OnBording/>
            </div>
            <div className="mt-4">
            <h4 className="mt-10">Nurture</h4>
            <Nurture/>
            </div>
            <div className="mt-4">
            <h4>Re-engagement</h4>
            <ReEngagement/>
            </div>
            <div className="mt-4">
            <h4>Customer Retention</h4>
            <CustomerRetention/>
            </div>
            <div className="mt-4">
            <h4>E-Commerce</h4>
            <Ecommerce/>
            </div>
        </Fragment>
    )
}

export default Modal
