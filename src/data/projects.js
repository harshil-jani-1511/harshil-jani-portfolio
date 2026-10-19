export const projects = [
  {
    slug: 'justfleet', name: 'JustFleet', category: 'Fleet marketplace',
    tagline: 'A multi-role fleet marketplace connecting vehicle buyers, sellers, and transporters.',
    summary: 'Core platform development across marketplace workflows, role-based access, reporting, and real-time communication.',
    role: 'Senior Software Developer', stack: ['Laravel', 'Inertia.js', 'Vue 3', 'MySQL', 'Ably', 'GitLab CI/CD'],
    challenge: 'The platform needed distinct permissions for six user roles while supporting marketplace interactions and timely communication.',
    solution: 'Contributed Laravel backend modules and Vue 3 interfaces, implemented role-aware workflows, and moved real-time chat from Reverb to Ably after a hosting port limitation.',
    impact: 'Delivered core marketplace and admin workflows with clearer role boundaries and a more connected user experience.',
    highlights: ['Worked in a three-member engineering team on core backend modules.', 'Implemented RBAC for Buyer, Seller, Transporter, Technician, Admin, and Super Admin.', 'Built vehicle listing and competitive bidding workflows.', 'Developed admin dashboards and reporting tools.', 'Worked on one-to-one chat, message history, notifications, role-based access, and file/image sharing.', 'Initially integrated Laravel Reverb, then migrated chat transport to Ably due to hosting/network port limitations.', 'Used GitLab CI/CD workflows.']
  },
  {
    slug: 'tracxtms', name: 'TracxTMS', category: 'Transportation management',
    tagline: 'A cloud-based transportation management system for dispatch, tracking, and reporting.',
    summary: 'Laravel feature development, third-party data integrations, reporting, and performance improvements.',
    role: 'Software Developer', stack: ['Laravel', 'MySQL', 'REST APIs', 'Redis', 'Docker'],
    challenge: 'Transportation workflows relied on external systems, while users needed dependable reporting and responsive operational screens.',
    solution: 'Integrated external APIs through Laravel, mapped incoming data, improved error handling, optimized queries, and built reports for business needs.',
    impact: 'Improved integration reliability and maintainability, reduced avoidable production issues, and made operational data easier to review.',
    highlights: ['Developed driver dispatch, load tracking, equipment coordination, and geofencing features.', 'Integrated Samsara, Geotab, Motive, Prometheus, and Paycom.', 'Implemented user-triggered refreshes to fetch current data; these were not continuous real-time updates.', 'Handled API authentication, data mapping, database updates, error handling, retries, logging, testing, and debugging.', 'Optimized complex SQL queries, Laravel code paths, API payload processing, and legacy modules.', 'Built report-management features with filters, date ranges, exports, and summary views.']
  },
  {
    slug: 'fold-and-file', name: 'Fold & File', category: 'Document management',
    tagline: 'A document platform for collecting, processing, and categorizing incoming documents.',
    summary: 'Full-stack Laravel development with IMAP email ingestion, custom PHP document parsing, and structured storage.',
    role: 'Backend & Frontend Developer', stack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'IMAP'],
    challenge: 'Users needed a repeatable way to collect documents arriving by email and identify important information without manually reviewing every item.',
    solution: 'Built an IMAP-driven ingestion flow followed by custom PHP line-by-line parsing and key/value matching, with exception handling and an uncategorized state for documents needing attention.',
    impact: 'Reduced repetitive document handling and made failed or unclassified documents visible for follow-up.',
    highlights: ['Worked on the project for more than 1.5 years across backend and frontend development.', 'Connected to mail servers using IMAP to fetch incoming emails and attachments.', 'Processed attachments with custom PHP logic, reading content line by line and matching required keys and values.', 'Mapped extracted details to required fields and stored processed information in MySQL.', 'Handled invalid documents, duplicates, and processing failures.', 'Created an uncategorized-document path for items that could not be classified.', 'Worked on REST APIs, third-party integrations, database operations, maintenance, and bug fixes.']
  },
  {
    slug: '3b-plp', name: '3B PLP', category: 'Private-label e-commerce',
    tagline: 'An e-commerce portal connecting manufacturers, customers, and affiliate vendors.',
    summary: 'Laravel business logic for shopping workflows, vendor commission URLs, administration, and payment-enabled purchasing.',
    role: 'Software Developer', stack: ['Laravel', 'MySQL', 'PayPal', 'E-commerce workflows'],
    challenge: 'The portal needed to support manufacturers listing products, customers purchasing them, and vendors promoting products through commission-linked URLs.',
    solution: 'Implemented shopping and affiliate-related functionality in Laravel, connecting vendor URLs and commission workflows to the wider e-commerce experience.',
    impact: 'Supported a multi-party e-commerce model with customer purchasing flows and vendor marketing attribution.',
    highlights: ['Worked on the customer shopping cart and purchase workflow.', 'Developed vendor affiliate URL functionality for marketing and commission attribution.', 'Implemented backend business logic and administrative features.', 'Worked with MySQL data operations and Laravel application logic.', 'Contributed frontend changes for shopping cart features.', 'Worked around PayPal payment integration; this case study does not claim sole ownership of that integration.']
  }
]

export const otherProjects = [
  { title: 'Clean Cloud System', category: 'Reporting Automation', description: 'Contributed to a reporting automation platform that generated and delivered scheduled reports to clients, with AWS integration.', technologies: ['Yii2', 'PHP', 'MySQL', 'AWS'] },
  { title: 'Dating App', category: 'Backend & API Development', description: 'Developed backend functionality and REST APIs for a dating application connected to a Flutter mobile app. Also guided a junior developer.', technologies: ['Laravel', 'PHP', 'MySQL', 'REST API'] },
  { title: 'Salamtak', category: 'Pharmacy Management', description: 'Contributed to a pharmacy management application covering medicine orders, prescriptions, user profiles, and administration.', technologies: ['CodeIgniter', 'PHP', 'MySQL'] },
  { title: 'Chroma Cars & Dealership Websites', category: 'Automotive', description: 'Maintained and enhanced multiple dealership websites, implementing client requests, updating website features, and working with automotive integrations.', technologies: ['Core PHP', 'MySQL', 'JavaScript', 'Third-party Integrations'] },
  { title: 'Four Seasons Asbestos Solutions', category: 'Business Website', description: 'Developed a responsive business website showcasing services and providing inquiry forms for prospective customers.', technologies: ['WordPress', 'Elementor', 'MySQL'] },
]
