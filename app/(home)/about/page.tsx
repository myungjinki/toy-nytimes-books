import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center h-screen gap-4 p-8">
      <h1 className="mea-culpa-regular">The New York Times Books</h1>
      <div>
        This project use{" "}
        <a
          className="underline underline-offset-2"
          href="https://developer.nytimes.com/"
          target="_blank"
        >
          Nomadcoders The New York Times API
        </a>
      </div>
      <div className="flex flex-col items-start gap-4 w-72">
        <h2 className="self-center">Packages</h2>
        <ul>
          <li>
            <a
              className="underline underline-offset-2"
              href="https://nextjs.org/"
              target="_blank"
            >
              Next.js 14
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-2"
              href="https://react.dev/"
              target="_blank"
            >
              React 18
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-2"
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              TypeScript
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2>Repository</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/myungjinki/toy-nytimes-books/"
            target="_blank"
          >
            <Image src="./github.svg" width={24} height={36} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}
