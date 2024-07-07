import { useCallback, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart,MdMenuOpen } from "react-icons/md";

export default function Navbar() {
    return (
        <>
            <div className='bg-white md:bg-primaryDark'>
                <div className='container  justify-between items-center py-3 hidden md:flex'>
                    <div className='flex gap-8 items-center'>
                        <h2 className='text-white text-[40px]'>Logo</h2>
                        <div className='relative'>
                            <input type="text" className="px-4 py-3 rounded-sm w-[300px]" placeholder='Search...' />
                        </div>

                    </div>

                    <div className='text-white flex gap-6 text-[26px]'>
                        <FaRegUser />

                        <div className='relative'>
                    <MdOutlineShoppingCart />
                    <div className='bg-red-600 w-[20px] h-[20px] grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px]'>0</div>
                    </div>
        <MdMenuOpen/>
                    </div>
                    
                </div>

                {/* visible for tabs and mobiles */}

                <div className='container flex  justify-between items-center text-[26px] py-4 md:hidden'>
        <div>
        <MdMenuOpen/>
        {/* <div>
        <ul className='container flex flex-col gap-2 uppercase py-4 text-black absolute bg-gray-200 mt-4 md:hidden '>
                    <a className="hover:underline underline-offset-4" href="/">HOME</a>
                    <a className="hover:underline underline-offset-4" href="/">SHOPE</a>
                    <a className="hover:underline underline-offset-4" href="/">BLOG</a>
                    <a className="hover:underline underline-offset-4" href="/">PAGES</a>
                    <a className="hover:underline underline-offset-4" href="/">ABOUT</a>
                    <a className="hover:underline underline-offset-4" href="/">CONTACT</a>

                </ul> 
        </div> */}
        </div>
        <div>Logo</div>
        <div className='relative'>
        <MdOutlineShoppingCart />
        <div className='bg-red-600 w-[20px] h-[20px] text-white grid place-items-center text-[12px] rounded-full absolute right-[-10px] top-[15px] '>0</div>
        </div>
                </div>
            </div>

            <div className='bg-primary hidden md:block '>
                <ul className='container flex gap-8 uppercase py-4 text-white '>
                    <a className="hover:underline underline-offset-4" href="/">HOME</a>
                    <a className="hover:underline underline-offset-4" href="/">SHOPE</a>
                    <a className="hover:underline underline-offset-4" href="/">BLOG</a>
                    <a className="hover:underline underline-offset-4" href="/">PAGES</a>
                    <a className="hover:underline underline-offset-4" href="/">ABOUT</a>
                    <a className="hover:underline underline-offset-4" href="/">CONTACT</a>

                </ul>

            </div>
        </>
    )
}
