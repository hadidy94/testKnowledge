import { Fragment } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Aside from './Aside';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Spin } from 'antd';





function Layout(props) {
    const router = useRouter();
    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    if (loading) {
        return <div className="p-5 text-center"><Spin size="large" /></div>
    }
    

    if (unAuthorized) {
        router.push({
            pathname: '/login',
            query: { returnUrl: router.asPath },
        });
    }





    if (authorized) {
        return (
            <Fragment>
                <Header />
                <div className="knhb-wrapper">
                    <Aside />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default Layout;