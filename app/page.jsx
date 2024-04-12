import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-14 pb-12 dark:bg-slate-900">
      <div className="container">
        <div className="w-full px-5">
          <Hero />
        </div>
      </div>
    </main>
  );
}
