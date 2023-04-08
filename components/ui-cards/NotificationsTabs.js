import Image from "next/image";

import { useSelector } from "react-redux";
import { iconsSelector } from "../../store/iconsSlice";

function NotificationsTabs() {
  const { showNotifcation } = useSelector(iconsSelector)
  return (
    <>
    <h1>{showNotifcation}</h1>
      <ul className={ showNotifcation
        ? "knhb-noti-wp  active"
        : "knhb-noti-wp" }>
      <div className="d-flex justify-content-between align-items-end p-3">
        <h5 className="m-0">الإشـعارات</h5>
        <a href="#" className="knhb-fs-sm">اجعل الكل كمقروء</a>
      </div>
      <li className="knhb-unread">
        <a href="" className="knhb-noti">
          <span className="knhb-noti-icon">FE</span>
          <div className="nkhb-noti-dtls">
            <p>
              قام <strong>فواز العبيد</strong>  بالتعليق على تدوينتك <strong className="main-color"> الأهداف والنتائج الرئيسية</strong>
            </p>
            <span className="gray-color knhb-fs-xs">منذ 36 دقيقة | المــــــــدونة </span>
          </div>
        </a>
      </li>
      <li className="knhb-unread">
        <div className="knhb-noti">
          <Image className="knhb-noti-icon" alt="" src='/img/profile.png' width={50} height={50} />
          <div className="nkhb-noti-dtls">
            <p>
              قام <strong>عبدالله بركات</strong> بارسال سؤال لك <strong>هل تعتقد النــــــــماذج الخاصة بهذا الموضوع ...</strong>                    </p>
            <span className="gray-color knhb-fs-xs">منذ 36 دقيقة | المــــــــدونة </span>
          </div>
        </div>
        <div className="knhb-noti-btns">
          <a href="#" className="knbtn knbtn-sm knbtn-dark knbtn-outline" tabIndex={-1} role="button" aria-disabled="true">     تجاهــل</a>
          <a href="#" className="knbtn knbtn-sm knbtn-dark" tabIndex={-1} role="button" aria-disabled="true"> إجابة الآن </a>
        </div>
      </li>
      <li>
        <a href="" className="knhb-noti">
          <span className="knhb-noti-icon">FE</span>
          <div className="nkhb-noti-dtls">
            <p>
              قام <strong>فواز العبيد</strong>  بالتعليق على تدوينتك <strong className="main-color"> الأهداف والنتائج الرئيسية</strong>
            </p>
            <span className="gray-color knhb-fs-xs">منذ 36 دقيقة | المــــــــدونة </span>
          </div>
        </a>
      </li>
    </ul>
        </>
     );
}

export default NotificationsTabs;