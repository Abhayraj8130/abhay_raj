// Update this file with your verified resume details before publishing.
export const profile = {
  name: 'Abhay Raj',
  role: 'Software Developer',
  location: 'India',
  email: 'your.email@example.com', // Replace with your professional email
  phone: '',                       // Optional: international format, e.g. +91...
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile/',
  resume: '/resume.pdf',           // Add your PDF to public/resume.pdf
  availability: 'Open to meaningful opportunities',
  intro: 'I build practical software that connects platforms, automates operations, and makes complex workflows feel simple.',
  about: 'I am a software developer working across backend engineering, API integrations, and business applications. My recent work has focused on connecting commerce platforms with TruxCargo logistics workflows, building reliable order and shipment pipelines, and improving existing PHP applications.',
};

export const skills = [
  { name: 'PHP', group: 'Backend' },
  { name: 'CodeIgniter 4', group: 'Backend' },
  { name: 'REST API Integration', group: 'Backend' },
  { name: 'MySQL', group: 'Data' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'HTML & CSS', group: 'Frontend' },
  { name: 'Shopify Admin GraphQL', group: 'Platforms' },
  { name: 'Shopify OAuth & Webhooks', group: 'Platforms' },
  { name: 'Amazon SP-API / LWA', group: 'Platforms' },
  { name: 'cURL', group: 'Tools' },
  { name: 'Git', group: 'Tools' },
  { name: 'Queue & Cron Workflows', group: 'Backend' },
];

export const projects = [
  {
    number: '01',
    name: 'Shopify × TruxCargo Integration',
    type: 'E-commerce · Logistics · API Integration',
    summary: 'Connected Shopify stores to TruxCargo shipping workflows, from merchant authorization and checkout rates to shipment creation and fulfillment tracking.',
    points: ['OAuth and store-level credential handling', 'Admin GraphQL, carrier-service rates and webhooks', 'Order sync, queued AWB creation and fulfillment updates', 'Tracking sync, cancellation and app-uninstall lifecycle'],
    stack: ['CodeIgniter 4', 'PHP', 'Shopify GraphQL', 'MySQL'],
    tone: 'lime',
    status: 'Integration development'
  },
  {
    number: '02',
    name: 'Amazon SP-API Integration',
    type: 'Marketplace · Order Automation',
    summary: 'Worked on the foundation for connecting Amazon marketplace order data with the TruxCargo logistics platform.',
    points: ['Solution Provider Portal application setup', 'Login with Amazon (LWA) credentials and refresh-token flow', 'SP-API sandbox validation and order API exploration'],
    stack: ['CodeIgniter 4', 'PHP', 'Amazon SP-API', 'LWA'],
    tone: 'blue',
    status: 'Integration development'
  },
  {
    number: '03',
    name: 'TruxCargo Admin — CI4 Migration',
    type: 'Backend · Business Applications',
    summary: 'Migrated and enhanced operational modules in the TruxCargo admin ecosystem, with a focus on maintainability and reliable reporting.',
    points: ['Customer, Support, Ticketing and Partner modules', 'Pincode tools, CSV import/export and pagination', 'B2B Order MIS, NDR and tracking exception reports', 'Dashboard filters and SQL aggregate optimization'],
    stack: ['PHP', 'CodeIgniter 4', 'MySQL', 'JavaScript'],
    tone: 'orange',
    status: 'Ongoing platform work'
  },
  {
    number: '04',
    name: 'TruxCargo Mobile App Improvements',
    type: 'Mobile · Quality & Release Support',
    summary: 'Contributed bug fixes and release-readiness improvements across TruxCargo mobile app workflows.',
    points: ['iOS and Android issue investigation and fixes', 'Compatibility and native dependency updates', 'Crash and startup issue troubleshooting', 'App Store review build preparation'],
    stack: ['Mobile debugging', 'Native dependencies', 'Release workflows'],
    tone: 'pink',
    status: 'Maintenance & releases'
  }
];

export const experience = [
  {
    role: 'Software Development',
    company: 'TruxCargo — product and platform work',
    period: 'Dates to be added',
    detail: 'Backend development, marketplace integrations, admin-panel enhancements, and mobile application issue resolution.'
  }
];
