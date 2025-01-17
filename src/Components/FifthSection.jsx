import {
  faBinoculars,
  faBowlFood,
  faHotel,
  faPlane,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FifthSection = () => {
  return (
    <>
      <div className="m-10">
        <div className="flex justify-center">
          <p className="font-bold text-3xl">
            What Make Us <span className="text-orange-500">Special</span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6 ml-52">
          <div className="border-b border-gray-300 pb-4 w-64">
            <div className="flex space-x-8">
              <FontAwesomeIcon
                icon={faHotel}
                className="text-white bg-black p-2 rounded-full"
              />
              <p className="font-bold">Accommodation</p>
            </div>
            <p className="mt-2 ml-16 max-w-[180px] leading-tight font-light">
              Comfortable & convenient hotels cherry picked by our hotel
              management team
            </p>
          </div>
          <div className="border-b border-gray-300 pb-4 w-64">
            <div className="flex space-x-8">
              <FontAwesomeIcon
                icon={faBowlFood}
                className="text-white bg-black p-2 rounded-full"
              />
              <p className="font-bold">All Meals</p>
            </div>
            <p className="mt-2 ml-16 max-w-[180px] leading-tight font-light">
              Eat to your heart's content Breakfast. Lunch. Dinner.
            </p>
          </div>
          <div className="border-b border-gray-300 pb-4 w-64">
            <div className="flex space-x-8">
              <FontAwesomeIcon
                icon={faVanShuttle}
                className="text-white bg-black p-2 rounded-full"
              />
              <p className="font-bold">On-Tour Transport</p>
            </div>
            <p className="mt-2 ml-16 max-w-[180px] leading-tight font-light">
              Our itineraries include all rail, sea and road transport as part
              of the itinerary so you can enjoy tension free
            </p>
          </div>
          <div className="col-span-3 flex justify-center gap-6 -ml-36">
            <div className="border-b border-gray-300 pb-4 w-64">
              <div className="flex space-x-8">
                <FontAwesomeIcon
                  icon={faBinoculars}
                  className="text-white bg-black p-2 rounded-full"
                />
                <p className="font-bold">
                  Well Crafted Itinerary With Time Management
                </p>
              </div>
              <p className="mt-2 ml-16 max-w-[180px] leading-tight font-light">
                Our dedicated product & destination research team spends hours
                curating the best value for money itineraries
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4 w-64">
              <div className="flex space-x-8">
                <FontAwesomeIcon
                  icon={faPlane}
                  className="text-white bg-black p-2 rounded-full"
                />
                <p className="font-bold">To And Fro Airfare</p>
              </div>
              <p className="mt-2 ml-16 max-w-[180px] leading-tight font-light">
                Veena World tours are inclusive of airfare from many hubs within
                India unless you pick the joining-leaving option
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
