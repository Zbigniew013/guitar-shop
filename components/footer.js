import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <footer className='w-full px-2 mx-auto py-6 flex flex-row  md:items-center  xl:fixed md:relative bottom-0 items-center justify-around bg-code-grey-950 text-fuchsia-blue-500 font-Antonio font-light text-xl'>
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
