import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png';
import '@/app/globals.css'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-8 mt-26">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h1 className="text-lg w-3/4 text-blue-500 font-bold">K.C.T Engineering College</h1>
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="kct logo" height={200} width={200} />
                    </Link>
                </div>
                <div className="text-left mb-6 md:mb-0">
                    <h3 className="text-xl text-blue-500 font-bold mb-4">Other institutions under KCT</h3>
                    <ul className="list-disc list-inside blue-markers">
                        <li className="text-white"><a href="#">K.C.T. Pharmacy</a></li>
                        <li className="text-white"><a href="#">K.C.T. Polytechnic (Aided)</a></li>
                        <li className="text-white"><a href="#">K.C.T. B.Ed. College</a></li>
                        <li className="text-white"><a href="#">K.C.T. D.Ed. College</a></li>
                    </ul>
                </div>
                <div className="text-left mb-6 md:mb-0">
                    <h3 className="text-xl text-blue-500 font-bold mb-4">Useful links</h3>
                    <ul className="list-disc list-inside blue-markers">
                        <li className="text-white"><a href="#">VTU Belgaum</a></li>
                        <li className="text-white"><a href="#">AICTE</a></li>
                        <li className="text-white"><a href="#">DTE</a></li>
                        <li className="text-white"><a href="#">AICTE Feedback</a></li>
                        <li className="text-white"><a href="#">AICTE Grievance and Support System</a></li>
                    </ul>
                </div>
                <div className="text-left mb-6 md:mb-0">
                    <h3 className="text-xl text-blue-500 font-bold mb-4">Other Useful Links</h3>
                    <ul className="list-disc list-inside blue-markers">
                        <li className="text-white"><a href="#">Online Grievance</a></li>
                        <li className="text-white"><a href="#">MOOC’s</a></li>
                        <li className="text-white"><a href="#">NPTEL Online Courses</a></li>
                        <li className="text-white"><a href="#">SWAYAM</a></li>
                        <li className="text-white"><a href="#">National Digital Library</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around mt-8'>
                <div>
                    <p>©2017 All rights reserved with kctengineering.edu.in</p>
                </div>
                <div className="flex  space-x-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <h1 className='font-bold text-2xl'>F</h1>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        <h1 className='font-bold text-2xl'>X</h1>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
