import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimesResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimesResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="View All" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}
