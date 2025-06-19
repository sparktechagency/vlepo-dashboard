import { DatePicker } from 'antd';
import { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
import { useGetCreatorCountChartQuery } from '../../../redux/features/dashboardHome';
const UserChart = () => {
    const [year, setyear] = useState(new Date().getFullYear())
    const { data: userData } = useGetCreatorCountChartQuery(year)
    const userAllData = userData?.data


    const data = userAllData?.map((item: any) => ({
        month: item?.month,
        viewer: item?.viewsCount,
        creator: item?.creatorCount
    }))


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-2xl font-medium">Viewer and Creator Statistics </h1>
                <DatePicker
                    onChange={(value) => {
                        if (value) {
                            setyear(value.year());
                        }
                    }}
                    picker="year"
                    className="w-40 h-[40px]" />
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="viewer" fill="#EF4136" />
                    <Bar dataKey="creator" fill="#FBB040" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserChart;
