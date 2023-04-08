import Image from "next/image";


import { useSelector } from "react-redux";
import { iconsSelector } from "../../store/iconsSlice";

import { useOutsideClick } from '../../custom-hooks/useOutsideClick';



function ActivitiesTap() {
    const { showActivities } = useSelector(iconsSelector)



    const activeActivityClass = showActivities
    ? "knhb-clndr-ppp-wp d-flex flex-column active"
    : "knhb-clndr-ppp-wp d-flex flex-column";
    return (
        <>
        <div className={activeActivityClass}>
              <div className="d-flex justify-content-between align-items-end p-3">
                <h5 className="m-0">الفعاليات والأنشطة</h5>
                <a href="#" className="knhb-fs-sm">حذف الكل</a>
              </div>
              <div className="knhb-clndr-ppp-i d-flex align-items-start flex-wrap">
                <div className="knhb-clndr-ppp-dt">
                  <h5 className="m-0">22</h5>
                  <span className="knhb-fs-xs">مارس</span>
                </div>
                <div className="knhb-clndr-ppp-dtls">
                  <p> اسم الفعالية يوضع هنا</p>
                  <div className="d-flex align-items-center  justify-content-between">
                    <div className="d-flex align-items-center">
                      <i className="knb kn-clock main-color"></i>
                      <span className="gray-color knhb-fs-xs">12:00 - 16:00 </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="knb kn-map-marker main-color"></i>
                      <span className="gray-color knhb-fs-xs">حضوري</span>
                    </div>



                  </div>

                </div>
                <div className="knhb-clndr-ppp-btn mt-3 d-flex justify-content-end">
                  <a href="#" className="knbtn knbtn-sm p-0" tabIndex={-1} role="button" aria-disabled="true">حذف الفعالية</a>
                  <a href="#" className="knbtn knbtn-sm knbtn-dark" tabIndex={-1} role="button" aria-disabled="true"> التفاصيل </a>

                </div>
              </div>
              <div className="knhb-clndr-ppp-i d-flex align-items-start flex-wrap">
                <div className="knhb-clndr-ppp-dt">
                  <h5 className="m-0">22</h5>
                  <span className="knhb-fs-xs">مارس</span>
                </div>
                <div className="knhb-clndr-ppp-dtls">
                  <p> اسم الفعالية يوضع هنا</p>
                  <div className="d-flex align-items-center  justify-content-between">
                    <div className="d-flex align-items-center">
                      <i className="knb kn-clock main-color"></i>
                      <span className="gray-color knhb-fs-xs">12:00 - 16:00 </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="knb kn-map-marker main-color"></i>
                      <span className="gray-color knhb-fs-xs">حضوري</span>
                    </div>



                  </div>

                </div>
                <div className="knhb-clndr-ppp-btn mt-3 d-flex justify-content-end">
                  <a href="#" className="knbtn knbtn-sm p-0" tabIndex={-1} role="button" aria-disabled="true">حذف الفعالية</a>
                  <a href="#" className="knbtn knbtn-sm knbtn-dark" tabIndex={-1} role="button" aria-disabled="true"> التفاصيل </a>

                </div>
              </div>

            </div>
        </>
      );
}

export default ActivitiesTap;