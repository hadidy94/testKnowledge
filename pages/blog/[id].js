import { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Skeleton, Tag, Space, Empty, Spin, FloatButton } from "antd";
import { getBlogByID, Addview, GetAllCommentsByBlogId, GetUserInteractionsWithBlog, AddLikeOrDislike } from "../../hooks/api/BlogApi";
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { HeartFilled } from '@ant-design/icons';

import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/Layout/PageHeader";
import ListComments from '../../components/Comments/ListComments';
import AddComment from '../../components/Comments/AddComment';


const SingleBlog = () => {
    const { query: { id } } = useRouter();
    const [userLike, setUserLike] = useState();

    const { data, isFetching, refetch } = useQuery(
        ['blog', id],
        () => getBlogByID(id),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0
        }
    )

    const { data: commentsData,
        isFetching: isFetchingComments,
        refetch: refetchComments } = useQuery(
            ['comments', id],
            () => GetAllCommentsByBlogId(id),
            {
                refetchOnWindowFocus: false,
                refetchInterval: 0
            }
        )


    const { data: likesData,
        isFetching: isFetchingLikes,
        refetch: refetchLikes } = useQuery(
            ['likes', id],
            () => GetUserInteractionsWithBlog(id),
            {
                refetchOnWindowFocus: false,
                refetchInterval: 0
            }
        )

    const handleLikes = async () => {
        if (likesData?.result.interactionType == 1) {
            console.log('dislike')
            const result = await AddLikeOrDislike(2, id);
            console.log(result)
            if (result.success) {
                refetchLikes();
            }
        } else{
            console.log('like')
            const result = await AddLikeOrDislike(1, id);
            if (result.success) {
                refetchLikes();
            }
        }
    }

    const prefetchData = (val) => {
        if (val) {
            refetchComments();
        }
    }

    useEffect(() => {
        Addview(id);
    }, []);


    if (isFetching) {
        return (
            <div className="bg-white p-5 text-center row">
                <Spin size="large" />
            </div>
        )
    }
    const blogData = data.result;
    const date = new Date(blogData.publishDate);
    const dateFormat = date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear();

    return (
        <Fragment>
            {!isFetchingLikes &&
                <FloatButton icon={<HeartFilled />} type={likesData.result.interactionType == 1 ? 'primary' : 'default'} style={{ left: 90 }} onClick={handleLikes} />}

            <PageHeader>
                <div className="">
                    <h4 className="mb-3">{blogData.blogTitle}</h4>

                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link href="/">الرئيسية</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link href="/blog">المدونة</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{blogData.blogTitle}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </PageHeader>

            <div className="row align-items-center justify-content-center">
                <div className="col-md-10">
                    <div className="mt-5">
                        <Image src={blogData.coverImagePath} layout="responsive" width={100} height={50} className="rounded-2" alt="ss" />
                    </div>

                    <div className="mt-4">
                        <h3 className="mb-3">{blogData.blogTitle}</h3>


                        <div className="d-flex gap-2 gap-sm-4">
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-calendar"></i>
                                <span>{dateFormat}</span>
                            </div>
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-eye"></i>
                                <span> {blogData.numberOfViews} </span>
                            </div>
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-comment-dots"></i>
                                <span> {blogData.countOfComments} </span>
                            </div>
                            <div className="small text-gray d-flex align-items-center gap-1">
                                <i className="knb kn-heart"></i>
                                <span> {blogData.countOfLikes} </span>
                            </div>
                        </div>

                        <div className="my-5">
                            <p className="text-gray">{blogData.content}</p>
                        </div>

                        <div className="my-4">
                            {!!blogData.blogTags && blogData.blogTags.map((ele) =>
                                <Space key={ele.id} size={[0, 8]} wrap>
                                    <Tag>#{ele.tagName}</Tag>
                                </Space>
                            )}
                        </div>

                    </div>

                    <div className="bg-white p-3 shadow-sm rounded d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex gap-3 align-items-center">
                            <div>
                                <Image width={50} height={50} alt={blogData.publisherProfilePic} src='/img/profile.png' />
                            </div>
                            <div>
                                <h6 className="mb-1">{blogData.publisherUserName}</h6>
                                <span className="text-gray">{blogData.publisherTitle}</span>
                            </div>
                        </div>

                        <div className="">
                            <ul className="list-unstyled d-flex m-0 p-0">
                                <li className="text-center px-4">
                                    <a href="#" className="">
                                        <i className="knr kn-user mb-1 d-block"></i>
                                        <span className="text-dark">عن الكاتب</span>
                                    </a>
                                </li>
                                <li className="text-center px-4">
                                    <a href="#" className="">
                                        <i className="knr kn-paperclip mb-1 d-block"></i>
                                        <span className="text-dark">التدوينات</span>
                                    </a>
                                </li>
                                <li className="text-center px-4">
                                    <a href="#" className="">
                                        <i className="knr kn-bookmark mb-1 d-block"></i>
                                        <span className="text-dark">الخبرات </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {blogData.allowComments && (

                        <div className="bg-white p-3 shadow-sm mb-5 rounded">
                            <h4 className="text-main mb-3 mt-4">اكتب تعليق</h4>
                            <AddComment blogID={blogData.id} prefetchData={prefetchData} />

                            {isFetchingComments &&
                                <Skeleton avatar paragraph={{ rows: 3 }} active />
                            }
                            {!isFetchingComments && commentsData.result.length > 0 ?
                                <Fragment>
                                    <h4 className="text-main mb-3">التعليقات <span className="fw-normal text-gray">({commentsData.result.length})</span></h4>
                                    <ListComments comments={commentsData.result} blogId={blogData.id} />
                                </Fragment>
                                :
                                <Empty
                                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                                    description={
                                        <span>لا يوجد تعليقات حتي الان</span>
                                    }
                                />
                            }


                        </div>

                    )}



                </div>
            </div>



        </Fragment>
    )

}

export default SingleBlog;
