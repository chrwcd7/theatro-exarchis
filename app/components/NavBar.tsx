'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import logo from '../../public/exarchis_logo.jpg';

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (route: string) => pathname === route;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-black w-full flex flex-col justify-center items-center py-4 sm:flex-row`}>
      <div className="flex flex-row gap-4">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={100} height={100} className="mb-6 sm:mb-0" />
        </Link>
        <button className="sm:hidden text-white" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <NavigationMenu className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <NavigationMenuList className="flex flex-col items-start sm:flex-row sm:ml-12">
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/about-us') ? 'bg-blue-500' : ''}`}
                aria-label="About Us"
              >
                Ποιοι ειμαστε
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/theater" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/theater') ? 'bg-blue-500' : ''}`}
                aria-label="Theater"
              >
                Θεατρο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/news') ? 'bg-blue-500' : ''}`}
                aria-label="News"
              >
                Νεα
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/contact-us') ? 'bg-blue-500' : ''}`}
                aria-label="Contact Us"
              >
                Επικοινωνια
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/archive" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/archive') ? 'bg-blue-500' : ''}`}
                aria-label="Archive"
              >
                Αρχειο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
