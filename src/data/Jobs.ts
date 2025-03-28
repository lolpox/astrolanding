/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Shopify & Wordpress Developer",
        startDate: "2023-09",
        company: "Upwork",
        location: "Remote",
        description: "Specialized in Shopify and WordPress development, delivering tailored eCommerce and business websites.",
        goals: [
            "Specialized in Shopify and WordPress development, delivering tailored eCommerce and business websites.",
            "Enhanced site performance and optimized conversion rates for both Shopify and WordPress projects.",
            "Managed long-term client relationships, consistently exceeding expectations and meeting deadlines.",
        ],
        currentJob: true,
    },
    {
        title: "Wordpress Developer",
        startDate: "2023-01",
        endDate: "2023-08",
        company: "AbogadosNow",
        location: "Remote",
        description: " Collaborated with the design team to create responsive, user-friendly WordPress websites for a legal firm.",
        goals: [
            " Collaborated with the design team to create responsive, user-friendly WordPress websites for a legal firm.",
            "Ensured pixel-perfect design implementations using Elementor Pro, optimizing for performance and accessibility.",
        ],
        currentJob: false,
    },
    {
        title: "Shopify & Wordpress Developer",
        startDate: "2018-08",
        endDate: "2019-08",
        company: "Redstage",
        location: "Remote",
        description: "Developed custom solutions for both Shopify and WordPress, including CRM systems and eCommerce sites.",
        goals: [
            "Developed custom solutions for both Shopify and WordPress, including CRM systems and eCommerce sites.",
            "Led migrations from Magento to Shopify and optimized WordPress websites for scalability and performance.",
        ],
        currentJob: false,
    },
    {
        title: "Shopify Web Developer",
        startDate: "2016-12",
        endDate: "2018-08",
        company: "Trafilea Group",
        location: "Argentina",
        description: " Developed high-traffic Shopify stores, performed A/B testing, and optimized for performance.",
        goals: [
            "Developed high-traffic Shopify stores, performed A/B testing, and optimized for performance.",
            "Collaborated on marketing campaigns to enhance conversion rates and user engagement.",
        ],
        currentJob: false,
    },
    {
        title: "Web Developer",
        startDate: "2014-04",
        endDate: "2016-12",
        company: "UpWork",
        location: "Remote",
        description: "Started with data entry and advanced to web development, gaining experience in CSS fixes and small tasks. Progressed to building complete WordPress websites for international clients, delivering quality results and fostering strong client relationships.",
        goals: [
            "DStarted with data entry and advanced to web development, gaining experience in CSS fixes and small tasks. Progressed to building complete WordPress websites for international clients, delivering quality results and fostering strong client relationships.",
        ],
        currentJob: false,
    },
];
export default workExperience;