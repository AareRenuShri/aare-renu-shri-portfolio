import { useState } from 'react';
import { ExternalLink, Folder, FolderOpen, Github, MousePointerClick } from 'lucide-react';
import { siC, siFastapi, siPostgresql, siPython, siRiscv } from 'simple-icons';

const PROJECTS = [
  {
    title: 'Query Optimization & Indexing Analysis',
    tech: ['PostgreSQL', 'Python'],
    logo: { si: siPostgresql, color: '#4169E1' },
    context: null,
    github: 'https://github.com/AareRenuShri/db-optimizer-analysis',
    demo: null,
    bullets: [
      'Benchmarked indexing strategies on a 6M-row TPC-H dataset, measuring ~18% faster load times when creating an index after bulk data insertion versus before, using isolated table copies and controlled timing experiments.',
      'Built a Python benchmarking tool measuring query performance across 5 indexing strategies (no index, index, forced index, clustered index, index-only scan) over 50 selectivity levels, using warm-cache methodology to eliminate disk I/O noise and ensure consistent comparisons.',
      'Implemented a recursive query-plan comparator in Python that parses PostgreSQL EXPLAIN (FORMAT JSON) output and determines structural equivalence between plans, ignoring cost and cardinality noise.',
      'Designed a divide-and-conquer algorithm to detect optimizer plan switches across a parameterized date range, reducing required queries by ~95% (16 vs ~365) versus brute-force search, with results independently verified.',
    ],
  },
  {
    title: 'xv6 OS Kernel Extensions',
    tech: ['C'],
    logo: { si: siC, color: '#A8B9CC' },
    context: 'Course Project (OS II)',
    github: 'https://github.com/AareRenuShri/xv6-os-kernel-extensions',
    demo: null,
    bullets: [
      'Added new system calls in xv6 for processes to query their own info, backed by kernel-side syscall-count tracking.',
      'Engineered a 4-level priority scheduler (4-level-SC-MLFQ) using syscall-count tracking to classify interactive vs. CPU-intensive processes, with aging to prevent starvation.',
      'Implemented virtual memory using a clock page replacement algorithm, allowing xv6 to swap pages to disk instead of terminating processes when physical memory is full.',
      'Extended virtual memory with disk-backed swapping, added FCFS and SSTF disk scheduling, and integrated RAID 0/1/5 to improve storage performance, reliability, and fault tolerance across simulated disks.',
    ],
  },
  {
    title: 'Log Classifier API',
    tech: ['FastAPI', 'Docker', 'Render'],
    logo: { si: siFastapi, color: '#009688' },
    context: 'Personal Project',
    github: 'https://github.com/AareRenuShri/log-classifier-api',
    demo: 'https://log-classifier-api.onrender.com/docs',
    bullets: [
      'Developed an NLP pipeline classifying log messages into 4 categories using TF-IDF + Logistic Regression, achieving 99.6% accuracy on a held-out test set of 248 logs.',
      'Designed regex-based log normalization to replace variable values with placeholder tokens, fixing a train/inference preprocessing mismatch; validated the model on 32 unseen logs, achieving 96.9% accuracy.',
      'Exposed the trained model through a FastAPI /classify endpoint, using Pydantic for request validation and Swagger UI for interactive endpoint testing.',
      'Configured Render deployment with custom build/start commands, port binding via environment variables, and host configuration for external traffic, making the API publicly accessible.',
    ],
  },
  {
    title: 'RISC-V FPU vs Load/Store Performance',
    tech: ['RISC-V Assembly'],
    logo: { si: siRiscv, color: '#283272' },
    context: 'Course Project',
    github: 'https://github.com/AareRenuShri/riscv-fpu-vs-loadstore',
    demo: null,
    bullets: [
      'Implemented and benchmarked baseline load/store-based and FPU-optimized matrix multiplication routines in RISC-V assembly using gem5, evaluating performance across matrix sizes from 16×16 to 128×128.',
      'Optimized matrix multiplication using FPU register-based operations to reduce memory accesses, achieving an approximately 6–7% improvement in execution time over the load/store-based baseline.',
      'Analyzed gem5 simulation results across matrix sizes to compare the execution performance of baseline and FPU-optimized implementations.',
    ],
  },
  {
    title: 'Log Analyzer',
    tech: ['Python'],
    logo: { si: siPython, color: '#3776AB' },
    context: 'Personal Project',
    github: 'https://github.com/AareRenuShri/log-analyzer',
    bullets: [
      'Built a Python CLI tool that parses log files using compiled regex patterns, safely skipping malformed or corrupted entries instead of crashing or silently miscounting them.',
      "Used Python's Counter to analyze error frequency across 500+ log lines, identifying the most common failure reasons and tracking daily error trends across datasets.",
      'Generated daily error trend and error distribution visualizations with Matplotlib, converting raw log data into clear visual summaries.',
      'Built a synthetic log generator using weighted random sampling and randomized timestamps to produce realistic multi-day test data for systematic validation of parsing and analysis logic.',
    ],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const open = openIndex === null ? null : PROJECTS[openIndex];

  return (
    <section id="projects" className="relative bg-[#f4f3f0]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        {/* Heading + hint */}
        <div className="text-center">
          <h2 className="font-display text-5xl leading-none tracking-[-0.01em] text-neutral-900 sm:text-6xl lg:text-[5vw]">
            PROJECTS
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-400 sm:text-sm">
            <MousePointerClick className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Click on a folder to open the project
          </p>
        </div>

        {/* Folder grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10 lg:mt-16 lg:gap-x-10">
          {PROJECTS.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={project.title} className="flex w-40 flex-col items-center sm:w-48 lg:w-52">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? 'Close' : 'Open'} ${project.title}`}
                  className="relative rounded-lg transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
                >
                  {isOpen ? (
                    <FolderOpen
                      className="h-28 w-28 fill-[#e8e6e2] text-[#dcdad6] sm:h-32 sm:w-32"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  ) : (
                    <Folder
                      className="h-28 w-28 fill-[#e8e6e2] text-[#dcdad6] sm:h-32 sm:w-32"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  )}
                  {/* Tech logo sticker on the folder body */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-[58%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)] ring-1 ring-neutral-900/10 sm:h-11 sm:w-11"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill={project.logo.color}
                    >
                      <path d={project.logo.si.path} />
                    </svg>
                  </span>
                </button>
                <p className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-neutral-900 sm:text-sm">
                  {project.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detail panel — appears when a folder is opened */}
        {open && (
          <div
            key={open.title}
            className="animate-panel-in mx-auto mt-14 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.07)] ring-1 ring-neutral-900/5 sm:p-8 lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-bold uppercase tracking-wide text-neutral-900 sm:text-lg">
                {open.title}
              </h3>
              {open.context && (
                <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                  {open.context}
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {open.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a
                href={open.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:text-neutral-500"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              {open.demo && (
                <a
                  href={open.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:text-neutral-500"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>

            <ul className="mt-6 space-y-3 border-t border-neutral-900/5 pt-6">
              {open.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700 sm:text-[15px]"
                >
                  <span
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-neutral-900"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
