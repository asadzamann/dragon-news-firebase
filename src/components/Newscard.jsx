import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

// news = full JSON object you provided
const NewsCard = ({ news }) => {
    const formattedDate = new Date(news.author?.published_date).toLocaleDateString();
  return (
    <div className="w-11/12 mx-auto bg-white shadow-md rounded-2xl p-5 mt-5 space-y-4 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{news.author?.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xl text-gray-600">
          <BsBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 leading-snug">
        {news.title}
      </h2>

      {/* Image */}
      {news.thumbnail_url && (
        <img
          src={news.thumbnail_url}
          alt="news"
          className="w-full rounded-xl object-cover"
        />
      )}

      {/* Details */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {news.details?.slice(0, 250)}...
      </p>

      <button className="text-orange-500 hover:underline font-medium">
        Read More
      </button>

      <hr />

      {/* Footer */}
      <div className="flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-500 text-lg">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < Math.round(news.rating?.number) ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
          <span className="text-gray-700 ml-1 text-base">
            {news.rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-700 text-base">
          <AiOutlineEye className="text-xl" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;