import React from 'react';
import { IconUsers, IconMap, IconBuilding, IconImageInPicture, IconStar, IconTrendingUp, IconWorld, IconChartBar } from '@tabler/icons-react';

const kpis = [
  {
    icon: IconUsers,
    label: 'Total Users',
    value: '12,340',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: IconMap,
    label: 'Locations',
    value: '128',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: IconBuilding,
    label: 'Hotels',
    value: '54',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: IconImageInPicture,
    label: 'Posts',
    value: '2,340',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: IconStar,
    label: 'Reviews',
    value: '8,900',
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
];

const analytics = [
  {
    icon: IconTrendingUp,
    label: 'Monthly Active Users',
    value: '2,500',
    trend: '+23%',
    color: 'text-blue-600',
    bar: 'bg-blue-600',
    percent: '75%',
  },
  {
    icon: IconWorld,
    label: 'Locations Added',
    value: '25',
    trend: '+8%',
    color: 'text-green-600',
    bar: 'bg-green-600',
    percent: '60%',
  },
  {
    icon: IconChartBar,
    label: 'Reviews & Ratings',
    value: '1,200',
    trend: '+15%',
    color: 'text-purple-600',
    bar: 'bg-purple-600',
    percent: '90%',
  },
];

const recentActivity = [
  { type: 'User', text: 'New user registered: Alex Johnson', time: '2 min ago' },
  { type: 'Post', text: 'New post: "Trekking in Annapurna"', time: '10 min ago' },
  { type: 'Review', text: 'New review on Hotel Pagoda', time: '20 min ago' },
  { type: 'Location', text: 'New location added: Peace Pagoda', time: '1 hr ago' },
  { type: 'Hotel', text: 'Hotel Waterfall status updated', time: '2 hr ago' },
];

const AdminScreen = () => {
  return (
    <div className="p-xl bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-xl">Admin Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-lg mb-2xl">
        {kpis.map((kpi, idx) => (
          <div key={idx} className={`rounded-lg shadow-sm p-lg flex flex-col items-center ${kpi.bg}`}>
            <kpi.icon size={36} className={`mb-md ${kpi.color}`} />
            <div className="text-2xl font-bold text-gray-900 mb-xs">{kpi.value}</div>
            <div className="text-gray-600 text-sm">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl">
        {analytics.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-lg">
            <div className="flex items-center justify-between mb-md">
              <div className="flex items-center gap-sm">
                <item.icon size={28} className={item.color} />
                <span className="text-lg font-semibold text-gray-900">{item.label}</span>
              </div>
              <span className={`text-sm font-bold ${item.color}`}>{item.trend}</span>
            </div>
            <div className={`text-2xl font-bold ${item.color} mb-xs`}>{item.value}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`${item.bar} h-2 rounded-full`} style={{ width: item.percent }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-md">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          {recentActivity.map((activity, idx) => (
            <li key={idx} className="py-md flex items-center gap-md">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-sm"></span>
              <span className="text-gray-800 flex-1">{activity.text}</span>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminScreen;