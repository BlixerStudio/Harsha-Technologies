"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const businessOptions = ["Home", "Office", "School / Clinic", "Multiple printers"];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Harsha Technologies, I need printer support.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Area: ${formData.get("area")}`,
      `Customer type: ${formData.get("customerType")}`,
      `Issue: ${formData.get("issue")}`
    ].join("%0A");

    setStatus("Opening WhatsApp with your service details.");
    window.open(`https://wa.me/919063484335?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-4 rounded-lg border border-line bg-white p-5 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Name
          <input className="min-h-12 rounded-md border border-line px-3 text-slate-800" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-navy">
          Phone
          <input className="min-h-12 rounded-md border border-line px-3 text-slate-800" name="phone" required type="tel" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-brand-navy">
        Area
        <input className="min-h-12 rounded-md border border-line px-3 text-slate-800" name="area" required />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-navy">
        Home or business?
        <select className="min-h-12 rounded-md border border-line px-3 text-slate-800" name="customerType" required>
          {businessOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-navy">
        Printer issue
        <textarea className="min-h-28 rounded-md border border-line px-3 py-3 text-slate-800" name="issue" required />
      </label>
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-bold text-white" type="submit">
        <Send aria-hidden="true" size={18} />
        Send on WhatsApp
      </button>
      {status ? <p className="text-sm font-semibold text-brand-green">{status}</p> : null}
    </form>
  );
}
