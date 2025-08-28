'use client';

import Image from 'next/image'
import React from 'react'
import NavbarMenu from './Navbar';
import SectionLayout from '../SectionLayout';
import Link from 'next/link';

const LayoutHeader = () => {

  return (
    <SectionLayout>
      <div
        className='w-full flex items-stretch bg-white'
      >
        <div
          className='w-[120px] p-[15px] bg-wdhomes-color-primary'
        >
          <Image
            alt='Logo'
            src={"/nextjs-images/WD-Homes-Logo.png"}
            width={500}
            height={500}
            className='w-full'
          />
        </div>
        <div
          className='w-full flex flex-col'
        >
          <NavbarMenu />
          <div
            className='bg-black flex items-center justify-between text-white py-[10px] px-[25px] font-medium'
          >
            <p>Built on Relationships</p>
            <Link
              href={"/contact-sales/"}
            >Contact Us</Link>
          </div>
        </div>
      </div>
    </SectionLayout >
  )
}

export default LayoutHeader