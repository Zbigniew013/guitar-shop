import Image from 'next/image';
import { GraphQLClient } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';

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
  return (
    <div className='flex flex-1 w-full mx-auto  min-h-fit '>
      <div className=' flex flex-row gap-20 mt-12  mx-auto'>
        <div>
          <picture>
            <Image
              src={guitarString.imageA.url}
              alt={guitarString.name}
              width={240}
              height={320}
              className='w-[480px] h-[554px] mx-auto object-scale-down'
            />
          </picture>

          <div className='flex flex-row justify-center gap-4 my-8'>
            <div className='w-20 h-20 bg-orchid-100'>
              <Image
                src={guitarString.imageA.url}
                alt={guitarString.name}
                width={240}
                height={320}
                // className='w-[480px] h-[554px] mx-auto object-scale-down'
              />
            </div>
            <div className='w-20 h-20 bg-orchid-100'>
              <Image
                src={guitarString.imageB.url}
                alt={guitarString.name}
                width={240}
                height={320}
                // className='w-[480px] h-[554px] mx-auto object-scale-down'
              />
            </div>
          </div>
        </div>

        <div className='w-[600px] mb-8 h-min'>
          <div className='text-4xl leading-normal font-Antonio font-semibold tracking-widest'>
            {guitarString.name}
          </div>
          <div className='text-3xl font-Antonio font-bold mt-12 text-fuchsia-blue-500 '>
            ${guitarString.price / 100}
          </div>
          <div className='mt-12'> - 1 + </div>
          <div className='mt-12'>ADD TO CART</div>
          <div className='font-overpass tracking-wide mt-12 '>
            <RichText content={guitarString.description.raw.children} />
          </div>
          <div className='mt-12'>{guitarString.specification}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleStringPage;
