import Link from "next/link";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 max-w-full mx-auto'>
      <Link href={"/"} className='flex gap-1 items-center pl-6'>
        <span className='text-2xl font-bold bg-amber-600 py-1 px-2 rounded-lg'>
          next<span className='text-2xl font-bold text-black'>M</span>ovies
        </span>
      </Link>
      <div className='flex gap-6 items-center pr-6'>
        <ul className='flex gap-4 pr-4'>
          <li>Home</li>
          <li>Favorites</li>
          <li>About</li>
        </ul>
        <button className='w-full px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'>
          Sign In
        </button>
      </div>
    </div>
  );
}
