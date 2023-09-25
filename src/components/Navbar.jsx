import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    nav(`/search/${search}`);
  };

  return (
    <div className=" flex justify-around p-7 rounded-lg shadow">
      <Link to={"/"}>
        <GiKnifeFork className=" text-3xl" />
      </Link>
      <div className="">
        <form action="" onSubmit={submitHandler}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" border-b-2 outline-none border-b-red-500"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
