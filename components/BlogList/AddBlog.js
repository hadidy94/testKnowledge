import { useState, useRef, useMemo, useCallback } from 'react';
import { Modal, theme, Form, Input, Select, Upload, Button, DatePicker, Checkbox, Alert, message } from 'antd';
import { useQuery } from 'react-query';
import { getAllBlogsCategories } from "../../hooks/api/BlogApi";
import { UploadOutlined } from '@ant-design/icons';
import { createBlog } from '../../hooks/api/BlogApi';

const { Option } = Select;
const { useToken } = theme;
const { TextArea } = Input;


function filterCatData(data) {
    let newOption = [];
    if (data) {
        data.result.map(el => {
            newOption.push(
                {
                    id: el.categoryId,
                    label: el.categoryName
                }
            )
        })
    }
    return newOption;
}

const AddMaterial = ({ prefetchData }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formErrors, setFormErrors] = useState();
    const { token } = useToken();
    const [addBlogForm] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();


    const selectRef = useRef();

    const { data: catData, isLoading: catIsLoading } = useQuery(['catergories'],
        () => getAllBlogsCategories());
    const optionResult = useMemo(() => filterCatData(catData), [catData]);


    const handleClose = () => {
        setOpen(false);
        addBlogForm.resetFields();
    };
    const handleOpen = () => {
        setOpen(true)
    };

    const handlePrefetch = () => prefetchData(true);
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const onCreate = async (values) => {
        setFormErrors("")
        setConfirmLoading(true)
        let data = new FormData();
        data.append('BlogTitle', values.BlogTitle)
        data.append('Content', values.Content)
        data.append('CoverImage', values.CoverImage[0].originFileObj)
        data.append('KnowledgeBlogCategoryId', values.KnowledgeBlogCategoryId)
        data.append('AllowComments', values.AllowComments)

        values.KnowledgeBlogTags.map((el, i) => {
            data.append(`KnowledgeBlogTags[${i}].tagName`, el)
        })

        const result = await createBlog(data);
        if (result.success) {
            messageApi.open({
                type: 'success',
                content: 'تم اضافة المقال - تحت المراجعة',
                style: {
                    marginTop: '70px',
                },
            });
            handlePrefetch()
            setOpen(false);
        } else {
            setFormErrors(result.error.message)
        }
        setConfirmLoading(false)

    }
    return (
        <div>
        {contextHolder}
            <button onClick={handleOpen} className="knbtn knbtn-main knbtn-sm">أضف تدوينة</button>
            <Modal
                open={open}
                title="اضافة مدونة"
                okText="ارسال"
                cancelText="الغاء"
                onCancel={handleClose}
                width={800}
                confirmLoading={confirmLoading}
                okButtonProps={{ size: 'large', style: { backgroundColor: token.colorPrimary } }}
                cancelButtonProps={{ size: 'large', disabled: confirmLoading }}
                maskClosable={false}
                closable={false}
                onOk={() => {
                    addBlogForm
                        .validateFields()
                        .then((values) => {
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                {!!formErrors && <Alert
                    message="خطأ"
                    description={formErrors}
                    type="error"
                    showIcon
                />}

                <Form
                    form={addBlogForm}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >

                    <Form.Item
                        name="CoverImage"
                        label="اضف الصورة"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: 'الصورة مطلوبة!' }]}
                    >
                        <Upload accept="image/png, image/jpeg" maxCount={1} name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item
                                name="BlogTitle"
                                label="العنوان"
                                rules={[{ required: true, message: 'العنوان مطلوب!' }]}
                            >
                                <Input showCount maxLength={100} placeholder="العنوان يوضع هنا لا يتجاوز 100 حرف" />
                            </Form.Item>

                        </div>

                      
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item
                                name="Content"
                                label="التفاصيل"
                                rules={[{ required: true, message: 'الوصف مطلوب!' }]}
                            >
                                <TextArea showCount maxLength={600}
                                    placeholder=" اكتب هنا نبذة مختصرة عن المادة المعرفية المرفقة لا تتجاوز ٦٠٠ حرف "
                                    style={{ height: 120, marginBottom: 10 }} />
                            </Form.Item>

                        </div>


                    </div>

                    {catIsLoading && <p>Loading</p>}
                    {!catIsLoading &&
                        <Form.Item
                            name="KnowledgeBlogCategoryId"
                            label="التصنيف"
                            rules={[{ required: true, message: 'التصنيف مطلوب' }]}
                        >
                            <Select
                                ref={selectRef}
                                placeholder="اخنر التصنيف">
                                {optionResult.map((el) => (
                                    <Option key={el.id} value={el.id}>{el.label}</Option>

                                ))}

                            </Select>
                        </Form.Item>
                    }

                    <Form.Item
                        name="KnowledgeBlogTags"
                        label="الكلمات الدلالية"
                    >
                        <Select
                            mode="tags"
                            placeholder="أضف كلمة ثم اضغط enter">

                            <Option value={" "}> </Option>


                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="AllowComments"
                        valuePropName="checked"
                    >
                        <Checkbox>السماح بالتعليقات</Checkbox>
                    </Form.Item>


                </Form>

            </Modal>
        </div>
    )
}

export default AddMaterial;