import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactItems = [
  {
    id: 1,
    icon: <FaMapMarkerAlt className="text-primary-200 text-3xl" />,
    title: "Physical Address",
    lines: ["304 North Cardinal St.", "Dorchester Center, MA 02124"],
  },
  {
    id: 2,
    icon: <FaPhoneAlt className="text-primary-200 text-3xl" />,
    title: "Phone Numbers",
    lines: ["1-555-123-4567", "1-800-123-4567"],
  },
  {
    id: 3,
    icon: <FaEnvelope className="text-primary-200 text-3xl" />,
    title: "Email Address",
    lines: ["info@company.com", "contact@company.com"],
  },
];

function ContactInfo() {
  return (
    <div className="flex container mx-auto rounded-xl -mt-20 flex-col shadow-2xl md:flex-row shadow-[#cfcfcf57] justify-around items-start md:items-center px-6 py-14 bg-white">
      {contactItems.map((item) => (
        <div key={item.id} className="flex gap-5  mb-6 md:mb-0">
          <span className="mr-4">{item.icon}</span>
          <div>
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="text-gray-500 font-light mt-5">
              {item.lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
