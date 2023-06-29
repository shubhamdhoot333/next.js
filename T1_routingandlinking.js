'use client'
import Link from 'next/link';
// import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Home() {
  const router=useRouter()
  const navigation=(name)=>{
    router.push(name);
  }
  const [name,setName]=useState("shubham");
  const welcome=()=>{
   setName("shu");
  }
  return (
    <main >
      Home {name}
      <button onClick={()=>welcome()}>click here </button>
      <Link href="/login">Go to login page </Link><br/>
      <Link href="/about">Go to about page </Link><br/><br/>
      <button onClick={()=>navigation("/login")}>login</button>
      <button onClick={()=>navigation("/about")}>About</button>
      
    </main>
  )
}
