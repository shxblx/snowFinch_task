import React from "react";

const SecondSection = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-4/5 max-w-7xl group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent rounded-lg z-10" />
          <img
            src="https://s3-alpha-sig.figma.com/img/0110/44f7/e212837a282293ec049a3c83b00ee9ad?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hu8sbLO-qMPammg-n-YkArkdbb9pAxCcFX4rn3NHgYaU2MS4apZJH3YmSAozrgThZRk5~N48IL9Elc1e2bI5eY7~BFkD81Y52kzt9rfIeDq0xGupFgcH~o6z9P5W6FgQHpSnoJzkX39g6Lvd~U2bDsOLhh38-YiQbQprIfUJHEykmDV7AVjKrKzPW9XYFz-NLqHr~isMvi-Hfl6yQkAJALLAW2f2ry6LfVHQK~hBcuNaGb4aEnJWiRTeQHfMGyTV6dpiIgkZ1dQkdUCi~OqC3QWZSTtRUKMNRBLafJgH0VyCuoZE8fsQm-1BQ0kmTujqBcn2H-XFwX1oG7RyWkT5zQ__"
            alt="Travel Destination"
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-12 z-20 transform transition-transform duration-300 group-hover:translate-x-4">
            <div className="flex gap-4">
              <div className="w-1 h-32 bg-orange-500 self-center"></div>
              <div className="space-y-2">
                <p className="text-white text-xs">INTERNATIONAL TRIP</p>
                <p className="text-white text-3xl font-normal">BEST OF</p>
                <p className="text-orange-500 text-3xl font-bold">
                  SOUTH EAST ASIA
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-200 text-sm">
                Thailand . Malaysia . Indonesia . Vietnam . Cambodia
              </p>
              <div className="">
                <p className="text-sm text-white">
                  Starting from{" "}
                  <span className="text-orange-500 text-lg font-semibold">
                    ₹ 63,000
                  </span>
                </p>
              </div>
              <button className="mt-1 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
