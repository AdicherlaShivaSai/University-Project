import React, { useState } from "react";

// pipedream webhook url from env variables
const PIPEDREAM_URL = import.meta.env.VITE_PIPEDREAM_WEBHOOK_URL || "";

export default function LeadForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    intakeYear: "2025",
    consent: false,
  });

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validatePhone = (p) => /^\d{10}$/.test(p);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!validatePhone(form.phone)) {
      setStatus("error");
      setMessage("Phone must be 10 digits.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setMessage("Please accept the terms.");
      return;
    }

    if (!PIPEDREAM_URL) {
      setStatus("error");
      setMessage("Pipedream webhook not configured. Set VITE_PIPEDREAM_WEBHOOK_URL in .env.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(PIPEDREAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      setMessage("Thanks! We received your request.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        state: "",
        course: "",
        intakeYear: "2025",
        consent: false,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Submission failed. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-sm space-y-3">
      <h4 className="text-xl font-semibold text-center">Apply Now</h4>

      <div>
        <label className="block text-sm">Full Name</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required
          className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required
          className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} required
          pattern="\d{10}" title="10 digits" className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">State</label>
        <select name="state" value={form.state} onChange={handleChange} required className="w-full px-3 py-2 border rounded">
          <option value="">Select state</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Course Interested</label>
        <input name="course" value={form.course} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">Intake Year</label>
        <select name="intakeYear" value={form.intakeYear} onChange={handleChange} className="w-full px-3 py-2 border rounded">
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
        <label className="text-sm">I agree to terms.</label>
      </div>

      <button type="submit" disabled={status === "submitting"} className="w-full bg-blue-600 text-white py-2 rounded">
        {status === "submitting" ? "Submitting..." : "Apply Now"}
      </button>

      {status === "success" && <p className="text-green-600">{message}</p>}
      {status === "error" && <p className="text-red-600">{message}</p>}
    </form>
  );
}
