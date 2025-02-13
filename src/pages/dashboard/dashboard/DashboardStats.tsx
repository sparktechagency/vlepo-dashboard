import { BsCurrencyDollar } from 'react-icons/bs';

import { MdOutlineVerifiedUser } from 'react-icons/md';
import { PiUsersThree } from 'react-icons/pi'; 
import { FaArrowUp, FaChartLine } from "react-icons/fa6";


const  DashboardStats = () => {
    const data = [
        {
            name: 'Total Viewer',
            count: '20.10K',
            icon: <PiUsersThree color="#EF4136" size={32} />,
            textColor: '#FBB040', 
            profit: "4%"
        },
        {
            name: 'Total Profit',
            count: '920',
            icon: <BsCurrencyDollar color="#EF4136" size={32} />,
            bgColor: '#FDF6EC', 
            profit: "6%"
        },
        {
            name: 'Total Creator ',
            count: '150.10K',
            icon: <MdOutlineVerifiedUser color="#EF4136" size={32} />,
            bgColor: '#FDF6EC', 
            profit: "3%" 
        },
        {
            name: 'Growth Rate',
            count: '150.10K',
            icon: <FaChartLine  color="#EF4136" size={32} />,
            bgColor: '#FDF6EC', 
            profit: "2%"
        },

    ];

    return (
        <div>
            <div className="grid grid-cols-4 gap-3 items-center">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-md p-10  shadow-sm flex items-center gap-6">
                        <div className={`bg-[#FDF6EC] w-[64px] h-[64px] rounded-full flex items-center justify-center`}>
                            {item?.icon}
                        </div>
                        <div className=" flex flex-col gap-2 ">
                            <p className="text-[20px] text-[#545454] font-medium">
                                {item.name}
                            </p>
                           
                                <p
                                   
                                    className="text-3xl font-bold text-primaryText"
                                >
                                   ${item.count}
                                </p> 

                                <div className='flex gap-2 items-center justify-end pt-2'> 
                                <div className={`bg-[#e0f9f2] w-[18px] h-[18px] rounded-full flex items-center justify-center`}>
                                <FaArrowUp color="#00A389" size={8} />
                        </div> 
                        <p className='text-[#A3A3A3] text-[12px]'>4% (30 days)</p>
                                </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;
