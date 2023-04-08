import { Fragment } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useSession, signOut } from 'next-auth/react';



const Sidebar = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <Fragment>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse p-3 text-bg-dark">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-4">بوابه المعرفه</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link href="/dashboard" className={`nav-link text-white d-flex align-items-center ${router.pathname == "/dashboard" ? "active" : ""}`} aria-current="page">
                                <i className="knb kn-home me-2"></i>
                                <span>الرئيسية</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/material"  className={`nav-link text-white d-flex align-items-center ${router.pathname == "/dashboard/material" ? "active" : ""}`}>
                                <i className="knb kn-copy me-2"></i>
                                المواد المعرفية
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link text-white d-flex align-items-center">
                                <i className="knb kn-pen me-2"></i>
                                المـــدونة
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link text-white d-flex align-items-center">
                                <i className="knb kn-microphone me-2"></i>
                                الجلسات المعرفية
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="nav-link text-white d-flex align-items-center">
                                <i className="knb kn-desktop me-2"></i>
                                النــــــــماذج
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </Fragment>

    )
}

export default Sidebar;