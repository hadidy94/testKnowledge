import Image from "next/image";
import Link from "next/link";



const BlogSingle = (props) => {
    const { id,
        coverImagePath,
        blogTitle,
        content,
        publishDate,
        categoryName,
        publisherUserName,
        countOfLikes,
        countOfDislikes,
        numberOfViews,
        countOfComments
    } = props;

    const date= new Date(publishDate);
    const dateFormat =  date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear();
    
    return (
        <div key={id} className="col-md-6">
            <div className="blog-box mb-4">
                <div className="blog-img">
                    <Image src={coverImagePath ? coverImagePath : '/img/test2.jpg'} layout="responsive" width={424} height={230} className="rounded-3 w-100" alt="img" />
                    <div className="blog-tag small d-flex gap-1 align-items-center">
                        <i className="knb kn-bookmark"></i>
                        <span> {categoryName} </span>
                    </div>
                </div>
                <div className="blog-content bg-white p-3">
                    <div className="d-flex">
                        <div className="d-flex align-items-center gap-3">
                            <Image src='/img/profile.png' width={25} height={25} className="rounded-circle" alt="img" />
                            <h6 className="m-0 small">{publisherUserName}</h6>
                        </div>
                    </div>
                    <h5 className="my-3">{blogTitle}</h5>
                    <div className="d-flex gap-2 gap-sm-4">
                        <div className="small text-gray d-flex align-items-center gap-1">
                            <i className="knb kn-calendar"></i>
                            <span>{dateFormat}</span>
                        </div>
                        <div className="small text-gray d-flex align-items-center gap-1">
                            <i className="knb kn-eye"></i>
                            <span> {numberOfViews} </span>
                        </div>
                        <div className="small text-gray d-flex align-items-center gap-1">
                            <i className="knb kn-comment-dots"></i>
                            <span> {countOfComments} </span>
                        </div>
                        <div className="small text-gray d-flex align-items-center gap-1">
                            <i className="knb kn-heart"></i>
                            <span> {countOfLikes} </span>
                        </div>
                    </div>

                    <p className="py-3  text-gray blog-trim">
                        {content.length > 100 ? content.substring(0, 100).concat('...') : content}
                    </p>

                    <Link href={`blog/${id}`}
                        className="knbtn knbtn-main knbtn-sm small"
                    >
                        قراءة المزيد
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSingle;