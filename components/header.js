import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className='flex h-20 w-full mx-auto items-center justify-around border-b border-fuchsia-blue-700 bg-code-grey-950 text-fuchsia-blue-500 '>
      <div className=' text-3xl '>
        <Link
          href='/'
          className={`font-Pacifico text-4xl hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/' ? 'text-fuchsia-blue-300 font-light' : ''
          }`}
        >
          Guitar Shop
        </Link>
      </div>
      <div className='items-center space-x-8 font-Antonio font-light text-xl '>
        <Link
          href='/guitar_electric'
          className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/guitar_electric'
              ? ' font-bold text-fuchsia-blue-300'
              : ''
          }`}
        >
          Electric Guitars
        </Link>
        <Link
          href='/guitar_acoustic'
          className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/guitar_acoustic'
              ? 'font-bold text-fuchsia-blue-300'
              : ''
          }`}
        >
          Acoustic Guitars
        </Link>
        <Link
          href='/guitar_strings'
          className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/guitar_strings'
              ? 'font-bold text-fuchsia-blue-300'
              : ''
          }`}
        >
          Strings
        </Link>
        <Link
          href='/account'
          className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/account' ? 'font-bold text-fuchsia-blue-300' : ''
          }`}
        >
          Account
        </Link>
        <Link
          href='/cart'
          className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
            currentRoute === '/cart' ? 'font-bold text-fuchsia-blue-300' : ''
          }`}
        >
          Cart
        </Link>
      </div>
    </header>
  );
}

export default Header;
