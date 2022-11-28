import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { io, Socket } from "socket.io-client";
import axios, { Axios } from 'axios';
import { ClientToServerEvents, ServerToClientEvents, SocketClientType } from '../types';
import { useState } from 'react';
import dynamic from 'next/dynamic';
// const Text = dynamic(import('../components/text'), {ssr:false})
import Text from '../components/text'
import Link from 'next/link';
import { axiosGet } from '../helpers';
import { signIn, signOut, useSession } from 'next-auth/react';

const socket = io(`${process.env.NEXT_PUBLIC_DEV_WS_URL}`)

export type HomeProps = {
  socket: SocketClientType,
};

const Home: NextPage = () => {

  const {data: session}: any = useSession();
  console.log(session)
  const onClick = async () => {
    signOut()
  }
  const handler = async () => {
    
    const {data} = await axios.post('/api/user', {profile:session?.user})
    console.log(data)
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text socket={socket} />
        {!session ? (
          <button onClick={() => signIn()}>
          Signin wth Google
         </button>
        ): (
          <>
          <p>{session.user?.name}</p>
            <button onClick={onClick}>
              SignOut
            </button>
            <button onClick={handler}>
              Add User
            </button>
          </>
        )}
      </main>
    </div>
  )
}


export default Home
