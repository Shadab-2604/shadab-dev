import React, { useRef, useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Instagram, X } from 'lucide-react';
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-7 max-w-sm w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
          {isSuccess ? 'Message Sent!' : 'Oops!'}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-7 leading-relaxed">
          {message}
        </p>

        <button onClick={onClose} className="btn">
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
      <div className="container mx-auto px-4">
        <div className="section-head mb-10 max-w-2xl">
          <span className="kicker">// contact me</span>
          <h2 className="mb-4">Get in Touch</h2>
          <hr className="rule" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left – info */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Let's Connect
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              Open to discussing cybersecurity, full-stack development, and
              secure software architecture. Feel free to reach out for
              collaborations or opportunities.
            </p>

            <a
              href="mailto:shaikhshadab2604@gmail.com"
              className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-tertiary)] transition-colors mb-4"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded border border-[var(--border)]">
                <Mail className="w-4 h-4" />
              </div>
              shaikhshadab2604@gmail.com
            </a>

            <a
              href="tel:+919324852474"
              className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--text-tertiary)] transition-colors mb-8"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded border border-[var(--border)]">
                <Phone className="w-4 h-4" />
              </div>
              +91 9324852474
            </a>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="flex items-center justify-center w-9 h-9 rounded-[12px] border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
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
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-5 md:p-7 space-y-5"
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
                className="btn btn-accent w-full"
              >
                {loading ? 'Sending…' : 'Send Message'}
                <Send className="w-3 h-3" />
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
