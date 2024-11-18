import React from 'react';

interface Member {
  slno: number;
  name: string;
  designation: string;
  position?: string;
  gender?: string;
  mobile: string;
  email: string;
  officialNumber?: string;
}

const ciccMembers: Member[] = [
  { slno: 1, name: "PROF.SABERA BEGUM", designation: "Prof.& HOD CSE", position: "CHAIRMAN OF THE COMMITTEE", gender: "F", mobile: "9036249328", email: "saberakardi@yahoo.com", officialNumber: "" },
  { slno: 2, name: "DR.RAFIA BEGUM", designation: "Associate.Prof.", position: "MEMBER", gender: "F", mobile: "9035236295", email: "786rafiyanizam@gmail.com", officialNumber: "" },
  { slno: 3, name: "DR.KASHINATH", designation: "Prof.& HOD", position: "MEMBER", gender: "M", mobile: "9632882660", email: "kashinathkanaje@gmail.com", officialNumber: "" },
  { slno: 4, name: "SYYIDASAFOORA HUSSAINI", designation: "PROGRAMMER", position: "MEMBER", gender: "F", mobile: "8217545503", email: "Safoora.012@gmail.com", officialNumber: "" },
  { slno: 5, name: "ABDUL GAFOOR", designation: "INSTRUCTOR", position: "MEMBER", gender: "M", mobile: "9740170916", email: "g.abdul798@gmail.com", officialNumber: "" },
  { slno: 6, name: "SYED.NAZEERULLA HUSSAINI", designation: "7TH SEM CSE STUDENT", position: "MEMBER", gender: "M", mobile: "9606875742", email: "Snzuh31@gmail.com", officialNumber: "" },
  { slno: 7, name: "SYEDA NIDA ZAINAB", designation: "5TH SEM CSE STUDENT", position: "MEMBER", gender: "F", mobile: "7204529663", email: "arjumandiqbal@gmail.com", officialNumber: "" },
  { slno: 8, name: "TAYYABA ZAINAB", designation: "5TH SEM CSE STUDENT", position: "MEMBER", gender: "F", mobile: "8618028896", email: "ahyanahmed123456@gmail.com", officialNumber: "" },
  { slno: 9, name: "ABDUL RAZAK", designation: "NGO", position: "MEMBER", gender: "M", mobile: "9986838540", email: "knowsyourrights@gmail.com", officialNumber: "" }
];

const sgrcMembers: Member[] = [
  { slno: 1, name: "DR.M.A.WAHEED", designation: "OMBUDSMAN", mobile: "9449977626", email: "mawaheed@vtu.ac.in" },
  { slno: 2, name: "PROF.SABERA BEGUM", designation: "Prof.& HOD", mobile: "9036249328", email: "saberakardi@yahoo.com" },
  { slno: 3, name: "DR.KASHINATH", designation: "Prof.& HOD", mobile: "9632882660", email: "kashinathkanaje@gmail.com" },
  { slno: 4, name: "DR.RAFIA BEGUM", designation: "Asst.Prof.", mobile: "9035236295", email: "786rafiyanizam@gmail.com" },
  { slno: 5, name: "DR.KAUSAR ANJUM", designation: "Assoc.Prof.", mobile: "9986074132", email: "Anjumkausar42@gmail.com" },
  { slno: 6, name: "SALMA BEGUM", designation: "Asst.Prof.", mobile: "7411387813", email: "salmabegum@gmail.com" },
  { slno: 7, name: "ABDUL RAZAK", designation: "MEMBER NGO", mobile: "9986838540", email: "knowsyourrights@gmail.com" },
  { slno: 8, name: "RAVI DAS", designation: "VIITH SEM STUDENT", mobile: "8073072700", email: "Ravidas1511@gmail.com" }
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row py-32 max-w-6xl mx-auto">


      {/* Content */}
      <div className="lg:w-3/4 w-full lg:ml-6">
        {/* CICC Committee Table */}
        <div>
          <h2 className="text-2xl font-semibold">CICC Committee</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Slno</th>
                <th className="border px-4 py-2">Name and Designation</th>
                <th className="border px-4 py-2">Position in CICC</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Mobile Number & E-mail ID</th>
                <th className="border px-4 py-2">Official Number</th>
              </tr>
            </thead>
            <tbody>
              {ciccMembers.map((member) => (
                <tr key={member.slno} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{member.slno}</td>
                  <td className="border px-4 py-2">{member.name} ({member.designation})</td>
                  <td className="border px-4 py-2">{member.position}</td>
                  <td className="border px-4 py-2">{member.gender}</td>
                  <td className="border px-4 py-2">{member.mobile} <br />{member.email}</td>
                  <td className="border px-4 py-2">{member.officialNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SGRC Members Table */}
        <div className="mt-20">
          <h2 className="text-2xl mb-4 font-semibold">SGRC Members</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Slno</th>
                <th className="border px-4 py-2">Name of the Committee Member</th>
                <th className="border px-4 py-2">Designation</th>
                <th className="border px-4 py-2">Mobile Number</th>
                <th className="border px-4 py-2">E-mail ID</th>
              </tr>
            </thead>
            <tbody>
              {sgrcMembers.map((member) => (
                <tr key={member.slno} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{member.slno}</td>
                  <td className="border px-4 py-2">{member.name}</td>
                  <td className="border px-4 py-2">{member.designation}</td>
                  <td className="border px-4 py-2">{member.mobile}</td>
                  <td className="border px-4 py-2">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-6 space-y-6 lg:sticky top-0">
        <h2 className="text-xl font-semibold">Navigation</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-gray-400">Recent Posts</a></li>
          <li><a href="#" className="hover:text-gray-400">Faculties</a></li>
          <li><a href="#" className="hover:text-gray-400">Admissions</a></li>
          <li><a href="#" className="hover:text-gray-400">Placements</a></li>
          <li><a href="#" className="hover:text-gray-400">Circulars</a></li>
          <li><a href="#" className="hover:text-gray-400">Members’ Area – Help</a></li>
          <li className="mt-6 font-semibold">Archives</li>
          <li><a href="#" className="hover:text-gray-400">October 2018</a></li>
          <li><a href="#" className="hover:text-gray-400">April 2018</a></li>
          <li><a href="#" className="hover:text-gray-400">July 2017</a></li>
          <li><a href="#" className="hover:text-gray-400">June 2017</a></li>
          <li><a href="#" className="hover:text-gray-400">April 2017</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
