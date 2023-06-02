import { useRouter } from 'next/router';

function SingleElectricGuitarPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div className='flex relative flex-1 max-w-5xl w-full mx-auto bg-stone-100 h-screen '>
      <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
        The Single Electric Guitar Page
      </h1>
    </div>
  );
}

export default SingleElectricGuitarPage;
