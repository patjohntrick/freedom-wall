import React from "react";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FaSadCry, FaAngry } from "react-icons/fa";
import { RiEmotionLaughFill } from "react-icons/ri";

const Messages = ({ messages, setMessages }) => {
  return (
    <div>
      <div className="messages text-gray-300 w-[90%] m-auto">
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
            <div className="div my-3" key={message._id}>
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
                  <div className="date hidden md:block">
                    <p className=" font-semibold ">Date posted</p>
                    <p className=" font-thin italic text-xs ">
                      {date} {message.time}
                    </p>
                  </div>
                  <div className="reaction space-x-1 flex text-sm items-center justify-center w-full md:justify-center md:w-auto">
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button>
                        <AiFillLike />
                      </button>
                      <p>10+</p>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button>
                        <AiFillHeart />
                      </button>
                      <p>10+</p>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button>
                        <RiEmotionLaughFill />
                      </button>
                      <p>10+</p>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button>
                        <FaSadCry />
                      </button>
                      <p>10+</p>
                    </div>
                    <div className="btn flex bg-zinc-900 p-1 rounded">
                      <button>
                        <FaAngry />
                      </button>
                      <p>10+</p>
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
      </div>
    </div>
  );
};

export default Messages;
