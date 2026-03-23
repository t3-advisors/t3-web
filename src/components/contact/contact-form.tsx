"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle } from "lucide-react";

const verticalKeys = [
  { key: "vertical_re", value: "Real Estate" },
  { key: "vertical_hos", value: "Hospitality" },
  { key: "vertical_ag", value: "Agribusiness" },
  { key: "vertical_ind", value: "Industrial" },
  { key: "vertical_hc", value: "Healthcare" },
  { key: "vertical_min", value: "Mining" },
] as const;

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    verticals: [] as string[],
  });

  function handleVerticalToggle(value: string) {
    setForm((prev) => ({
      ...prev,
      verticals: prev.verticals.includes(value)
        ? prev.verticals.filter((v) => v !== value)
        : [...prev.verticals, value],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded border border-forest/20 bg-forest/5 p-10 text-center">
        <CheckCircle className="h-10 w-10 text-forest" />
        <p className="text-lg font-semibold text-forest">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("name")} *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 block w-full border-0 border-b border-stone bg-transparent py-2 text-charcoal outline-none transition-colors focus:border-forest"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("email")} *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 block w-full border-0 border-b border-stone bg-transparent py-2 text-charcoal outline-none transition-colors focus:border-forest"
        />
      </div>

      {/* Company */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("company")}
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="mt-1 block w-full border-0 border-b border-stone bg-transparent py-2 text-charcoal outline-none transition-colors focus:border-forest"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("phone")}
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-1 block w-full border-0 border-b border-stone bg-transparent py-2 text-charcoal outline-none transition-colors focus:border-forest"
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("message")}
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 block w-full resize-none border-0 border-b border-stone bg-transparent py-2 text-charcoal outline-none transition-colors focus:border-forest"
        />
      </div>

      {/* Verticals */}
      <div>
        <label className="text-sm font-semibold text-charcoal">
          {t("verticals")}
        </label>
        <div className="mt-3 flex flex-wrap gap-3">
          {verticalKeys.map((v) => (
            <label
              key={v.key}
              className="flex cursor-pointer items-center gap-2 text-sm text-charcoal"
            >
              <input
                type="checkbox"
                checked={form.verticals.includes(v.value)}
                onChange={() => handleVerticalToggle(v.value)}
                className="accent-gold"
              />
              {t(v.key)}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex items-center rounded-lg bg-forest px-6 py-3 text-sm font-semibold text-warm-white transition-colors hover:bg-forest/90"
      >
        {t("submit")} <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}
