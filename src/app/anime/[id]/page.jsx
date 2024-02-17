import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimesResponse } from "@/libs/api-libs";
import Image from "next/image";
import React from "react";

export default async function Page({ params: { id } }) {
  const anime = await getAnimesResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl font-bold text-color-primary">
          Detail anime of {anime.data.title} - {anime.data.year}
        </h1>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-solid border-color-primary p-2">
          <h3>RANK</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-solid border-color-primary p-2">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-solid border-color-primary p-2">
          <h3>POPULARITY</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-solid border-color-primary p-2">
          <h3>FAVORITE</h3>
          <p>{anime.data.favorites}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-solid border-color-primary p-2">
          <h3>MEMBERS</h3>
          <p>{anime.data.members}</p>
        </div>
      </div>
      <div className="px-4 pt-4 flex md:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
          priority={true}
        />
        <p className="text-xl text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
