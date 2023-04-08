import { useState, useRef, useMemo, useEffect } from 'react';
import { Modal, theme, Form, Input, Select, Upload, Button, DatePicker, Checkbox, Alert, message, Switch } from 'antd';
import { useQuery } from 'react-query';
import { getAllCategories, createMaterial } from "../../hooks/api/KnowledgeMaterials";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { useToken } = theme;
const { TextArea } = Input;

function filterCatData(data) {
    let newOption = [];
    if (data) {
        data.result.map(el => {
            newOption.push(
                {
                    id: el.id,
                    label: el.categoryName
                }
            )
        })
    }
    return newOption;
}

const AddBlog = ({ prefetchData, show, close, materialTextValue }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formErrors, setFormErrors] = useState();
    const [materialArea, setMaterialArea] = useState(materialTextValue || "");
    const [isVideoUrl, setIsVideoUrl] = useState(true);



    const { token } = useToken();
    const [addMaterialForm] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const selectRef = useRef();

    const { data: catData, isLoading: catIsLoading } = useQuery(['catergories'],
        () => getAllCategories());
    const optionResult = useMemo(() => filterCatData(catData), [catData]);

    const handleClose = () => {
        close();
        addMaterialForm.resetFields();
    };
    const handlePrefetch = () => prefetchData(true);
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const checkValidUrl = (val) => {
        const url = val.target.value;
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                console.log('valid url')
            } else {
                console.log('not valid')
            }
        }
    }

    const onCreate = async (values) => {
        setFormErrors("")
        setConfirmLoading(true)
        let data = new FormData();
        console.log(values)
        data.append('MaterialTitle', values.MaterialTitle)
        data.append('MaterialDescription', values.MaterialDescription)
        data.append('CoverImage', values.CoverImage[0].originFileObj)
        data.append('KnowledgeMaterialCategoryId', values.KnowledgeMaterialCategoryId)
        data.append('ReleaseYear', values.ReleaseYear);

        if(values.IsDraft == undefined) {
            data.append('IsDraft', false)
        } else {
            data.append('IsDraft', values.IsDraft)
        }

        if (values.VideoUrl) {
            data.append('VideoUrl', values.VideoUrl);
        }
        if (values.File) {
            data.append('File', values.File[0].originFileObj)
        }

        values.Words.map((el, i) => {
            data.append(`Words[${i}].tagName`, el)
        })

        const result = await createMaterial(data);
        console.log(result)
        if (result.success) {
            messageApi.open({
                type: 'success',
                content: 'تم اضافة المقال - تحت المراجعة',
                style: {
                    marginTop: '70px',
                },
            });
            // handlePrefetch()
            setOpen(false);
        } else {
            setFormErrors(result.error.message)
        }
        setConfirmLoading(false)

    }

    const onSwitchChange = (checked) => {
        setIsVideoUrl(checked)
    }

    useEffect(() => {
        setOpen(show)
    }, [show])

    useEffect(() => {
        if (materialTextValue) {
            setMaterialArea(materialTextValue)
        }
    }, [materialTextValue])

    return (
        <div>
            {contextHolder}
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
                    addMaterialForm
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
                    form={addMaterialForm}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                        modifier: 'public',
                        Content: materialArea
                    }}
                >

                    <Form.Item
                        name="CoverImage"
                        label="اضف الصورة"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: 'الصورة مطلوبة!' }]}
                    >
                        <Upload accept="image/png, image/jpeg" maxCount={1} name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>تحميل الصوره</Button>
                        </Upload>
                    </Form.Item>



                    <Form.Item
                        name="switchmaterial"
                        label="مصدر المادة المعرفية"
                        valuePropName="checked"

                    >
                        <Switch
                            checkedChildren="يوتيوب فيديو"
                            unCheckedChildren="رفع ملف"
                            defaultChecked onChange={onSwitchChange} />
                    </Form.Item>

                    {isVideoUrl &&
                        <Form.Item
                            name="VideoUrl"
                            rules={[{ required: true, message: 'رابط الفيديو مطلوب' },
                            { type: 'url', warningOnly: true },
                            {
                                message: 'ادخل رابط يوتيوب صحيح',
                                validator: (_, value) => {
                                    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                                    var match = value.match(regExp);
                                    if (match && match[2].length == 11) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject('invalid url');
                                    }

                                }
                            }]}
                        >
                            <Input onChange={checkValidUrl} placeholder="ادخل رابط الفيديو " />

                        </Form.Item>
                    }


                    {!isVideoUrl &&
                        <Form.Item
                            name="File"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true, message: 'الملف مطلوب' }]}
                        >
                            <Upload accept="*" maxCount={1} name="MaterialFile" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>تحميل الملف</Button>
                            </Upload>
                        </Form.Item>
                    }




                    <div className="row">
                        <div className="col-md-8">
                            <Form.Item
                                name="MaterialTitle"
                                label="العنوان"
                                rules={[{ required: true, message: 'العنوان مطلوب!' }]}
                            >
                                <Input showCount maxLength={100} placeholder="العنوان يوضع هنا لا يتجاوز 100 حرف" />
                            </Form.Item>

                        </div>

                        <div className="col-md-4">
                            <Form.Item
                                name="ReleaseYear"
                                label="التاريخ"
                                rules={[{ required: true, message: 'ادخل سنه الاصدار' }]}
                            >
                                <DatePicker showTime />

                            </Form.Item>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item
                                name="MaterialDescription"
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
                            name="KnowledgeMaterialCategoryId"
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
                        name="Words"
                        label="الكلمات الدلالية"
                    >
                        <Select
                            mode="tags"
                            placeholder="أضف كلمة ثم اضغط enter">

                            <Option value={" "}> </Option>


                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="IsDraft"
                        valuePropName="checked"
                    >
                        <Checkbox defaultChecked>حفظ كمسوده</Checkbox>
                    </Form.Item>


                </Form>

            </Modal>
        </div>
    )
}

export default AddBlog;