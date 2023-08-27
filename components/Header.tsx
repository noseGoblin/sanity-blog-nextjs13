import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src='/jay-logo_crop.webp'
            alt='JAY logo'
            width={50}
            height={50}
          />
        </Link>
        <h1>JAY</h1>
      </div>

      <div>
        <Link
          href='https://www.papareact.com/universityofcode'
          className='px-5 py-5 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'
        >
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
}

export default Header;
