import Link from 'next/link';
import React from 'react'
import './navbar.css';
import { Button } from './ui/button';
import { ClerkProvider,SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import CrateXLogo from './image/CrateX-removebg-preview.png'; // adjust path if needed


export default function Navbar() {
  return (

    <div id='mainnav' >
      <ClerkProvider>
            <div >
              <ul className='navs'  style={{display:'flex',flexDirection:'row',listStyleType:'none',justifyContent:'space-around',color:'black',paddingBottom:'16px',paddingTop:'16px'}}>
              <li className='bar'><Image src={CrateXLogo} alt='error' height={100} width={50}></Image></li>
              <li className='bar'><Link href="/">Home</Link></li>
              <li className='bar'><Link href="/create">Create</Link></li>
              <li className='bar'><Link href="/admin">Admin</Link></li>
              </ul>
            </div>
            <div id='buttons'>   
            <ul className='navs'  style={{display:'flex',flexDirection:'row',listStyleType:'none',justifyContent:'space-around',color:'black',paddingBottom:'16px',paddingTop:'16px'}}>
              <Button className="cart"><Link href="/login">Cart</Link></Button>
            
            
              <div id='clerkbutton'>
                 <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
            </ul>
            </div>
            </ClerkProvider>
    </div>
  )
}

