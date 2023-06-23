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

function SingleStringPage({}) {
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
          <div className='text-3xl font-roboto font-bold '>$6.99</div>
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

      {/* <div className='flex bg-stone-300'>
        <picture className=' '>
          <Image
            src={
              'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/kKOmXOO4TvaIv9Vdk1Mn'
            }
            alt='ERNIE BALL SUPER SLINKY 9-42 GUITAR STRINGS'
            width={420}
            height={420}
            className='h-180 w-160 mx-auto object-scale-down'
          />
        </picture>

        <div className='flex justify-center'>
          <Image
            src={
              'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/kKOmXOO4TvaIv9Vdk1Mn'
            }
            alt='ERNIE BALL SUPER SLINKY 9-42 GUITAR STRINGS'
            width={420}
            height={420}
            className='h-20 w-20 object-scale-down'
          />

          <Image
            src={
              'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/lI9u8FO6SCKDYJ1g0LbV'
            }
            alt='ERNIE BALL SUPER SLINKY 9-42 GUITAR STRINGS'
            width={420}
            height={420}
            className='h-20 w-20 object-scale-down'
          />
        </div>

        <div className='flex  bg-stone-500'>
          <title className=''>
            ERNIE BALL SUPER SLINKY 9-42 GUITAR STRINGS
          </title>
        </div>
      </div> */}
    </div>
  );
}

export default SingleStringPage;

// export async function getStaticProps() {
//   console.log('(re-)generating');
//   const { guitarStrings } = await hygraph.request(GuitarStrings);

//   return {
//     props: {
//       guitarStrings,
//     },
//     revalidate: 10,
//   };
// }
