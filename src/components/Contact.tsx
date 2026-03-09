import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, X, CheckCircle, AlertCircle } from 'lucide-react';
import { Field, Label, Input, Textarea } from '@headlessui/react';
import emailjs from '@emailjs/browser';
import SectionTitle from './ui/SectionTitle';

const SOCIAL_LINKS = [
  { Icon: Github, href: 'https://github.com/Shadab-2604', label: 'GitHub' },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/shaikh-shadab-8937b7281/',
    label: 'LinkedIn',
  },
  { Icon: Instagram, href: 'https://instagram.com/_shad.dev_', label: 'Instagram' },
];

// ── Popup ─────────────────────────────────────────────────────────────────────
interface PopupProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';
  const accentColor = isSuccess ? '#34D399' : '#FB7185';
  const bgColor = isSuccess ? 'rgba(52,211,153,0.08)' : 'rgba(251,113,133,0.08)';
  const borderColor = isSuccess ? 'rgba(52,211,153,0.25)' : 'rgba(251,113,133,0.25)';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.28 }}
        className="relative rounded-2xl border p-7 max-w-sm w-full text-center"
        style={{
          background: 'rgba(13,17,23,0.96)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderColor,
          boxShadow: `0 0 50px ${accentColor}18`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-[#6B7280] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div
          className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{ background: bgColor, border: `1px solid ${borderColor}` }}
        >
          {isSuccess ? (
            <CheckCircle className="w-7 h-7" style={{ color: accentColor }} />
          ) : (
            <AlertCircle className="w-7 h-7" style={{ color: accentColor }} />
          )}
        </div>

        <h3 className="text-lg font-bold mb-2" style={{ color: accentColor }}>
          {isSuccess ? 'Message Sent!' : 'Oops!'}
        </h3>
        <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed">{message}</p>

        <button
          onClick={onClose}
          className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{
            background: bgColor,
            color: accentColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          Got it
        </button>
      </motion.div>
    </div>
  );
};

// ── Shared input class ─────────────────────────────────────────────────────────
const inputCls =
  'w-full px-4 py-3 rounded-xl text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] ' +
  'text-[var(--text-primary)] placeholder:text-[#6B7280] outline-none ' +
  'transition-all duration-200 ' +
  'focus:border-cyan-neon/50 focus:shadow-[0_0_14px_rgba(0,229,255,0.14)] ' +
  'data-[focus]:border-[rgba(0,229,255,0.5)] data-[focus]:shadow-[0_0_14px_rgba(0,229,255,0.14)]';

// ── Contact ───────────────────────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setLoading(true);
      await emailjs.sendForm(
        'service_pj0mpvs',
        'template_zenn5kc',
        formRef.current,
        'LdXTz6nMARriAwCy7'
      );
      setShowSuccess(true);
      formRef.current.reset();
    } catch {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Get in Touch" subtitle="contact me" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              Let's Connect
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to collaborate
              or just want to say hi!
            </p>

            <a
              href="mailto:shaikhshadab2604@gmail.com"
              className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-cyan-neon transition-colors duration-200 mb-8 group"
            >
              <div className="p-2 rounded-xl border border-[var(--border-color)] group-hover:border-cyan-neon/40 group-hover:shadow-glow-sm transition-all duration-200">
                <Mail className="w-4 h-4" />
              </div>
              shaikhshadab2604@gmail.com
            </a>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-neon hover:border-cyan-neon/40 hover:shadow-glow-sm transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--border-color)] p-6 space-y-4"
              style={{ background: 'var(--bg-primary)' }}
            >
              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-secondary)] mb-1.5 tracking-wide">
                  Name
                </Label>
                <Input
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputCls}
                />
              </Field>

              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-secondary)] mb-1.5 tracking-wide">
                  Email
                </Label>
                <Input
                  name="user_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </Field>

              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-secondary)] mb-1.5 tracking-wide">
                  Message
                </Label>
                <Textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="btn-glow w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:transform-none"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-navy/30 border-t-navy animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showSuccess && (
        <Popup
          type="success"
          message="Your message has been sent successfully! I'll get back to you soon."
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <Popup
          type="error"
          message="Failed to send your message. Please try again or contact me directly at shaikhshadab2604@gmail.com."
          onClose={() => setShowError(false)}
        />
      )}
    </section>
  );
};

export default Contact;
