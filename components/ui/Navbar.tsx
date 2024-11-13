'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/images/logo.png'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 fixed w-full z-50 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="kct logo" height={55} width={55} />
          <span className="ml-2 text-xl font-bold">K.C.T</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-700 hover:text-primary">
                Blogs
              </Link>
            </li>
            
            {/* Desktop Dropdown */}
            <li className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary">
                Department
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="py-1">
                  
                  <li ><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/electronics-and-communication-engineering">Electronics &amp; Communication Engineering</Link></li>
                    <li ><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/computer-science-and-engineering">Computer Science &amp; Engineering</Link></li>
                    <li ><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/mechanical-engineering">Mechanical Engineering</Link></li>
                    <li ><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/civil-engineering">Civil Engineering</Link></li>
                    <li ><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/allied-science-humanities">Allied Science And Humanities</Link></li>
                  
                </ul>
              </div>
            </li>
            
            <li><Link href="/admissions" className="text-gray-700 hover:text-primary" >Admissions</Link></li>

            <li className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary">
                Additional
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="py-1">
                  
                  <li><Link href="/aicte-approvals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >AICTE Approvals</Link></li>
                <li><Link href="/cicc-committee-and-sgrc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >CICC Committee and SGRC</Link></li>
                <li><Link href="/obc-sc-st-cell" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Grievance Redressal & OBC/SC/ST CELL</Link></li>
                <li><Link href="/sexual-harassment-cell" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Sexual Harassment CELL</Link></li>
                <li><Link href="/mandatory-disclosure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >Mandatory Disclosure</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-700 hover:text-primary">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/placement" className="text-gray-700 hover:text-primary">
                Placment
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-700 hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed overflow-scroll inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-6 ">
            <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="kct logo" height={45} width={45} />
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="space-y-2">
              <span className="block text-gray-700">Department</span>
              <ul className="pl-4 space-y-2">
              <li ><Link className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)} href="/electronics-and-communication-engineering">Electronics &amp; Communication Engineering</Link></li>
                    <li ><Link className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)} href="/computer-science-and-engineering">Computer Science &amp; Engineering</Link></li>
                    <li ><Link className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)} href="/mechanical-engineering">Mechanical Engineering</Link></li>
                    <li ><Link className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)} href="/civil-engineering">Civil Engineering</Link></li>
                    <li ><Link className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)} href="/allied-science-humanities">Allied Science And Humanities</Link></li>
                
              </ul>
            </li>
            <li>
              <Link href="/gallery" className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/placement" className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}>
                Placment
              </Link>
            </li>

            <li className="space-y-2">
              <span className="block text-gray-700">Additional</span>
              <ul className="pl-4 space-y-2">
              <li><Link href="/aicte-approvals" className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)}  >AICTE Approvals</Link></li>
                <li><Link href="/cicc-committee-and-sgrc" className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)}  >CICC Committee and SGRC</Link></li>
                <li><Link href="/obc-sc-st-cell" className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)}  >Grievance Redressal & OBC/SC/ST CELL</Link></li>
                <li><Link href="/sexual-harassment-cell" className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)}  >Sexual Harassment CELL</Link></li>
                <li><Link href="/mandatory-disclosure" className="block text-gray-600 hover:text-primary" onClick={() => setIsSidebarOpen(false)}  >Mandatory Disclosure</Link></li>
                
              </ul>
            </li>

            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block text-gray-700 hover:text-primary"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;