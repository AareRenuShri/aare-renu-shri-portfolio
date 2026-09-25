import collage from '../assets/collage.png';

export default function Pors() {
  return (
    <section id="pors" className="relative bg-[#f4f3f0]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col-reverse items-start gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid lg:grid-cols-[60%_40%] lg:gap-0 lg:py-24 lg:pl-[5vw] lg:pr-[4vw]">
        {/* Content */}
        <div className="w-full">
          <h2 className="font-display text-4xl leading-none tracking-[-0.01em] text-neutral-900 sm:text-5xl lg:text-[4.5vw]">
            PORs &<br />
            Extracurricular
          </h2>

          <div className="mt-10">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-neutral-900 sm:text-base lg:text-lg">
              POSITIONS OF RESPONSIBILITY
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-neutral-900 sm:text-base lg:text-[17px]">
                  Event Coordinator{' '}
                  <span className="ml-1 text-xs font-medium normal-case tracking-normal text-neutral-500 sm:text-sm">
                    — DIESA, IIT Hyderabad
                  </span>
                </p>
                <p className="mt-1 text-xs italic text-neutral-400 sm:text-[13px]">
                  2nd Sem, 2025
                </p>
                <ul className="mt-2 space-y-2 text-xs text-neutral-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-neutral-900" aria-hidden="true" />
                    Monitored squash matches across multiple rounds, coordinating with department representatives to resolve scheduling conflicts and logistical issues.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-neutral-900 sm:text-base lg:text-[17px]">
                  Coordinator, Cultural & Design{' '}
                  <span className="ml-1 text-xs font-medium normal-case tracking-normal text-neutral-500 sm:text-sm">
                    — CSE Departmental Day, IIT Hyderabad
                  </span>
                </p>
                <p className="mt-1 text-xs italic text-neutral-400 sm:text-[13px]">
                  2nd Sem, 2025
                </p>
                <ul className="mt-2 space-y-2 text-xs text-neutral-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-neutral-900" aria-hidden="true" />
                    Contacted department alumni across graduating batches and coordinated an interactive alumni-student discussion session.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-neutral-900 sm:text-base lg:text-[17px]">
                  Deputy Coordinator{' '}
                  <span className="ml-1 text-xs font-medium normal-case tracking-normal text-neutral-500 sm:text-sm">
                    — Elan & nVision, IIT Hyderabad
                  </span>
                </p>
                <p className="mt-1 text-xs italic text-neutral-400 sm:text-[13px]">
                  2nd Sem, 2025
                </p>
                <ul className="mt-2 space-y-2 text-xs text-neutral-700 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-neutral-900" aria-hidden="true" />
                    Publicity: Contacted colleges outside IIT Hyderabad to promote the fest and increase student participation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-neutral-900" aria-hidden="true" />
                    Informals: Helped construct a large-scale cardboard showcase installation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-neutral-900 sm:text-base lg:text-lg">
              EXTRACURRICULAR
            </h3>

            <p className="mt-6 max-w-prose text-justify text-[15px] leading-[1.7] text-neutral-800 sm:text-base lg:text-lg">
              NSS (National Service Scheme), IIT Hyderabad — Contributed to campus cleanliness drives, walkathons, and awareness campaigns on social and environmental causes.
            </p>
          </div>
        </div>

        {/* Photo collage — final composite image */}
        <div className="flex w-full items-center justify-center lg:justify-end">
          <img
            src={collage}
            alt="Collage of college fest and NSS event photos"
            loading="lazy"
            className="h-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}