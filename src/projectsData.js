import samsKitchen from "./assets/sams-kitchen.png";
import tournest from "./assets/tournest.png";
import studify from "./assets/studify.png";
import taskwave from "./assets/taskwave.png";

const projectData = [
  {
    name: "Sam's Kitchen",
    challanges:
      "Building the notification system, the role-based rider delivery flow with OTP verification, and the cashout workflow.",
    title: "Sam's Kitchen — Personal Cloud Kitchen (Full Stack)",
    desc: "Sam's Kitchen is a personal cloud kitchen platform where customers order food and track every step of delivery, riders accept and deliver orders with OTP verification and cash out their earnings, and admins run the whole kitchen, including foods, orders, users, riders, payments, and cashouts, from analytics-driven dashboards.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "SSLCommerz",
      "TanStack Query",
      "React Hook Form",
      "React Share",
      "Recharts",
      "Ant Design",
      "React Select",
      "SweetAlert2",
      "React Toastify",
      "jsPDF",
    ],
    features: [
      {
        icon: "🍔",
        title: "Food Ordering System",
        points: [
          "Browse all foods with search, filters, offers, and customer reviews",
          "Add items to the cart and pay securely via Stripe or SSLCommerz",
          "Track every order through a six-step progress timeline, from order placed to delivered",
          "Share foods on social media",
        ],
      },
      {
        icon: "🚴‍♂️",
        title: "Rider Management",
        points: [
          "Riders see nearby delivery offers and accept orders",
          "Move orders through assigned, picked up, and delivered with OTP verification at hand-over",
          "Pending and completed deliveries with per-order earnings",
          "Request cashouts and track payout status",
        ],
      },
      {
        icon: "📋",
        title: "Role-based Dashboard",
        points: [
          "Separate admin, customer, and rider dashboards with live analytics charts",
          "Admin manages foods, kitchen orders, users, rider applications, and cashout requests",
          "Customers apply to become riders and manage their profile",
          "Responsive from 320px mobile screens up to wide desktops",
        ],
      },
      {
        icon: "🛒",
        title: "Order History & Management",
        points: [
          "Customers view all orders and follow delivery status in real time",
          "Cancel orders while they are still pending",
          "Download a receipt after payment",
          "Kitchen staff mark orders as prepared so riders can pick them up",
        ],
      },
      {
        icon: "📱",
        title: "Real-Time Notifications",
        points: [
          "Instant notifications for order, payment, delivery, and rider activity",
          "Read and unread state with mark-all-as-read",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UX/UI",
        points: [
          "Light and dark themes built on a shared design system",
          "Accessible, keyboard-friendly navigation and mobile drawer menu",
        ],
      },
    ],
    status: "Completed",
    image: samsKitchen,
    github: "https://github.com/SarfarazAkram17/Sams-Kitchen-Client",
    liveLink: "https://sams-kitchen.netlify.app",
    aos: "fade-up-right",
  },
  {
    name: "tournest",
    challanges:
      "Designing a secure booking workflow with role-based access, automatic Stripe refunds and a theme-aware responsive UI.",
    title: "TourNest — Tourism Management System (Full Stack)",
    desc: "TourNest is a complete tourism management platform for Bangladesh. Tourists book trips with verified local guides and pay securely, guides accept or decline requests, and admins manage users, guide applications and packages. Everything runs under role-based access control, with a premium light/dark interface that works down to 320px.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "Recharts",
      "React Share",
    ],
    features: [
      {
        icon: "🌍",
        title: "Trip Discovery & Booking",
        points: [
          "Search, filter by trip type and sort by price, with server-side results and shareable URLs",
          "Trip types are loaded from the database, so the filters always match the real packages",
          "Visual guide picker, photo gallery and day-by-day itinerary on every trip",
          "Only tourist accounts can book, and unpaid duplicates and double-booked guides are prevented",
        ],
      },
      {
        icon: "🔄",
        title: "Booking Workflow & Payments",
        points: [
          "Reserve, pay, guide confirms: the status moves from awaiting payment to guide review to confirmed",
          "Stripe card payments where the server sets the amount and verifies each payment",
          "Automatic refunds when a paid booking is cancelled by the tourist or declined by the guide",
          "Booking progress timeline and booking details for both tourists and guides",
        ],
      },
      {
        icon: "🧑‍💼",
        title: "Three Role-Based Dashboards",
        points: [
          "Admin: revenue, bookings, users, packages and a banner for pending guide applications",
          "Tour guide: Accept or Decline queue, upcoming tours, earnings and activity charts",
          "Tourist: next trips, pay-now prompts, spending charts and booking history",
          "Role-aware sidebar and profile dropdown, with every API route protected by role",
        ],
      },
      {
        icon: "🧾",
        title: "Guide Applications & Approval",
        points: [
          "Tourists apply with CV, experience and languages, and can see their application status",
          "Admins review full details in a modal and approve or decline in one step",
          "Approval changes the user's role immediately, with no re-login needed",
        ],
      },
      {
        icon: "📦",
        title: "Package Management",
        points: [
          "Admins can add, edit and delete tour packages from a dedicated Manage packages page",
          "Live preview while creating a package, and Cloudinary image uploads",
          "Deleting is blocked while a package still has active bookings",
        ],
      },
      {
        icon: "📖",
        title: "Story Sharing System",
        points: [
          "All users can create, edit and delete travel stories with up to 10 photos",
          "Community page with search and pagination, plus Facebook sharing",
          "Guide profiles show the stories each guide has shared",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & Statistics",
        points: [
          "Revenue trends, booking status and community charts built with Recharts",
          "Live platform counts on the home page from MongoDB queries",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UX/UI",
        points: [
          "Light and dark theme toggle with centralised colour tokens and no flash on load",
          "Fully responsive down to 320px, with tables turning into cards on small screens",
          "Accessible design: skip links, keyboard-friendly dialogs and reduced-motion support",
        ],
      },
    ],
    status: "Completed",
    image: tournest,
    github: "https://github.com/SarfarazAkram17/TourNest-Client",
    liveLink: "https://tournest-sarfaraz-akram.netlify.app",
    aos: "fade-up",
  },
  {
    name: "studify",
    challanges:
      "Designing role-based access for students, teachers and admins that is enforced on both the server and the client, with a deadline-aware submission and grading workflow.",
    title: "Studify — Role-Based Assignment Platform (Full Stack)",
    desc: "Studify is an assignment platform that runs every assignment from publish to feedback. Teachers publish assignments and grade submissions, students submit before the deadline and track their scores, and admins oversee all assignments, submissions and accounts in read-only mode. Each role gets its own dashboard, roles are stored in the database and checked on every request, and the interface is a premium light/dark design that works down to 320px.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Firebase Admin",
      "Cloudinary",
      "Framer Motion",
      "React Router",
      "Axios",
      "SweetAlert2",
      "React Toastify",
    ],
    features: [
      {
        icon: "🧑‍💼",
        title: "Three Role-Based Dashboards",
        points: [
          "Student: progress overview, score trend, average-score ring, upcoming deadlines and recent submissions",
          "Teacher: items needing review, students reached, average score, difficulty split and submissions per month",
          "Admin: platform-wide totals, account and submission trends, recent users and latest submissions",
          "Role-aware sidebar and account menu, so people only see the pages and buttons they can use",
        ],
      },
      {
        icon: "📝",
        title: "Assignment Management",
        points: [
          "Only teachers create, edit and delete assignments, and only their own",
          "Thumbnails and profile photos are uploaded to Cloudinary instead of pasted as links",
          "Custom theme-based calendar for choosing the due date",
          "Search, difficulty filter, sorting and pagination with shareable URLs",
        ],
      },
      {
        icon: "📤",
        title: "Submission & Grading Workflow",
        points: [
          "Students submit once per assignment, and submissions close automatically at the deadline",
          "The assignment's teacher awards marks with line-by-line written feedback, once per submission",
          "Students see their score and feedback, and every dashboard updates",
          "Deleting an assignment also removes its submissions, so no orphaned records remain",
        ],
      },
      {
        icon: "🔐",
        title: "Secure Authentication & Roles",
        points: [
          "Email/password and Google sign-in with Firebase Authentication",
          "Every API request is verified on the server with the Firebase Admin SDK",
          "Roles live in MongoDB and are checked on every request, and a role changed in the database shows up as soon as the user returns to the tab",
          "Admins can suspend accounts, and suspended users are blocked everywhere",
          "Server-side validation for every form, including deadlines, marks and image links",
        ],
      },
      {
        icon: "🛡️",
        title: "Read-Only Admin Oversight",
        points: [
          "Admins see every assignment and submission, along with the teacher responsible for grading",
          "Admins cannot create, edit, delete or grade, enforced by the server and hidden in the interface",
          "User management: change roles and suspend or reactivate accounts",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & Progress",
        points: [
          "Dashboard statistics computed on the server with MongoDB aggregations",
          "Lightweight in-house SVG and CSS charts with no chart library",
          "Live platform counts on the home page",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UX/UI",
        points: [
          "Light and dark theme toggle with centralised colour tokens and no flash on load",
          "Fully responsive down to 320px, with tables turning into cards on small screens",
          "Accessible design: skip link, keyboard-friendly dialogs and calendar, reduced-motion support",
        ],
      },
    ],
    status: "Completed",
    image: studify,
    github: "https://github.com/SarfarazAkram17/Studify-Client",
    liveLink: "https://studify-sarfaraz-akram.netlify.app",
    aos: "fade-up-left",
  },
  {
    name: "taskwave",
    challanges:
      "Designing a task-and-proposal workflow with database-based roles that is enforced on both the server and the client, from posting a task to approving the finished work.",
    title: "TaskWave — Freelance Marketplace for Microtasks (Full Stack)",
    desc: "TaskWave is a freelance marketplace for small tasks that runs every job from posting to completion. Clients post tasks and hire the best proposal, freelancers send proposals, deliver their work and get it reviewed, and admins oversee users and tasks from their own dashboard. Roles are stored in the database and checked on every request, and the interface is a premium light/dark design that works down to 320px.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Cloudinary",
      "React Router",
      "React Toastify",
    ],
    features: [
      {
        icon: "🧑‍💼",
        title: "Three Role-Based Dashboards",
        points: [
          "Client: open tasks, tasks in progress, proposals waiting for review and spending overview",
          "Freelancer: proposals sent, active jobs, jobs in review and earnings overview",
          "Admin: platform-wide totals for users, tasks and proposals, with recent activity",
          "Role-aware sidebar and profile dropdown, so people only see the pages they can use",
        ],
      },
      {
        icon: "🧰",
        title: "Task Lifecycle",
        points: [
          "Clients post, edit and delete their own tasks with budget, category and deadline",
          "Every task moves through open, in progress, in review and completed, and can be cancelled",
          "Custom theme-based calendar for choosing the deadline",
          "Marketplace with search, category filter and sorting",
        ],
      },
      {
        icon: "🤝",
        title: "Proposals & Hiring",
        points: [
          "Freelancers send one proposal per task with their price and a cover message",
          "Clients compare every proposal for a task in a clean table and hire one freelancer",
          "Freelancers deliver the work, and the client approves it or asks for changes",
          "Freelancers can track the status of every proposal and job",
        ],
      },
      {
        icon: "🔐",
        title: "Secure Authentication & Roles",
        points: [
          "Email/password and Google sign-in with Firebase Authentication",
          "Every API request is verified on the server using the Firebase ID token",
          "Roles live in MongoDB and are checked on every request, so admins are created directly in the database",
          "Admins can manage users and suspend accounts, and suspended users are blocked everywhere",
        ],
      },
      {
        icon: "🖼️",
        title: "Image Uploads",
        points: [
          "Profile photos are uploaded to Cloudinary instead of pasted as links",
          "Uploads are signed by the server, and only images from the project's own Cloudinary folder are accepted",
          "Google profile photo is used as the default avatar",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UX/UI",
        points: [
          "Light and dark theme toggle with centralised colour tokens and no flash on load",
          "Fully responsive down to 320px, with consistent layouts across every page",
          "Accessible design: keyboard-friendly menus and calendar, and reduced-motion support",
        ],
      },
    ],
    status: "Completed",
    image: taskwave,
    github: "https://github.com/SarfarazAkram17/Taskwave-Client",
    liveLink: "https://taskwave-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
  },
];

export default projectData;