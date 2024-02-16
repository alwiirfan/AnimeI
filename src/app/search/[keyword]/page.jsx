import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function SearchPage({ params }) {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await response.json();

  return (
    <section>
      <Header title={`Top Anime ${decodedKeyword}...`} />
      <AnimeList api={searchAnime} />
    </section>
  );
}
