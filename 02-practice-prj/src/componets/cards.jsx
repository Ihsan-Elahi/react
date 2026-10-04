import React from "react";
import { Bookmark, MapPin, Clock3 } from "lucide-react";

const Cards = ({ job }) => {
  return (
    <div
      className="
        group
        w-full
        h-[345px]
        rounded-[30px]
        bg-white
        border border-gray-100
        px-[30px]
        py-[30px]
        flex flex-col
        justify-between
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* TOP */}
      <div>
        <div className="flex items-start justify-between">
          {/* Logo */}
          <div
            className="
              w-[48px] h-[48px]
              rounded-full
              border border-gray-200
              bg-white
              flex items-center justify-center
              overflow-hidden
            "
          >
            <img
              src={job.logo}
              alt={job.company}
              className="w-[34px] h-[34px] object-contain"
            />
          </div>

          {/* Save */}
          <button
            className="
              flex items-center gap-1
              px-2 py-1
              rounded-md
              border border-gray-200
              bg-white
              text-[11px]
              text-gray-500
              hover:text-black
              hover:border-gray-400
              transition
            "
          >
            Save
            <Bookmark size={12} />
          </button>
        </div>

        {/* JOB INFO */}
        <div className="mt-[28px]">
          <div className="flex items-center gap-1">
            <h3 className="text-[18px] font-semibold text-black">
              {job.company}
            </h3>

            <span className="text-[11px] text-gray-400">{job.datePosted}</span>
          </div>

          <h2
            className="
              mt-1
              text-[22px]
              leading-[1.15]
              font-bold
              text-black
              max-w-[230px]
            "
          >
            {job.position}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span
              className="
                bg-gray-100
                text-gray-700
                text-[11px]
                font-medium
                px-3 py-1
                rounded-md
              "
            >
              {job.tag1}
            </span>

            <span
              className="
                bg-gray-100
                text-gray-700
                text-[11px]
                font-medium
                px-3 py-1
                rounded-md
              "
            >
              {job.tag2}
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        {/* Divider */}
        <div className="border-t border-gray-200 mb-[18px]" />

        <div className="flex items-end justify-between gap-3">
          {/* Salary + Location */}
          <div>
            <h3 className="text-[17px] font-bold text-black">{job.pay}</h3>

            <div className="flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-gray-400" />

              <p className="text-[11px] text-gray-400">{job.location}</p>
            </div>
          </div>

          {/* Apply */}
          <button
            className="
              bg-black
              text-white
              px-[17px]
              py-[9px]
              rounded-lg
              text-[12px]
              font-semibold
              whitespace-nowrap
              transition-all duration-200
              hover:bg-gray-800
              active:scale-95
            "
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
