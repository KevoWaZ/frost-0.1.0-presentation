"use client"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Link,
  Snippet,
} from "@nextui-org/react";
import { LucideArrowRight } from "lucide-react";

export default function Home() {

  const list = [
    {
      title: "Next.js",
      img: "./nextjs.svg",
      description:
        "Next.js offers a lightly opinionated, heavily optimized approach to creating applications using React. It's the industry standard and we're proud to build on top of it :)",
      href: "https://nextjs.org",
    },
    {
      title: "TypeScript",
      img: "./ts-logo.svg",
      description:
        "We firmly believe TypeScript will help you be a better web developer. Whether you're new to JS or a seasoned pro, the 'strictness' of TypeScript leads to smoother building.",
      href: "https://www.typescriptlang.org",
    },
    {
      title: "tRPC",
      img: "./trpc.svg",
      description:
        "If your frontend and backend are TypeScript, it's really hard to beat the DX of tRPC. Kinda like GraphQL but without the work - seriously this lib is magic.",
      href: "https://trpc.io",
    },
    {
      title: "Prisma",
      img: "./prisma.svg",
      description:
        "Prisma is the best way to work with databases in TypeScript. It provides a simple, type-safe API to query your database, and it can be used with most SQL dialects (and Mongo too!).",
      href: "https://www.prisma.io",
    },
    {
      title: "Tailwind",
      img: "./tailwind.svg",
      description:
        "Tailwind CSS is a utility-first CSS framework that helps you build beautiful, responsive designs without any extra configuration. It’s built with utility-first principles, and is completely customizable and extendable.",
      href: "https://tailwindcss.com",
    },
    {
      title: "NextAuth.js",
      img: "./nextAuth.png",
      description:
        "When you need flexible, secure, and scalable auth, NextAuth.js is top notch. It ties into your existing database and provides a simple API to manage users and sessions.",
      href: "https://next-auth.js.org",
    },
  ];

  const com = [
    {
      title: "Discord",
      img: "./discord.svg",
      description: "Join our Discord server to chat with other developers and get help with your projects.",
      href: "https://discord.com", 
    },
    {
      title: "Github",
      img: "./github.svg",
      description: "Contribute to the project by submitting issues and pull requests on our GitHub repository.",
      href: "https://github.com", 
    },
    {
      title: "X / Twitter",
      img: "./x.svg",
      description: "Join us on X for shitposts.",
      href: "https://twitter.com", 
    }
  ]

  return (
    <main>
      <div className="text-center text-8xl font-semibold py-12 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28">
        <div className="mx-auto max-w-[800px] xl:max-w-7xl">
          <div className="lg:px-8">
            <div className="flex flex-col items-center">
              <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
                <div className="flex w-full flex-col items-center gap-4">
                  <div className="flex flex-col items-start justify-between">
                    <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
                      The best way to start a
                      <span className="text-[hsl(200,100%,60%)]">
                        {" "}
                        full-stack,{" "}
                      </span>
                      <span className="whitespace-nowrap text-[hsl(240,100%,70%)]">
                        typesafe{" "}
                      </span>
                      <span className="text-[hsl(280,100%,60%)]">Next.js</span>{" "}
                      app
                    </h1>
                  </div>
                  <div className="flex sm:space-x-4 flex-col sm:flex-row">
                    <Button
                      radius="full"
                      size="lg"
                      className="font-semibold mb-5 sm:mb-0"
                      href="/docs"
                      as={Link}
                      endContent={<LucideArrowRight />}
                    >
                      Documentation
                    </Button>
                    <Button
                      radius="full"
                      size="lg"
                      className="font-semibold text-white ml-0"
                      href="https://github.com/nextui-org/nextui"
                      variant="flat"
                      as={Link}
                      showAnchorIcon
                    >
                      GitHub
                    </Button>
                  </div>
                  <Snippet
                    className="text-white text-lg sm:p-3 md:p-5 hidden sm:flex"
                    variant="bordered"
                  >
                    npm create frost-app@latest
                  </Snippet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-semibold py-12 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28 mb:10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:gap-x-8 xl:gap-x-12">
          <div className="mx-auto text flex max-w-[800px] flex-col gap-2 md:gap-4 xl:max-w-full">
            <h2 className="text-white text-center text-6xl font-bold">
              Typesafe From The Start
            </h2>
            <p className="text-white/70 font-semibold mb-5">
              We made create-t3-app to do one thing: Streamline the setup of
              typesafe Next.js apps WITHOUT compromising modularity.
            </p>
            <p className="text-white/70 font-semibold mb-5">
              After countless projects and many years on this tech, we have lots
              of opinions and insights. We've done our best to encode them into
              this CLI.
            </p>
            <p className="text-white/70 font-semibold">
              This is NOT an all-inclusive template. We expect you to bring your
              own libraries. Check out{" "}
              <Link href="/">our other recommendations</Link> for things like
              state management and deployment.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 pb-12 text-purple-100 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-semibold text-purple-200 md:text-2xl lg:text-2xl">
              The best of the full stack TypeScript ecosystem...
            </h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-t3-purple-50 md:text-5xl lg:text-5xl">
              ...but ONLY the parts you need
            </h3>
            <p className="mt-4 text-base text-t3-purple-200 md:text-lg">
              Take what you want and nothing more!
            </p>
          </div>
          <div>
            <div className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-14 sm:space-y-0 md:grid-cols-3 md:grid-rows-2 lg:gap-x-8">
              {list.map((item, index) => (
                <Card
                  isExternal={true}
                  href={item.href}
                  as={Link}
                  key={index}
                  isPressable
                  className="w-full bg-white/5 transition-colors"
                >
                  <CardHeader className="flex items-center space-x-4 bg-white/10 p-2 pl-5 transition-colors">
                    <Image
                      alt={item.title}
                      height={40}
                      radius="sm"
                      src={item.img}
                      width={40}
                    />
                    <p className="text-lg font-medium leading-6 text-purple-200 md:text-xl">
                      {item.title}
                    </p>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className="m-6 h-full text-sm text-purple-100 subpixel-antialiased md:text-base">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-t3-purple-100 sm:px-6 lg:px-8">
          <h3 className="mt-2 w-full text-3xl font-bold tracking-tight text-purple-50 text-center md:text-5xl lg:text-5xl">Community</h3>
          <p className="mb-10 mt-4 w-full max-w-3xl text-base text-purple-200 text-center md:text-xl lg:text-xl">Join our community to get help, share your projects, and even contribute to the project!</p>
          <div className="flex flex-col items-start justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                {com.map(( item, index ) => (
                  <Card as={Link} href={item.href} isExternal={true} key={index} isPressable className="w-full cursor-pointer rounded-lg border border-purple-200/20 bg-purple-200/10 transition-colors hover:border-purple-300/50 hover:bg-purple-200/20 hover:no-underline sm:h-64">
                      <div className="flex h-full flex-col items-center justify-center space-y-3 p-4 sm:p-2 md:p-4">
                        <Image alt={item.title} height={50} width={50} radius="sm" src={item.img} />
                        <h2 className="text-xl text-purple-200 font-black">{item.title}</h2>
                        <p className="text-center text-purple-100">{item.description}</p>
                      </div>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}
