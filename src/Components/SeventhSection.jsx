import React from "react";

const SeventhSection = () => {
  return (
    <>
      <div className="bg-[#001A26]">
        <div className="flex pt-10 space-x-32 px-44">
          <div className="">
            <p className="text-white text-2xl">LOGO LOGO</p>
            <p className="text-white font-semibold text-md mt-10">
              Your Gateway To The World
            </p>
            <p className="text-gray-400 max-w-72 font-thin text-sm">
              Request a quote, or just chat about your next vacation. We're
              always happy to help!
            </p>
          </div>
          <div>
            <p className="text-white font-bold">Company</p>
            <p className="text-gray-400 font-thin pt-4">About Us</p>
            <p className="text-gray-400 font-thin">Our Team</p>
            <p className="text-gray-400 font-thin">CSR Policy</p>
            <p className="text-gray-400 font-thin">How Many Countries?</p>
          </div>
          <div>
            <p className="text-white font-bold">Support</p>
            <p className="text-gray-400 font-thin pt-4">Contact Us</p>
            <p className="text-gray-400 font-thin">Leave your Feedback</p>
            <p className="text-gray-400 font-thin">How to book</p>
            <p className="text-gray-400 font-thin">FAQ</p>
          </div>
          <div>
            <p className="text-white font-bold">Resources</p>
            <p className="text-gray-400 font-thin pt-4">Blog</p>
            <p className="text-gray-400 font-thin">News</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-thin">Full Name</p>
            <input className="rounded px-8" type="text" name="" id="" />
            <p className="text-gray-400 text-xs font-thin">Phone Number</p>
            <input className="rounded px-8" type="text" name="" id="" />
            <p className="text-gray-400 text-xs font-thin">Email</p>
            <input className="rounded px-8" type="text" name="" id="" />
            <p className="text-gray-400 text-xs font-thin">
              Write Your Comment
            </p>
            <input className="rounded px-8 py-3" type="text" name="" id="" />
            <button className="bg-orange-500 px-[85px] rounded mt-2 text-white">
              View More
            </button>
          </div>
        </div>
        <div className="mt-8 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[85%] border-t border-gray-600"></div>
          <div className="flex justify-between px-44 py-5">
            <div>
              <p className="text-white font-thin text-xs">
                Company Copyright @ 2024 Snowfinch
              </p>
            </div>
            <div className="flex space-x-4">
              <p className="text-white font-thin text-xs">Terms & Conditions</p>
              <p className="text-white font-thin text-xs">
                Privacy & Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhSection;