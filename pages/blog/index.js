import { useEffect, useState, useMemo, Fragment } from "react";
import { Breadcrumb, Skeleton, Pagination, Empty } from "antd";
import { useQuery, QueryClient } from "react-query";
import { getAllBlogs, GetCountOfBlogsLikesComments } from "../../hooks/api/BlogApi";

import Link from "next/link";
import PageHeader from "../../components/Layout/PageHeader";
import BlogList from '../../components/BlogList/BlogList';
import BlogFilter from '../../components/BlogList/BlogFilter';
import AddBlog from '../../components/BlogList/AddBlog';

const Blog = () => {
    const [selectedCat, setSelectedCat] = useState(0);
    const [sortingValue, setSortingValue] = useState("desc");
    const [selectedTag, setSelectedTag] = useState("");
    const [myFiles, setMyFiles] = useState("false");
    const [pageNum, setPageNum] = useState(1);

    const queryClient = useMemo(() => {
        return new QueryClient();
    }, []);

    const {
        data: blogsData,
        isFetching: blogsFetching,
        refetch: blogsRefetching,
    } = useQuery(
        ["blogs", selectedCat, sortingValue, selectedTag, myFiles, pageNum],
        () => getAllBlogs(selectedCat, sortingValue, selectedTag, myFiles, pageNum),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0,

        }
    );


    const {
        data: BlogsCount,
        isFetching: BlogsCountFetching,
    } = useQuery(
        ["MaterialCount"],
        () => GetCountOfBlogsLikesComments(),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        }
    );

    console.log(blogsData);

    const handleCategoryChange = (checkedValues) => {
        setPageNum(1)
        setSelectedCat(checkedValues.target.value);
    };

    const handleSortingChange = (value) => {
        setPageNum(1)
        setSortingValue(value);
    };

    const handleTagChange = (value) => {
        setPageNum(1)
        setSelectedTag(value);
    };

    const handlePageNum = (page) => {
        setPageNum(page)
    };

    const handleFilesChange = (value) => {
        setPageNum(1)
        setMyFiles(value.target.value)
    }


    const prefetchData = (val) => {
        if (val) {
            setPageNum(1)
            blogsRefetching();
        }
    }

    useEffect(() => {
        blogsRefetching();
    }, [selectedCat, sortingValue, selectedTag, queryClient, pageNum, blogsRefetching]);


    return (
        <Fragment>
            <PageHeader>
                <div className="">
                    <h4 className="mb-3">المدونة</h4>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link href="/">الرئيسية</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>المدونة</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="">
                    <div className="d-flex gap-2 align-items-center">
                        {BlogsCount &&
                            <ul className="list-unstyled d-flex m-0 p-0">
                                <li className="text-white text-center px-4">
                                    <h4 className="mb-1">{BlogsCount.result.numberOfBlogs}</h4>
                                    <span className="fw-light">تدوينة</span>
                                </li>
                                <li className="text-white text-center px-4">
                                    <h4 className="mb-1">{BlogsCount.result.numberOfComments}</h4>
                                    <span className="fw-light">تعليق</span>
                                </li>
                                <li className="text-white text-center px-4">
                                    <h4 className="mb-1">{BlogsCount.result.numberOfLikes}</h4>
                                    <span className="fw-light">إعجاب</span>
                                </li>
                            </ul>
                        }
                        <AddBlog prefetchData={prefetchData} />
                    </div>
                </div>
            </PageHeader>

            <div className="row mt-5">
                <BlogFilter
                    blogOnChange={handleCategoryChange}
                    sortingOnChange={handleSortingChange}
                    tagOnChange={handleTagChange}
                    filesOnChange={handleFilesChange}
                />
                <div className="col-md-9">

                    {blogsFetching ? (
                        <div className="row">
                            <div className="col-md-6 bg-white p-5 text-center">
                                <Skeleton avatar paragraph={{ rows: 4 }} active />
                            </div>
                            <div className="col-md-6 bg-white p-5 text-center">
                                <Skeleton avatar paragraph={{ rows: 4 }} active />
                            </div>
                        </div>
                    ) : (
                        <div>
                            {blogsData.result.blogs.totalCount == 0 &&
                                <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={
                                        <span>لا يوجد تدوينات حتي الان</span>
                                    }
                                />
                            }
                            <BlogList blogs={blogsData.result} />

                            {blogsData.result.blogs.totalCount > 10 &&

                                <div className="my-4 d-flex justify-content-end">
                                    <Pagination
                                        defaultPageSize={blogsData.result.pageSize}
                                        current={blogsData.result.currentPage}
                                        total={blogsData.result.blogs.totalCount}
                                        onChange={handlePageNum}
                                    />
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>


        </Fragment>
    )
}
export default Blog