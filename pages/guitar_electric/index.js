// import Link from 'next/link';
// import { GraphQLClient } from 'graphql-request';

// export async function getStaticProps() {
//   const hygraph = new GraphQLClient(
//     // 'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
//     'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
//   );

//   const { guitarStrings } = await hygraph.request(
//     `
//       {
//         guitarStrings {
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

// export default ({ guitarStrings }) =>
//   guitarStrings.map(({ slug, name }) => (
//     <Link key={slug} href={`/guitar_electric/${slug}`}>
//       <div>{name}</div>
//     </Link>
//   ));

function ElectricGuitarPage() {
  return (
    <div className='flex flex-col relative flex-1 max-w-5xl w-full mx-auto bg-stone-100'>
      <h1 className=' text-3xl font-bold text-center underline text-red-400 '>
        The Electric Guitars Page
      </h1>
    </div>
  );
}

export default ElectricGuitarPage;
