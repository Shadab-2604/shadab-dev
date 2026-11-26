import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Instagram, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Field, Label, Input, Textarea } from '@headlessui/react';
import emailjs from '@emailjs/browser';

const SOCIAL_LINKS = [
  { Icon: Github, href: 'https://github.com/Shadab-2604', label: 'GitHub' },
  {
    Icon: Linkedin,
    href: 'https://www.linkedin.com/in/shaikh-shadab-8937b7281/',
    label: 'LinkedIn',
  },
  { Icon: Instagram, href: 'https://instagram.com/_shad.dev_', label: 'Instagram' },
];

interface PopupProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ type, message, onClose }) => {
  const isSuccess = type === 'success';

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-7 max-w-sm w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-3">
          {isSuccess ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500" />
          )}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-0">
            {isSuccess ? 'Message Sent!' : 'Oops!'}
          </h3>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
          {message}
        </p>

        <button onClick={onClose} className="btn btn-accent w-full">
          Got it
        </button>
      </div>
    </div>
  );
};

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
    <section id="contact" className="section bg-[var(--bg-secondary)] reveal">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="section-head">
          <span className="kicker">// contact me</span>
          <h2 className="mb-4">Get in Touch</h2>
          <hr className="rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left – info */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Let&apos;s Connect
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              Open to discussing cybersecurity, full-stack development, and
              secure software architecture. Feel free to reach out for
              collaborations or opportunities.
            </p>

            <div className="flex flex-col gap-3.5 mb-8">
              <a
                href="mailto:shaikhshadab2604@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group w-fit"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-[var(--border)] bg-[var(--bg-primary)] group-hover:border-[var(--border-hover)] transition-colors">
                  <Mail className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>
                shaikhshadab2604@gmail.com
              </a>

              <a
                href="tel:+919324852474"
                className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group w-fit"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-[var(--border)] bg-[var(--bg-primary)] group-hover:border-[var(--border-hover)] transition-colors">
                  <Phone className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>
                +91 9324852474
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center justify-center w-9 h-9 rounded-[10px] border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card-elevated p-6 sm:p-7 space-y-5"
            >
              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">
                  Name
                </Label>
                <Input
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="input"
                />
              </Field>

              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  name="user_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="input"
                />
              </Field>

              <Field>
                <Label className="block text-[11px] font-mono font-medium text-[var(--text-tertiary)] mb-2 uppercase tracking-wider">
                  Message
                </Label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-accent w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send Message'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <Popup
          type="success"
          message="Your message has been sent successfully. I'll get back to you soon."
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <Popup
          type="error"
          message="Failed to send your message. Please try again or email me directly at shaikhshadab2604@gmail.com."
          onClose={() => setShowError(false)}
        />
      )}
    </section>
  );
};

export default Contact;
