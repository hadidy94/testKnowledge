import { useState, useMemo } from 'react';
import { Skeleton, Checkbox, Form, Select } from "antd";
import { useQuery } from "react-query";
import {
    getAllCategories,
} from "../../hooks/api/KnowledgeMaterials";


function filterSellerData(data) {
    let newoption = [];
    if (data) {
        data.result.map((el) => {
            newoption.push({
                label: `${el.categoryName} (${el.numberOfMaterials})`,
                value: el.id,
                hey: el.id,
            });
        });
    }
    return newoption;
}

export default function MaterialFilter({ materialOnChange, sortingOnChange, filesOnChange }) {
    const [selectedMaterialsCheck, setSelectedMaterialsCheck] = useState(0);
    const [myFiles, setMyFiles] = useState("false");

    const { data: categoryData, isFetching: categoryFetching } = useQuery(
        ["categories"],
        () => getAllCategories(),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 0,
        }
    );
    const categoryResult = useMemo(
        () => filterSellerData(categoryData),
        [categoryData]
    );

    const handleSortingChange = (value) => {
        sortingOnChange(value);
    }

    const handleCategoryChange = (value) => {
        setSelectedMaterialsCheck(value.target.value);
        materialOnChange(value);
    }

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
                />
            </div>
            <div className="bg-white py-4 px-3">
                <h4 className="text-main mb-3">التصفية</h4>

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
                                    checked={item.value == selectedMaterialsCheck}
                                    value={item.value}
                                >
                                    {item.label}
                                </Checkbox>
                            </div>
                        ))
                    )}
                </Form>

                <h6 className="mb-2 mt-4">حسب السنة</h6>
            </div>
        </div>
    )
}