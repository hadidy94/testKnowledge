import ProgressBar from '../UI/Progress-bar';
import TimeLine from '../UI/TimeLine';
function AboutMe() {
    return (
        <>
            <div className="knhb-title  ms-4">
                <h5>المعلومات الشخصية</h5>
            </div>

            <div className="bg-white knhb-shadow rounded  p-4">
                <div className="row">
                    <div className="col-md-4">
                        <span className="small mb-1 d-block">المسمى الوظيفي</span>
                        <h6 className="text-main small">مدير قسم القنوات الرقمية</h6>
                    </div>
                    <div className="col-md-4">
                        <span className="small mb-1 d-block">الإدارة</span>
                        <h6 className="text-main small">الإدارة العامة لخدمات تقنية المعلومات</h6>
                    </div>
                    <div className="col-md-4">
                        <span className="small mb-1 d-block">الوكالة</span>
                        <h6 className="text-main small">الوكالة المساعدة للرقمنة والإبتكار</h6>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <p className="text-gray small">إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <div className="knhb-title title-sub">
                            <h5>الدراسة</h5>
                        </div>
                        <div className="mt-4">
                            <TimeLine />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-sm-0">
                        <div className="knhb-title title-sub">
                            <h5>المهارات</h5>
                        </div>
                        <div className="mt-4">
                            <div className="mb-4">
                                <ProgressBar />
                            </div>

                            <div className="mb-4">
                                <ProgressBar />

                            </div>

                            <div className="mb-4">
                                <ProgressBar />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutMe;