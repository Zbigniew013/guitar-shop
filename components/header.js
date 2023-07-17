import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='flex w-full mx-auto items-center justify-around  bg-code-grey-950 text-fuchsia-blue-500 '>
      {/* Logo */}

      <div className='justify-between w-full px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 py-4 md:py-2'>
        <div>
          <div className=' text-3xl flex items-center justify-between py-3 md:py-5 md:block'>
            <Link
              href='/'
              alt='logo'
              className={`font-Pacifico text-4xl hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
                currentRoute === '/' ? 'text-fuchsia-blue-300 font-light' : ''
              }`}
            >
              Guitar Shop
            </Link>

            <div className='md:hidden'>
              <button
                className='
                p-2 text-fuchsia-blue-500 rounded-md outline-none  focus:border border-fuchsia-blue-500'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose className='w-6 h-6 text-fuchsia-blue-500 text-3xl' />
                ) : (
                  <RxHamburgerMenu className='w-6 h-6 text-fuchsia-blue-500 text-3xl' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <div className='items-center space-x-8 font-Antonio font-light text-xl '>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='text-fuchsia-blue-500 font-light'>
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
              </li>
              <li className='text-fuchsia-blue-500 font-light'>
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
              </li>
              <li className='text-fuchsia-blue-500 font-light'>
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
              </li>
              <li className='text-fuchsia-blue-500 font-light'>
                <Link
                  href='/account'
                  className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
                    currentRoute === '/account'
                      ? 'font-bold text-fuchsia-blue-300'
                      : ''
                  }`}
                >
                  Account
                </Link>
              </li>
              <li className='text-fuchsia-blue-500 font-light'>
                <Link
                  href='/cart'
                  className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
                    currentRoute === '/cart'
                      ? 'font-bold text-fuchsia-blue-300'
                      : ''
                  }`}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// function Header() {
//   const router = useRouter();
//   const currentRoute = router.pathname;
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <div>
//       <nav className='w-full bg-code-grey-950 text-fuchsia-blue-500' alt='logo'>
//         <div className='w-full justify-between px-4 mx-auto  md:items-center md:px-8'>
//           <div className='md:items-center justify-between py-3 md:py-5 md:block px-4 mx-auto lg:max-w-7xl md:px-8'>
//             <div className=' flex md:items-center justify-between py-3 md:py-5 md:block px-4 mx-auto lg:max-w-7xl md:px-8 lex items-center '>
//               <Link
//                 href='/'
//                 className={`font-Pacifico text-4xl hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                   currentRoute === '/' ? 'text-fuchsia-blue-300 font-light' : ''
//                 }`}
//               >
//                 Guitar Shop
//               </Link>

//               <div className='md:hidden'>
//                 <button
//                   className='p-2 text-fuchsia-blue-500 rounded-md outline-none  focus:border border-fuchsia-blue-500 text-3xl'
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <IoMdClose className='w-6 h-6 text-fuchsia-blue-500 text-3xl' />
//                   ) : (
//                     <RxHamburgerMenu className='w-6 h-6 text-fuchsia-blue-500 text-3xl' />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'block' : 'hidden'
//               }`}
//             >

//               <ul className='items-center justify-center space-y-8 font-Antonio font-light text-xl md:flex md:space-x-6 md:space-y-0'>
//                 <li className='text-fuchsia-blue-500 font-light'>
//                   <Link
//                     href='/guitar_electric'
//                     className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                       currentRoute === '/guitar_electric'
//                         ? ' font-bold text-fuchsia-blue-300'
//                         : ''
//                     }`}
//                   >
//                     Electric Guitars
//                   </Link>
//                 </li>
//                 <li className='text-fuchsia-blue-500 font-light'>
//                   <Link
//                     href='/guitar_acoustic'
//                     className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                       currentRoute === '/guitar_acoustic'
//                         ? 'font-bold text-fuchsia-blue-300'
//                         : ''
//                     }`}
//                   >
//                     Acoustic Guitars
//                   </Link>
//                 </li>
//                 <li className='text-fuchsia-blue-500 font-light'>
//                   <Link
//                     href='/guitar_strings'
//                     className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                       currentRoute === '/guitar_strings'
//                         ? 'font-bold text-fuchsia-blue-300'
//                         : ''
//                     }`}
//                   >
//                     Strings
//                   </Link>
//                 </li>
//                 <li className='text-fuchsia-blue-500 font-light'>
//                   <Link
//                     href='/account'
//                     className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                       currentRoute === '/account'
//                         ? 'font-bold text-fuchsia-blue-300'
//                         : ''
//                     }`}
//                   >
//                     Account
//                   </Link>
//                 </li>
//                 <li className='text-fuchsia-blue-500 font-light'>
//                   <Link
//                     href='/cart'
//                     className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                       currentRoute === '/cart'
//                         ? 'font-bold text-fuchsia-blue-300'
//                         : ''
//                     }`}
//                   >
//                     Cart
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrClose } from 'react-icons/gr';

