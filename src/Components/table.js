import React, {Component} from 'react';

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
                        <th scope="row">
                            <div className="d-inline-flex">
                              <div className="table-title__icon mr-3">
                                VW
                              </div>
                              <h5 className="font-weight-normal my-auto">Apple Mac Book 15" 250 SSD 12GB</h5>
                            </div>
                        </th>
                        <td>$73430</td>
                        <td>1234567890</td>
                        <td>12:30</td>
                        <td><small className="chip text-secondary py-2 px-3"><i class="fa fa-circle" aria-hidden="true"></i> Un-reconciled</small>
                        </td>
                        <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>

                    </tr>
                    <tr>
                        <th scope="row">
                          <div className="d-inline-flex">
                            <div className="table-title__icon mr-3">
                              VW
                            </div>
                            <h5 className="font-weight-normal my-auto">Apple Mac Book 15" 250 SSD 12GB</h5>
                          </div>
                        </th>
                        <td>$73430</td>
                        <td>1234567890</td>
                        <td>12:30</td>
                        <td><small className="chip text-warning py-2 px-3"><i class="fa fa-circle"
                                                                    aria-hidden="true"></i> Reconcilled</small></td>
                        <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>


                    </tr>
                    <tr>
                        <th scope="row">
                          <div className="d-inline-flex">
                            <div className="table-title__icon mr-3">
                              VW
                            </div>
                            <h5 className="font-weight-normal my-auto">Apple Mac Book 15" 250 SSD 12GB</h5>
                          </div>
                        </th>
                        <td>$73430</td>
                        <td>1234567890</td>
                        <td>12:30</td>
                        <td><small className="chip text-success py-2 px-3"><i class="fa fa-circle"
                                                                  aria-hidden="true"></i> Reconciled</small></td>
                        <td><i class="fa fa-angle-down" aria-hidden="true"></i></td>

                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;