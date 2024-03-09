import Link from "next/link";
import "./globals.css";
import Image from "next/image";

// TODO: fix colour naming and organisation
// TODO: organise stuff on better

export default function homepage() {
	return (
		<div className="h-screen">
			<div className="h-1/2 text-center justify-center items-center flex flex-col">
				<div className="m-5 h-full md:w-1/2 w-[calc(100vw - 2.5rem)] bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col">
					<div className="m-5">
						<h1 className="md:text-3xl text-2xl text-normalcol">hi!! i&apos;m <a className="text-darkercol">lapaii</a>,</h1>
						<h1 className="md:text-xl text-normalcol">a 17yo from the uk learning web dev in hopes of making it a career!</h1>
						<div className="m-5 md:text-2xl text-xl text-darkercol">
							<a className="hover:decoration-4 hover:text-normalcol hover:underline" href="/blog/">my blog</a>
						</div>
						<div className="m-5">
							<h1 className="md:text-2xl text-xl text-defaultcol">
								my socials:
							</h1>
							<div className="md:text-2xl text-xl text-linkcol p-2.5">
								<a
									href="https://osu.ppy.sh/users/18784449"
									className="hover:decoration-4 hover:text-normalcol hover:underline w-1/3 md:px-5 px-2.5"
								>
									osu!
								</a>
								•
								<a
									href="https://github.com/lapaii"
									className="hover:decoration-4 hover:text-normalcol hover:underline w-1/3 md:px-5 px-2.5"
								>
									github
								</a>
								•
								<a
									href="https://twitch.tv/lapaiiosu"
									className="hover:decoration-4 hover:text-normalcol hover:underline w-1/3 md:px-5 px-2.5"
								>
									twitch
								</a>
							</div>
						</div>
						<div className="m-5">
							<h1 className="md:text-2xl text-xl text-defaultcol">projects:</h1>
							<div className="md:text-2xl text-xl p-2.5 text-linkcol flex flex-row justify-center w-full">
								<Link className="hover:decoration-4 hover:text-normalcol hover:underline md:px-5 px-2.5" href="https://anime.lapaii.dev"><h1>anime site</h1></Link>
								<h1 className="md:px-5 px-2.5">more soon!! &gt;w&lt;</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-1/2 flex justify-center items-end">
				<Image
					src="/sakuramiku.png"
					width={414}
					height={350}
					alt="sakura miku"
				/>
			</div>
		</div>
	);
}
