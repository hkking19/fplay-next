import React, { FC } from 'react'

const AddToPlaylistIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.75C5.25 8.28587 5.43437 7.84075 5.76256 7.51256C6.09075 7.18437 6.53587 7 7 7H28C28.4641 7 28.9092 7.18437 29.2374 7.51256C29.5656 7.84075 29.75 8.28587 29.75 8.75C29.75 9.21413 29.5656 9.65925 29.2374 9.98744C28.9092 10.3156 28.4641 10.5 28 10.5H7C6.53587 10.5 6.09075 10.3156 5.76256 9.98744C5.43437 9.65925 5.25 9.21413 5.25 8.75ZM5.25 17.5C5.25 17.0359 5.43437 16.5908 5.76256 16.2626C6.09075 15.9344 6.53587 15.75 7 15.75H28C28.4641 15.75 28.9092 15.9344 29.2374 16.2626C29.5656 16.5908 29.75 17.0359 29.75 17.5C29.75 17.9641 29.5656 18.4092 29.2374 18.7374C28.9092 19.0656 28.4641 19.25 28 19.25H7C6.53587 19.25 6.09075 19.0656 5.76256 18.7374C5.43437 18.4092 5.25 17.9641 5.25 17.5ZM5.25 26.25C5.25 25.7859 5.43437 25.3408 5.76256 25.0126C6.09075 24.6844 6.53587 24.5 7 24.5H17.5C17.9641 24.5 18.4092 24.6844 18.7374 25.0126C19.0656 25.3408 19.25 25.7859 19.25 26.25C19.25 26.7141 19.0656 27.1592 18.7374 27.4874C18.4092 27.8156 17.9641 28 17.5 28H7C6.53587 28 6.09075 27.8156 5.76256 27.4874C5.43437 27.1592 5.25 26.7141 5.25 26.25Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M28 35C29.8565 35 31.637 34.2625 32.9497 32.9497C34.2625 31.637 35 29.8565 35 28C35 26.1435 34.2625 24.363 32.9497 23.0503C31.637 21.7375 29.8565 21 28 21C26.1435 21 24.363 21.7375 23.0503 23.0503C21.7375 24.363 21 26.1435 21 28C21 29.8565 21.7375 31.637 23.0503 32.9497C24.363 34.2625 26.1435 35 28 35ZM28.875 25.375C28.875 25.1429 28.7828 24.9204 28.6187 24.7563C28.4546 24.5922 28.2321 24.5 28 24.5C27.7679 24.5 27.5454 24.5922 27.3813 24.7563C27.2172 24.9204 27.125 25.1429 27.125 25.375V27.125H25.375C25.1429 27.125 24.9204 27.2172 24.7563 27.3813C24.5922 27.5454 24.5 27.7679 24.5 28C24.5 28.2321 24.5922 28.4546 24.7563 28.6187C24.9204 28.7828 25.1429 28.875 25.375 28.875H27.125V30.625C27.125 30.8571 27.2172 31.0796 27.3813 31.2437C27.5454 31.4078 27.7679 31.5 28 31.5C28.2321 31.5 28.4546 31.4078 28.6187 31.2437C28.7828 31.0796 28.875 30.8571 28.875 30.625V28.875H30.625C30.8571 28.875 31.0796 28.7828 31.2437 28.6187C31.4078 28.4546 31.5 28.2321 31.5 28C31.5 27.7679 31.4078 27.5454 31.2437 27.3813C31.0796 27.2172 30.8571 27.125 30.625 27.125H28.875V25.375Z" fill="currentColor"/>
    </svg>
  )
}

export default AddToPlaylistIcon