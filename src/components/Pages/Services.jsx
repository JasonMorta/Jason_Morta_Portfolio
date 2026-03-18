import { AccentKicker, GlassPanel, MetaPill, PanelHeader, SectionTitle } from '../../styles/uiShells.js';
import styles from './Services.module.css';

const serviceCards = [
  {
    title: 'Business websites',
    summary: 'Professional websites for companies, small businesses, and local services that need a clear online presence.',
    deliverables: ['Home, about, service, and contact pages', 'Mobile-friendly layouts', 'Clean calls to action that make it easy to get enquiries'],
    benefit: 'Helps people understand what you offer quickly and gives them a clear next step to contact you or request a quote.',
  },
  {
    title: 'Landing pages',
    summary: 'Focused pages built to promote one service, one product, one offer, or one campaign.',
    deliverables: ['Simple page structure with one clear goal', 'Lead forms or contact actions', 'Fast-loading layouts designed to keep visitors focused'],
    benefit: 'Useful when you want more sign-ups, bookings, messages, or interest without sending people through a full website.',
  },
  {
    title: 'Portfolio websites',
    summary: 'Showcase websites for freelancers, creatives, and professionals who need to present their work in a polished way.',
    deliverables: ['Project galleries and case-study sections', 'Personal brand presentation', 'Contact and enquiry sections'],
    benefit: 'Makes your work easier to trust, easier to browse, and easier to remember.',
  },
  {
    title: 'Custom web apps',
    summary: 'Interactive browser-based tools built around a specific workflow, idea, or business need.',
    deliverables: ['Dashboards, portals, calculators, trackers, or internal tools', 'Forms, saved records, and filtered data views', 'Flexible layouts built around how the tool will actually be used'],
    benefit: 'Saves time, reduces repetitive manual work, and gives you a tool designed around your process instead of forcing your process into a generic system.',
  },
  {
    title: 'Online stores and product pages',
    summary: 'Storefronts and product-focused pages for selling items online or presenting a catalogue clearly.',
    deliverables: ['Product listings and detail pages', 'Store layout improvements', 'User-friendly shopping and browsing flows'],
    benefit: 'Helps customers find products faster, understand them better, and move more smoothly toward purchase or enquiry.',
  },
  {
    title: 'Admin panels and data tools',
    summary: 'Behind-the-scenes systems that make it easier to manage content, records, projects, or customer information.',
    deliverables: ['Content management views', 'Tables, filters, editing tools, and forms', 'Connected data flows for more organised day-to-day work'],
    benefit: 'Gives you more control over your own information so updates are quicker and less frustrating to manage.',
  },
  {
    title: 'Website redesigns and upgrades',
    summary: 'Improvements for existing websites that already work, but feel outdated, unclear, slow, or hard to use.',
    deliverables: ['Layout refreshes', 'Page clean-up and better structure', 'Feature additions and quality-of-life improvements'],
    benefit: 'Lets you improve what you already have without always needing to start again from scratch.',
  },
  {
    title: 'Forms and workflow systems',
    summary: 'Online forms and step-based flows for collecting information, enquiries, requests, or submissions more efficiently.',
    deliverables: ['Smart forms with clear steps', 'Submission handling and confirmation flows', 'Better structure for collecting accurate information'],
    benefit: 'Makes it easier for people to submit the right information and easier for you to manage what comes in.',
  },
];

const buildTypes = [
  'Company and service websites',
  'Landing pages for a single offer',
  'Portfolio and personal brand websites',
  'E-commerce and product showcase pages',
  'Dashboards and admin panels',
  'Interactive tools and custom web apps',
  'Data-connected forms and workflow systems',
  'Feature upgrades for existing websites',
];

const processSteps = [
  {
    title: 'Understand the goal',
    text: 'Start with what the website or app needs to do, who it is for, and what result matters most.',
  },
  {
    title: 'Plan the structure',
    text: 'Map out the pages, sections, or screens so the build stays focused and easy to use.',
  },
  {
    title: 'Build the experience',
    text: 'Create the front end, logic, and supporting functionality needed for the project to work smoothly.',
  },
  {
    title: 'Refine and improve',
    text: 'Tidy up the details, improve usability, and shape the final result into something clean, practical, and professional.',
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <GlassPanel as="div" className={styles.panel}>
        <PanelHeader>
          <div className={styles.headingBlock}>
            <AccentKicker>Services</AccentKicker>
            <SectionTitle>What I Can Build For You</SectionTitle>
          </div>
          <MetaPill>Websites • Web Apps • Upgrades</MetaPill>
        </PanelHeader>

        <div className={styles.introWrap}>
          <p className={styles.lead}>
            I build websites and web-based tools that are designed to be useful, clear, and easy to work with.
          </p>
          <p className={styles.introText}>
            Whether you need a business website, a landing page, a portfolio, a custom tool, or improvements to an existing site,
            the goal is the same: create something that looks professional, works properly, and makes life easier for the people using it.
          </p>
        </div>

        <div className={styles.buildBlock}>
          <h2 className={styles.subHeading}>Common types of work I can help with</h2>
          <div className={styles.buildGrid}>
            {buildTypes.map((item) => (
              <div key={item} className={styles.buildChip}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {serviceCards.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>

              <div className={styles.cardListWrap}>
                <p className={styles.listTitle}>What this can include</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.benefitBox}>
                <p className={styles.benefitTitle}>How it benefits you</p>
                <p>{service.benefit}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.processSection}>
          <div className={styles.processHeader}>
            <h2 className={styles.subHeading}>A simple way I approach projects</h2>
            <p>
              The aim is not just to build something that looks good, but something that solves a real problem and feels easy to use.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={step.title} className={styles.processCard}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.outroSection}>
          <h2 className={styles.subHeading}>The end result</h2>
          <p>
            A website or application should do more than just exist online. It should help explain your offer, support your workflow,
            improve the user experience, and make your business or idea easier to understand and use.
          </p>
        </div>
      </GlassPanel>
    </section>
  );
}
