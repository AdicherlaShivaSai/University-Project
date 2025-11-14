import React, { useEffect, useState } from "react";

//get backend url from env variables
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

export default function FeeModal({ isOpen, onClose, universityId }) {
  const [fees, setFees] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    setLoading(true);
    setError("");
    setFees(null);

    const url = BACKEND_URL
      ? `${BACKEND_URL.replace(/\/$/, "")}/api/fees`
      : "/fees.json";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load fees");
        return res.json();
      })
      .then((data) => {
        // data should be an object with university_1/university_2 keys
        setFees(data[universityId] || null);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load fee data.");
      })
      .finally(() => setLoading(false));
  }, [isOpen, universityId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40 p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-md max-w-md w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Course-wise Fees</h3>
          <button onClick={onClose} className="text-xl leading-none">&times;</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {fees && (
          <ul className="mt-2 space-y-2">
            {Object.entries(fees).map(([course, range]) => (
              <li key={course} className="flex justify-between border-b pb-1">
                <span>{course}</span>
                <span className="text-gray-700">{range}</span>
              </li>
            ))}
          </ul>
        )}

        {!loading && !fees && !error && <p>No data available.</p>}
      </div>
    </div>
  );
}
