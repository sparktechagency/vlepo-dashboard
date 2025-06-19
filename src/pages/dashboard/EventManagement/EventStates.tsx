
import { BsTicket } from 'react-icons/bs';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { RiCalendarScheduleLine } from 'react-icons/ri';

const EventStates = ({ eventStatus }: { eventStatus: any }) => {
    const data = [
        {
            name: 'Total Event',
            count: eventStatus?.totalEvents,
            icon: <IoCalendarClearOutline color="#EF4136" size={28} />,
            textColor: '#FBB040',
            profit: "4%"
        },
        {
            name: 'Upcoming Event',
            count:  eventStatus?.totalUpcomingEvents,
            icon: <RiCalendarScheduleLine color="#EF4136" size={28} />,
            bgColor: '#FDF6EC',
            profit: "6%"
        },
        {
            name: ' Total Ticket Sold',
            count: eventStatus?.totalTicketsSold,
            icon: <BsTicket color="#EF4136" size={28} />,
            bgColor: '#FDF6EC',
            profit: "3%"
        },

    ];

    return (
        <div>
            <div className="flex flex-col gap-2 items-center justify-center w-full">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-md p-6  w-full  shadow-sm ">
                        <div className='flex items-center gap-3 '>

                            <div className={`bg-[#FDF6EC] w-[54px] h-[54px] rounded-full flex items-center justify-center`}>
                                {item?.icon}
                            </div>
                            <div className=" flex flex-col gap-1 ">
                                <p className="text-[20px] text-[#545454] font-medium">
                                    {item.name}
                                </p>

                                <p

                                    className="text-2xl font-bold text-primaryText"
                                >
                                    {item.count}
                                </p>



                            </div>
                        </div>
         
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventStates;