import React, { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeeModal from "../components/FeeModal";

export default function University2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-purple-800 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Apex Global University</h1>
        <p className="mt-2">Focus on research and innovation.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => setIsOpen(true)} className="bg-white text-purple-800 px-4 py-2 rounded">Check Course-wise Fees</button>
          <a href="/brochure-uni2.pdf" download className="bg-green-600 text-white px-4 py-2 rounded">Download Brochure</a>
        </div>
      </header>

      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <section>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>A short overview text.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Courses</h2>
            <p>List of courses and special programs.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Facilities</h2>
            <p>Libraries, labs and hostels details.</p>
          </section>
        </div>

        <aside>
          <LeadForm />
        </aside>
      </main>

      <FeeModal isOpen={isOpen} onClose={() => setIsOpen(false)} universityId="university_2" />
    </div>
  );
}
