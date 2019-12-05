import React, {Component} from 'react';
import dashboardIcon from '../assets/img/dashboard.png';
import paymentIcon from '../assets/img/all-payments.png';
import reconciledPayment from '../assets/img/reconciled-payments.png';
import allOrders from  '../assets/img/all-orders.png';
import manualSettlement from '../assets/img/manuel-settlement.png';
import pendingOrders from  '../assets/img/pending-orders.png';
import reconciledPayments from '../assets/img/reconciled-payments.png';
import profile from  '../assets/img/merchant-profile.png'

export class SideBar extends Component {
    render() {
        return (
            <div className="sidebar pt-4 d-md-block d-none">

                <div className="px-4">
                    <button className="btn btn-success invoiceBtn px-3">GENERATE INVOICE</button>
                </div>

                {/*Main*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Main</p>
                    <div className="nav-item active px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={dashboardIcon} alt="Dashboard Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">Overview</p>
                    </div>
                </div>

                {/*payment*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Payment</p>
                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={paymentIcon} alt="Payment Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">All Payments</p>
                    </div>

                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={reconciledPayment} alt="Reconciled Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">Reconciled Payments</p>
                    </div>

                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={paymentIcon} alt="Payment Icon" style={{maxWidth: '22px', height: '22px'}}/>
                        <p className="text-secondary mb-0">Un-Reconciled Payments</p>
                    </div>

                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={manualSettlement} alt="Manual settlement Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">manual Settlement</p>
                    </div>
                </div>

                {/*orders*/}
                <div>
                    <p className="text-secondary px-4 pt-5">Orders</p>
                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={allOrders} alt="all orders Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">All Orders</p>
                    </div>

                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={pendingOrders} alt="pending orders Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">Pending Orders</p>
                    </div>

                    <div className="nav-item px-4 py-3 d-inline-flex w-100">
                        <img className="mr-2" src={reconciledPayment} alt="reconciled orders Icon" style={{maxWidth: '22px'}}/>
                        <p className="text-secondary mb-0">Reconciled Orders</p>
                    </div>
                </div>

                {/*profile*/}
                <div className="nav-item px-4 py-3 d-inline-flex w-100">
                    <img className="mr-2" src={profile} alt="merchant profile icon" style={{maxWidth: '22px'}}/>
                    <p className="text-secondary mb-0">Merchant Profile</p>
                </div>


            </div>
        )
    }
}

export default SideBar;