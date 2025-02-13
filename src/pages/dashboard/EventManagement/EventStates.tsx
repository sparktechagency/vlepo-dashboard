    
    import { BsCurrencyDollar, BsTicket } from 'react-icons/bs';

    import { MdOutlineVerifiedUser } from 'react-icons/md';
    import { PiUsersThree } from 'react-icons/pi'; 
    import { FaArrowUp } from "react-icons/fa6"; 
import { IoCalendarClearOutline } from 'react-icons/io5';
import { RiCalendarScheduleLine } from 'react-icons/ri';
    const data = [
        {
            name: 'Total Event',
            count: '280',
            icon: <IoCalendarClearOutline color="#EF4136" size={28} />,
            textColor: '#FBB040', 
            profit: "4%"
        },
        {
            name: 'Upcoming Event',
            count: '920',
            icon: <RiCalendarScheduleLine color="#EF4136" size={28} />,
            bgColor: '#FDF6EC', 
            profit: "6%"
        },
        {
            name: ' Total Ticket Sold',
            count: '1.5K',
            icon: <BsTicket color="#EF4136" size={28} />,
            bgColor: '#FDF6EC', 
            profit: "3%" 
        },

    ];


const EventStates = () => {
    return (
          <div>
                   <div className="flex flex-col gap-2 items-center w-full">
                       {data.map((item, index) => (
                           <div key={index} className="bg-white rounded-md p-4  w-full  shadow-sm "> 
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
                                          ${item.count}
                                       </p> 
       
                             
                                  
                               </div>
                           </div> 
                           <div className='flex gap-2 items-center justify-end pt-1'> 
                                       <div className={`bg-[#e0f9f2] w-[18px] h-[18px] rounded-full flex items-center justify-center`}>
                                       <FaArrowUp color="#00A389" size={8} />
                               </div> 
                               <p className='text-[#A3A3A3] text-[12px]'>4% (30 days)</p>
                                       </div>
                           </div>
                       ))}
                   </div>
               </div>
    );
};

export default EventStates;