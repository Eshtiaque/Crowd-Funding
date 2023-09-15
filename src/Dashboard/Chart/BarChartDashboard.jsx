import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartDashboard = ({ data }) => {
  return (
    <ResponsiveContainer className="text-[#130F49] mb-2" width="100%" height="100%">
      <BarChart width={500} height={300} data={data} tick={{ fill: 'text-[#130F49]' }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fill: '#130F49' }} />
        <YAxis tick={{ fill: '#130F49' }}/>
        <Tooltip />
        <Bar dataKey="expenditure" fill="#F99F24" name="Expenditure" />
        <Bar dataKey="earning" fill="#68A2EE" name="Earnings" />
      </BarChart>
      </ResponsiveContainer>
  );
};

export default BarChartDashboard;
