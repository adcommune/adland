import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { nav_links } from "@/config/links";
import { AdLand } from "@/lib/adland";
import { constants } from "@adland/common";
import classNames from "classnames";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MobileNavigation from "@/components/Navigation/MovileNavigation";

export default async function Home() {
  const adGroup = await new AdLand().getGroup(constants.landingPageAdGroup);

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
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-5">
          {adGroup
            ? adGroup?.adSpaces?.map(({ metadata, adSpace_subgraph }) => {
                const clickable = Boolean(metadata?.external_url);
                const link = metadata?.external_url ?? "";

                return (
                  <div
                    key={adSpace_subgraph.id}
                    className="flex aspect-square flex-col justify-center bg-white bg-opacity-10"
                  >
                    {metadata?.imageGatewayURI ? (
                      <Link
                        href={link}
                        target="_blank"
                        className={classNames({
                          "cursor-pointer": clickable,
                          "cursor-not-allowed": !clickable,
                        })}
                      >
                        <Image
                          src={metadata?.imageGatewayURI}
                          alt="hello"
                          className="w-full object-contain"
                          width={800}
                          height={800}
                        />
                      </Link>
                    ) : (
                      <div className="flex h-full flex-col justify-center">
                        <p className="font-display text-white">NO AD</p>
                      </div>
                    )}
                  </div>
                );
              })
            : Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-square h-full flex-col justify-center bg-white bg-opacity-10"
                  ></div>
                ))}
        </div>
        <div className="flex w-full flex-row justify-end">
          <Link
            target="_blank"
            href={`${constants.appUrl}/group/${constants.landingPageAdGroup}`}
            className="w-full sm:w-auto"
          >
            <Button
              size="sm"
              className="p x-8 w-full bg-transparent font-body text-white sm:w-auto"
              variant="outline"
            >
              YOUR AD HERE
              <ShoppingCartIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}
