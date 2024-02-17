import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimesResponse } from "@/libs/api-libs";

export default async function SearchPage({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimesResponse("anime", `q=${decodedKeyword}`);

  return (
    <section>
      <Header title={`Top Anime ${decodedKeyword}...`} />
      <AnimeList api={searchAnime} />
    </section>
  );
}
