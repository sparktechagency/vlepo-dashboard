import { Select } from 'antd';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
const { Option } = Select;
const UserChart = () => {
    interface UserData {
        month: string;
        viewer: number;
        creator: number; // Example for the secondary bar
    }

    const data: UserData[] = [
        { month: 'January', viewer: 120, creator: 30 },
        { month: 'February', viewer: 120, creator: 30 },
        { month: 'March', viewer: 200, creator: 45 },
        { month: 'April', viewer: 150, creator: 40 },
        { month: 'May', viewer: 220, creator: 50 },
        { month: 'June', viewer: 180, creator: 35 },
        { month: 'July', viewer: 300, creator: 70 },
        { month: 'August', viewer: 250, creator: 60 },
        { month: 'September', viewer: 270, creator: 80 },
        { month: 'October', viewer: 320, creator: 90 },
        { month: 'November', viewer: 280, creator: 75 },
        { month: 'December', viewer: 350, creator: 100 },
    ];

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
                <Select defaultValue="2024" className="w-32 h-[40px]">
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
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
