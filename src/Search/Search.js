import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className=" m-auto w-[90%] sticky top-2">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex lg:w-[768px] m-auto"
      >
        <input
          type="search"
          name="search"
          value={search}
          id="search"
          placeholder="Search"
          className=" p-2 px-3 border-b-[1px] border-none outline-none rounded-l grow bg-neutral-900/90 text-gray-300 shadow-lg"
          onChange={(e) => setSearch(e.target.value)}
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
