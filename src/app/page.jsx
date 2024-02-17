import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimesResponse } from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimesResponse("top/anime", "limit=8");

  return (
    <section>
      <Header title="Top Anime" linkHref="/populer" linkTitle="View All" />
      <AnimeList api={topAnime} />
    </section>
  );
}
