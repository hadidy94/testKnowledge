import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import AuthForm from '../components/Auth/AuthForm';
import AuthLayout from '../components/Layout/AuthLayout';
import { getSession } from 'next-auth/react';


export default function LoginPage() {

    return (
        <div className="container h-100">
            <div className="d-flex justify-content-md-center align-items-center vh-100">
                <div className="col-12 col-lg-6 ">
                    <section className="bg-white rounded-3 py-5 px-lg-5 px-md-5 px-3 my-5">
                        <AuthForm />
                    </section>
                </div>
            </div>

        </div>
    )
}


LoginPage.getLayout = function (page) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    );
};
