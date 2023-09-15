import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const AreaDashboard = ({data}) => {
 
    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: '#130F49' }} />
          <YAxis tick={{ fill: '#130F49' }} />
          <Tooltip />
          <Area type="monotone" dataKey="expenditure" stackId="1" stroke="#130F49" fill="#00000" />
          <Area type="monotone" dataKey="earning" stackId="1" stroke="#F99F24" fill="#130F49" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#130F49" fill="#68A2EE" />
        </AreaChart>
      </ResponsiveContainer>
    );
};

export default AreaDashboard;