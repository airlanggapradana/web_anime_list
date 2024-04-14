import Hero from "@/components/Hero";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import Link from "next/link";

const sosmed = [
  {
    href: "https://www.instagram.com/iamrangga._/",
    icon: <RiInstagramLine className="fill-slate-300" size={25} />,
  },
  {
    href: "https://github.com/airlanggapradana",
    icon: <RiGithubLine className="fill-slate-300" size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/airlanggapradana/",
    icon: <RiLinkedinLine className="fill-slate-300" size={25} />,
  },
];

const styles = {
  sosmed_icon: `w-14 h-14 border-2 border-cyan-500 rounded-xl flex items-center justify-center`,
};

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-12 dark:bg-slate-900">
      <div className="container">
        <div className="w-full px-5">
          <div className="flex items-center justify-center gap-5 mb-5">
            {sosmed.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                className={styles.sosmed_icon}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <Hero />
        </div>
      </div>
    </main>
  );
}
