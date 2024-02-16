"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

export default function Populer() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );
      const populerAnime = await response.json();
      setData(populerAnime);
    }

    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Populer Anime #${page}`} />
      <AnimeList api={data} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={data.pagination?.last_visible_page}
      />
    </>
  );
}
