import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { nav_links } from "@/config/links";
import MobileNavigation from "@/components/Navigation/MovileNavigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <Navbar>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="-mr-1 md:hidden">
            <MobileNavigation />
          </div>
        </div>
        <div className="hidden gap-x-4 sm:flex">
          {nav_links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.target}
                className="fill-white font-body text-white"
                aria-label={"AdLand social links: " + link.name}
              >
                {link.icon ? link.icon : link.name}
              </Link>
            );
          })}
        </div>
      </Navbar>
      <Container className="flex min-h-[76vh] flex-col justify-center gap-8 py-8 text-center">
        <h1 className="mx-auto font-display text-3xl text-white 2xl:text-5xl">
          Revenue for your community
        </h1>
        <p className="mx-auto max-w-2xl font-body text-lg text-gray-200">
          Radical, decentralized, transparent revenue generation through
          collective advertising ownership.
        </p>
        <div className="mx-auto max-w-2xl font-body text-lg text-gray-200 border rounded-lg bg-black/30 mt-10 p-4 font-bold">
          <p className="">AdLand has been discontinued.</p>
          <p>But stay tuned for something new soon enough... !</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
