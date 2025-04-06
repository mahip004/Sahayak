const CommunityActivity = ({ activity }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Community Contributions</h3>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
        {activity.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
  
  export default CommunityActivity;
  