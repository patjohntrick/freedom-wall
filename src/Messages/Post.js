import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Post = ({ handleSubmit, form, setForm }) => {
  const Form = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className=" p-4 bg-zinc-900 rounded space-y-2 w-[280px] md:w-[320px] "
      >
        <p className=" text-center text-gray-300 text-xl ">
          Let us know what's in your mind
        </p>
        <hr />
        <input
          type="text"
          name="author"
          placeholder="Enter your name/alias"
          className="w-full p-3 rounded outline-none border-none focus:outline-[#13aca9]"
          required
        />
        <br />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="8"
          placeholder="Enter your thought, feeling, emotions, status, etc..."
          className="p-3 rounded outline-none border-none focus:outline-[#13aca9] w-full"
          required
        />
        <br />
        <div className="btn flex justify-center space-x-1">
          <button
            type="submit"
            className=" uppercase text-sm font-semibold py-3 px-6 bg-green-700 text-gray-300 rounded"
          >
            post
          </button>
          <button
            className="  uppercase text-sm font-semibold py-3 px-4 bg-red-700 text-gray-300 rounded"
            onClick={handleOpenClose}
          >
            {" "}
            cancel
          </button>
        </div>
      </form>
    );
  };

  const handleOpenClose = () => {
    setForm(!form);
  };
  console.log(form);

  return (
    <div className="form">
      <div
        className={
          "transition-all" +
          (form
            ? "block fixed h-screen w-full opacity-100 bg-black/80 z-20 top-[0%] "
            : "hidden opacity-0 ")
        }
      >
        d
      </div>
      <div className="form-container fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
        {form ? <Form /> : null}
      </div>
      <div
        className=" fixed top-[95%] translate-y-[-95%] right-[5%] translate-x-[-5%] z-10 "
        onClick={handleOpenClose}
      >
        <button className=" p-1 text-white bg-[#13aca9] hover:hover:bg-[#108f8d] rounded-full text-4xl shadow-xl animate-bounce ">
          <BsPlus />
        </button>
      </div>
    </div>
  );
};

export default Post;
