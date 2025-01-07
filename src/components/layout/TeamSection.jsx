// File: src/components/TeamSection.js

import React from "react";
import team from "../../assets/images/team.webp";
const TeamSection = () => {
  // Sample team member data
  const teamMembers = [
    {
      id: 1,
      name: "Amber Murphy",
      role: "Founder & Director",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: "https://via.placeholder.com/150", // Replace with actual profile images
    },
    {
      id: 2,
      name: "Aaron Foster",
      role: "Marketing & Partnerships",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Beatrice Carpenter",
      role: "Finance & Legal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Terry Banks",
      role: "Support & Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className=" -mt-40 mb-24 px-5  ">
      <div className="container mx-auto rounded-2xl overflow-hidden">
        {/* Header Image */}
        <div className="">
          <img
            src={team} // Replace with actual team image
            alt="Team"
            className="w-full "
          />
        </div>

        {/* Team Member Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 hover:bg-primary-100 group cursor-pointer   p-6"
            >
              <h3 className="font-semibold  text-gray-900 group-hover:text-white ">
                {member.name} <br />
              </h3>
              <p className=" text-sm my-4  text-gray-900 group-hover:text-white">
                {member.role}
              </p>
              <p className="text-gray-500 group-hover:text-gray-200 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
