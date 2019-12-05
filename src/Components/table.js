import React, {Component} from 'react';
import noticationIcon from '../assets/img/notificationIcon.svg';
import profileImage from '../assets/img/profileImg.svg'

export class DataTable extends Component {

    render() {
        return (
            <div className="table-responsive-md">
  <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Item Type</th>
      <th scope="col">Price</th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Time</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td> <small className="chip text-warning"><i class="fa fa-circle" aria-hidden="true"></i> Pending</small> </td>
      <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td ><small className="chip text-success"><i class="fa fa-circle" aria-hidden="true"></i> Reconcilled</small> </td>
      <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>


    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><small className="chip text-muted"><i class="fa fa-circle" aria-hidden="true"></i> Un-reconcilled</small></td>
      <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>

    </tr>
  </tbody>
  </table>
</div>
        )
    }
}

export default DataTable;