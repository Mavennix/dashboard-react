import React, {Component} from 'react';

export class SideBar extends Component {
    render() {
        return (
            <div className="sidebar pt-5">

                <div className="px-4">
                    <button className="btn btn-success invoiceBtn px-3">GENERATE INVOICE</button>
                </div>

                {/*Main*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Main</p>
                    <div className="nav-item active px-4 py-3">
                        <p className="text-secondary mb-0">Overview</p>
                    </div>
                </div>

                {/*payment*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Payment</p>
                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">All Payments</p>
                    </div>

                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">Reconciled Payments</p>
                    </div>

                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">Un-Reconciled Payments</p>
                    </div>
                </div>

                {/*orders*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Orders</p>
                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">All Orders</p>
                    </div>

                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">Pending Orders</p>
                    </div>

                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">Reconciled Orders</p>
                    </div>
                </div>

                {/*profile*/}
                <div className="pt-5">
                    <div className="nav-item px-4 py-3">
                        <p className="text-secondary mb-0">Merchant Profile</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default SideBar;