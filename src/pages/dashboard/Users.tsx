import { Table, Input } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { useGetUsersQuery, useUpdateUserStatusMutation } from '../../redux/features/users';
import { imageUrl } from '../../redux/base/baseApi';

const Users = () => {
    const { data: users , refetch } = useGetUsersQuery(undefined)
    const [updateUserStatus] = useUpdateUserStatusMutation()

    const data = users?.data?.map((item: any, index: number) => ({
        key: index + 1,
        id: item?._id,
        name: item?.name,
        email: item?.email,
        phone: item?.phone,
        address: item?.address,
        photo: item?.photo?.startsWith("https") ? item?.photo : `${imageUrl}${item?.photo}`,
        status: item?.status
    }));

    const handleStatus = async (id: string) => {
        await updateUserStatus(id).then(() => refetch() )
    }

    const columns = [
        {
            title: 'S.No.',
            dataIndex: 'id',
            key: 'id',
            render: (_: any, __: any, index: number) => index + 1,
        },

        {
            title: 'User ',
            dataIndex: 'photo',
            key: 'photo',
            render: (_: any, record: any) => (
                <div className='flex items-center gap-1'>
                    <img src={record.photo} alt="User" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    <p> {record.name}</p>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: ' Status',
            dataIndex: 'status',
            key: 'status',
            render: (_: any, record: any) => (
                <button
                    style={{
                        fontWeight: 500,
                        backgroundColor: "#FFF7EC",
                        padding: "4px 16px",
                        borderRadius: "10px"
                    }}
                    className={record?.status === 'ACTIVE' ? 'text-[#00B69B]' : 'text-red-500'}
                    onClick={() => handleStatus(record.id)}
                >
                    {record?.status}
                </button>
            ),
        },
    ];
    return (
        <div className="">
            <div className="flex justify-between items-center pb-5">

                <h1 className="text-3xl text-primaryText font-semibold ">Users</h1>


                <Input
                    style={{
                        maxWidth: 320,
                        height: 45,
                    }}
                    placeholder="Search"
                    prefix={<CiSearch size={24} color='gray' />}
                />


            </div>
            <Table columns={columns} dataSource={data} rowClassName="hover:bg-gray-100" />

        </div>
    );
};

export default Users;
