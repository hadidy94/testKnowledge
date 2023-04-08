import Image from "next/image";
function Materials() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <div className="knhb-title  ms-4">
                    <h5>المواد المعرفية المضافة بواسطتي</h5>
                </div>

                <div className="knhb-get-start-wp">
                    <ul
                        className="knhb-get-materials-tabs nav"
                        id="getStartTab"
                        role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="getAllFilesTab"
                                data-bs-toggle="pill"
                                data-bs-target="#getAllFiles"
                                type="button"
                                role="tab"
                                aria-controls="getAllFiles"
                                aria-selected="true">
                                <i className="knr kn-folder"></i>
                                <span> جميع المستندات</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="getMaterialFilesTab"
                                data-bs-toggle="pill"
                                data-bs-target="#getMaterialFiles"
                                type="button"
                                role="tab"
                                aria-controls="getMaterialFiles"
                                aria-selected="false">
                                <i className="knr kn-copy"></i>
                                <span>الملفات</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="getMaterialImageTab"
                                data-bs-toggle="pill"
                                data-bs-target="#getMaterialImage"
                                type="button"
                                role="tab"
                                aria-controls="getMaterialImage"
                                aria-selected="false">
                                <i className="knr kn-image"></i>
                                <span>الصور</span>
                            </button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="getMaterialVideoTab"
                                data-bs-toggle="pill"
                                data-bs-target="#getMaterialVideo"
                                type="button"
                                role="tab"
                                aria-controls="getMaterialVideo"
                                aria-selected="false">
                                <i className="knr kn-video"></i>
                                <span>الفيديوهات</span>
                            </button>
                        </li>
                    </ul>

                </div>

            </div>


            <div className="bg-white knhb-shadow rounded  p-4">
                <div className="tab-content" id="getStarttabContent">
                    <div
                        className="tab-pane fade show active"
                        id="getAllFiles"
                        role="tabpanel"
                        aria-labelledby="getAllFilesTab">

                            <div className="row">
                                <div className="col-lg-3 col-sm-4">
                                    <div className="border rounded mb-4">
                                        <div className="p-3">
                                        <a href="#">
                                        <h6 className="lh-base mb-0">اسم المادة المعرفية يوضع هنا رابط قابل للضغط</h6>
                                        </a>
                                        </div>
                                        <div className="border-top rounded d-flex p-3 align-items-center justify-content-between">
                                            <span className="small fw-light">نوع الملف</span>
                                            <Image src="/img/icons/pdf.png" width={30} height={30}  alt="img" />
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="getMaterialFiles"
                        role="tabpanel"
                        aria-labelledby="getMaterialFilesTab">
                        ..s.
                    </div>
                    <div
                        className="tab-pane fade"
                        id="getMaterialImage"
                        role="tabpanel"
                        aria-labelledby="getMaterialImageTab">
                        .sa..
                    </div>
                    <div
                        className="tab-pane fade"
                        id="getMaterialVideo"
                        role="tabpanel"
                        aria-labelledby="getMaterialVideoTab">
                        .sa..
                    </div>
                </div>
            </div>
        </>
    );
}

export default Materials;