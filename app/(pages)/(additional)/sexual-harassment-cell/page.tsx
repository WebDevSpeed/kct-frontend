'use client'

import React, { useState } from 'react';

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // Handle form data (send to server, save locally, etc.)
    console.log("Form Data:", formData);

    // Display success message or reset the form
    alert("Form submitted successfully!");
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="py-32 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Members Present:</h1>
      <table className="w-3/4 mb-6">
        <thead>
          <tr>
            <th className="border p-2">Slno</th>
            <th className="border p-2">Name and Designation</th>
            <th className="border p-2">Position in CICC</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Mobile Number & e-mail ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">PROF.SABERA BEGUM</td>
            <td className="border p-2">CHAIRMAN OF THE COMMITTEE</td>
            <td className="border p-2">F</td>
            <td className="border p-2">9036249328<br />kctec2022cicc@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">DR.RAFIA BEGUM</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">F</td>
            <td className="border p-2">9035236295<br />786rafiyanizam@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">DR.KASHINATH</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">M</td>
            <td className="border p-2">9632882660<br />kashinathkanaje@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">MOHAMMED UMAR</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">M</td>
            <td className="border p-2">9739499658<br />Umar.asia@hotmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">ABDUL GAFOOR</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">M</td>
            <td className="border p-2">9740170916<br />g.abdul798@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">6</td>
            <td className="border p-2">SYED.NAZEERULLA HUSSAINI</td>
            <td className="border p-2">STUDENT</td>
            <td className="border p-2">M</td>
            <td className="border p-2">9606875742<br />Snzuh31@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">7</td>
            <td className="border p-2">AYESHA YASMEEN</td>
            <td className="border p-2">STUDENT</td>
            <td className="border p-2">F</td>
            <td className="border p-2">9113089337<br />Ayeshay306@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">8</td>
            <td className="border p-2">SYEDA SANIYA BEGUM</td>
            <td className="border p-2">STUDENT</td>
            <td className="border p-2">F</td>
            <td className="border p-2">9611800836<br />Syedaglb6@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">9</td>
            <td className="border p-2">ABDUL RAZAK</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">M</td>
            <td className="border p-2">9986838540<br />knowsyourrights@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Complaint Box</h2>
      <form onSubmit={handleSubmit} className="w-full mx-auto p-4 rounded">
        <div className='lg:flex gap-2 '>
          <input type="text" id="name" placeholder='Name' name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input type="email" id="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
        </div>
        <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
        <div className='flex justify-end'>
          <button type="submit" className="w-1/12 p-2 bg-blue-500 text-white rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
