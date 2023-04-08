import BlogSingle from './BlogSingle';


const BlogList = ({ blogs }) => {
    const { items } = blogs.blogs;
    
    return (
        <div className="row">
            {items.map((item) =>
                <BlogSingle
                    key={item.id}
                    id={item.id}
                    coverImagePath={item.coverImagePath}
                    blogTitle={item.blogTitle}
                    content={item.content}
                    publishDate={item.publishDate}
                    categoryName={item.categoryName}
                    publisherUserName={item.publisherUserName}
                    countOfLikes={item.countOfLikes}
                    countOfDislikes={item.countOfDislikes}
                    numberOfViews={item.numberOfViews}
                    countOfComments={item.countOfComments}
                />
            )}
        </div>
    )
}

export default BlogList;