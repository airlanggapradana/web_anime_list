import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AnimeDetailFull = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${params.animeId}`
  );
  const result = await res.json();
  const animeDetail = result.data;

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="container">
        <div className="w-full px-5">
          <div className="max-w-4xl mx-auto p-4 border border-cyan-600 rounded-xl bg-slate-700">
            <Link
              href="/"
              className="w-14 h-14 border-2 rounded-lg flex items-center justify-center mb-5 border-blue-500"
            >
              <RiArrowLeftLine className="fill-slate-100" />
            </Link>

            <iframe
              src={animeDetail.trailer.embed_url}
              width={400}
              height={400}
              className="w-full"
            ></iframe>

            <div className="space-y-3 mt-3">
              <h1 className="font-bold text-2xl leading-relaxed text-slate-100">
                {animeDetail.title}
              </h1>
              {/* Anime Detail list start */}
              <div className="flex items-center gap-3">
                <div className="p-2 border-2 border-blue-500 rounded-lg">
                  <h2 className="font-medium text-sm text-slate-300">
                    {animeDetail.duration}
                  </h2>
                </div>
                <div className="p-2 border-2 border-red-400 rounded-lg">
                  <h2 className="font-medium text-sm text-slate-300">
                    {animeDetail.rating}
                  </h2>
                </div>
                <div className="p-2 border-2 border-teal-300 bg-teal-500 rounded-lg">
                  <h2 className="font-semibold text-sm text-slate-100">
                    {animeDetail.status}
                  </h2>
                </div>
              </div>
              {/* Anime Detail list end */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold text-lg">
                    Sinopsis Cerita
                  </AccordionTrigger>
                  <AccordionContent className="font-medium text-base text-slate-300 tracking-wide leading-relaxed">
                    {animeDetail.synopsis}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold text-lg">
                    Credits
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 mb-3">
                      <h2 className="font-medium text-base">Broadcasted on</h2>
                      <span className="font-normal text-slate-300">
                        {animeDetail.broadcast.day} {","}{" "}
                        {animeDetail.broadcast.time}
                        {", "}
                        {animeDetail.broadcast.timezone}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mb-3">
                      <h2 className="font-medium text-base">Produced by</h2>
                      <span className="font-normal text-slate-300">
                        {animeDetail.producers[0].name}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-medium text-base">Studios</h2>
                      <span className="font-normal text-slate-300">
                        {animeDetail.studios[0].name}
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetailFull;
