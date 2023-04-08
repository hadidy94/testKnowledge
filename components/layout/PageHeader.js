import React, { Fragment } from "react";

const PageHeader = ({children}) => {
  return (
    <Fragment>
    <div className="col">
    <div className="page-header py-5 px-4 d-flex align-items-center justify-content-between">
        {children}
      </div>
    </div>
      
    </Fragment>
  );
};

export default React.memo(PageHeader);
