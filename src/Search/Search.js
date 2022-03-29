import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className=" m-auto w-[90%]">
      <form action="" className="flex">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className=" p-2 px-3 border-b-[1px] border-none outline-none rounded-l grow bg-black/40 text-gray-300"
        />
        <button
          type="submit"
          className="py-2 px-3 text-gray-100 bg-[#13aca9] rounded-r font-black hover:bg-[#108f8d] transition-all text-xl"
        >
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
