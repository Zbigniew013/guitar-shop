import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <footer className='flex max-w-5xl mx-auto h-20 w-full items-center justify-around border-t border-stone-300 bg-white font-light '>
      <div>GuitarShop ©️ 2023</div>
      <Link
        href='/about'
        className={` ${
          currentRoute === '/about' ? 'underline decoration-red-400' : ''
        }`}
      >
        About Us
      </Link>
      <Link
        href='/contact'
        className={` ${
          currentRoute === '/contact' ? 'underline decoration-red-400' : ''
        }`}
      >
        Contact Us
      </Link>
    </footer>
  );
}

export default Footer;
