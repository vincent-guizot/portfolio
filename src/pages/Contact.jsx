import { useState } from "react";
import { CheckCircle2, Download, MessageCircle, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { contactInfo, profile, socialIcons } from "../data/siteData";

const initialForm = { name: "", email: "", subject: "", message: "" };

const whatsAppNumber = profile.phone.replace(/\D/g, "");

/** Builds a wa.me "click to chat" link pre-filled with the form's content. */
const buildWhatsAppUrl = ({ name, email, subject, message }) => {
  const text = [
    `Hi Vincent, my name is ${name} (${email}).`,
    "",
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { Github, Linkedin, Instagram } = socialIcons;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up in this template — instead, this opens
    // WhatsApp (wa.me) in a new tab with the message pre-filled, addressed
    // to profile.phone in src/data/siteData.js.
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="flex flex-col gap-10">
      <PageHero
        eyebrow="Contact"
        titleLines={["Let's Build Something Amazing", "Together"]}
        accentWord="Together"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you. Let's connect!"
        quote="I'm always open to exciting projects and meaningful collaborations."
      />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Contact info */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)] sm:p-7">
          <h2 className="mb-1 text-lg font-bold text-[var(--color-text-primary)]">Contact Information</h2>
          <span className="mb-5 block h-0.5 w-10 rounded-full bg-brand-orange" aria-hidden="true" />

          <div className="flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--tint-blue)] text-brand-blue">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{label}</p>
                  <p className="text-sm text-[var(--color-text-primary)]">{value}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-3 mt-7 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
            Follow Me
          </p>
          <div className="flex items-center gap-3">
            {[
              [Github, profile.social.github],
              [Linkedin, profile.social.linkedin],
              [Instagram, profile.social.instagram],
            ].map(([Icon, href], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-brand-orange hover:text-brand-orange"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-card)] sm:p-7">
          <h2 className="mb-1 text-lg font-bold text-[var(--color-text-primary)]">Send Me a Message</h2>
          <span className="mb-5 block h-0.5 w-10 rounded-full bg-brand-orange" aria-hidden="true" />

          {submitted && (
            <div className="mb-5 flex items-center gap-2 rounded-xl bg-[var(--tint-blue)] px-4 py-3 text-sm font-medium text-brand-blue animate-fade-in">
              <CheckCircle2 size={16} /> Opening WhatsApp with your message ready to send...
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-secondary)]">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[var(--color-border-strong)] bg-transparent px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-brand-orange"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-secondary)]">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[var(--color-border-strong)] bg-transparent px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-brand-orange"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-secondary)]">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full rounded-xl border border-[var(--color-border-strong)] bg-transparent px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-brand-orange"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-secondary)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="w-full resize-none rounded-xl border border-[var(--color-border-strong)] bg-transparent px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-brand-orange"
              />
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,107,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 hover:bg-[var(--color-accent-hover)]"
              >
                <MessageCircle size={15} /> Send via WhatsApp
              </button>
              <p className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                <ShieldCheck size={13} /> This opens WhatsApp with your message pre-filled — nothing is stored on a server.
              </p>
            </div>
          </form>
        </div>
      </section>

      <CTASection
        title="Let's create something"
        accent="impactful together."
        subtitle="Whether it's a project, collaboration, or just a chat, I'm here and ready to help."
        primaryLabel="Download CV"
        primaryIcon={Download}
        primaryTo="#"
        secondaryLabel="View My Work"
        secondaryTo="/portfolio"
      />
    </div>
  );
};

export default Contact;
