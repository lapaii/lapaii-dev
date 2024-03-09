import { getShortFormattedDate } from "@/lib/formattedDate";

type Props = {
  post: BlogPost;
};

export default function PostButton({ post }: Props) {
	const { id, title, date } = post;
	const shortDate = getShortFormattedDate(date);

	return (
		<div className="m-5 outline bg-hovercol outline-normalcol rounded-2xl">
			<a className="h-full w-full" href={`/blog/${id}`}>
				<h1 className="p-5 md:text-xl text-lg text-darkercol">
				{title} {" "}
				<span className="inline text-base text-normalcol">{shortDate}</span>
				</h1>
			</a>
		</div>
	);
}
