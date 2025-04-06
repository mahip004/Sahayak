import { FaUsers, FaFileAlt, FaHeart, FaComments } from 'react-icons/fa';

const icons = [FaUsers, FaFileAlt, FaHeart, FaComments]; // Example icons

const UserStats = ({ stats }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
    {stats.map((item, i) => {
      const Icon = icons[i % icons.length]; // Cycle through icons
      return (
        <div
          key={i}
          className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300"
        >
          <div className="flex justify-center items-center mb-3">
            <Icon className="text-indigo-500 text-2xl" />
          </div>
          <h4 className="text-2xl font-extrabold text-gray-800">{item.value}</h4>
          <p className="text-sm text-gray-500 mt-1">{item.label}</p>
        </div>
      );
    })}
  </div>
);

export default UserStats;
