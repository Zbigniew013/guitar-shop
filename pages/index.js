import main_foto from '../public/main_page_image.jpg';
import Image from 'next/image';

function HomePage() {
  return (
    <>
      <div className='flex flex-col flex-1 relative max-w-5xl max-h-screen mx-auto bg-stone-100 '>
        <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
          Main Page
        </h1>
      </div>
    </>
    // <>
    //   <div className='flex relative flex-1 max-w-8xl w-full mx-auto'>
    //     {/* <Image
    //       src={main_foto}
    //       width={1980}
    //       height={1320}
    //       className='object-cover w-full h-screen'
    //     /> */}
    //   </div>
    // </>
  );
}
export default HomePage;
