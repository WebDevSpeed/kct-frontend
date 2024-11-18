'use client'

import React, { useState } from 'react';
import Image from 'next/image';

// Import images from the public folder
import img1 from '@/public/images/img1.jpg';
import img2 from '@/public/images/img2.jpg';
import img3 from '@/public/images/img3.jpg';
import img4 from '@/public/images/img4.jpg';
import img5 from '@/public/images/img5.jpg';
import img6 from '@/public/images/img6.jpg';
import img7 from '@/public/images/img7.jpg';
import img8 from '@/public/images/img8.jpg';

// Group images into two sets of 4
const imagesGroup1 = [img1, img2, img3, img4];
const imagesGroup2 = [img5, img6, img7, img8];

const Page: React.FC = () => {
  // State to control the modal visibility and the images in the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<typeof imagesGroup1>([]); // Array of images to show in the modal
  const [modalIndex, setModalIndex] = useState(0); // Index of the current image in the modal

  // Open the modal with the clicked image and its group
  const openModal = (image: typeof img1, group: "group1" | "group2") => {
    const images = group === "group1" ? imagesGroup1 : imagesGroup2;
    const index = images.indexOf(image);
    setModalImages(images);
    setModalIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalIndex(0);
    setModalImages([]);
  };

  // Slide to the left image in the modal
  const slideLeft = () => {
    const newIndex = (modalIndex - 1 + modalImages.length) % modalImages.length;
    setModalIndex(newIndex);
  };

  // Slide to the right image in the modal
  const slideRight = () => {
    const newIndex = (modalIndex + 1) % modalImages.length;
    setModalIndex(newIndex);
  };

  return (
    <div className=" py-32 max-w-6xl mx-auto">
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[...imagesGroup1, ...imagesGroup2].map((image, index) => (
          <div key={index} className="relative group">
            <Image
              width={300}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="h-44 object-cover rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
              onClick={() => openModal(image, index < 4 ? "group1" : "group2")}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing if clicked inside
          >
            <Image
              width={600}
              height={400}
              src={modalImages[modalIndex]}
              alt={`Modal Image`}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />

            {/* Modal Navigation Buttons */}
            <button
              onClick={slideLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-gray-800"
            >
              &lt;
            </button>

            <button
              onClick={slideRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-gray-800"
            >
              &gt;
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
