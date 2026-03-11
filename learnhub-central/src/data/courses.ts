import { Course } from "@/components/CourseCard";

export const coursesData: Course[] = [
  // Computer Science & IT - Cybersecurity
  {
    id: "1",
    title: "Introduction to Cybersecurity",
    url: "https://www.coursera.org/learn/intro-cyber-security",
    provider: "NYU Tandon",
    category: "Computer Science & IT",
    subCategory: "Cybersecurity",
    level: "Beginner",
    duration: "4 weeks",
    description: "Learn the fundamentals of cybersecurity including threat identification, risk assessment, and basic security measures.",
    certificate: "Free"
  },
  {
    id: "2",
    title: "Cybersecurity Fundamentals",
    url: "https://www.edx.org/course/cybersecurity-fundamentals",
    provider: "RIT",
    category: "Computer Science & IT",
    subCategory: "Cybersecurity",
    level: "Beginner",
    duration: "6 weeks",
    description: "Explore core concepts in information security, network security, and cryptography essentials.",
    certificate: "Paid"
  },
  {
    id: "3",
    title: "Advanced Network Security",
    url: "https://www.coursera.org/learn/advanced-network-security",
    provider: "University of Colorado",
    category: "Computer Science & IT",
    subCategory: "Cybersecurity",
    level: "Advanced",
    duration: "8 weeks",
    description: "Deep dive into network security protocols, intrusion detection systems, and advanced threat mitigation.",
    certificate: "Paid"
  },

  // Computer Science & IT - Programming
  {
    id: "4",
    title: "Python for Everybody",
    url: "https://www.py4e.com/",
    provider: "University of Michigan",
    category: "Computer Science & IT",
    subCategory: "Programming Languages",
    level: "Beginner",
    duration: "10 weeks",
    description: "Complete introduction to Python programming covering basics, data structures, web scraping, and databases.",
    certificate: "Free"
  },
  {
    id: "5",
    title: "JavaScript: The Complete Guide",
    url: "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
    provider: "Udemy",
    category: "Computer Science & IT",
    subCategory: "Programming Languages",
    level: "Intermediate",
    duration: "12 weeks",
    description: "Master JavaScript from fundamentals to advanced concepts including ES6+, async programming, and DOM manipulation.",
    certificate: "Paid"
  },
  {
    id: "6",
    title: "Advanced Java Programming",
    url: "https://www.edx.org/course/advanced-java-programming",
    provider: "Microsoft",
    category: "Computer Science & IT",
    subCategory: "Programming Languages",
    level: "Advanced",
    duration: "8 weeks",
    description: "Explore advanced Java concepts including multithreading, networking, design patterns, and performance optimization.",
    certificate: "Free"
  },

  // Computer Science & IT - Web Development
  {
    id: "7",
    title: "Web Development Fundamentals",
    url: "https://www.freecodecamp.org/",
    provider: "freeCodeCamp",
    category: "Computer Science & IT",
    subCategory: "Web Development",
    level: "Beginner",
    duration: "6 weeks",
    description: "Learn HTML, CSS, and basic JavaScript to build responsive websites from scratch.",
    certificate: "Free"
  },
  {
    id: "8",
    title: "Full Stack Web Development",
    url: "https://www.coursera.org/specializations/full-stack-react",
    provider: "Hong Kong University",
    category: "Computer Science & IT",
    subCategory: "Web Development",
    level: "Intermediate",
    duration: "16 weeks",
    description: "Build modern web applications using React, Node.js, Express, and MongoDB.",
    certificate: "Paid"
  },

  // Data Science & AI - Machine Learning
  {
    id: "9",
    title: "Machine Learning",
    url: "https://www.coursera.org/learn/machine-learning",
    provider: "Stanford University",
    category: "Data Science & AI",
    subCategory: "Machine Learning",
    level: "Intermediate",
    duration: "11 weeks",
    description: "Andrew Ng's famous course covering supervised and unsupervised learning, neural networks, and best practices.",
    certificate: "Paid"
  },
  {
    id: "10",
    title: "Introduction to Artificial Intelligence",
    url: "https://www.edx.org/course/artificial-intelligence-ai",
    provider: "Columbia University",
    category: "Data Science & AI",
    subCategory: "Machine Learning",
    level: "Beginner",
    duration: "12 weeks",
    description: "Foundational concepts in AI including search algorithms, logic, probabilistic models, and machine learning basics.",
    certificate: "Free"
  },
  {
    id: "11",
    title: "Deep Learning Specialization",
    url: "https://www.coursera.org/specializations/deep-learning",
    provider: "DeepLearning.AI",
    category: "Data Science & AI",
    subCategory: "Machine Learning",
    level: "Advanced",
    duration: "20 weeks",
    description: "Master deep learning with neural networks, CNNs, RNNs, and real-world AI applications.",
    certificate: "Paid"
  },

  // Data Science & AI - Data Analysis
  {
    id: "12",
    title: "Data Science Fundamentals",
    url: "https://www.edx.org/course/data-science-essentials",
    provider: "Microsoft",
    category: "Data Science & AI",
    subCategory: "Data Analysis",
    level: "Beginner",
    duration: "6 weeks",
    description: "Introduction to data exploration, visualization, and basic statistical analysis using Python.",
    certificate: "Free"
  },
  {
    id: "13",
    title: "Advanced Data Analytics",
    url: "https://www.coursera.org/learn/data-analysis",
    provider: "Google",
    category: "Data Science & AI",
    subCategory: "Data Analysis",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Learn advanced analytics techniques including regression, clustering, and predictive modeling.",
    certificate: "Paid"
  },

  // Business & Professional Skills
  {
    id: "14",
    title: "Project Management Essentials",
    url: "https://www.coursera.org/learn/project-management-fundamentals",
    provider: "University of California, Irvine",
    category: "Business & Professional Skills",
    subCategory: "Project Management",
    level: "Beginner",
    duration: "4 weeks",
    description: "Master project planning, execution, monitoring, and stakeholder management fundamentals.",
    certificate: "Free"
  },
  {
    id: "15",
    title: "Digital Marketing Specialization",
    url: "https://www.coursera.org/specializations/digital-marketing",
    provider: "University of Illinois",
    category: "Business & Professional Skills",
    subCategory: "Marketing",
    level: "Intermediate",
    duration: "24 weeks",
    description: "Comprehensive digital marketing training covering SEO, social media, analytics, and content strategy.",
    certificate: "Paid"
  },
  {
    id: "16",
    title: "Leadership and Management",
    url: "https://www.edx.org/course/leadership-management",
    provider: "Harvard Business School",
    category: "Business & Professional Skills",
    subCategory: "Leadership",
    level: "Intermediate",
    duration: "10 weeks",
    description: "Develop essential leadership skills including team building, decision making, and strategic thinking.",
    certificate: "Paid"
  },

  // Design & Creativity
  {
    id: "17",
    title: "Graphic Design Basics",
    url: "https://www.coursera.org/learn/fundamentals-of-graphic-design",
    provider: "California Institute of the Arts",
    category: "Design & Creativity",
    subCategory: "Graphic Design",
    level: "Beginner",
    duration: "4 weeks",
    description: "Learn fundamental design principles including typography, color theory, and composition.",
    certificate: "Free"
  },
  {
    id: "18",
    title: "UX/UI Design Specialization",
    url: "https://www.coursera.org/specializations/ui-ux-design",
    provider: "California Institute of the Arts",
    category: "Design & Creativity",
    subCategory: "UX/UI Design",
    level: "Intermediate",
    duration: "16 weeks",
    description: "Master user experience and interface design with hands-on projects and industry best practices.",
    certificate: "Paid"
  },
  {
    id: "19",
    title: "Advanced Motion Graphics",
    url: "https://www.skillshare.com/classes/motion-graphics",
    provider: "Skillshare",
    category: "Design & Creativity",
    subCategory: "Motion Graphics",
    level: "Advanced",
    duration: "6 weeks",
    description: "Create professional animations and motion graphics using industry-standard tools and techniques.",
    certificate: "None"
  },
  {
    id: "20",
    title: "Creative Writing Workshop",
    url: "https://www.edx.org/course/creative-writing",
    provider: "MIT",
    category: "Design & Creativity",
    subCategory: "Writing",
    level: "Beginner",
    duration: "8 weeks",
    description: "Develop your creative writing skills through structured exercises, feedback, and literary analysis.",
    certificate: "Free"
  }
];
