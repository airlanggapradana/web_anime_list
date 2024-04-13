import { CustomCard } from "@/components/Hero";
import SearchAnime from "@/components/SearchAnime";
import Link from "next/link";
import React from "react";

const SearchPage = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`
  );
  const animeData = await response.json();
  const searchAnime = animeData.data;
  return (
    <section className="flex items-center justify-center pt-14 pb-12 dark:bg-slate-900">
      <div className="container">
        <div className="w-full px-5">
          <div className="space-y-5 mb-5">
            <SearchAnime />
            <h1 className="font-bold text-xl text-slate-300 text-center">
              Menampilkan hasil pencarian untuk {params.keyword}...
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {searchAnime.map((anime) => (
              <Link
                href={`/anime/${anime.mal_id}`}
                key={anime.mal_id}
                className="hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <CustomCard anime={anime} key={anime.mal_id} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
