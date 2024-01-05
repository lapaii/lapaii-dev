import "./globals.css";
import Image from 'next/image';

export default function homepage() {
  return (
    <div className="h-screen">
      <div className="h-1/2 text-center justify-center items-center flex flex-col">
        <div className="md:p-3 p-1.5">
          <h1 className="md:text-4xl text-3xl">lapaii</h1>
        </div>
        <div className="w-screen md:text-3xl text-2xl md:p-5 p-2.5">
          <a href="https://osu.ppy.sh/users/18784449" className="hover:decoration-3 text-normalcol hover:text-hovercol hover:underline w-1/3 md:px-5 px-2.5">osu!</a>
          <a href="https://github.com/lapaii" className="hover:decoration-3 text-normalcol hover:text-hovercol hover:underline w-1/3 md:px-5 px-2.5">github</a>
          <a href="https://twitch.tv/lapaiiosu" className="hover:decoration-3 text-normalcol hover:text-hovercol hover:underline w-1/3 md:px-5 px-2.5">twitch</a>
        </div>
        <div className="md:p-3 p-1.5">
          <h1 className="md:text-2xl text-xl">more to come soon???</h1>
        </div>
      </div>
      <div className="h-1/2 flex justify-center items-end">
        <Image src="/sakuramiku.png" width={414} height={350} alt="sakura miku"/>
      </div>
    </div>
  )
}
