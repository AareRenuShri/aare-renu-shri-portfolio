import { Github, Linkedin, Mail, Phone } from 'lucide-react';

/**
 * Contact details and socials mirror the About slide exactly —
 * do not change these values independently of it.
 */
const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aare-renu-shri/',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AareRenuShri',
    Icon: Github,
  },
];

const CONTACT = [
  {
    label: 'renushriaare@gmail.com',
    href: 'mailto:renushriaare@gmail.com',
    Icon: Mail,
  },
  {
    label: '+91 9133196789',
    href: 'tel:+919133196789',
    Icon: Phone,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col justify-center bg-[#f4f3f0]"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 py-24 text-center sm:px-10 lg:py-28">
        {/* Social icons */}
        <div className="flex items-center gap-6 sm:gap-8">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-neutral-900 transition-colors duration-200 hover:text-neutral-500"
            >
              <Icon
                className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        {/* Display heading */}
        <h2 className="mt-14 select-none font-display text-[15vw] leading-[0.85] tracking-[-0.015em] text-neutral-900 sm:mt-16 sm:text-[12vw] lg:mt-20 lg:text-[9vw]">
          GET IN<br />
          TOUCH!
        </h2>

        {/* Script signature, echoing the hero */}
        <p className="script-outline mx-auto -mt-[0.18em] w-fit font-script text-[7vw] leading-none text-neutral-900 sm:text-[5.5vw] lg:text-[3.6vw]">
          Aare Renu Shri
        </p>

        {/* Email + phone */}
        <div className="mt-14 space-y-5 lg:mt-16 lg:space-y-6">
          {CONTACT.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center justify-center gap-4 text-lg text-neutral-800 transition-colors duration-200 hover:text-neutral-500 sm:text-xl lg:text-2xl"
            >
              <Icon
                className="h-5 w-5 shrink-0 text-neutral-900 lg:h-6 lg:w-6"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {label}
            </a>
          ))}
        </div>

        {/* CV button */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center justify-center rounded-full bg-neutral-900 px-12 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#f4f3f0] transition-colors duration-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 sm:px-14 sm:py-5 sm:text-base lg:mt-16"
        >
          CV
        </a>
      </div>
    </section>
  );
}
