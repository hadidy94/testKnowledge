import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spin } from 'antd';

function AuthLayout({ children }) {

    const router = useRouter();
    const { status: sessionStatus } = useSession();
    const authorized = sessionStatus === 'authenticated';
    const unAuthorized = sessionStatus === 'unauthenticated';
    const loading = sessionStatus === 'loading';

    if (loading) {
        return <div className="p-5 text-center"><Spin size="large" /></div>
    }


    if (authorized) {
        router.push({
            pathname: '/',
        });
    }


    if (unAuthorized) {
        return (
            <div>
                {children}
            </div>
        );
    }


}

export default AuthLayout;