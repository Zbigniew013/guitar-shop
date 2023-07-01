import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master',
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  }
);

const GuitarStrings = gql`
  {
    guitarStrings(first: 20) {
      id
      name
      price
      specification
      imageA {
        url
      }
      slug
    }
  }
`;

function StringsPage({ guitarStrings }) {
  return (
    <div className='flex relative flex-1  w-full mx-auto bg-silver-100 h-screen '>
      <ul className='grid grid-cols-4 gap-4'>
        {guitarStrings.map(
          ({ id, name, imageA, specification, price, slug }) => {
            return (
              <li key={id}>
                <Link href={`/guitar_strings/${slug}`}>
                  <div className=' bg-white p-3 text-center'>
                    <picture>
                      <Image
                        src={imageA.url}
                        alt={name}
                        width={240}
                        height={320}
                        className='h-80 w-60 mx-auto object-scale-down'
                      />
                    </picture>
                    <h2 className='font-bold text-2xl px-4 '>{name}</h2>
                    <p className=' font-light p-4'>{specification}</p>
                    <p className='text-amber-500 font-bold px-4'>{price}</p>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default StringsPage;

export async function getServerSideProps() {
  const { guitarStrings } = await hygraph.request(GuitarStrings);

  return {
    props: {
      guitarStrings,
    },
  };
}
