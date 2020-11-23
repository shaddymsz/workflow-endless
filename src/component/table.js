import React, { Fragment } from 'react'
import {Table} from 'reactstrap'

function ListTable() {
    return (
        <Fragment>
             <Table hover>
      <thead>
        <tr>
          <th>Rule Name</th>
          <th>All Modules</th>
          <th>Execute on</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Fragment>
    )
}

export default ListTable
