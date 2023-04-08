import { Fragment } from "react";
import Image from "next/image";
import Sidebar from './Sidebar';
import { signOut } from 'next-auth/react';

const DashboardLayout = ({ children }) => {
    function logoutHandler() {
        signOut();
      }
    return (
        <Fragment>

            <div className="container-fluid">
                <div className="row">
                   <Sidebar/>

                    <div className="col-md-9 ms-sm-auto col-lg-10 p-0">
                        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow justify-content-end p-3 mb-4">
                            <div className="dropdown dropstart">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                    <strong>عبدالله</strong>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><button onClick={logoutHandler} className="dropdown-item">تسجيل الخروج</button></li>
                                </ul>
                            </div>
                        </header>
                        <main className=" px-md-4">
                            {children}
                          
                        </main>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default DashboardLayout;