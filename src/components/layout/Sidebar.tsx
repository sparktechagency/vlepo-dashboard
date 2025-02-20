import { ConfigProvider, Menu } from 'antd';
import  {  useState } from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import logo from "../../assets/logo.svg";
import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineSafety } from 'react-icons/ai';
import { BsPatchQuestion } from 'react-icons/bs';


const Sidebar = () => {
    const [selectedKey, setSelectedKey] = useState<string>("/");
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();


    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }

    const menuItems = [
        {
            key: "/",
            icon: <LuLayoutDashboard size={24} />,
            label: <Link to="/" className='' >Analytics</Link>
        },
        {
            key: "/earnings",
            icon: <MdOutlineCategory size={24} />,
            label: <Link to="/events">Event Managements </Link>
        },
    
        {
            key: "/users",
            icon: <HiUserGroup size={24} />,
            label: <Link to="/users">Users</Link>
        },
        {
            key: "/faqs",
            icon: <BsPatchQuestion size={24} />,
            label: <Link to="/faqs">FAQ</Link>
        },
        { 
            key: "/terms",  
            icon: <AiOutlineSafety size={24} />,
            label: <Link to="/terms" className="text-white hover:text-white">Terms And Condition</Link>
        },
   
        {
            key: "subMenuSetting",
            icon: <IoSettingsOutline size={24} />,
            label:<Link to="/profile" className="text-white hover:text-white">Settings</Link>,
          
        },
        {
            key: "/logout",
            icon: <IoIosLogOut size={24} />,
            label: <p onClick={handleLogout}>Logout</p>
        },
    ];

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    return (
        <div className='mt-5'>
            <Link to={"/"} className=' '>
          

            <img src={logo} alt="" className=' h-[73px] mx-6 border-b border-white  mb-8 ' />
            </Link> 

            <ConfigProvider
            theme={{
                token: {
                   
                    colorText: '#fffff', 
                },
                components: {
                    Menu: {
                      
                        itemBorderRadius: '0px'as any,
                        itemHeight: 60, 
                    },
                },
            }}
        >
<Menu
    mode="inline"
    selectedKeys={[selectedKey]} // Wrap it in an array
    openKeys={openKeys}
    onOpenChange={handleOpenChange}
    onSelect={({ key }) => setSelectedKey(key)} // Update selected key when an item is selected
    style={{ borderRightColor: "transparent", background: "transparent", color: "white" }}
    items={menuItems}
/>

            </ConfigProvider>
        </div>
    )
}

export default Sidebar;