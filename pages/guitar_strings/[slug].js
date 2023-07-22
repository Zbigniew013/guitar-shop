import Image from 'next/image';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Cart } from '@/components/cart';
import { Quanitity } from '@/components/quanitity';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
);

export async function getStaticProps({ params }) {
  const { guitarString } = await hygraph.request(
    `
    query GetStringDetail($slug: String!) {
      guitarString(where: { slug: $slug }) {
        name
        price
        specification
        stock
        id
        imageA {
          url
        }
        imageB {
          url
        }
        description {
          raw
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      guitarString,
    },
  };
}

export async function getStaticPaths() {
  const { guitarStrings } = await hygraph.request(`
      {
        guitarStrings(first: 18) {
          slug
          name
        }
      }
    `);

  return {
    paths: guitarStrings.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

function SingleStringPage({ guitarString }) {
  const [image, setImage] = useState(guitarString.imageA.url);
  const [showModal, setShowModal] = useState(false);

  const handleClick = index => {
    const imageSlider = index;
    setImage(imageSlider);
  };

  return (
    <div className='flex flex-1 w-full mx-auto min-h-fit '>
      <div className=' flex items-center lg:flex-row  flex-col lg:gap-14 md:mt-8 mt-4  mx-auto'>
        <div>
          <button>
            <Image
              src={image}
              alt={guitarString.name}
              width={440}
              height={480}
              className='w-[440px] h-[480px] mx-auto object-scale-down cursor-zoom-in'
              type='button'
              onClick={() => setShowModal(true)}
            />
          </button>

          {showModal ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none'>
                <div className='relative'>
                  <button
                    className='absolute top-0 right-2 md:right-8 text-justify h-24 w-24 z-30 opacity-50'
                    onClick={() => setShowModal(false)}
                  >
                    <div className='absolute text-5xl md:text-7xl text-code-grey-800 bg-white rounded-full'>
                      <IoMdCloseCircleOutline />
                    </div>
                  </button>

                  <div className='relative p-6 flex-auto'>
                    <Image
                      src={image}
                      alt={guitarString.name}
                      width={240}
                      height={320}
                      className=' w-screen md:h-screen md:w-full mx-auto  '
                    />
                  </div>
                </div>
              </div>
              <div className='opacity-75 fixed inset-0 z-10 bg-black '></div>
            </>
          ) : null}

          <div className='flex flex-row justify-center gap-8 my-4 lg:my-8'>
            <div className='w-20 h-20 bg-orchid-100'>
              <Image
                src={guitarString.imageA.url}
                alt={guitarString.name}
                width={240}
                height={320}
                className='transition duration-300 ease-in-out hover:scale-125 cursor-zoom-in'
                onClick={() => handleClick(guitarString.imageA.url)}
              />
            </div>

            <div className='w-20 h-20 bg-orchid-100 '>
              <Image
                src={guitarString.imageB.url}
                alt={guitarString.name}
                width={240}
                height={320}
                className='transition duration-300 ease-in-out hover:scale-125 cursor-zoom-in'
                onClick={() => handleClick(guitarString.imageB.url)}
              />
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[600px] mb-8 h-min'>
          <div className='text-3xl mt-4 mx-2 lg:text-4xl lg:leading-normal font-Antonio font-semibold tracking-widest'>
            {guitarString.name}
          </div>
          <div className='text-3xl font-Antonio font-bold mx-2 mt-6 lg:mt-12 text-fuchsia-blue-500 tracking-wider'>
            $ {guitarString.price / 100}
          </div>

          <Quanitity />
          <Cart />

          <div className='font-overpass tracking-wide  mx-2 mt-6 lg:mt-12'>
            <RichText content={guitarString.description.raw.children} />
          </div>
          <div className=' mx-2 mt-6 lg:mt-12'>
            {guitarString.specification}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStringPage;
