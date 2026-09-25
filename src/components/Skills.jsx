import { BookOpen, Shapes, Terminal } from 'lucide-react';
import {
  siC,
  siCplusplus,
  siPython,
  siPostgresql,
  siRiscv,
  siFastapi,
  siDocker,
  siRender,
  siGit,
  siGithub,
  siQemu,
  siLinux,
  siLatex,
} from 'simple-icons';

const COURSES = [
  'Data Structures',
  'Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Computer Architecture',
  'Compilers',
  'Probability & Random Variables',
];

const SKILLS = [
  { name: 'C', si: siC, color: '#A8B9CC' },
  { name: 'C++', si: siCplusplus, color: '#00599C' },
  { name: 'Python', si: siPython, color: '#3776AB' },
  { name: 'SQL', si: siPostgresql, color: '#4169E1' },
  { name: 'RISC-V Assembly', si: siRiscv, color: '#283272' },
  { name: 'FastAPI', si: siFastapi, color: '#009688' },
  { name: 'Docker', si: siDocker, color: '#2496ED' },
  { name: 'Render', si: siRender, color: '#000000' },
  { name: 'Git', si: siGit, color: '#F03C2E' },
  { name: 'GitHub', si: siGithub, color: '#181717' },
  { name: 'QEMU', si: siQemu, color: '#FF6600' },
  { name: 'Linux / Unix', si: siLinux, color: '#FCC624' },
  { name: 'xv6 / UNIX internals', lucide: Terminal },
  { name: 'LaTeX', si: siLatex, color: '#008080' },
  { name: 'Digital Fabrication Tools', lucide: Shapes },
];

function SkillLogo({ skill }) {
  if (skill.si) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 shrink-0"
        fill={skill.color}
        aria-hidden="true"
      >
        <path d={skill.si.path} />
      </svg>
    );
  }
  const LucideIcon = skill.lucide;
  return (
    <LucideIcon
      className="h-9 w-9 shrink-0 text-neutral-900"
      strokeWidth={1.5}
      aria-hidden="true"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#f4f3f0]">
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[54%_46%] lg:gap-0 lg:py-24 lg:pl-[5vw] lg:pr-[4vw]">
        {/* Left — heading + relevant coursework */}
        <div>
          <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.01em] text-neutral-900 sm:text-6xl lg:text-[5.5vw]">
            SKILLS &<br />
            COURSES
          </h2>

          <ul className="mt-10 space-y-6 lg:mt-14 lg:space-y-7">
            {COURSES.map((course) => (
              <li key={course} className="flex items-start gap-3 sm:gap-4">
                <BookOpen
                  className="mt-1 h-5 w-5 shrink-0 text-neutral-900 sm:h-6 sm:w-6"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-neutral-900 sm:text-base lg:text-[17px]">
                    {course}{' '}
                    <span className="ml-1 text-xs font-medium normal-case tracking-normal text-neutral-500 sm:text-sm">
                      IIT Hyderabad
                    </span>
                  </p>
                  <p className="mt-1 text-xs italic text-neutral-400 sm:text-[13px]">
                    Core coursework.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — technical skills grid */}
        <div className="flex items-stretch lg:pl-[4vw]">
          <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:auto-rows-fr">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 rounded-xl bg-white px-6 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-neutral-900/5"
              >
                <SkillLogo skill={skill} />
                <span className="text-[15px] font-semibold leading-tight text-neutral-800 sm:text-base">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
