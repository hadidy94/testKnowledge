import { Fragment, useState, useRef } from "react";
import AddMaterial from './KnowledgeMaterials/AddMaterial';
const Feeds = () => {
  const [showMaterialModel, setShowMaterialModel] = useState(false);
  const [materialArea, setMaterialArea] = useState();
  const materialAreaRef = useRef();
  const handleMaterialArea = () => {
    setMaterialArea(materialAreaRef.current.value)
  }
  const handleMaterialClose = () => {
    materialAreaRef.current.value = "";
    setMaterialArea('')
    setShowMaterialModel(false)
  }

  return (
    <Fragment>
      <AddMaterial materialTextValue={materialArea} show={showMaterialModel} close={handleMaterialClose} />
      <section className="knhb-content">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
            <div className="knhb-card p-0 mb-5">
              <div className="knhb-get-start-wp">
                <ul
                  className="knhb-get-start-tabs nav"
                  id="getStartTab"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="getStartFileTab"
                      data-bs-toggle="pill"
                      data-bs-target="#getStartFile"
                      type="button"
                      role="tab"
                      aria-controls="getStartFile"
                      aria-selected="true"
                    >
                      <i className="knb kn-copy"></i>
                      <span>انشـر مادة معرفية</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="getStartBlogTab"
                      data-bs-toggle="pill"
                      data-bs-target="#getStartBlog"
                      type="button"
                      role="tab"
                      aria-controls="getStartBlog"
                      aria-selected="false">
                      <i className="knb kn-copy"></i>
                      <span>اكتب تدوينـــــة</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="getStartIdeaTab"
                      data-bs-toggle="pill"
                      data-bs-target="#getStartIdea"
                      type="button"
                      role="tab"
                      aria-controls="getStartIdea"
                      aria-selected="false">
                      <i className="knb kn-bookmark"></i>
                      <span>شارك فكرة</span>
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="getStarttabContent">
                  <div
                    className="tab-pane fade show active"
                    id="getStartFile"
                    role="tabpanel"
                    aria-labelledby="getStartFileTab">
                    <div className="knhb-start-file">
                      <textarea
                        ref={materialAreaRef}
                        onChange={handleMaterialArea}
                        rows="4"
                        placeholder="اكتب هنا نبذة مختصرة عن المادة المعرفية المرفقة لا تتجاوز ٦٠٠ حرف"></textarea>
                      <div className="knhb-start-footer d-flex align-items-center justify-content-end">
                        <div className="d-flex align-items-center justify-content-end">
                          <a
                            href="#"
                            className="knbtn knbtn-light"
                            tabIndex={-1}
                            role="button"
                            aria-disabled="true">
                            تجاهــل
                          </a>
                          <button
                            href="#"
                            className="knbtn knbtn-main"
                            tabIndex={-1}
                            role="button"
                            aria-disabled="true"
                            onClick={() => setShowMaterialModel(true)}
                          >
                            نشـــر الآن
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="getStartBlog"
                    role="tabpanel"
                    aria-labelledby="getStartBlogTab">
                    ..s.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="getStartIdea"
                    role="tabpanel"
                    aria-labelledby="getStartIdeaTab">
                    .sa..
                  </div>
                </div>
              </div>
            </div>

            <div className="knhb-home-recently-added">
              <div className="knhb-home-recently-title d-flex align-items-center justify-content-between">

                <div className="knhb-get-start-wp">

                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
            <div className="knhb-card">

            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Feeds;
