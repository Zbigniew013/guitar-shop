// function StringsPage() {
//   return (
//     <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
//       <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
//         The Strings Page
//       </h1>
//     </div>
//   );
// }
// export default StringsPage;

import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

const GuitarStrings = gql`
  {
    guitarStrings {
      id
      name
      price
      slug
      specification
      stock
      imageA {
        url
      }
    }
  }
`;

function StringsPage({ guitarStrings }) {
  return (
    <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
      <ul className='grid grid-cols-4 mx-auto gap-5'>
        {guitarStrings.map(({ id, name, imageA, description, price }) => {
          return (
            <li key={id}>
              <div className=' bg-white p-3'>
                <picture>
                  <Image
                    src={imageA.url}
                    alt={name}
                    width={240}
                    height={320}
                    className='h-80 w-60 object-scale-down'
                  />
                </picture>
                <h2 className='font-bold text-2xl px-4 '>{name}</h2>
                <p className='w-60 font-light p-4'>{description}</p>
                <p className='text-amber-500 font-bold px-4'>{price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StringsPage;

export async function getStaticProps() {
  const { guitarStrings } = await hygraph.request(GuitarStrings);

  return {
    props: {
      guitarStrings,
    },
  };
}
