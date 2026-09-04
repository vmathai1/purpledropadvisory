import arrowRight from '../../assets/icons/arrow-right-black.svg';

const REPORTS = [
  {
    tag: 'Hiring Outlook',
    title: 'Demand stays high for specialized talent',
    body: "The broader labor market is cooling and employers are hiring more cautiously, but demand for hard-to-find, specialized skills remains resilient. Widening skills gaps mean the roles companies most need to fill are often the hardest to fill.",
    source: 'Robert Half',
    sourceTitle: 'Hiring Trends: 2026 Demand for Skilled Talent',
    url: 'https://www.roberthalf.com/us/en/insights/salary-hiring-trends/demand-for-skilled-talent',
  },
  {
    tag: 'Hiring Practices',
    title: 'Skills-based hiring becomes the default',
    body: "Roughly seven in ten employers now weight demonstrated skills over degrees or job titles when hiring, up from about two-thirds a year earlier. Structured, scenario-based assessments are increasingly replacing resume-first screening.",
    source: 'NACE',
    sourceTitle: 'Job Market: Trends & Predictions (Job Outlook 2026)',
    url: 'https://www.naceweb.org/job-market/trends-and-predictions/',
  },
  {
    tag: 'AI & Recruiting',
    title: 'AI moves from pilot to core infrastructure',
    body: "AI is now embedded across sourcing, screening, and internal mobility rather than sitting in a single point tool. Organizations using it well report faster time-to-hire and better matches, but candidates increasingly expect transparency about where AI is involved.",
    source: 'SHRM',
    sourceTitle: '2026 Talent Trends Report',
    url: 'https://www.shrm.org/about/press-room/shrm-unveils-2026-talent-trends-report--data-driven-insights-for',
  },
  {
    tag: 'Compensation',
    title: 'Pay growth concentrates in specialized roles',
    body: "Broad base-pay increases are moderating across the board, while AI, data, cloud, and security specialists continue to command outsized raises and premiums. The gap between generalist and specialist compensation keeps widening.",
    source: 'Auxis',
    sourceTitle: 'IT Salary Trends CIOs Need to Know in 2026',
    url: 'https://www.auxis.com/it-salary-trends/',
  },
  {
    tag: 'Workplace',
    title: 'Hybrid wins the preference war',
    body: "Even as many employers tighten in-office requirements, a majority of job seekers still rank hybrid arrangements as their top preference, and a meaningful share say they would leave a role that became fully in-person.",
    source: 'SurveyMonkey',
    sourceTitle: 'The Workplace Today: 2026 Remote and Hybrid Work Trends',
    url: 'https://www.surveymonkey.com/learn/employee-feedback/remote-hybrid-work-statistics/',
  },
  {
    tag: 'Talent Strategy',
    title: 'Talent planning becomes a portfolio discipline',
    body: "Leading organizations are shifting from filling individual roles to managing a skills inventory across the business, treating talent supply and demand as something to be planned continuously rather than recruited reactively.",
    source: 'Mercer',
    sourceTitle: 'Global Talent Trends 2026',
    url: 'https://www.mercer.com/en-us/insights/people-strategy/future-of-work/global-talent-trends/',
  },
];

export default function Report() {
  return (
    <section className="border-t border-[#f3f3fb] bg-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-2 max-w-[620px]">
          <p className="font-mono text-[13px] uppercase text-[#7c2dfe]">What the data says</p>
          <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
            Six signals shaping hiring in 2026
          </h2>
          <p className="text-[16px] leading-6 text-[#665b7d]">
            Drawn from current research from SHRM, Mercer, NACE, and other industry
            researchers. Each card links to the original report for the full data.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {REPORTS.map((report) => (
            <div
              key={report.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#e7defb] bg-white p-6 lg:p-8"
            >
              <p className="font-mono text-[12px] uppercase tracking-wide text-[#e49b08]">
                {report.tag}
              </p>
              <h3 className="font-bold text-[20px] lg:text-[22px] text-[#0d0022]">
                {report.title}
              </h3>
              <p className="text-[15px] leading-6 text-[#665b7d]">{report.body}</p>
              <a
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 pt-2 text-[14px] font-semibold text-[#5B21E0] transition-colors hover:text-[#7c2dfe]"
              >
                {report.source} &mdash; {report.sourceTitle}
                <img src={arrowRight} alt="" className="size-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-[13px] leading-5 text-[#8b8199]">
          Sources are third-party research reports, current as of publication. Figures and
          methodologies vary by publisher &mdash; see each report for details.
        </p>
      </div>
    </section>
  );
}
