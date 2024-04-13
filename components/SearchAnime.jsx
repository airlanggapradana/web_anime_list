"use client";
import React from "react";
import { RiSearchLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchAnime = () => {
  const router = useRouter();
  const keyword = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(`/search/${keyword.current.value}`);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full p-4 border border-slate-500 dark:border-blue-500 rounded-lg flex items-center gap-3"
    >
      <button type="submit" onClick={handleSearch}>
        <RiSearchLine className="dark:fill-slate-400" />
      </button>
      <input
        ref={keyword}
        type="search"
        placeholder="cari anime favoritmu disini..."
        className="w-full outline-none placeholder:font-medium bg-transparent dark:text-slate-100 dark:placeholder:text-slate-500"
      />
    </form>
  );
};

export default SearchAnime;
