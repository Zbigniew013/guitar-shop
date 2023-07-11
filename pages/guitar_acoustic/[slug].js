// function SingleAcousticGuitarPage() {
//   return (
//     <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
//       <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
//         The Single Acoustic Guitar Page
//       </h1>
//     </div>
//   );
// }

// export default SingleAcousticGuitarPage;

import { GraphQLClient } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
);

export async function getStaticProps({ params }) {
  const { guitarStrings } = await hygraph.request(
    `
    query GetStringDetail($slug: String!) {
      guitarStrings(where: {slug: $slug}) {
        name
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
        price
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      guitarStrings,
    },
  };
}

export async function getStaticPaths() {
  const { guitarStrings } = await hygraph.request(`
    {
      guitarStrings {
        slug
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

const content = {
  children: [
    {
      type: 'paragraph',
      children: [
        {
          bold: true,
          text: 'Ernie Ball Regular Slinky 10-46',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: 'Ernie Ball Regular Slinky Electric Strings are our top selling set, and are favored by many musicians around the globe. Regular Slinky strings are played by Eric Clapton, John Mayer, Steve Vai and legions of guitar players worldwide. These strings are precision manufactured to the highest standards and most exacting specifications to ensure consistency, optimum performance, and long life. Regular Slinky wound strings are made from nickel plated steel wire wrapped around a hex shaped steel core wire. The plain strings are made of specially tempered tin plated high carbon steel producing a well balanced tone for your guitar.',
        },
      ],
    },
  ],
};

const SingleAcousticGuitarPage = ({ guitarStrings }) => {
  console.log('guitarStrings:', guitarStrings);

  return (
    <>
      <h1>{guitarStrings.name}</h1>
      <RichText
        content={content}
        // renderers={{
        //   p: ({ children }) => <p className='font-normal'>{children}</p>,
        //   bold: ({ children }) => <strong>{children}</strong>,
        // }}
      />
      <p>{guitarStrings.price}</p>
    </>
  );
};
export default SingleAcousticGuitarPage;
