import { Fragment } from "react";
import Sun from "../../public/img/sun.png";
import Moon from "../../public/img/moon.png";
import Image from "next/image";
import Link from "next/link";
import ActivitiesTap from '../ui-cards/ActivitiesTap';
import NotificationsTabs from '../ui-cards/NotificationsTabs';
import { useOutsideClick } from '../../custom-hooks/useOutsideClick';
import { useRouter } from "next/router";
import { useSession, signOut } from 'next-auth/react';


import { useSelector, useDispatch } from "react-redux";
import { iconsSelector, showNotifcationHandler, showActivitiesHandler, closeAllIcons } from "../../store/iconsSlice";

const Aside = () => {
  const { SideIconIsOpen, showNotifcation } = useSelector(iconsSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();


  function logoutHandler() {
    signOut();
  }
  const handleClickOutside = () => {
    dispatch(closeAllIcons());
  };

  const ref = useOutsideClick(handleClickOutside);


  const showNotificationIcon = () => {
    dispatch(showNotifcationHandler());
  }

  const showActivitiesIcon = () => {
    dispatch(showActivitiesHandler())
  }

  const asideClass = SideIconIsOpen
    ? "knhb-side-nav-wp  knhb-side-expand"
    : "knhb-side-nav-wp";
  return (
    <Fragment>
      <aside className={asideClass} >
        <nav className="knhb-side-nav">
          <li>
            <Link className={router.pathname == "/" ? "knhb-active" : ""} href="/">
              <i className="knb kn-home"></i>
              <span>الصفحة الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link className={router.pathname == "/knowledge-materials" ? "knhb-active" : ""} href="/knowledge-materials">
              <i className="knb kn-copy"></i>
              <span>المواد المعرفية</span>
            </Link>
          </li>
          <li>
            <a href="">
              <i className="knb kn-bookmark"></i>
              <span>بنك الأفــــكار</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="knb kn-microphone"></i>
              <span>الجلسات المعرفية</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="knb kn-users-three"></i>
              <span>المجتمعـــــات</span>
            </a>
          </li>
          <li>
            <Link className={router.pathname == "/blog" ? "knhb-active" : ""} href="/blog">
              <i className="knb kn-pen"></i>
              <span>المــــــــدونة</span>
            </Link>
          </li>
          <li>
            <a href="">
              <i className="knb kn-user"></i>
              <span>البحث عن خبير</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="knb kn-question-circle"></i>
              <span>الأسئلة الشائعة</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="knb kn-info-circle"></i>
              <span>السياسات </span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="knb kn-desktop"></i>
              <span>النــــــــماذج</span>
            </a>
          </li>
          {session.user.isAdminAccess &&
            <li>
              <Link className={router.pathname == "/dashboard" ? "knhb-active" : ""} href="/dashboard">
                <i className="knb kn-chart-pie"></i>
                <span>لوحة التحكم</span>
              </Link>
            </li>
          }
        </nav>
        <a href="">
          <i className="knb kn-comments"></i>
          <span>سؤال وجواب</span>
        </a>
      </aside>
      <aside className="knhb-profile-bar-wp d-flex flex-column justify-content-between" ref={ref}>
        <nav>
          <li>
            <a className="knhb-fs-sm" onClick={showNotificationIcon}>
              <i className="knb kn-bell"></i>
              <span className="knhb-top-badge knhb-number-badge">5</span>
            </a>

            <NotificationsTabs />
          </li>

          <li>
            <a href="" className="knhb-fs-sm">
              <i className="knb kn-envelope"></i>
              <span className="knhb-top-badge"></span>
            </a>
          </li>
          <li>
            <a className="knhb-fs-sm" onClick={showActivitiesIcon}>
              <i className="knb kn-calendar"></i>
              <span className="knhb-top-badge"></span>
            </a>

            <ActivitiesTap />



          </li>
        </nav>
        <nav>
          <li>
            <a id="knhbThemeSwitcher" href="#" className="knhb-fs-sm">
              <Image src="/img/sun.png" width={15} height={15} alt="" />
              <Image src="/img/moon.png" width={15} height={15} className="knhb-dark-theme" alt="" />
            </a>
          </li>
          <li>
            <a href="" className="knhb-fs-sm">
              <i className="knb kn-microphone"></i>
            </a>
          </li>
          <li>
            <a href="" className="knhb-fs-sm">
              <i className="knb kn-settings"></i>
            </a>
          </li>

          {session &&
            <li>
              <button onClick={logoutHandler} className="knhb-fs-sm bg-white shadow-0 border-0">
                <i className="knr kn-log-out"></i>
              </button>
            </li>
          }

        </nav>
      </aside>
    </Fragment>
  );
};

export default Aside;
