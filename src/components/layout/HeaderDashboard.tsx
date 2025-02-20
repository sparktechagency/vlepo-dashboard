import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { useGetProfileQuery } from '../../redux/features/auth/authApi';
import { imageUrl } from '../../redux/base/baseApi';

const { Header } = Layout;

const HeaderDashboard = () => { 
    const {data:profile} = useGetProfileQuery(undefined); 
  
    return (
        <Header
            style={{
                height: 80,
                background: 'white',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <div className="flex items-center justify-end gap-5 h-full">
          
                <div>
                    {/* profile */}

                    <Link
                        to={'/profile'}
                        style={{
                            height: '42px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            margin: '10px',
                        }}
                    >
                        <img
                            src={profile?.photo?.startsWith("https") ? profile?.photo : `${imageUrl}${profile?.photo}`}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                borderColor: '#EF4136',
                                borderWidth: 2,
                            }}
                            alt=""
                        />
                        <h2
                            style={{
                                color: 'black',
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                        >
                           {profile?.name}
                        </h2>
                    </Link>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
