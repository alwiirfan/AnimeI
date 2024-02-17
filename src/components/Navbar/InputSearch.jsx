"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  function handleSearch(event) {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  }
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className=" w-fullborder mt-3 border-black p-3 rounded md:mt-0"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute md:top-1.5 md:end-2 top-5 end-2"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
}
