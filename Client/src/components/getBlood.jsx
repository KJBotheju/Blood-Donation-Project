import React from "react";
import PropTypes from "prop-types";
import contactforblood from "../asset/contactforblood.jpg";
import donateBlood from "../asset/donateBloood.jpg";
import helpinblood from "../asset/helpinblood.jpg";
import heartbeat from "../asset/heartbeat.svg"; // Added import for the 'heartbeat' asset
import { motion } from "framer-motion";

// Define the InfoCard component with infotext, infonumber, and infoimg props
const InfoCard = ({ infotext, infonumber, infoimg }) => {
  return (
    <div className="h-[45vh] w-[25vw] my-0 p-0 relative flex items-center justify-center">
      <div
        className="absolute flex items-center justify-center lg:h-[13vmin] lg:w-[13vmin] md:h-[11vmin] md:w-[11vmin] h-[12vmin] w-[12vmin] md:-left-12 lg:-left-7 md:top-1/3 lg:top-28 top-1/3 -left-7 sm:text-xl md:text-2xl lg:text-4xl transform translate-x-1/4 rounded-full"
        style={{ border: "5px solid", textShadow: "0 0 2px black" }}
      >
        {infonumber}
      </div>
      <div
        className="md:h-[23vmax] md:w-[23vmax] h-[21vmax] w-[21vmax] absolute flex flex-col top-1/4 items-center justify-center rounded-full overflow-hidden shadow-lg bg-white text-red-600"
        style={{ top: "40%" }}
      >
        <div className="md:h-[15vmin] md:w-[15vmin] h-[6vmin] w-[6vmin] overflow-hidden rounded-full">
          <img src={infoimg} alt="" className="md:scale-95 scale-20" />
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for InfoCard component
InfoCard.propTypes = {
  infotext: PropTypes.string.isRequired,
  infonumber: PropTypes.number.isRequired,
  infoimg: PropTypes.string.isRequired,
};

// Define the GetBlood component
const GetBlood = () => {
  return (
    <div className="sm:mb-[50px] md:mb-[150px] lg:mb-[200px]">
      <h1 className="text-4xl font-bold pl-16 pt-10 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
        How to get Blood?
      </h1>
      <motion.div
        className="flex justify-center items-center px-10"
        initial={{ opacity: 0, position: "relative", top: "-50px" }}
        animate={{ opacity: 1, position: "relative", top: "0px" }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="h-fit w-full md:mb-18 lg:mb-24 mb-6 flex flex-col items-center justify-center"
          initial={{ opacity: 0, position: "relative", right: "-100px" }}
          animate={{ opacity: 1, position: "relative", right: "0px" }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-3">
            <div></div>
            <div>
              <InfoCard
                infotext="Donate blood and save lives, your contribution can make a difference."
                infonumber={1}
                infoimg={donateBlood} // Use the corrected asset name
              />
            </div>
            <div></div>
          </div>
          <div className="absolute top-[34vmax] md:top-[28vmax] lg:top-[30vmax]">
            <img
              src={heartbeat} // Use the 'heartbeat' asset
              alt=""
              className="scale-[0.6] lg:scale-[1.1]"
            />
          </div>
          <div className="grid grid-cols-3">
            <div>
              <InfoCard
                infotext="Help those in need by donating blood, a selfless act of kindness"
                infonumber={2}
                infoimg={helpinblood}
              />
            </div>
            <div>
              <img
                src={heartbeat} // Use the 'heartbeat' asset
                alt=""
                className="scale-x-.1 md:scale-x-110 lg:scale-x-130"
                style={{ opacity: "0" }}
              />
            </div>
            <div className="flex justify-end">
              <InfoCard
                infotext="Need blood? Connect with blood banks or donors to get the support you require"
                infonumber={3}
                infoimg={contactforblood} // Use the corrected asset name
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetBlood;
