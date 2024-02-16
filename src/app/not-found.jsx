"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center mx-auto min-h-screen max-w-xl">
      <div className="flex flex-col gap-4 justify-center items-center">
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-4xl font-bold text-color-accent">NOT FOUND</h1>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
