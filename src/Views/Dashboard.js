import React, {Component} from 'react';
import {Col, Row, Form, ProgressBar} from "react-bootstrap";
import AreaChartView from "../Components/AreaChart";
import DataTable from '../Components/table';
import OtherChart from "../Components/OtherChart";

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <div className="col-12 col-md-6 col-lg-3 mb-md-0 mb-4">
                        <div className="card p-4">
                            <Row>
                                <Col sm={6} className="my-auto">
                                    <p className="text-secondary mb-0 small">Daily Transaction Volume</p>
                                    <h4 className="mb-0 font-weight-normal">2,342</h4>
                                </Col>
                                <Col sm={6} className="px-0">
                                    <AreaChartView/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-md-0 mb-4">
                        <div className="card p-4">
                            <Row>
                                <Col sm={6} className="my-auto">
                                    <p className="text-secondary mb-0 small">Daily Transaction Volume</p>
                                    <h4 className="mb-0 font-weight-normal">₦4,000,000</h4>
                                </Col>
                                <Col sm={6} className="px-0">
                                    <AreaChartView/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-md-0 mb-4">
                        <div className="card p-4">
                            <Row>
                                <Col sm={6} className="my-auto">
                                    <p className="text-secondary mb-0 small">Total Transaction Volume</p>
                                    <h4 className="mb-0 font-weight-normal">452,000</h4>
                                </Col>
                                <Col sm={6} className="px-0">
                                    <AreaChartView/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-md-0 mb-4">
                        <div className="card p-4">
                            <Row>
                                <Col sm={6} className="my-auto">
                                    <p className="text-secondary mb-0 small">Total Transaction Value</p>
                                    <h4 className="mb-0 font-weight-normal">₦4,000,000</h4>
                                </Col>
                                <Col sm={6} className="px-0">
                                    <AreaChartView/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Row>

                <Row className="pt-5 eq-row">
                    <Col lg={8}>
                        <div className="card p-4 h-100 mb-md-0 mb-4">
                            <Row>
                                <Col md={4}>
                                    <h4>Today: 5, Aug 2018</h4>
                                </Col>
                                <Col md={8}></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <OtherChart/>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col lg={4} className="pl-md-0">
                        <div className="card p-4">
                            <h5 className="font-weight-bold mb-4">Orders</h5>

                            <ProgressBar now={80}/>

                            <p className="pt-4">Pending Orders: <span className="font-weight-bold"
                                                                      style={{color: '#FDC203'}}>20</span></p>

                            <p>Reconciled Orders: <span className="font-weight-bold"
                                                        style={{color: '#27AE60'}}>80</span></p>

                            <p>Total Orders: <span className="font-weight-bold" style={{color: '#1875F0'}}>20</span></p>
                        </div>

                        <div className="card p-4">
                            <h5 className="font-weight-bold mb-4">Payments</h5>

                            <ProgressBar now={80}/>

                            <p className="pt-4">Un-reconciled Payments: <span className="font-weight-bold"
                                                                              style={{color: '#FDC203'}}>20</span></p>

                            <p>Reconciled Payments: <span className="font-weight-bold"
                                                          style={{color: '#27AE60'}}>80</span></p>

                            <p>Total Payments: <span className="font-weight-bold" style={{color: '#1875F0'}}>20</span>
                            </p>
                        </div>
                    </Col>
                </Row>

                {/*payments*/}
                <Row className="pt-5 mb-5 pb-5">
                    <Col sm={12}>
                        <h2>Payments</h2>
                        <Row className=" my-4">
                            <Col className="my-auto" sm={12} md={1}><p className="my-auto">Showing</p></Col>

                            <Col className="my-auto" sm={6} md={1}><Form.Group controlId="pagination"
                                                                               className="mx-md-3 my-auto">
                                <Form.Control as="select"
                                              style={{color: '#1875F0', background: 'transparent', border: 'none'}}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                </Form.Control>
                            </Form.Group></Col>

                            <Col className="my-auto" sm={12} md={2}><p className="my-auto mr-5">out of 500 payments</p>
                            </Col>

                            <Col className="my-auto" sm={12} md={3}>
                                <Form.Group controlId="search" className="my-auto ml-4 mr-5 pr-5">
                                    <Form.Control type="text" placeholder="Search Payments" style={{
                                        border: 'none',
                                        borderRadius: '0',
                                        background: 'transparent',
                                        borderBottom: '1px solid #787878'
                                    }}/>
                                </Form.Group>
                            </Col>

                            <Col className="my-auto" sm={12} md={4}>
                                <div className="d-inline-flex">
                                    <p className="my-auto ml-5 pl-5">Show</p>

                                    <Form.Group controlId="showOption" className="mx-3 my-auto">
                                        <Form.Control as="select" style={{background: 'transparent'}}>
                                            <option>All</option>
                                            <option>Reconciled</option>
                                            <option>Un-reconciled</option>
                                            <option>Settled</option>
                                            <option>Unsettled</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                        <div className="card p-4">
                            <DataTable></DataTable>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;