import { useState, useRef } from 'react';
import { Form, Input, Button, message } from 'antd';
const { TextArea } = Input;

import { AddCommentById } from '../../hooks/api/BlogApi';

const AddComment = ({ blogID, prefetchData }) => {
    const [loading, setLoading] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();
    const formRef = useRef();

    const submitForm = async (values) => {
        setLoading(true)
        values.knowledgeBlogId = blogID;

        const result = await AddCommentById(values);
        console.log(result);
        if (result.success) {
            messageApi.open({
                type: 'success',
                content: 'تم اضافة التعليق   ',
                style: {
                    marginTop: '70px',
                },
            });

            formRef.current?.resetFields();
            prefetchData(true)
          

        } else {
            messageApi.open({
                type: 'error',
                content: 'خطأ!.. يرجى المحاولة مره اخرى',
                style: {
                    marginTop: '70px',
                },
            });
        }
        setLoading(false)

    }
    const FailedSubmit = (errorInfo) => {
        console.log(errorInfo)

    }

    return (
        <>
            {contextHolder}
            <Form
                ref={formRef}
                onFinish={submitForm}
                onFinishFailed={FailedSubmit}
                style={{ marginBottom: '30px' }}
            >
                <Form.Item
                    name="comment"
                    rules={[
                        {
                            required: true,
                            message: 'نص التعليق مطلوب'
                        }
                    ]}
                >
                    <TextArea rows={6} />
                </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit" loading={loading}>
                        ارسل التعليق
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}

export default AddComment;

