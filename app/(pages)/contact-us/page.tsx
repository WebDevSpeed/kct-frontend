'use client';

import React, { useState } from 'react';


const Page = () => {

  const [formData, setFormData] = useState({
    yourName: '',
    emailAddress: '',
    mobile: '',
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
      yourName: '',
      emailAddress: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className='py-20 max-w-6xl mx-auto '>
      <div className=''>
        <div className="max-w-4xl gap-6 mx-auto p-8 rounded-lg shadow-md">
          <div className=' flex justify-center'>
            <div className='w-3/5 '>
              <h1 className="text-2xl font-bold mb-4">K.C.T. ENGINEERING COLLEGE</h1>
              <table className="w-full text-left border-2 border-gray-300">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Address</td>
                    <td className="p-2">K.C.T. Campus, Qamar-ul-Islam Colony, Roza.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">P.O. BOX</td>
                    <td className="p-2">585104</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Trust Office</td>
                    <td className="p-2">08472-258551</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Fax No.</td>
                    <td className="p-2">08472-258020</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Website</td>
                    <td className="p-2"><a href="http://www.kctengineering.edu.in" className="text-blue-500 hover:underline">http://www.kctengineering.edu.in</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Principal</td>
                    <td className="p-2">Dr. S.A.M.N. Quadri</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Office</td>
                    <td className="p-2">08472-258022</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">E-mail</td>
                    <td className="p-2">
                      <a href="mailto:principalkct@rediffmail.com" className="text-blue-500 hover:underline">principalkct@rediffmail.com</a><br />
                      <a href="mailto:principal@kctengineering.edu.in" className="text-blue-500 hover:underline">principal@kctengineering.edu.in</a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Scholarship</td>
                    <td className="p-2">+91-9686157758</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Technical Support</td>
                    <td className="p-2">+91-9241438078</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-2">Account Section</td>
                    <td className="p-2">+91-9448219845</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-full flex items-center mt-10 justify-center'>
            <form onSubmit={handleSubmit} className="w-full  p-4 border border-gray-300 rounded">
              <h1 className="block mb-2 font-bold text-2xl">Feedback/Query</h1>
              <div className='lg:flex gap-2 '>
                <input type="text" id="yourName" placeholder='Name' name="yourName" value={formData.yourName} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                <input type="email" id="emailAddress" placeholder='Email' name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded" />
              </div>
              <input type="tel" id="mobile" name="mobile" placeholder='Phone No' value={formData.mobile} onChange={handleChange} required className="lg:w-2/4 w-full p-2 mb-4 border border-gray-300 rounded" />
              <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} required className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>
              <div className="flex justify-end">
                <button type="submit" className="w-1/5 p-2 bg-blue-500 text-white rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page






