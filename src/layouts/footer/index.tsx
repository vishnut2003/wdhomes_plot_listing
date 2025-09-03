import React from 'react'
import SectionLayout from '../SectionLayout'
import { RiArrowRightLongLine, RiDoubleQuotesL } from '@remixicon/react'
import Link from 'next/link'
import FooterWidgets from './FooterWidgets'
import FooterBottom from './FooterBottom'

const LayoutFooter = () => {
  return (
    <div
      className='pt-[30px]'
    >
      <div>
        <SectionLayout>
          <div
            className='w-full'
          >
            <div
              className='bg-wdhomes-color-primary text-white py-[30px] px-[50px] flex items-center'
            >

              <div
                className='w-full'
              >
                <div
                  className='flex items-center gap-[15px]'
                >
                  <p
                    className='text-[97px] font-black'
                  >100%</p>
                  <div>
                    <p
                      className='text-[40px] font-semibold leading-[40px]'
                    >committed <br />to your satisfaction</p>
                  </div>
                </div>
              </div>

              <div
                className='w-[70%] space-y-[20px]'
              >
                <div
                  className='flex items-start gap-[10px]'
                >
                  <p
                    className='w-[40px]'
                  >
                    <RiDoubleQuotesL
                      size={20}
                    />
                  </p>

                  <p>-We loved the entire experience of watching our family home get built. The team really knew how to cater to our every want and need. I looked forward to every weekly update.</p>
                </div>

                <div
                  className='flex items-center justify-between pl-[35px]'
                >
                  <p>- Cassandra L., Orlando, FL</p>
                  <Link
                    href={"#"}
                    className='flex items-center gap-[10px] font-semibold'
                  >
                    <p>Learn More</p>
                    <RiArrowRightLongLine
                      size={20}
                    />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </SectionLayout>
      </div>

      <div>
        <SectionLayout>
          <div
            className='flex items-center justify-end w-full py-[30px]'
          >
            <Link
              href={"tel:+918130377070"}
              className=' text-[33px] font-black'
            >815-WD-HOMES</Link>
          </div>
        </SectionLayout>
      </div>

      <FooterWidgets/>

      <FooterBottom/>

    </div>
  )
}

export default LayoutFooter