import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import { useRouter } from 'next/router';

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli78silh3hv001t7flkz4kx7/master',
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  }
);

function SingleStringPage({ guitarStrings }) {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  console.log('product is', guitarStrings);

  return (
    <div className='flex flex-1 w-full mx-auto bg-fuchsia-blue-300 h-screen '>
      <div className=' flex flex-row gap-20 mt-12  mx-auto'>
        <div>
          <div className='w-[480px] h-[554px] bg-orchid-500'>
            <img
              src={
                'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/kKOmXOO4TvaIv9Vdk1Mn'
              }
            />
          </div>

          <div className='flex flex-row justify-center gap-4 my-8'>
            <div className='w-20 h-20 bg-orchid-700'>11</div>
            <div className='w-20 h-20 bg-orchid-700'>12</div>
          </div>
        </div>

        <div className='w-[600px] h-[666x] bg-orchid-300 mb-8'>
          <div className='text-3xl font-antonio font-semibold tracking-widest'>
            ERNIE BALL REGULAR SLINKY 10-46 GUITAR STRINGS
          </div>
          <div className='text-3xl font-antonio font-bold '>$6.99</div>
          <div> - 1 + </div>
          <div>ADD TO CART</div>
          <div className='font-overpass tracking-wide '>
            <strong>Ernie Ball Super Slinky 9-42</strong> Ernie Ball Super
            Slinky Electric Strings are played by Jimmy Page, Jeff Beck, and
            Angus Young. These strings are precision manufactured to the highest
            standards and most exacting specifications to ensure consistency,
            optimum performance, and long life. Super Slinky wound strings are
            made from nickel plated steel wire wrapped around a hex shaped steel
            core wire. The plain strings are made of specially tempered tin
            plated high carbon steel producing a well balanced tone for your
            guitar.
          </div>
          <div>Gauges .009, .011, .016, .024w, .032, .042</div>
        </div>
      </div>
    </div>
  );
}

export default SingleStringPage;

export async function getStaticProps() {
  console.log('(re-)generating');
  const { guitarStrings } = await hygraph.request(GuitarStrings);

  return {
    props: { guitarStrings },
  };
}
const GuitarStrings = gql`
  {
    guitarStrings {
      name
      price
      slug
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
        markdown
      }
    }
  }
`;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'ernie-ball-regular-slinky-10-46-guitar-strings' } },
    ],
    fallback: false,
  };
}
