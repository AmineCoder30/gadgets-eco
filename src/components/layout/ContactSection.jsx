import React from "react";
import inbox from "../../assets/images/inbox.svg";
function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center min-h-screen p-4">
      <div className="w-full md:w-1/2 p-4">
        <img src={inbox} alt="Map of Quezon City" className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-dark-gray mb-4">
          Send us a message
        </h2>
        <p className="mb-4 text-gray-500">
          Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl
          nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida
          quis blandit turpis cursus in.
        </p>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Your Email *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message *"
            className="w-full p-2 border border-gray-300 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-200  hover:text-white hover:bg-primary-100  rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
