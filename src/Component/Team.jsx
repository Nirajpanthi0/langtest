import React from 'react';
import profile from "../assets/images/profile.png";

const teamMembers = [
  
  {
    name: 'Free Coder',
    role: 'Project Manager',
    image: profile,
  },
  {
    name: 'Free Coder',
    role: 'Project Manager',
    image: profile,
  },
  {
    name: 'Free Coder',
    role: 'Project Manager',
    image: profile,
  },
  {
    name: 'Free Coder',
    role: 'Project Manager',
    image: profile,
  },
];

const TeamMembersSlider = () => {
  return (
    <section className="bg-white py-16 md:mt-28 ">
      <h2 className="text-4xl font-bold text-center text-black mb-12">Our Team</h2>

      <div className="flex justify-center flex-wrap gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center max-w-sm p-6  transition-transform transform hover:scale-105 duration-300  border-4 border-black rounded-2xl "
          >
            <img
  src={member.image}
  alt={member.name}
  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-blue-500 filter grayscale"
/>

            <h3 className="text-2xl font-semibold text-black mb-2">{member.name}</h3>
            <p className="text-gray-600 text-lg">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembersSlider;
