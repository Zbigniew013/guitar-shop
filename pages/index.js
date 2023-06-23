import main_foto from '../public/main_page_image.jpg';
import Image from 'next/image';

function HomePage() {
  return (
    <>
      {/* <div className='bg-code-grey-950 static'>
        <picture>
          <Image
            src={main_foto}
            alt={main_foto}
            className='w-screen h-screen object-cover'
          />
        </picture>
      </div> */}
      <div className='flex flex-1 max-w-8xl'>
        <Image
          src={main_foto}
          width={1980}
          height={1320}
          className='object-cover w-full h-screen'
        />
        <title className='text-5xl text-fuchsia-blue-600'>Guitar Shop</title>
      </div>
    </>
  );
}
export default HomePage;
