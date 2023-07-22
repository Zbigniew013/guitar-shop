import Link from 'next/link';

export function Cart() {
  return (
    <div className='mx-2 pb-1 mt-6 lg:mt-12 group relative border border-fuchsia-blue-300 '>
      <div className=' h-12 flex items-center justify-center '>
        <div className='absolute inset-y-0 left-0  bg-fuchsia-blue-700 transition-all group-hover:w-full group-active:bg-fuchsia-blue-700'></div>

        <Link
          href='/cart'
          className=' relative transition-colors group-hover:text-fuchsia-blue-200 text-fuchsia-blue-500 text-2xl font-Antonio font-normal tracking-wider'
        >
          ADD TO CART
        </Link>
      </div>
    </div>
  );
}
