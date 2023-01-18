import { ArrowLeftIcon, ArrowUpIcon, ArrowUturnLeftIcon, BookmarkIcon, CheckIcon, EllipsisVerticalIcon, Square2StackIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import SongPlaying from 'components/icon/playing'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { HeaderProps } from 'types/header'

const emoji = require('node-emoji')

const RoomHeader: FC<HeaderProps> = ({session,room_id}) => {

    // to check for exisiting url in clipbord - pending (asks for permission for checking text in clipboard)
    function checkClipboardForCode() {
        if(typeof navigator === 'object' && navigator) {
              return navigator.clipboard.readText().then(
                (cliptext: string) => cliptext === window.location.href ? true: false
            );
        }
        return false;
    }

    const [playing, setPlaying] = useState<boolean>(false) // to redux
    const [upvotes, setUpvotes] = useState<number>(3) // to redux

    // may be to redux or cancelled or from redis
    const [upvoted, setUpvoted] = useState<boolean>(false) // should be controlled from backend
    const [copied, setCopied] = useState<boolean>(false) // should depend on clipboard

    const onCopyCodeHandler = async () => {
        await navigator.clipboard.writeText(window.location.href);
        await setCopied(true);
    }

    const onManipulateUpvotes = () => {
        setUpvoted(upvoted ? false : true);
        setUpvotes(upvoted ? upvotes-1 : upvotes+1);
    }

  return (
    <header className='sticky top-0 h-[72px] py-4 flex flex-row justify-between items-center bg-opacity-50 backdrop-blur backdrop-filter border-t-0 border-x-0 border-solid border-[#7A7A7A] z-30' >
        <div className='lg:w-80 inline-flex items-center justify-around text-white'>
            <Link href="/">
                <a className='p-4 rounded-full transition duration-300 bg-opacity-25 hover:bg-red-600 active:bg-red-500 cursor-pointer hover:-translate-x-1'>
                    <ArrowLeftIcon className='w-7 h-6' />
                </a>
            </Link>
            <span 
                className={` ${!copied && "hover:bg-[#434343] active:bg-[#343434]"}
                    p-4 rounded-full transition duration-300 cursor-pointer`}
                onClick={onCopyCodeHandler}
            >    
                <Square2StackIcon className='w-7 h-6' />
                {copied && <CheckIcon className='w-4 h-4' />}
            </span>
            <span 
                className={` ${upvoted ? "text-white/50 bg-white/30" : "bg-white/5"}
                    w-20 px-4 py-1 inline-flex gap-3 items-center rounded-full border-solid border-white/10 cursor-pointer`}
                onClick={onManipulateUpvotes}    
            >
                <ArrowUpIcon className='w-6 h-6' />
                <p>{upvotes}</p>
            </span>
        </div>
        <div className='inline-flex flex-0 items-center justify-center gap-5'>
            <span className='inline-flex justify-center items-center w-14 h-14 text-2xl p-4'>
                {emoji.get(":fire:")}
            </span>
            <span className='inline-flex flex-col items-center'>
                <h2>
                    Music Room
                </h2>
                <h6 className='font-medium'>
                    {room_id}
                </h6>
            </span>
            <h4 className='px-3 py-2 rounded-full transition duration-500 bg-white text-black'>
                Public
            </h4>
            <span>
                {playing ? <SongPlaying /> : <div />}
            </span>
        </div>
        <div className='w-60 inline-flex items-center justify-around text-white'>
            {/* <span className='p-4 rounded-full transition duration-300 hover:bg-[#434343] active:bg-[#343434] hover:cursor-pointer'>
                <EllipsisVerticalIcon className='w-7 h-6' />
            </span> */}
            <span className='p-4 rounded-full hover:bg-[#434343] active:bg-[#343434] hover:cursor-pointer'>
                <BookmarkIcon className='w-7 h-6' />
            </span>
            <span className='inline-flex items-center p-4 rounded-full cursor-default'>
                <Image
                    src={session && session.user.image}
                    alt="Profile"
                    height={25}
                    width={25}
                    className='rounded-full'
                />
            </span>
        </div>
   </header>  
  )
}

export default RoomHeader