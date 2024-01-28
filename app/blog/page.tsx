import Link from "next/link";
import Posts from "./posts";

export default function blogHome() {
  return (
    <div className="h-screen">
      <div className="text-center justify-center items-center flex flex-col">
        <div className="m-5 p-5 md:w-1/2 bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col ">
          <h1 className="md:text-4xl text-3xl text-darkercol">lapaii&apos;s blog</h1>
          <div className="p-5 md:text-2xl text-xl text-normalcol">
            <h1>
              i hope i&apos;ll be able to update this often but don&apos;t expect too much
              ^-^
            </h1>
          </div>
        </div>
      </div>
      <div className="m-5 md:m-0 h-1/2 text-center justify-center items-center flex flex-col">
        <div className="flex-grow bg-hovercol overflow-y-auto outline md:w-1/2 w-full outline-normalcol rounded-3xl">
          <Posts />
        </div>
      </div>
      <div className="md:m-5 m-10 text-center justify-center items-center flex flex-col">
        <div className="p-5 bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col ">
          <Link
            href="/"
            className="md:text-2xl text-xl text-linkcol hover:text-normalcol"
          >
            go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
