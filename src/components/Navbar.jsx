const LEFT_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
];

const RIGHT_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Extracurricular', href: '#pors' },
  { label: 'Contact', href: '#contact' },
];

/**
 * The three solid dots centered in the nav bar — a purely decorative divider
 * from the original design.
 */
function NavDots() {
  return (
    <span
      aria-hidden="true"
      className="hidden items-center gap-1.5 min-[420px]:flex"
    >
      <span className="h-2 w-2 rounded-full bg-neutral-900 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3" />
      <span className="h-2 w-2 rounded-full bg-neutral-900 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3" />
      <span className="h-2 w-2 rounded-full bg-neutral-900 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3" />
    </span>
  );
}

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 underline decoration-1 underline-offset-[5px] transition-colors duration-200 hover:text-neutral-500 min-[420px]:text-[11px] sm:text-xs sm:underline-offset-[6px] lg:text-base lg:tracking-[0.22em]"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-6 min-[420px]:px-7 sm:px-10 sm:py-7 lg:px-14 lg:py-9"
      >
        <div className="flex items-center gap-5 min-[420px]:gap-8 sm:gap-10 lg:gap-16">
          {LEFT_LINKS.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        <NavDots />

        <div className="flex items-center gap-5 min-[420px]:gap-8 sm:gap-10 lg:gap-16">
          {RIGHT_LINKS.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>
      </nav>
    </header>
  );
}
