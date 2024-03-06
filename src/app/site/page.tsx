import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pCards } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";
import { features } from "process";

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <section className=" md:pt-44 mt-[70px] relative flex items-center justify-center flex-col ">
          {/* grid */}

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

          <p className="text-center ">Run your agency, in one place</p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[300px] mb-24">
              Plura
            </h1>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-70px]">
            <Image
              src={"/assets/preview.png"}
              alt="banner image"
              height={1200}
              width={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4 md:mt-20">
          <h2 className="text-4xl text-center ">Choose what fits you right </h2>
          <p className="text-muted-foreground text-center ">
            Your business deserves the best. Launch your journey to success with
            our unbeatable introductory offer. Start at our best price and
            experience the quality and value we provide.
          </p>

          <div className="flex w-full justify-center gap-4 flex-wrap mt-6 ">
            {pCards.map((card) => (
              // ***********----> Work in Progress: Wire up free product for stripe <----------**************

              <Card
                key={card.title}
                className={clsx(
                  "w-[300px] flex flex-col justify-between ",
                  // hover:border-2 hover:border-primary
                  // need to add hover here <------------------ and solve the issue border is creating by border-2

                  {
                    "border-2 border-primary": card.title === "Unlimited Saas",
                  }
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("", {
                      "text-muted-foreground": card.title !== "Unlimited Saas",
                    })}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">{card.price}</span>
                  <span className="text-muted-foreground">/m</span>
                </CardContent>
                <CardFooter className="flex flex-col items-startgap-4">
                  <div>
                    {card.features.map((feature) => (
                      <div key={feature} className="flex gap-2 items-center">
                        <Check className="text-muted-foreground" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agency?plan=${card.priceId}`}
                    className={clsx(
                      "w-full mt-8 text-center bg-primary p-2 rounded-md",
                      {
                        "!bg-muted-foreground": card.title !== "Unlimited Saas",
                      }
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
