import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import { useState } from 'react';
import { paginate } from '@/helpers/paginate';
import Pagination from '@/components/pagination';

function StringsPage({ guitarStrings }) {
  const [currentPage, setCurrentPage] = useState(1);
  let pageSize = 4;

  const onPageChange = page => {
    setCurrentPage(page);
  };

  const paginatedStrings = paginate(guitarStrings, currentPage, pageSize);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className=''>
        <ul className='grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-start mb-8 '>
          {paginatedStrings.map(
            ({ id, name, imageA, specification, price, slug }) => {
              return (
                <li key={id} className=''>
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
                      <h2 className='font-Antonio font-light text-2xl px-4 '>
                        {name}
                      </h2>
                      <p className='font-Antonio font-light p-4'>
                        {specification}
                      </p>
                      <p className='font-Antonio font-normal text-xl text-fuchsia-blue-500  px-4'>
                        ${price / 100}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className='flex mb-8 justify-center'>
        <Pagination
          items={guitarStrings.length} // 18
          currentPage={currentPage} // 1
          pageSize={pageSize} // 8
          onPageChange={onPageChange}
        />
      </div>
    </div>
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
