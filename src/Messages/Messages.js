import React from "react";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FaSadCry, FaAngry } from "react-icons/fa";
import { RiEmotionLaughFill } from "react-icons/ri";
import Masonry from "react-masonry-css";
import "../Style/Masonry.css";
import "../Style/Neon.css";

const Messages = ({ messages, setMessages, likeButton }) => {
  const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1024: 3,
    700: 2,
    500: 1,
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-3 px-3 text-neutral-100 text-shadow"
        columnClassName=""
      >
        {messages.map((message) => {
          const date =
            message.createdAt[4] +
            message.createdAt[5] +
            message.createdAt[6] +
            " " +
            message.createdAt[8] +
            message.createdAt[9] +
            " " +
            message.createdAt[11] +
            message.createdAt[12] +
            message.createdAt[13] +
            message.createdAt[14];
          return (
            <div className=" my-3 m-auto" key={message._id}>
              <div
                className={`message-container p-5 rounded font-normal`}
                style={{ backgroundColor: message.bgColor }}
              >
                <div className="message">
                  <p>{message.message}</p>
                </div>
                <div className="author">
                  <p className=" text-right ">
                    {" - "}
                    {message.author}
                  </p>
                </div>
                {/* <footer className="flex place-content-center items-end text-sm mt-4">
                  <div className="date hidden md:block text-xs text-gray-300">
                    <p className=" font-semibold ">Date posted</p>
                    <p className=" font-thin italic text-xs ">
                      {date} {message.time}
                    </p>
                  </div>
                  <div className="reaction space-x-1 flex text-sm items-center justify-center w-full md:justify-center md:w-auto">
                    <div
                      className="btn flex bg-zinc-900 p-1 rounded"
                      onClick={() => likeButton(message._id)}
                    >
                      <button className=" flex space-x-[1px] items-center">
                        <AiFillLike /> <span>{message.like}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center">
                        <AiFillHeart /> <span>{message.love}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <RiEmotionLaughFill /> <span>{message.happy}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <FaSadCry /> <span>{message.cry}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <FaAngry /> <span>{message.angry}</span>
                      </button>
                    </div>
                  </div>
                </footer> */}
              </div>
              <div className="date text-xs">
                <p className=" font-semibold text-white/80 ">
                  Date posted:{" "}
                  <span className=" font-thin italic">
                    {date} {message.time}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </Masonry>
      {/* <div className="messages text-gray-300 w-[90%] m-auto">
        {messages.map((message) => {
          const date =
            message.createdAt[4] +
            message.createdAt[5] +
            message.createdAt[6] +
            " " +
            message.createdAt[8] +
            message.createdAt[9] +
            " " +
            message.createdAt[11] +
            message.createdAt[12] +
            message.createdAt[13] +
            message.createdAt[14];
          return (
            <div className="div my-3 lg:w-[768px] m-auto" key={message._id}>
              <div className="message-container bg-white/10 p-3  rounded">
                <div className="message">
                  <p>{message.message}</p>
                </div>
                <div className="author">
                  <p className=" text-right ">
                    {" - "}
                    {message.author}
                  </p>
                </div>
                <footer className="flex justify-between items-end text-sm mt-2">
                  <div className="date hidden md:block text-xs text-gray-300">
                    <p className=" font-semibold ">Date posted</p>
                    <p className=" font-thin italic text-xs ">
                      {date} {message.time}
                    </p>
                  </div>
                  <div className="reaction space-x-1 flex text-sm items-center justify-center w-full md:justify-center md:w-auto">
                    <div
                      className="btn flex bg-zinc-900 p-1 rounded"
                      onClick={() => likeButton(message._id)}
                    >
                      <button className=" flex space-x-[1px] items-center">
                        <AiFillLike /> <span>{message.like}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center">
                        <AiFillHeart /> <span>{message.love}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <RiEmotionLaughFill /> <span>{message.happy}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <FaSadCry /> <span>{message.cry}</span>
                      </button>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button className=" flex space-x-[1px] items-center ">
                        <FaAngry /> <span>{message.angry}</span>
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
              <div className="date text-xs md:hidden">
                <p className=" font-semibold text-white/80 ">
                  Date posted:{" "}
                  <span className=" font-thin italic">
                    {date} {message.time}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Messages;
