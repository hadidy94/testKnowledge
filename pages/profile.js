import { Fragment } from 'react';
import Image from "next/image";
import AboutMe from '../components/profile/About';
import Materials from '../components/profile/Materials';

function profile() {
    return (
        <Fragment>
            <div className="knhb-profile-header bg-white knhb-shadow rounded">
                <div className="knhb-profile-header-img">
                    <a href="#" className="knbtn knbtn-main py-4 d-flex d-sm-none" tabIndex="-1" role="button" aria-disabled="true">راســـــــلني</a>
                </div>
                <div className="knhb-profile-header-user px-2 px-sm-4 d-flex justify-content-between align-items-end pb-4 flex-wrap ">
                    <div className="d-flex align-items-start  gap-4 mb-4 bm-sm-0">
                        <Image src='/img/profile.png' width={100} height={100} className="rounded-circle"  alt="img"/>
                        <div className="">
                            <h5 className="text-white mb-5">الملف الشخصي</h5>
                            <h4 className="text-main my-2">عبدالله حمد عبدالله ال زبارة</h4>
                            <span className="text-gray">قسم القنوات الرقمية (الوكالة المساعدة للرقمنة والإبتكار)</span>
                        </div>
                    </div>

                    <div className="d-flex knhb-profile-header-stastics text-end">
                        <ul className="list-unstyled d-flex m-0 p-0">
                            <li className="text-gray text-center px-4">
                                <h4 className="mb-2">08</h4>
                                <span>تدوينة</span>
                            </li>
                            <li className="text-gray text-center px-4">
                                <h4 className="mb-2">245</h4>
                                <span>إعجاب</span>
                            </li>
                            <li className="text-gray text-center px-4">
                                <h4 className="mb-2">0</h4>
                                <span>فكرة</span>
                            </li>
                            <li className="text-gray text-center px-4">
                                <h4 className="mb-2">20</h4>
                                <span>إجابة</span>
                            </li>
                            <li className="text-gray text-center px-4">
                                <h4 className="mb-2">10</h4>
                                <span>مستند</span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="knhb-profile-header-tabs border-top d-flex justify-content-between align-items-center pe-3 flex-wrap">
                    <nav>
                        <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                            <button className="nav-link active"
                                id="nav-profile-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-profile" type="button"
                                role="tab" aria-controls="nav-profile"
                                aria-selected="true">
                                <i className="knr kn-user"></i>
                                <span>من أنـا ؟</span>
                            </button>
                            <button className="nav-link" id="nav-material-tab" data-bs-toggle="tab" data-bs-target="#nav-material" type="button" role="tab" aria-controls="nav-material" aria-selected="true">
                                <i className="knr kn-link"></i>
                                <span>مواد معرفية</span>
                            </button>
                            <button className="nav-link" id="nav-blog-tab" data-bs-toggle="tab" data-bs-target="#nav-blog" type="button" role="tab" aria-controls="nav-blog" aria-selected="true">
                                <i className="knr kn-paperclip"></i>
                                <span>تدويناتي</span>
                            </button>
                            <button className="nav-link" id="nav-experience-tab" data-bs-toggle="tab" data-bs-target="#nav-experience" type="button" role="tab" aria-controls="nav-experience" aria-selected="true">
                                <i className="knr kn-bookmark"></i>
                                <span>خــــبراتي</span>
                            </button>
                            <button className="nav-link" id="nav-sessions-tab" data-bs-toggle="tab" data-bs-target="#nav-sessions" type="button" role="tab" aria-controls="nav-sessions" aria-selected="true">
                                <i className="knr kn-microphone"></i>
                                <span>جلساتي</span>
                            </button>
                            <button className="nav-link" id="nav-questions-tab" data-bs-toggle="tab" data-bs-target="#nav-questions" type="button" role="tab" aria-controls="nav-questions" aria-selected="true">
                                <i className="knr kn-question-circle"></i>
                                <span>أسئلـــتي</span>
                            </button>
                            <button className="nav-link" id="nav-answers-tab" data-bs-toggle="tab" data-bs-target="#nav-answers" type="button" role="tab" aria-controls="nav-answers" aria-selected="true">
                                <i className="knr kn-copy"></i>
                                <span>إجـــــاباتي</span>
                            </button>
                        </div>
                    </nav>

                    <a href="#" className="knbtn knbtn-main py-4 d-none d-sm-flex" tabIndex="-1" role="button" aria-disabled="true">راســـــــلني</a>
                </div>

            </div>


            <div className="knhb-profile-wraper mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="tab-content mb-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                               <AboutMe/>
                            </div>
                            <div className="tab-pane fade" id="nav-material" role="tabpanel" aria-labelledby="nav-material-tab"><Materials/></div>
                            <div className="tab-pane fade" id="nav-blog" role="tabpanel" aria-labelledby="nav-blog-tab">blog</div>
                            <div className="tab-pane fade" id="nav-experience" role="tabpanel" aria-labelledby="nav-experience-tab">experience</div>
                            <div className="tab-pane fade" id="nav-sessions" role="tabpanel" aria-labelledby="nav-sessions-tab">sessions</div>
                            <div className="tab-pane fade" id="nav-questions" role="tabpanel" aria-labelledby="nav-questions-tab">material</div>
                            <div className="tab-pane fade" id="nav-answers" role="tabpanel" aria-labelledby="nav-answers-tab">blog</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="knhb-profile-contact">
                            <div className="knhb-title  ms-4">
                                <h5>معلومات التواصل</h5>
                            </div>
                            <div className="bg-white knhb-shadow rounded  p-4">
                                <div className="d-flex mb-2">
                                    <i className="knb kn-envelope me-2 text-main"></i>
                                    <span className="text-light-gray small ">info@mcit.gov.sa</span>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="knb kn-phone me-2 text-main"></i>
                                    <span className="text-light-gray small ">4755</span>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="knb kn-mobile me-2 text-main"></i>
                                    <span className="text-light-gray small ">05034435534</span>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="knb kn-home me-2 text-main"></i>
                                    <span className="text-light-gray small ">idfs</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default profile;