const LearningProgress = ({ courses }) => (
    <div className="mb-10">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Current Learning</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-5"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold text-lg">
                {course.name[0]}
              </div>
              <div className="ml-3">
                <p className="text-md font-medium text-gray-900 leading-tight">{course.name}</p>
                <p className="text-sm text-gray-500">Ongoing Course</p>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full mt-2">
              <div
                className="h-full bg-green-600 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">{course.progress}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default LearningProgress;
  