// function Header() {
//   const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

//   const router = useRouter();
//   const currentRoute = router.pathname;

//   return (
//     <header
//       className='flex h-20 w-full mx-auto items-center justify-around border-b border-fuchsia-blue-700 bg-code-grey-950 text-fuchsia-blue-500 '
//       alt='logo'
//     >
//       <div className=' text-3xl '>
//         <Link
//           href='/'
//           className={`font-Pacifico text-4xl hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//             currentRoute === '/' ? 'text-fuchsia-blue-300 font-light' : ''
//           }`}
//         >
//           Guitar Shop
//         </Link>
//       </div>

//       {/* MOBILE MENU */}

//       <nav>
//         <section className='MOBILE-MENU flex lg:hidden'>
//           <div
//             className='HAMBURGER-ICON space-y-2'
//             onClick={() => setIsNavOpen(prev => !prev)} // toggle isNavOpen state on click
//           >
//             <GiHamburgerMenu />
//           </div>

//           <div
//             className={
//               isNavOpen
//                 ? 'block absolute w-full h-screen top-0 left-0 bg-white z-10 justify-evenly items-center'
//                 : 'hidden'
//             }
//           >
//             {/* toggle class based on isNavOpen state */}
//             <div
//               className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
//               onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//             >
//               <GrClose />
//             </div>

//             <div className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-Antonio font-light text-xl'>
//               {/* className='items-center space-x-8 font-Antonio font-light text-xl '> */}

//               <div className='text-fuchsia-blue-700'>
//                 <a href='/guitar_electric'>Electric Guitars</a>
//               </div>
//               <div className='text-fuchsia-blue-700'>
//                 <a href='/guitar_acoustic'>Acoustic Guitars</a>
//               </div>
//               <div className='text-fuchsia-blue-700'>
//                 <a href='/guitar_strings'>Strings</a>
//               </div>
//               <div className='text-fuchsia-blue-700'>
//                 <a href='/account'>Account</a>
//               </div>
//               <div className='text-fuchsia-blue-700'>
//                 <a href='/cart'>Cart</a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* DESKTOP MENU */}

//         <div className='DESKTOP-MENU hidden space-x-8 lg:flex'>
//           <div className='items-center space-x-8 font-Antonio font-light text-xl '>
//             <Link
//               href='/guitar_electric'
//               className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                 currentRoute === '/guitar_electric'
//                   ? ' font-bold text-fuchsia-blue-300'
//                   : ''
//               }`}
//             >
//               Electric Guitars
//             </Link>
//             <Link
//               href='/guitar_acoustic'
//               className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                 currentRoute === '/guitar_acoustic'
//                   ? 'font-bold text-fuchsia-blue-300'
//                   : ''
//               }`}
//             >
//               Acoustic Guitars
//             </Link>
//             <Link
//               href='/guitar_strings'
//               className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                 currentRoute === '/guitar_strings'
//                   ? 'font-bold text-fuchsia-blue-300'
//                   : ''
//               }`}
//             >
//               Strings
//             </Link>
//             <Link
//               href='/account'
//               className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                 currentRoute === '/account'
//                   ? 'font-bold text-fuchsia-blue-300'
//                   : ''
//               }`}
//             >
//               Account
//             </Link>
//             <Link
//               href='/cart'
//               className={` hover:text-fuchsia-blue-300 active:text-fuchsia-blue-500 ${
//                 currentRoute === '/cart'
//                   ? 'font-bold text-fuchsia-blue-300'
//                   : ''
//               }`}
//             >
//               Cart
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
