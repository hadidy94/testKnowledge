import { useState, useMemo } from 'react';
import { Spin, Checkbox, Form, Select, Tag, Space, Skeleton } from "antd";
import { useQuery } from "react-query";
import {
    getAllBlogsCategories,
    getAllBlogsTags
} from "../../hooks/api/BlogApi";

const { CheckableTag } = Tag;


function filterCatData(data) {
    let newoption = [];
    if (data) {
        data.result.map((el) => {
            newoption.push({
                label: `${el.categoryName} (${el.numberOfBlogs})`,
                value: el.categoryId,
                hey: el.categoryId,
            });
        });
    }
    return newoption;
}

function filtertagsData(data) {
    let tagsData = [];
    if (data) {
        data.result.map((el) => {
            tagsData.push(el.tagName);
        });
    }
    return tagsData;
}


export default function BlogFilter({ blogOnChange, sortingOnChange, tagOnChange, filesOnChange }) {
    const [selectedCatCheck, setSelectedCatCheck] = useState(0);
    const [selectedTags, setSelectedTags] = useState();
    const [myFiles, setMyFiles] = useState("false");

    const { data: categoryData, isFetching: categoryFetching } = useQuery(
        ["categories"],
        () => getAllBlogsCategories(),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        }
    );
    const categoryResult = useMemo(
        () => filterCatData(categoryData),
        [categoryData]
    );


    const { data: TagsData, isFetching: TagsFetching } = useQuery(
        ["tags"],
        () => getAllBlogsTags(),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        }
    );

    const tagsData = useMemo(
        () => filtertagsData(TagsData),
        [TagsData]
    );

    const handleSortingChange = (value) => {
        sortingOnChange(value);
    }

    const handleCategoryChange = (value) => {
        setSelectedCatCheck(value.target.value);
        blogOnChange(value);
    }

    const handleTagChange = (tag) => {
        if (selectedTags === tag) {
            setSelectedTags("")
            tagOnChange("")
        } else {
            setSelectedTags(tag);
            tagOnChange(tag)
        }
        
    };

    const handleFilesChange = (value) => {
        setMyFiles(value.target.value)
        filesOnChange(value)
    }

    return (
        <div className="col-md-3">
            <div className="bg-white mb-3 ">
                <Select
                    onChange={handleSortingChange}
                    placeholder="ترتيب حسب"
                    style={{ width: "100%", borderRadius: '2px' }}
                    options={[
                        { value: "desc", label: "الأحدث" },
                        { value: "asc", label: "الأقدم" },
                    ]}
                    listHeight={128}
                />
            </div>
            <div className="bg-white py-4 px-3">
                <h5 className="text-main mb-3">التصفية</h5>
                <div className="mb-2">
                    <Checkbox
                        onChange={handleFilesChange}
                        checked={myFiles == 'false'}
                        value={'false'}
                    >
                        عام
                    </Checkbox>
                </div>

                <div className="mb-2">
                    <Checkbox
                        onChange={handleFilesChange}
                        checked={myFiles == 'true'}
                        value={'true'}
                    >
                        ملفاتي
                    </Checkbox>
                </div>

                <h6 className="mb-2 mt-4">حسب النوع</h6>
                <Form>
                    {categoryFetching ? (
                        <div className="bg-white p-5 text-center">
                            <Skeleton paragraph={{ rows: 2 }} active />
                        </div>
                    ) : (
                        categoryResult.map((item) => (
                            <div key={item.value} className="mb-2">
                                <Checkbox
                                    key={item.value}
                                    onChange={handleCategoryChange}
                                    checked={item.value == selectedCatCheck}
                                    value={item.value}
                                >
                                    {item.label}
                                </Checkbox>
                            </div>
                        ))
                    )}
                </Form>

                <h5 className="mb-2 mt-4">الكلمات الدلالية</h5>
                <Space size={[0, 8]} wrap>
                    {tagsData.map((tag) => (
                        <CheckableTag
                            key={tag}
                            checked={tag == selectedTags}
                            onChange={(checked) => handleTagChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </Space>
            </div>
        </div>
    )
}