// function AcousticGuitarPage() {
//   return (
//     <div className='flex flex-col flex-1 max-w-5xl w-full mx-auto bg-stone-100'>
//       <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
//         The Acoustic Guitars Page
//       </h1>
//     </div>
//   );
// }

// export default AcousticGuitarPage;

// import Link from 'next/link';
// import { GraphQLClient } from 'graphql-request';

// export async function getStaticProps() {
//   const hygraph = new GraphQLClient(
//     'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
//   );

//   const { guitarStrings } = await hygraph.request(
//     `
//       {
//         guitarStrings(first: 18) {
//           slug
//           name
//         }
//       }
//     `
//   );

//   return {
//     props: {
//       guitarStrings,
//     },
//   };
// }

// export default ({ guitarStrings }) => {
//   console.log('guitarStrings:', guitarStrings);

//   return guitarStrings.map(({ slug, name }) => (
//     <Link key={slug} href={`/guitar_acoustic/${slug}`}>
//       <div>{name}</div>
//     </Link>
//   ));
// };

import React from 'react';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-6xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <button
                  className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                  onClick={() => setShowModal(false)}
                >
                  <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                    ×
                  </span>
                </button>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
