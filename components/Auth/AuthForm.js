import { useState, useRef, useCallback } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import toast from "../Toast";



export default function AuthForm() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const router = useRouter();

        const notify = useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const dismiss = useCallback(() => {
        toast.dismiss();
    }, []);


    const [loadingSubmit, setLoaingSubmit] = useState(false);

    const { data: session, loading } = useSession();

    async function submitHandler(event) {
        setLoaingSubmit(true);
        event.preventDefault();

        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;

        const result = await signIn('credentials', {
            redirect: false,
            userNameOrEmailAddress: enteredEmail,
            password: enteredPassword,
            rememberClient: true
        });

        if (!result.error) {
            setLoaingSubmit(false);
            router.replace('./')

        } else {
            notify("error", "Email or Password is invalid")
            setLoaingSubmit(false);
        }
    }

    return (
        <section>
            <div className="knhb-main-logo text-center mb-4">
                <Image src="/img/set.svg" alt="Vercel Logo" width={50} height={16} />
            </div>
            <h3 className="text-center">تسجيل الدخول</h3>
            <form onSubmit={submitHandler}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="email" ref={emailInput} placeholder="name@example.com" required />
                    <label htmlFor="email">اسم المستخدم او الايميل</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" ref={passwordInput} placeholder="Password" required />
                    <label htmlFor="password">الرقم السرى</label>
                </div>

                <div className="text-center mt-4">
                    <button className="knbtn knbtn-main py-4 w-100 text-center" disabled={loadingSubmit}>
                        {loadingSubmit ? 'تحميل...' : 'تسجيل الدخول '}
                    </button>
                </div>
            </form>
        </section>
    );
}



