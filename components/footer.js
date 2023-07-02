import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <footer className='flex mx-auto h-20 w-full items-center justify-around border-t border-fuchsia-blue-700 bg-code-grey-950 text-fuchsia-blue-500 font-Antonio font-light text-xl mt-8'>
      <div>GuitarShop ©️ 2023</div>
      <Link
        href='/about'
        className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
          currentRoute === '/about' ? 'font-bold text-fuchsia-blue-300' : ''
        }`}
      >
        About Us
      </Link>
      <Link
        href='/contact'
        className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
          currentRoute === '/contact' ? 'font-bold text-fuchsia-blue-300' : ''
        }`}
      >
        Contact Us
      </Link>
    </footer>
  );
}

export default Footer;
