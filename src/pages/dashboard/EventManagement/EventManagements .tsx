import { Table } from 'antd';
import EventChart from './EventChart';
import EventStates from './EventStates';
import { useGetAllEventsQuery } from '../../../redux/event';
import moment from 'moment';


const EventManagements = () => {
            const {data:events} = useGetAllEventsQuery(undefined) 
                console.log(events?.data); 

                const data = events?.data?.map((item: any, index: number) => ({
                    id: item?._id, 
                    eventName: item?.eventName, 
                    soldTicket : item?.soldTicket , 
                    date: moment(item?.date).format('YYYY-MM-DD'),  
                    status: item?.status , 
                    totalSale: item?.totalSale , 
                    totalSeat: item?.totalSeat , 
                    views: item?.views
                }))


    // Column definitions
    const columns = [
        {
            title: 'Event Name',
            dataIndex: 'eventName',
            key: 'eventName',
        },
        {
            title: 'Sold Ticket',
            dataIndex: 'soldTicket',
            key: 'soldTicket',
        },
        {
            title: 'Total Sale',
            dataIndex: 'totalSale',
            key: 'totalSale',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Total Seat',
            dataIndex: 'totalSeat',
            key: 'totalSeat',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <span
                    className={`px-4 py-1 rounded  bg-[#FFF7EC] ${status === 'Paid'
                        ? ' text-[#00B69B]'
                        : status === 'Pay now'
                            ? ' text-[#EF3826]'
                            : ''
                        }`}
                >
                    {status}
                </span>
            ),
        },
    ];
    return (
        <div className="">

            <div className=' grid grid-cols-12 gap-8'>
                <div className=' col-span-9 bg-white'>
                    <EventChart />
                </div>

                <div className=' col-span-3'>
                    <EventStates />
                </div>

            </div>

            <div className='mt-4'>


                <Table columns={columns} dataSource={data} rowClassName="hover:bg-gray-100" />
            </div>


        </div>
    );
};

export default EventManagements;
