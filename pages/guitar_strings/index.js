import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import { useState } from 'react';
import { paginate } from '@/helpers/paginate';
import Pagination from '@/components/pagination';

function StringsPage({ guitarStrings }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = page => {
    setCurrentPage(page);
  };

  const paginatedStrings = paginate(guitarStrings, currentPage, pageSize);

  return (
    <>
      <div className='flex flex-1 w-full mx-auto min-h-screen '>
        <ul className='grid grid-cols-4 gap-4 content-start justify-start '>
          {paginatedStrings.map(
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
      <div>
        <Pagination
          items={guitarStrings.length} // 18
          currentPage={currentPage} // 1
          pageSize={pageSize} // 8
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}

export default StringsPage;

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
  );

  const GuitarStrings = gql`
    {
      guitarStrings(first: 18) {
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

  const { guitarStrings } = await hygraph.request(GuitarStrings);

  return {
    props: {
      guitarStrings,
    },
  };
}
