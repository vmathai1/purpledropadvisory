import checkIcon from '../../assets/icons/check-white.svg';

const CHECKLISTS = [
  {
    id: 'onboarding',
    title: 'New Hire Onboarding',
    blurb: 'Everything to run in the first 30 days so a new hire contributes with confidence.',
    items: [
      'Send the offer letter and collect the signed agreement plus right-to-work / I-9 documentation',
      'Complete background and reference checks where the role requires them',
      'Provision laptop, email, SSO, and access to core systems before day one',
      'Share a first-week schedule, team introductions, and key points of contact',
      'Assign an onboarding buddy and book 30 / 60 / 90-day manager check-ins',
      'Finish payroll setup, tax forms, and benefits enrollment',
      'Walk through role expectations, first goals, and how success is measured',
      'Confirm required compliance, security, and anti-harassment training is done',
    ],
  },
  {
    id: 'hiring',
    title: 'Recruitment & Hiring Process',
    blurb: 'A consistent, fair pipeline from open role to signed offer.',
    items: [
      'Write a scorecard defining the role outcomes, must-have skills, and level',
      'Align hiring manager and interviewers on the process, rubric, and timeline',
      'Publish an inclusive job description and confirm the pay range is documented',
      'Source across multiple channels and track candidates in one system',
      'Use structured interviews with consistent questions and written feedback',
      'Run a debrief and decide against the scorecard, not gut feel',
      'Check references and extend a verbal offer before the written offer',
      'Send a timely, respectful response to every candidate who interviewed',
    ],
  },
  {
    id: 'performance',
    title: 'Performance Review Cycle',
    blurb: 'Keep reviews calibrated, documented, and useful for growth.',
    items: [
      'Publish the cycle timeline, expectations, and rating scale to all employees',
      'Collect self-assessments and structured peer feedback',
      'Have managers draft written reviews tied to goals and role expectations',
      'Run calibration sessions to align ratings across teams',
      'Separate development conversations from compensation decisions',
      'Deliver reviews live, then share the written summary',
      'Agree on goals and a development plan for the next period',
      'Store final reviews in the employee record',
    ],
  },
  {
    id: 'compensation',
    title: 'Compensation & Benefits Review',
    blurb: 'An annual pass to keep pay competitive, equitable, and compliant.',
    items: [
      'Refresh salary benchmarks against current market data by role and level',
      'Review pay equity across gender, race, and tenure and document any adjustments',
      'Confirm every role maps to a band and that bands are up to date',
      'Model the merit, promotion, and adjustment budget with finance',
      'Review benefits usage, renewal costs, and gaps versus peer companies',
      'Verify overtime, exemption status, and minimum-wage compliance by location',
      'Prepare clear total-compensation statements for employees',
      'Communicate changes and the rationale to managers and staff',
    ],
  },
  {
    id: 'compliance',
    title: 'HR Compliance & Recordkeeping',
    blurb: 'The foundations that keep the company audit-ready.',
    items: [
      'Maintain a current employee handbook acknowledged by every employee',
      'Keep required workplace postings current for each work location',
      'Store I-9s, tax forms, and personnel files with correct retention periods',
      'Track leave entitlements (FMLA / state / sick) and accommodation requests',
      'Confirm worker classification (employee vs. contractor, exempt vs. non-exempt)',
      'Review data-privacy handling for personnel and candidate information',
      'Schedule recurring compliance training and record completion',
      'Document an incident and investigation process for HR complaints',
    ],
  },
  {
    id: 'offboarding',
    title: 'Employee Offboarding',
    blurb: 'A respectful, secure exit that protects people and the business.',
    items: [
      'Confirm the last day, notice period, and any transition plan in writing',
      'Prepare the final paycheck, PTO payout, and benefits / COBRA information',
      'Collect equipment and revoke system access on the departure date',
      'Reassign accounts, documents, and ongoing responsibilities',
      'Run an exit interview and capture themes for leadership',
      'Communicate the change to the team and clients as appropriate',
      'Provide separation paperwork and any severance agreement',
      'Archive the employee record per the retention policy',
    ],
  },
];

export default function Checklists() {
  return (
    <section className="border-t border-[#f3f3fb] bg-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-2 max-w-[600px]">
          <p className="font-mono text-[13px] uppercase text-[#7c2dfe]">What to cover</p>
          <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
            Six checklists, one people operation
          </h2>
          <p className="text-[16px] leading-6 text-[#665b7d]">
            Use these as a starting point. When you are ready for a version tailored to your
            stage, headcount, and jurisdictions, that is exactly what we build with clients.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {CHECKLISTS.map((list) => (
            <div
              key={list.id}
              className="flex flex-col gap-5 rounded-2xl border border-[#e7defb] bg-white p-6 lg:p-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[20px] lg:text-[22px] text-[#0d0022]">
                  {list.title}
                </h3>
                <p className="text-[15px] leading-6 text-[#665b7d]">{list.blurb}</p>
              </div>
              <ul className="flex flex-col gap-3">
                {list.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#7c2dfe]">
                      <img src={checkIcon} alt="" className="size-2.5" />
                    </span>
                    <span className="text-[15px] leading-6 text-[#0d0022]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
