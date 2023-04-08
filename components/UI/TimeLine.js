import * as React from 'react';
import Image  from 'next/image';

export default function TimeLine() {
    return (
        <>
            <ul className="list-unstyled edu-steps">
                <li className='d-flex align-items-center mb-5'>
                    <div className="border rounded-circle step-img me-3">
                        <Image src="/img/saud.png" width={30} height={40} alt="img" />
                    </div>
                    <div className=''>
                        <h5 className='small mb-1'>بكالوريوس علوم الحاسب والمعلومات</h5>
                        <span className='fw-light'>جامعة الملك سعود 2008</span>
                    </div>
                </li>

                <li className='d-flex align-items-center mb-5'>
                    <div className="border rounded-circle step-img me-3">
                        <Image src="/img/saud.png" width={30} height={40}  alt="img" />
                    </div>
                    <div className=''>
                        <h5 className='small mb-1'>بكالوريوس علوم الحاسب والمعلومات</h5>
                        <span className='fw-light'>جامعة الملك سعود 2008</span>
                    </div>
                </li>

                <li className='d-flex align-items-center'>
                    <div className="border rounded-circle step-img me-3">
                        <Image src="/img/saud.png" width={30} height={40}  alt="img"/>
                    </div>
                    <div className=''>
                        <h5 className='small mb-1'>بكالوريوس علوم الحاسب والمعلومات</h5>
                        <span className='fw-light'>جامعة الملك سعود 2008</span>
                    </div>
                </li>
            </ul>
        </>
    );
}