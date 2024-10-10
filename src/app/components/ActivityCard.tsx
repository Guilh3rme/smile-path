import React from "react";

interface ActivityCardProps {
  title: string;
  time: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, time }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
      <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
      <h5 className="text-lg font-bold">{title}</h5>
      <p className="text-sm text-gray-600">{time}</p>
    </div>
  );
};

export default ActivityCard;
