import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import profile from '../assets/profile.png';

const CONNECT = [
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

export default function About() {
  return (
    <section id="about" className="relative bg-[#f4f3f0]">
      <div className="flex min-h-screen flex-col lg:grid lg:grid-cols-[44%_56%]">
        {/* Portrait — full-bleed to the left edge, full height of the slide */}
        <div className="relative h-[50vh] w-full overflow-hidden sm:h-[55vh] lg:h-full lg:min-h-screen">
          <img
            src={profile}
            alt="Portrait of Aare Renu Shri"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Copy */}
        <div className="flex items-center px-6 py-14 sm:px-10 lg:py-24 lg:pl-[11vw] lg:pr-[5vw]">
          <div className="w-full max-w-[560px]">
            <h2 className="font-display text-4xl leading-none tracking-[-0.01em] text-neutral-900 sm:text-5xl lg:text-[4.5vw]">
              ABOUT ME
            </h2>

            <p className="font-script script-outline -mt-[0.1em] text-3xl leading-none text-neutral-900 sm:text-4xl lg:text-[3vw]">
              Hi there, I'm Renu!
            </p>

            <p className="mt-6 text-justify text-[15px] leading-[1.7] text-neutral-800 sm:text-base lg:mt-8 lg:text-lg">
              Three years into a Computer Science degree at IIT Hyderabad, and I
              still find myself pulling systems apart to see how they work -
              benchmarking PostgreSQL indexing strategies, building a priority
              scheduler inside xv6, shipping a log classifier that hits 99%+
              accuracy. I care more about why something is slow or wrong than
              just making it pass.
            </p>

            <p className="mt-4 text-justify text-[15px] leading-[1.7] text-neutral-800 sm:text-base lg:text-lg">
              Highly adaptive and quick to learn. I enjoy working both
              individually and in teams. My goal is to help purpose driven and
              creative teams build systems that are fast, reliable, and genuinely
              useful - turning ideas into working products rather than just
              proofs of concept.
            </p>

            <h3 className="mt-10 text-sm font-extrabold uppercase tracking-[0.08em] text-neutral-900 sm:text-base lg:mt-12 lg:text-lg">
              LET'S CONNECT!
            </h3>

            <ul className="mt-4 space-y-3 lg:mt-5 lg:space-y-4">
              {CONNECT.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-3 text-[15px] text-neutral-800 transition-colors duration-200 hover:text-neutral-500 sm:text-base lg:text-lg"
                  >
                    <Icon
                      className="h-[18px] w-[18px] shrink-0 text-neutral-900 lg:h-5 lg:w-5"
                      strokeWidth={1.75}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links — bottom-right, like the reference */}
            <div className="mt-10 flex items-center justify-end gap-5 lg:mt-12 lg:gap-6">
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
                    className="h-5 w-5 sm:h-[22px] sm:w-[22px] lg:h-6 lg:w-6"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
