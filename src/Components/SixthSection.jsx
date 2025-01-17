import {
  faFacebook,
  faInstagram,
  faThreads,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SixthSection = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex justify-center space-x-32 p-10">
          <div className="space-y-2">
            <p>Call Us</p>
            <p className="max-w-56 leading-tight font-light">
              Request a quote, or just chat about your next vacation. We're
              always happy to help!
            </p>
            <p>+91 0987765543</p>
          </div>
          <div className="space-y-2">
            <p>Write To Us</p>
            <p className="max-w-56 leading-tight font-light">
              Be it an enquiry, feedback or a simple suggestion, write to us.
            </p>
            <p>dummymail@gmail.com</p>
          </div>
          <div className="space-y-2">
            <p>Contact Us</p>
            <p className="max-w-56 leading-tight font-light">
              Reviews, podcasts, blogs and more..
            </p>
            <div className="space-x-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white bg-black p-2 rounded-full"
              />
              <FontAwesomeIcon
                icon={faThreads}
                className="text-white bg-black p-2 rounded-full"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white bg-black p-2 rounded-full"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white bg-black p-2 rounded-full"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white bg-black p-2 rounded-full"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white bg-black p-2 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixthSection;
