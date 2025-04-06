const Achievements = ({ badges }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Achievements</h3>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${badge.style}`}>
            {badge.name}
          </span>
        ))}
      </div>
    </div>
  );
  
  export default Achievements;
  