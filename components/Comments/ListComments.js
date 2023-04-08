import { useState } from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined, DeleteFilled } from '@ant-design/icons'
import { useSession } from 'next-auth/react';
import { Button } from 'antd'

const ListComments = ({ comments }) => {
    const { data: session, status } = useSession();
    const [deleting, setDeleting ] = useState();

    const handleDeleteComment = () => {
        console.log('delete');
    }
    return (
        <div>
            <List
                dataSource={comments}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar size={64} icon={<UserOutlined />} />}
                            title={item.fullName}
                            description={item.comment}
                        />

                      
                        <div>{new Date(item.creationtime).toLocaleString()}</div>
                    </List.Item>
                )}

            />

        </div>

    )

}
export default ListComments;