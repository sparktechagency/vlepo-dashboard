import { Table } from 'antd';
import EventChart from './EventChart';
import EventStates from './EventStates';


const EventManagements = () => {


    const data = [
        {
            key: '00001',
            name: 'Beatrice Pedrali',
            eventName: 'Virtual Rave',
            category: 'Creator',
            date: '08-01-2025',
            invoice: '62738962985984',
            amount: '139$',
            status: 'Paid',
        },
        {
            key: '00002',
            name: 'Beatrice Pedrali',
            eventName: 'Virtual Rave',
            category: 'Viewer',
            date: '08-01-2025',
            invoice: '62738962985984',
            amount: '18$',
            status: 'Pay now',
        },
        {
            key: '00003',
            name: 'Beatrice Pedrali',
            eventName: 'Virtual Rave',
            category: 'Viewer',
            date: '08-01-2025',
            invoice: '62738962985984',
            amount: '18$',
            status: 'Pay now',
        },
        {
            key: '00004',
            name: 'Beatrice Pedrali',
            eventName: 'Virtual Rave',
            category: 'Creator',
            date: '08-01-2025',
            invoice: '62738962985984',
            amount: '179$',
            status: 'Paid',
        },
        {
            key: '00005',
            name: 'Beatrice Pedrali',
            eventName: 'Virtual Rave',
            category: 'Viewer',
            date: '08-01-2025',
            invoice: '62738962985984',
            amount: '18$',
            status: 'Paid',
        },
    ];

    // Column definitions
    const columns = [
        {
            title: 'Event Name',
            dataIndex: 'eventName',
            key: 'eventName',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Invoice',
            dataIndex: 'invoice',
            key: 'invoice',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
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
 <div  className=' col-span-9 bg-white'> 
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
