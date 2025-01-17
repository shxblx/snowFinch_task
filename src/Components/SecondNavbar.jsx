import React from "react";

const SecondNavbar = () => {
  return (
    <>
      <div className="bg-[#001A26] py-5 text-white flex space-x-14 justify-center">
        <p className="">India ˅</p>
        <p>World ˅</p>
        <p>Specialty Tours ˅</p>
        <p>Customized Holidays ˅</p>
        <p>Corporate Travel</p>
        <p>Inbound</p>
        <p>Forex ˅</p>
        <p>Gift A Tour</p>
        <p>Contact Us</p>
      </div>
      <div className="relative h-60 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-950/90 z-10"></div>

        {/* Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/2a6b/bc62/add105aa6a00246603a7d481009e2c57?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7COVCKgPxzrPcf0EisCE0akR7Yl9Si9vwh6tBaNs2J7LEC40S2HfNnCOiY3c6vHgyX7D8ZO-h6sEBCcJ4LnFnDPFbBUsdVHMtlDhDwHPGpTgje5MwPCDKqJBQvsMxOnp5945xBIXrtHs49l9ZD3w6oG-PvuFy7R609Cp9CM4Zy0Bbfvw1iM9KLhDIigJjVO9-Yw75~xL9AjT1ffmHqj~2jUF-aqbzg1MqgWTszhvsh9Xzx2ZqFGZcpyNVmRzPsgConm2SrDsUAJ4UFuZl9DjoX35Eed8h8m1n-9jpLfX3oWfOBBPtgNCikPXEtbTqnj~MLt1gynNSJh1u9VtjbaxQ__"
          alt="Navigation Banner"
          className="w-full h-[700px] object-cover object-center -mt-[400px]"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white">
          <p className="text-5xl font-thin mt-4">YOUR GATEWAY TO</p>
          <h1 className="text-5xl font-bold">THE WORLD</h1>
        </div>
      </div>
    </>
  );
};

export default SecondNavbar;
