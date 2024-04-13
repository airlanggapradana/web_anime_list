import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import SearchAnime from "./SearchAnime";

const Hero = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const animeData = await response.json();
  const anime = animeData.data;

  return (
    <div className="w-full space-y-7">
      <SearchAnime />

      <div className="space-y-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
          {anime.map((item) => (
            <Link
              href={`/anime/${item.mal_id}`}
              key={item.mal_id}
              className="hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <CustomCard anime={item} key={item.mal_id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomCard = ({ anime }) => {
  return (
    <Card className="max-w-sm h-full overflow-hidden border-blue-500 dark:border-blue-500">
      <CardHeader className="w-full">
        <Image
          src={anime.images.webp.image_url}
          width={500}
          height={500}
          alt={anime.mal_id}
          className="object-cover w-full max-h-[20rem] md:max-h-[25rem] rounded-lg"
        />

        <CardTitle className="font-semibold text-base md:text-xl tracking-normal leading-normal">
          {anime.title}
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          <p>{anime.type}</p>
          <p>{anime.rating}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export { CustomCard };
export default Hero;
