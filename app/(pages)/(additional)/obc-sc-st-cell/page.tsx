'use client'

import React, { useState } from 'react';


const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
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
      captcha: ''
    });
  };

  return (
    <div className="py-32 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Grievance Redressal Committee</h1>
      <table className="w-full mb-6 border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Slno</th>
            <th className="border p-2">Name and Designation</th>
            <th className="border p-2">STATUS</th>
            <th className="border p-2">Mobile Number</th>
            <th className="border p-2">E-Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">DR.M.A.WAHEED</td>
            <td className="border p-2">OMBUDSMAN</td>
            <td className="border p-2">9449977626</td>
            <td className="border p-2">mawaheed@vtu.ac.in</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">PROF.SABERA BEGUM</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">9036249328</td>
            <td className="border p-2">saberakardi@yahoo.com</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">DR.KASHINATH</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">9632882660</td>
            <td className="border p-2">kashinathkanaje@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">DR.RAFIA BEGUM</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">9035236295</td>
            <td className="border p-2">786rafiyanizam@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">ABDUL RAZAK</td>
            <td className="border p-2">MEMBER</td>
            <td className="border p-2">9986838540</td>
            <td className="border p-2">knowsyourrights@gmail.com</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-2xl font-bold mb-4">Establishment of Committee for OBC</h1>
      <table className="w-full mb-6 border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">SL NO</th>
            <th className="border p-2">Name and Designation</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Mobile Number</th>
            <th className="border p-2">E-Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Dr.Sabera Begum</td>
            <td className="border p-2">Chairman</td>
            <td className="border p-2">9036249328</td>
            <td className="border p-2">saberakardi@yahoo.com</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Mirza Arif Baig</td>
            <td className="border p-2">Member</td>
            <td className="border p-2">9986446008</td>
            <td className="border p-2">Arifbaig.is@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">3</td>
            <td className="border p-2">Mushtaq Karche</td>
            <td className="border p-2">Member</td>
            <td className="border p-2">9482904909</td>
            <td className="border p-2">Mushtaq.karche@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">4</td>
            <td className="border p-2">Sania Fatima</td>
            <td className="border p-2">Member</td>
            <td className="border p-2">9148522786</td>
            <td className="border p-2">Saniafatima909@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">5</td>
            <td className="border p-2">Salma Begum</td>
            <td className="border p-2">Member</td>
            <td className="border p-2">7411387813</td>
            <td className="border p-2">salmabegum@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">6</td>
            <td className="border p-2">Samiuddin</td>
            <td className="border p-2">Student</td>
            <td className="border p-2">7899045755</td>
            <td className="border p-2">msusami@gmail.com</td>
          </tr>
          <tr>
            <td className="border p-2">7</td>
            <td className="border p-2">Tayyaba Zainab</td>
            <td className="border p-2">Student</td>
            <td className="border p-2">8618028896</td>
            <td className="border p-2">ahyanahmed@gmail.com</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">OBC SC ST Complaint</h2>
      <form onSubmit={handleSubmit} className="w-full mx-auto p-4 border border-gray-300 rounded">
        <div className='lg:flex gap-2'>
          <input type="text" id="name" placeholder='Name' name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input type="email" id="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
        </div>
        <textarea id="message" placeholder='Message' name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
        <div className='flex justify-end'>
          <button type="submit" className="w-[150px] p-2 bg-blue-500 text-white rounded">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Page;
