import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iconsSelector, changeHeaderIconVisibility } from '../../store/iconsSlice';
import { useSession, signOut } from 'next-auth/react';
import AddMaterial from '../KnowledgeMaterials/AddMaterial';


import LangLink from '../Helpers/LangLink';
import Link from 'next/link';

import Image from "next/image";



const Header = () => {
	const [showMaterialModel, setShowMaterialModel] = useState(false);

	const dispatch = useDispatch();
	const { SideIconIsOpen } = useSelector(iconsSelector);
	const { data: session, status } = useSession();
	console.log(session);

	const changeSideHandler = () => {
		dispatch(changeHeaderIconVisibility());
	}
	function logoutHandler() {
		signOut();
	}

	const handleMaterialClose = () => {
		setShowMaterialModel(false)
	}
	const iconClass = SideIconIsOpen ? 'knhb-a-expand' : '';
	return (
		<header className="knhb-top-header-wp">
			<div className="knhb-side-nav-icon">
				<a href="#" id="navExpand" className={iconClass} onClick={changeSideHandler}>
					<i className="knr kn-menu"></i>
					<i className="knr kn-arrow-right"></i>
				</a>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 d-flex justify-content-between align-items-center">
						<div className="knhb-logo-name">
							<h4 className="knhb-mb-0">بوابة المعرفة</h4>
						</div>
						<nav className="knhb-heder-nav">
							<li>
								<a href="" className="knhb-fs-sm">
									<i className="knr kn-info-circle"></i>
									<span>عن البوابة</span>
								</a>
							</li>
							<li>
								<a href="" className="knhb-fs-sm">
									<i className="knr kn-bookmark"></i>
									<span>شروط الاستخدام</span>
								</a>
							</li>
							<li>
								<a href="" className="knhb-fs-sm">
									<i className="knr kn-shield"></i>
									<span>سياسة الخصوصية</span>
								</a>
							</li>
							{/* <li>
								<LangLink/>
							</li> */}

							<li className="knhb-heder-btn">
								<button onClick={() => setShowMaterialModel(true)} className="knbtn knbtn-main knbtn-sm">نشـر مادة معرفية</button>
							</li>

						</nav>
					</div>

				</div>

			</div>
			<div className="knhb-profile-img">
				<Link href="/profile">
					<Image width={20} height={20} alt="" src={'/img/profile.png'} />
				</Link>
			</div>

			<AddMaterial show={showMaterialModel} close={handleMaterialClose} />

		</header>
	);
}
export default Header;

