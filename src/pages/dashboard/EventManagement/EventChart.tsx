
import { DatePicker } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const EventChart = ({setyear , eventStatus}: {setyear: any , eventStatus: any}) => {

    const data = eventStatus?.monthlyStats?.map((item: any) => ({
        name: item?.month,
        earnings: item?.totalEventAmount
    }))

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}
            className='p-4'
        >
            <div className=" flex items-center justify-between">
                <h1 className="text-2xl font-medium">Event Statistics</h1>
                <DatePicker
                    onChange={(value) => {
                        if (value) {
                            setyear(value.year());
                        }
                    }}
                    picker="year"
                    className="w-40 h-[40px]" />
            </div>
            <ResponsiveContainer width="100%" height={290}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[5000, 25000]} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="earnings"
                        stroke="#EF4136"
                        strokeWidth={2}
                        dot={{ fill: '#FBB040', stroke: '#FBB040', strokeWidth: 2, r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EventChart;