import React, {Component} from 'react';
import noticationIcon from '../assets/img/notificationIcon.svg';
import profileImage from '../assets/img/profileImg.svg'

export class Navbar extends Component {
    userName = 'Oluwaleke Ojo';

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white px-md-5 py-3">
                <h3 className="navTitle">TransMonitor</h3>

                <div className="ml-auto d-inline-flex">
                    <p className="text-secondary pr-5 mb-0 my-auto cursor d-md-block d-none">Support</p>

                    <p className="text-secondary pr-5 mb-0 my-auto cursor d-md-block d-none">FAQ</p>

                    <div className="my-auto pr-5 position-relative">
                        <div className="notifcationIndicator small position-absolute">8</div>
                        <img src={noticationIcon} alt="notification icon" style={{maxWidth: '20px'}}/>
                    </div>

                    <div className="my-auto pr-2 d-md-block d-none">
                        <p className="small mb-0 text-right">Hello</p>
                        <p className="mb-0">{this.userName}</p>
                    </div>

                    <img className="rounded-img" src={profileImage} alt="Profile Image" style={{width: '40px'}}/>
                </div>
            </nav>
        )
    } 
}

export default Navbar;