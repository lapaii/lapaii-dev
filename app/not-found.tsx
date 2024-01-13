import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen">
      <div className="h-1/2 text-center justify-center items-center flex flex-col">
        <div className="m-5 p-5 h-full md:w-1/2 w-3/4 bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col ">
          <h1 className="md:text-4xl text-3xl text-darkercol">404 ~ not found!</h1>
          <Link className="m-3 p-2.5 md:text-3xl text-2xl text-linkcol hover:text-normalcol" href="/">return home</Link>
        </div>
      </div>
    </div>
  )
}