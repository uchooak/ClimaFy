import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { weeklyActivity } from '../utils/climafyData';

export default function WeeklyReportsChart() {
  return (
    <div className="h-[260px] w-full">
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={weeklyActivity} margin={{ top: 8, right: 8, bottom: 0, left: -24 }}>
          <CartesianGrid stroke="#e3e8ec" strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine={false} dataKey="day" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: '#f1f5f9' }} />
          <Bar dataKey="relatos" fill="#dce3e8" name="Relatos registrados" radius={[6, 6, 0, 0]} />
          <Bar dataKey="resolvidos" fill="#1a9651" name="Resolvidos" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
