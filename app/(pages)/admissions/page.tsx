import React from 'react'

function page() {
  return (
    <div className="py-32 max-w-6xl mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Academic Eligibility for admission to B.E./B.Tech. Courses</h1>
        <h2 className="text-2xl font-bold text-amber-700">Why KCTEC?</h2>
      </div>
      <p className="mb-4">
        The student should have passed Karnataka 2nd PUC / 12th standard or equivalent examination with Physics and Mathematics along with Chemistry / Bio-Technology / Computer Science / Electronics / Biology as optional subjects with English as one of the languages of study and obtained a minimum of 45% of marks in aggregate in the optional subjects. In case of candidates belonging to Karnataka Scheduled Caste, Scheduled tribe and other Backward Classes (Category I, SC/ST), the minimum marks for the purpose of eligibility will be 40% of marks in aggregate in the optional subjects in the qualifying examination.
      </p>
      <h2 className="text-xl font-bold mb-2">Recognised Equivalent Courses for admission to First year B.E. /B.Tech. /B.Arch.</h2>
      <p className="mb-4">
        Pursuant to Executive Council Resolution no. 3 of 13th June 2005, 12 years of schooling (10+2) / Boards / Universities / In India or abroad as listed in the enclosed Annexure-I are recognised as equivalent to second year P.U.C. of Karnataka P.U.E. Board, Bangalore for admission to first year degree course in Engineering and architecture. However, this is subject to satisfying eligibility requirements as laid down from time to time by the State Govt. and University.
      </p>
      <h2 className="text-xl font-bold mb-2">The Candidates who have passed from Boards other than the list have to compulsorily obtain clearance from Association of Indian Universities, New Delhi before confirming admission in the college.</h2>
      <p className="mb-4">
        The eligible candidates (other than the students of P.U.E. Board, and C.B.S.E. exam passed in Karnataka) seeking admission to the first year Engineering and Architecture course should obtain the eligibility certificate, from the concerned college.
      </p>
      <h2 className="text-lg text-gray-500 font-bold mb-2">
        The Candidates who have passed from Diploma (Mechanical, Civil, Electronics & Computer Science) can be admitted directly to the 3rd semester of respective branches through Karnataka CET under lateral entry quota.
      </h2>
      <h2 className="text-xl font-bold mb-2">Courses Offered</h2>
      <table className="w-full mb-4 border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Sl. No.</th>
            <th className="border p-2">Disciplines</th>
            <th className="border p-2">Intake</th>
            <th className="border p-2">Year of Existence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">01</td>
            <td className="border p-2">Computer Science & Engineering</td>
            <td className="border p-2">60</td>
            <td className="border p-2">2001</td>
          </tr>
          <tr>
            <td className="border p-2">02</td>
            <td className="border p-2">Mechanical Engineering</td>
            <td className="border p-2">60</td>
            <td className="border p-2">2001</td>
          </tr>
          <tr>
            <td className="border p-2">03</td>
            <td className="border p-2">Electronics & Comm. Engineering</td>
            <td className="border p-2">30</td>
            <td className="border p-2">2001</td>
          </tr>
          <tr>
            <td className="border p-2">04</td>
            <td className="border p-2">Civil Engineering</td>
            <td className="border p-2">60</td>
            <td className="border p-2">2011</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-bold mb-2">Fee Policy</h2>
      <p>For further details you may contact the admission cell at KCT Engineering College.</p>

    </div>
  )
}

export default page


