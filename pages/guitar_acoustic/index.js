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

import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
  );

  const { guitarStrings } = await hygraph.request(
    `
      {
        guitarStrings(first: 18) {
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      guitarStrings,
    },
  };
}

export default ({ guitarStrings }) => {
  console.log('guitarStrings:', guitarStrings);

  return guitarStrings.map(({ slug, name }) => (
    <Link key={slug} href={`/guitar_acoustic/${slug}`}>
      <div>{name}</div>
    </Link>
  ));
};
