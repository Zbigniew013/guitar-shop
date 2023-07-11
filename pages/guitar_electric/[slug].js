// import { GraphQLClient } from 'graphql-request';

// const hygraph = new GraphQLClient(
//   // 'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
//   'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
// );

// export async function getStaticProps({ params }) {
//   const { guitarString } = await hygraph.request(
//     `
//     query GetStringDetail($slug: String!) {
//       guitarString(where: { slug: $slug }) {
//         name
//         specification
//         price
//       }
//     }
//   `,
//     {
//       slug: params.slug,
//     }
//   );

//   return {
//     props: {
//       guitarString,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const { guitarStrings } = await hygraph.request(`
//     {
//       guitarStrings {
//         slug
//         name
//       }
//     }
//   `);

//   return {
//     paths: guitarStrings.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }

// export default ({ guitarString }) => (
//   <>
//     <h1>{guitarString.name}</h1>
//     <p>{guitarString.specification}</p>
//     <p>{guitarString.price}</p>
//   </>
// );

// import { useRouter } from 'next/router';

// function SingleElectricGuitarPage() {
//   const router = useRouter();

//   console.log(router.pathname);
//   console.log(router.query);

//   return (
//     <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
//       <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
//         The Single Electric Guitar Page
//       </h1>
//     </div>
//   );
// }

// export default SingleElectricGuitarPage;

import React from 'react';
import { GraphQLClient } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
  // 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master'
);

export async function getStaticProps({ params }) {
  const { product } = await hygraph.request(
    `
    query ProductPageQuery($slug: String!) {
      product(where: { slug: $slug }) {
        name
        content {
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
      product,
    },
  };
}

export async function getStaticPaths() {
  const { products } = await hygraph.request(`
    {
      products {
        slug
      }
    }
  `);

  return {
    paths: products.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const ProductPage = ({ product }) => (
  <React.Fragment>
    <h1>{product.name}</h1>

    <RichText content={product.content.raw.children} />
  </React.Fragment>
);

export default ProductPage;
