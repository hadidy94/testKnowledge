import { useEffect, useState, useMemo, Fragment } from "react";
import PageHeader from "../components/Layout/PageHeader";
import { Breadcrumb, Skeleton, Pagination } from "antd";
import Link from "next/link";


const ides = () => {
    return (
        <Fragment>
            <PageHeader>
                <div className="">
                    <h4 className="mb-3">الأفكار</h4>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link href="/">الرئيسية</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>النماذج</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="">
                    <div className="d-flex gap-2 align-items-center">
                        <ul className="list-unstyled d-flex m-0 p-0">
                            <li className="text-white text-center px-4">
                                <h4 className="mb-1">412</h4>
                                <span className="fw-light">نموذج</span>
                            </li>
                        </ul>
                        <a href="" class="knbtn knbtn-main knbtn-sm">أضف نموذج</a>
                    </div>
                </div>
            </PageHeader>

            <div className="row mt-5">
               
                <div className="col-md-9">

                </div>
            </div>


        </Fragment>
    )
}


export default ides;