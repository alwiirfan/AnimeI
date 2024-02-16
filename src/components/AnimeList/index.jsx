import Link from "next/link";
import Image from "next/image";

export default function AnimeList({ api }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {api.data?.map((anime) => {
        return (
          <Link
            key={anime.mal_id}
            href={`/${anime.mal_id}`}
            className="cursor-pointer hover:text-color-accent text-color-primary transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={200}
              height={300}
              className="w-full max-h-64 object-cover"
              priority={true}
            />
            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
