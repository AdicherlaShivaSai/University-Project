import React, { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeeModal from "../components/FeeModal";

export default function University1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-blue-800 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">University One</h1>
        <p className="mt-2">A short description about the university.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => setIsOpen(true)} className="bg-white text-blue-800 px-4 py-2 rounded">Check Course-wise Fees</button>
          <a href="/brochure-uni1.pdf" download className="bg-green-600 text-white px-4 py-2 rounded">Download Brochure</a>
        </div>
      </header>

      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <section>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>Short overview goes here.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Courses</h2>
            <p>B.Tech, MBA, B.Sc etc.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Placements</h2>
            <p>Placement data and recruiters info.</p>
          </section>
        </div>

        <aside>
          <LeadForm />
        </aside>
      </main>

      <FeeModal isOpen={isOpen} onClose={() => setIsOpen(false)} universityId="university_1" />
    </div>
  );
}
