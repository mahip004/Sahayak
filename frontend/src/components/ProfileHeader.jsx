import { FiUser, FiCalendar, FiAward } from 'react-icons/fi';

const ProfileHeader = ({ username, joinedDate, role, avatar }) => (
  <div className="flex items-center gap-6 mb-6">
    <img
      src={avatar}
      alt="Avatar"
      className="w-24 h-24 rounded-full border-4 border-gray-300"
    />
    <div>
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiUser className="text-gray-600" />
        @{username}
      </h2>
      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
        <FiCalendar className="text-gray-400" />
        Joined {joinedDate}
      </p>
      <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
        <FiAward className="text-green-600" />
        {role}
      </span>
    </div>
  </div>
);

export default ProfileHeader;
