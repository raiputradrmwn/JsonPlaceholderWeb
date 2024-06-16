import React from 'react';

interface UserProps {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

const User: React.FC<UserProps> = ({ data }) => {
  const profileImageUrl = `https://robohash.org/${data.username}.png?size=100x100`; // Generate image URL based on username

  return (
    <div className="p-6 border rounded-lg shadow-lg mb-6 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 text-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <img 
          src={profileImageUrl} 
          alt={`${data.name}'s profile`} 
          className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p className="text-gray-500">@{data.username}</p>
        </div>
      </div>
      <p><span className="font-semibold">Email:</span> {data.email}</p>
    </div>
  );
};

export default User;
