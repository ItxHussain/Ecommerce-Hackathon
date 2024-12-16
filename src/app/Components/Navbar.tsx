import React from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import {Montserrat} from "next/font/google"

import { HiChevronDown } from "react-icons/hi"
import { FaRegUser } from 'react-icons/fa6'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { IoHeartOutline } from 'react-icons/io5'

const montserrat = Montserrat({ subsets: ['latin'] })

interface Left1 {
    left?: string ,
    Marginleft? : string
    itemml?: string
}

export default function Navbar (props: Left1) {
    const { left, Marginleft, itemml } = props
    return (
        <div>
            <div className="w-[1577px] top-[70px] h-[58px] absolute"> 
                <div className={`w-[187px] h-[58px] left-[38px] absolute flex items-center ${left}`}>
                    <div className={montserrat.className}>
                        <h1 className="font-bold text-2xl tracking-[0.1px] top-[13px]
                        w-[108px] h-8 text-[#252B42] ">Bandage</h1>
                    </div>
                </div>

                <div>
                    <div className="w-[1155px] h-[58px] left-[265px] absolute flex items-center">
                        <div className={montserrat.className}>
                            <ul className={`w-[361px] h-[25px] top-[16.5px] gap-[15px] flex items-center ${Marginleft}`}>
                                <li className="text-[#737373] font-bold text-sm leading-6 text-center tracking-[0.2px] w-[43px] h-[24px]"><a href='/'>Home</a></li>

                                <Menu>
                                    <MenuButton className={"flex items-center w-42"}>
                                        <div className={montserrat.className}>
                                            <h1 className="flex items-center text-sm font-medium leading-[28px] w-[38px] h-[28px]
                                            text-[#252B42] tracking-[0.2px] text-center">Shop</h1>
                                        </div>
                                    <HiChevronDown className="w-6 h-6 ml-2"/>
                                    </MenuButton>
                                        <MenuItems transition className={`flex flex-col w-max rounded-lg ease-out
                                         bg-gray-200 justify-end absolute left-32 top-12 overflow-ellipsis ${itemml}`}>
                                        <MenuItem><a href="/ProductList" className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">ProductList</a></MenuItem>
                                        <MenuItem><a href='/Product1' className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Products</a></MenuItem>
                                        <MenuItem><a href='/About' className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">About</a></MenuItem>
                                        <MenuItem><button className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Rings</button></MenuItem>
                                        <MenuItem><button className="hover:border-y-[1px] border-black m-[1px] rounded-lg text-center">Watches</button></MenuItem>
                                    </MenuItems>
                                </Menu>

                                <li className="text-[#737373] font-bold text-sm leading-6 text-center tracking-[0.2px] w-[45px] h-[24px]">About</li>
                                <li className="text-[#737373] font-bold text-sm leading-6 text-center tracking-[0.2px] w-[33px] h-[24px]">Blog</li>
                                <li className="text-[#737373] font-bold text-sm leading-6 text-center tracking-[0.2px] w-[58px] h-[24px]">Contact</li>
                                <li className="text-[#737373] font-bold text-sm leading-6 text-center tracking-[0.2px] w-[44px] h-[24px]">Pages</li>
                            </ul>
                        </div>

                        <div className='w-[324px] h-[54px] top-[2px] left-[832px] absolute flex items-center ml-28'>
                            <div className='w-[166px] h-[54px] flex items-center gap-4'>
                                <FaRegUser className='w-3 h-3 text-[#23A6F0]'/>
                                <div className={montserrat.className}>
                                    <div className='flex gap-2'>
                                        <a href='' className='text-[#23A6F0] font-bold text-sm leading-6 tracking-[0.2px] text-center'>Login</a>
                                        <h1 className="text-[#23A6F0] font-bold text-sm leading-6 tracking-[0.2px] text-center">/</h1>
                                        <a href='' className="text-[#23A6F0] font-bold text-sm leading-6 tracking-[0.2px] text-center">Register</a>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-9'>

                                <MagnifyingGlassIcon className='w-6 h-6 text-[#23A6F0] ml-6 cursor-pointer hover:opacity-50'/>
                                <MdOutlineLocalGroceryStore className='w-6 h-6 text-[#23A6F0] cursor-pointer hover:opacity-50'/>
                                <h1 className='text-[#23A6F0] font-normal text-xs leading-4 absolute left-[265px]'>1</h1>
                                <IoHeartOutline className='w-6 h-6 text-[#23A6F0] cursor-pointer hover:opacity-50'/>
                                <h1 className='text-[#23A6F0] font-normal text-xs leading-4 absolute left-[320px]'>1</h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}