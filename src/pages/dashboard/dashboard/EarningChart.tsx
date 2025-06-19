import { DatePicker } from 'antd';
import {  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Legend, Bar } from 'recharts';
import { useGetUserChartQuery } from '../../../redux/features/dashboardHome';
import { useState } from 'react';

const EarningChart = () => {
    const [year, setyear] = useState(new Date().getFullYear())
    const { data: earning } = useGetUserChartQuery(year)
    const earningData = earning?.data

    const data = earningData?.map((item: any) => ({
        month: item?.month,
        ticketCount: item?.ticketCount,
        eventCreateCount: item?.eventCreateCount
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
                <h1 className="text-2xl font-medium">User Engagement</h1>
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
                    <Bar dataKey="ticketCount" fill="#EF4136" />
                    <Bar dataKey="eventCreateCount" fill="#FBB040" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningChart;
