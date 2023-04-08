import ApiClient from '../ApiClient';


export const getAllBlogs = async (selectedCat, sortingValue, tagName, IsMyFiles, pageNum) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetAll?CategoryId=${selectedCat}&Sorting=${sortingValue}&TagName=${tagName}&MyFiles=${IsMyFiles}&SkipCount=${pageNum}`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const getAllBlogsCategories = async () => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetAllBlogCategoriesWithNumberOfBlogsForEach`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const getAllBlogsTags = async () => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetAllBlogTags`);
        return result;
    } catch (error) {
        return error.data
    }
}

export const createBlog = async (blogData) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeBlog/Create`, blogData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return result;
    } catch (error) {
        return error.data
    }

}

export const getBlogByID = async (id) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetBlogById?id=${id}`);
        return result;
    } catch (error) {
        return error.data
    }

}


export const AddCommentById = async (data) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeBlog/AddComment`, data);
        return result;
    } catch (error) {
        return error.data
    }

}

export const Addview = async (blogID) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeBlog/AddViewerDetailsAndCount?blogId=${blogID}`);
        return result;
    } catch (error) {
        return error.data
    }

}

export const GetAllCommentsByBlogId = async (blogID) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetAllCommentsByBlogId?blogId=${blogID}`);
        return result;
    } catch (error) {
        return error.data
    }

}

export const GetUserInteractionsWithBlog = async (blogID) => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetUserInteractionsWithBlog?blogId=${blogID}`);
        return result;
    } catch (error) {
        return error.data
    }

}


export const AddLikeOrDislike = async (interaction, blogID) => {
    try {
        const result = await ApiClient.post(`/services/app/KnowledgeBlog/AddLikeOrDislike?interaction=${interaction}&blogId=${blogID}`);
        return result;
    } catch (error) {
        return error.data
    }

}

export const GetCountOfBlogsLikesComments = async () => {
    try {
        const result = await ApiClient.get(`/services/app/KnowledgeBlog/GetCountOfBlogsLikesComments`);
        return result;
    } catch (error) {
        return error.data
    }
}

