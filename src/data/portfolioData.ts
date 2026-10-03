import { Project, SkillCategory, ExperienceItem, AchievementItem, EducationItem, LearningItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Tarhat Fatima",
  title: "Computer Science Student & Aspiring Data Scientist",
  degree: "B.Tech in Computer Science & Information Technology",
  university: "REVA University, Bengaluru",
  expectedGraduation: "July 2029",
  currentSemester: "3rd Semester",
  location: "Bengaluru, India",
  headline: "Building with Data. Exploring AI. Creating with Purpose.",
  subheading: "B.Tech CSIT student at REVA University, Bengaluru, focused on Data Science, Data Analytics and AI-driven projects.",
  shortIntro: "I'm Tarhat Fatima — a Computer Science student who enjoys turning data, ideas and code into practical projects.",
  aboutParagraphs: [
    "I'm a B.Tech Computer Science & Information Technology student at REVA University, Bengaluru. I'm currently building my foundation in programming, data structures, databases and data analytics while exploring AI through hands-on projects.",
    "I learn best by building — from analytics dashboards and database projects to AI-powered applications and hackathon prototypes. My long-term goal is to grow into a strong Data Scientist / Data Analyst and work on products where technology and data create measurable impact."
  ],
  careerPath: {
    current: "CSIT Student & Builder",
    nearTerm: "Data Analyst",
    longTerm: "Data Scientist"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/tarhat-fatima-89723b384",
    github: "https://github.com/tarhatfatima09-svg",
    email: "tarhatfatima09@gmail.com",
    hackerrank: "https://www.hackerrank.com/profile/tarhatfatima",
    leetcode: "https://leetcode.com/u/tarhatfatima/"
  },
  resumePath: "/Tarhat_Fatima_Resume.pdf"
};

export const quickStats = [
  { label: "Degree", value: "B.Tech CSIT", icon: "GraduationCap" },
  { label: "Location", value: "Bengaluru, India", icon: "MapPin" },
  { label: "Graduation", value: "July 2029", icon: "Calendar" },
  { label: "Focus", value: "Data Science & AI", icon: "Target" }
];

export const certifications: CertificationItem[] = [
  {
    id: "ibm-cert",
    title: "IBM Professional Certification",
    issuer: "IBM",
    issuerBadge: "Industry Credential",
    year: "2025 / 2026",
    type: "Course Certification",
    description: "Verified training program by IBM covering core computer science principles, enterprise technologies, and data foundations.",
    focusAreas: ["Enterprise Technology", "Data Fundamentals", "Applied Computing"],
    certificateUrl: "/certificates/IBM_Certificate.pdf",
    note: "Replace placeholder in portfolioData.ts with your verified certificate URL or PDF."
  },
  {
    id: "microsoft-excel-cert",
    title: "Microsoft Excel Certification",
    issuer: "Microsoft",
    issuerBadge: "Data Handling",
    year: "2025 / 2026",
    type: "Professional Skill",
    description: "Certified proficiency in Microsoft Excel focusing on advanced spreadsheet skills, dataset manipulation, formula architecture, and business data analysis.",
    focusAreas: ["Spreadsheet Modeling", "Data Handling & Cleaning", "Formulas & Pivot Tables", "Business Analysis"],
    certificateUrl: "/certificates/Microsoft_Excel_Certificate.pdf",
    note: "Replace placeholder in portfolioData.ts with your verified certificate URL or PDF."
  },
  {
    id: "python-data-science-cert",
    title: "Python for Data Science",
    issuer: "Data Science Certification Track",
    issuerBadge: "Core Foundation",
    year: "2025 / 2026",
    type: "Course Certification",
    description: "Structured certification covering Python programming fundamentals, scientific data handling with Pandas & NumPy, and foundational Exploratory Data Analysis.",
    focusAreas: ["Python Fundamentals", "Data Handling (Pandas/NumPy)", "Data Science Foundations", "Exploratory Data Analysis"],
    certificateUrl: "/certificates/Python_Data_Science_Certificate.pdf",
    note: "Replace placeholder in portfolioData.ts with your verified certificate URL or PDF."
  },
  {
    id: "decodelab-internship-cert",
    title: "DecodeLab Data Analysis Internship Certificate",
    issuer: "DecodeLab",
    issuerBadge: "Internship Track",
    year: "2025 / 2026",
    type: "Internship",
    description: "Completed a practical Data Analysis internship/learning experience involving Python, Pandas, Excel, exploratory data analysis and data-focused projects.",
    focusAreas: ["Python Analytics", "Pandas & Excel Workflows", "Exploratory Data Analysis", "Practical Projects"],
    certificateUrl: "/certificates/DecodeLab_Internship_Certificate.pdf",
    note: "Completed as part of the DecodeLab hands-on data analytics track."
  },
  {
    id: "ainex-visionx-cert",
    title: "AINEX VisionX 2026 Certificate of Participation",
    issuer: "AiFI × Google Developer Groups (GDG)",
    issuerBadge: "AI Challenge",
    year: "2026",
    type: "Hackathon Participation",
    description: "Certificate of participation for competing in the AINEX VisionX 2026 AI challenge organized by AiFI in partnership with Google Developer Groups (GDG).",
    focusAreas: ["Computer Vision", "Object Detection (YOLO)", "Accessibility AI", "Hackathon Prototyping"],
    certificateUrl: "/certificates/AINEX_VisionX_Certificate.pdf",
    note: "Team achieved Top 7 Finalist standing in the AINEX VisionX 2026 competition."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages used for problem solving, analytics & software foundations",
    icon: "Code2",
    color: "from-blue-500/20 to-indigo-500/20",
    skills: [
      { name: "Python", levelTag: "Primary for Data & AI", description: "Scripting, EDA, automation, Streamlit apps" },
      { name: "C++", levelTag: "Core for DSA & Graphics", description: "Object-oriented programming, algorithms & 2D graphics" },
      { name: "C", levelTag: "Systems Foundation", description: "Low-level memory management and structured coding" },
      { name: "SQL", levelTag: "Querying & Analytics", description: "Relational queries, aggregations, joins & subqueries" }
    ]
  },
  {
    title: "Data & Analytics",
    description: "Extracting insights, cleaning datasets & visualizing business metrics",
    icon: "BarChart3",
    color: "from-emerald-500/20 to-teal-500/20",
    skills: [
      { name: "Pandas", description: "Data manipulation, grouping, merging & time-series" },
      { name: "NumPy", description: "Vectorized array calculations & numerical workflows" },
      { name: "Excel", description: "Formulas, pivot tables, quick statistical modeling" },
      { name: "Data Cleaning", description: "Handling missing values, outlier detection & type casting" },
      { name: "Exploratory Data Analysis", description: "Hypothesis testing, distributions & pattern identification" },
      { name: "Data Visualization", description: "Interactive plots, charts & business intelligence views" }
    ]
  },
  {
    title: "Databases & DBMS",
    description: "Relational schema design, normalization and efficient query structuring",
    icon: "Database",
    color: "from-amber-500/20 to-orange-500/20",
    skills: [
      { name: "MySQL", description: "Relational database server & structured schema management" },
      { name: "SQLite", description: "Lightweight embedded databases for apps & prototypes" },
      { name: "DBMS Concepts", description: "ACID properties, ER modeling, indexing & normalization" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Applied artificial intelligence, computer vision & generative tooling",
    icon: "Sparkles",
    color: "from-purple-500/20 to-pink-500/20",
    skills: [
      { name: "AI App Development", description: "Integrating LLM logic & interactive dashboard workflows" },
      { name: "Computer Vision", description: "Image preprocessing and visual feature extraction" },
      { name: "Object Detection", description: "YOLO pipelines & real-time visual recognition concepts" },
      { name: "Generative AI", description: "LLM prompting & API integration for business logic" },
      { name: "Prompt Engineering", description: "Structured context design and reliable output formatting" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Essential development environment and rapid prototyping tools",
    icon: "Wrench",
    color: "from-cyan-500/20 to-blue-500/20",
    skills: [
      { name: "Git", description: "Version control and branching workflows" },
      { name: "GitHub", description: "Collaborative development, repositories & open source" },
      { name: "Streamlit", description: "Rapid interactive Python web applications & dashboards" },
      { name: "VS Code", description: "Primary IDE with custom debugging & extensions" }
    ]
  },
  {
    title: "Currently Learning & Expanding",
    description: "Active technical competencies being deepened this semester",
    icon: "GraduationCap",
    color: "from-violet-500/20 to-indigo-500/20",
    skills: [
      { name: "Data Structures & Algorithms", levelTag: "In Progress", description: "Problem solving on arrays, trees, graphs & dynamic programming" },
      { name: "Advanced C++", levelTag: "In Progress", description: "Modern C++ standards, STL containers & memory management" },
      { name: "Relational DBMS", levelTag: "In Progress", description: "Advanced transaction management & query optimization" },
      { name: "Machine Learning Fundamentals", levelTag: "In Progress", description: "Supervised & unsupervised learning algorithms" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-business-analyst",
    title: "AI Business Analyst",
    subtitle: "Automated business insights & sales analytics platform",
    category: "Data Science",
    iconName: "TrendingUp",
    badge: "Live Interactive App",
    description: "An AI-powered business analytics dashboard that analyzes sales data and converts raw transactions into clear, actionable business insights.",
    tech: ["Python", "Streamlit", "SQLite", "Pandas", "Data Analysis", "AI"],
    features: [
      "Dynamic sales & revenue breakdown",
      "Product category and regional performance breakdown",
      "Monthly and seasonal trend visualization",
      "Automated AI-assisted business observations",
      "Interactive filtering by time period, product, and territory"
    ],
    liveUrl: "https://ai-business-analyst-aqqeo3.streamlit.app/",
    githubUrl: "https://github.com/tarhatfatima09-svg/ai-business-analyst",
    details: {
      problem: "Small and medium business owners often have raw sales transaction files (CSV/SQLite) but lack dedicated data teams to identify revenue leakage, high-margin categories, and regional demand trends.",
      approach: "Built a reactive Python application powered by Streamlit that ingests sales records, transforms metrics through Pandas and SQLite aggregates, and generates structured executive summaries alongside rich visual charts.",
      tools: ["Python", "Streamlit", "Pandas", "SQLite", "Plotly", "Generative AI API"],
      keyFeatures: [
        "Executive KPI Overview: Gross revenue, average order value (AOV), and customer retention rate.",
        "Categorical Deep-Dive: Identification of top-performing vs. lagging inventory items.",
        "Geographical Analysis: Regional sales distribution with high-yield zone detection.",
        "AI Summary Generator: Synthesizes complex charts into 3-4 bullet point executive takeaways."
      ],
      whatILearned: "Learned how to design user-friendly analytics workflows in Streamlit, aggregate large tabular datasets efficiently with Pandas, and construct reliable AI prompts that translate raw numbers into natural business summaries.",
      statusNote: "Deployed and publicly accessible on Streamlit Cloud."
    }
  },
  {
    id: "ipl-data-analysis",
    title: "IPL Data Analysis",
    subtitle: "Exploratory data analysis on Indian Premier League matches & player stats",
    category: "Data Science",
    iconName: "PieChart",
    badge: "EDA & Visualization",
    description: "A comprehensive data analysis project exploring multi-season IPL datasets to uncover match-winning patterns, toss impacts, team dominances, and player statistics.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis", "EDA"],
    features: [
      "Match outcome correlation with toss decisions",
      "Individual player performance indexing & strike rates",
      "Venue-specific score distributions and boundary metrics",
      "Cleaned dataset pipeline with handling of null & abandoned games"
    ],
    githubUrl: "https://github.com/thulasiramegowda/IPL-Data-Analysis",
    details: {
      problem: "Cricket analytics involves multi-dimensional records (balls, overs, player roles, venues, weather). Raw match logs require extensive cleaning and restructuring to uncover meaningful competitive trends.",
      approach: "Conducted systematic Exploratory Data Analysis (EDA) using Pandas and NumPy, followed by clear visual storytelling through Matplotlib and Seaborn plots.",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      keyFeatures: [
        "Toss Impact Study: Quantified whether winning the toss and chasing provides a statistical edge.",
        "Top Performers: Evaluated Orange Cap / Purple Cap contenders with strike rate and economy metrics.",
        "Stadium Characteristics: Mapped average 1st innings scores across different historical venues.",
        "Data Hygiene: Implemented standard data normalization, handling rain-affected D/L encounters."
      ],
      whatILearned: "Deepened practical mastery of Pandas grouping, multi-index aggregation, and data storytelling principles to convert raw sports records into clean visual narratives.",
      statusNote: "Open-source repository available on GitHub with complete exploratory notebooks."
    }
  },
  {
    id: "ai-vision-navigation-assistant",
    title: "AI Vision / Navigation Assistant",
    subtitle: "AINEX VisionX 2026 AI Challenge — Top 7 Finalist",
    category: "AI & CV",
    iconName: "Eye",
    badge: "Top 7 at AINEX 2026",
    description: "An AI-powered navigation assistant concept designed to help visually impaired individuals perceive physical surroundings through computer vision and audio feedback.",
    tech: ["YOLO", "OpenCV", "Computer Vision", "Object Detection", "Text-to-Speech", "Python"],
    features: [
      "Real-time obstacle and object proximity detection concept",
      "Natural audio speech guidance generation",
      "Spatial awareness mapping for indoor and outdoor paths",
      "Lightweight model architecture considerations for edge latency"
    ],
    githubUrl: "https://github.com/tarhatfatima09-svg/ainex-vision-assistant",
    details: {
      problem: "Visually impaired individuals face daily navigational hazards due to unexpected obstacles, lack of tactile feedback in dynamic spaces, and the difficulty of perceiving spatial distances in real time.",
      approach: "Collaborated in an intensive hackathon environment (AiFI × GDG AINEX VisionX 2026) to design a modular computer vision pipeline pairing YOLO object detection with a text-to-speech audio feedback interface.",
      tools: ["YOLOv8", "OpenCV", "Python", "pyttsx3 / TTS", "UI/UX Prototyping"],
      keyFeatures: [
        "Object Identification: Detects stairs, doors, pedestrian obstacles, and furniture.",
        "Directional Feedback: Translates 2D bounding box positions into spatial audio cues (e.g., 'Obstacle ahead on your left, 2 meters').",
        "Frontend & UI Interface: Contributed to the intuitive operator dashboard and user-testing flow.",
        "Hackathon Recognition: Awarded Top 7 out of numerous competing student engineering teams."
      ],
      whatILearned: "Gained firsthand experience in hackathon prototyping under time constraints, collaborative Git workflows, integrating computer vision models with real-world accessibility requirements, and pitching technical solutions.",
      isConceptOrPrototype: true,
      statusNote: "Competitive hackathon prototype; recognized among Top 7 projects at AINEX VisionX 2026."
    }
  },
  {
    id: "2d-graphics-editor",
    title: "2D Graphics Editor",
    subtitle: "Interactive raster & vector drawing tool built in C++",
    category: "Software & Graphics",
    iconName: "PenTool",
    badge: "Systems & Algorithms",
    description: "A desktop graphics editor focused on implementing interactive 2D drawing primitives, shape manipulation algorithms, and data structure-backed canvas management.",
    tech: ["C++", "Computer Graphics", "Data Structures", "Algorithms", "GUI"],
    features: [
      "Line, polygon, rectangle and circle drawing primitives",
      "Shape selection, transformation, and color palette controls",
      "Layer / element hierarchy managed via custom linked structures",
      "Interactive mouse-driven canvas coordinate mapping"
    ],
    githubUrl: "https://github.com/tarhatfatima09-svg/2D-Graphics-Editor",
    details: {
      problem: "Understanding computer graphics requires moving past black-box APIs to implement core rasterization, coordinate transformations, and memory-efficient data structures from scratch.",
      approach: "Developed an interactive 2D drawing application in C++ incorporating fundamental algorithms (Bresenham's algorithms, polygon clipping, and affine transformations) coupled with clean object-oriented design.",
      tools: ["C++", "OpenGL / Graphics Library", "Data Structures", "OOP Principles"],
      keyFeatures: [
        "Primitive Rendering: Native implementation of geometric drawing routines.",
        "Canvas State Management: Object-oriented shape records allowing dynamic redraws and edits.",
        "Performance Focus: Optimized coordinate recalculations during active mouse drag events.",
        "Extensible Architecture: Designed with base Shape classes for easy addition of bezier curves or complex polygons."
      ],
      whatILearned: "Strengthened core C++ programming, pointer arithmetic, memory management, and practical application of linear algebra in graphical coordinate systems.",
      statusNote: "Developed as a key academic and exploratory software engineering project."
    }
  },
  {
    id: "database-projects",
    title: "Relational Database Management Systems",
    subtitle: "Schema architecture, normalization & complex query suites",
    category: "DBMS",
    iconName: "Database",
    badge: "SQL & Schema Design",
    description: "A collection of hands-on DBMS implementations including Student Record Management, University Information Systems, and advanced multi-table relational join query suites.",
    tech: ["SQL", "MySQL", "DBMS", "Schema Design", "Relational Algebra"],
    features: [
      "Normalized 3NF schema architectures avoiding update anomalies",
      "Complex multi-table JOINs, subqueries, and aggregation queries",
      "Entity-Relationship (ER) modeling with primary/foreign key constraints",
      "Stored procedures, view creations, and transaction integrity exercises"
    ],
    githubUrl: "https://github.com/tarhatfatima09-svg/DBMS-Projects",
    details: {
      problem: "Application reliability hinges on robust relational schemas that prevent redundancy, enforce referential integrity, and maintain high query performance under volume.",
      approach: "Designed and implemented end-to-end relational schemas from conceptual ER diagrams down to DDL/DML scripts across multiple domain mockups (Student Academics, University Course Registration, and Inventory).",
      tools: ["MySQL", "MySQL Workbench", "SQL", "ER Diagramming Tools"],
      keyFeatures: [
        "Student & University Database: Modeled relationships between departments, courses, faculty, and enrollments.",
        "Advanced Query Suite: Formulated complex SQL statements with inner/outer joins, grouping, window functions, and nested subqueries.",
        "Constraint Enforcement: Set up cascade deletes, unique indices, and check constraints to guarantee ACID compliance.",
        "Optimization: Explored query execution plans and index placements for faster retrieval."
      ],
      whatILearned: "Mastered practical relational design, database normalization up to 3NF, query optimization patterns, and how backends interact reliably with structured databases.",
      statusNote: "Structured academic repository with documented schemas, sample datasets, and SQL scripts."
    }
  },
  {
    id: "decodelab-data-analysis",
    title: "DecodeLab Data Analysis Suite",
    subtitle: "Practical datasets, business metrics & analytical notebooks",
    category: "Data Science",
    iconName: "FileSpreadsheet",
    badge: "Internship & Learning",
    description: "A collection of analytical projects and exploratory workflows completed during the DecodeLab data analysis internship and learning program.",
    tech: ["Python", "Pandas", "Excel", "EDA", "Data Visualization", "Jupyter"],
    features: [
      "Real-world dataset cleaning and anomaly detection",
      "Descriptive statistics and distribution analysis",
      "Spreadsheet modeling combined with Python scripting",
      "Visual chart exports for executive presentations"
    ],
    githubUrl: "https://github.com/tarhatfatima09-svg/DecodeLab-Data-Analysis",
    details: {
      problem: "Transforming raw, messy operational data into structured business reports requires a disciplined combination of exploratory scripting and analytical rigor.",
      approach: "Completed structured industry-aligned problem sets during the DecodeLab learning program, moving from raw tabular data ingest through hypothesis validation and presentation-ready chart summaries.",
      tools: ["Python", "Pandas", "Microsoft Excel", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      keyFeatures: [
        "Data Quality Auditing: Programmatic detection of duplicate records, invalid formats, and statistical outliers.",
        "Business Metric Calculation: Automated calculation of churn rates, sales growth percentages, and customer segments.",
        "Hybrid Workflow: Bridged Excel spreadsheet workflows with reproducible Python automation scripts.",
        "Documentation: Maintained detailed analytical markdown reports accompanying every notebook."
      ],
      whatILearned: "Refined real-world exploratory data habits, learned how to validate data integrity before drawing conclusions, and built fluency across industry-standard analytics stacks.",
      statusNote: "Completed as part of the DecodeLab practical data analysis learning track."
    }
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "decodelab",
    role: "Data Analysis Intern / Learning Track",
    organization: "DecodeLab",
    period: "2025 – Present",
    location: "Remote / Bengaluru",
    type: "Internship / Learning",
    badge: "Hands-on Analytics",
    certificateId: "decodelab-internship-cert",
    highlights: [
      "Completed a practical Data Analysis internship/learning experience involving Python, Pandas, Excel, exploratory data analysis and data-focused projects.",
      "Conducted Exploratory Data Analysis (EDA) on structured business and operational datasets.",
      "Built reproducible data cleaning pipelines, automated metric calculation, and created clear visual dashboards.",
      "Practiced translating statistical findings into actionable business summaries."
    ],
    tags: ["Python", "Pandas", "Excel", "EDA", "Data Visualization"]
  },
  {
    id: "aifi-club",
    role: "Coordinator – PR & Marketing | VisionX Team",
    organization: "AiFI – AI/ML Club, REVA University",
    period: "2025 – Present",
    location: "REVA University, Bengaluru",
    type: "Leadership / Club",
    badge: "Campus Leadership",
    highlights: [
      "Drive marketing, event campaigns, and social outreach for campus-wide AI and machine learning initiatives.",
      "Coordinate technical workshops, guest lectures, and AI hackathon participation for university students.",
      "Collaborate with the VisionX technical team on community projects and project showcases.",
      "Active contributor to AI Arena challenges and cross-departmental tech gatherings."
    ],
    tags: ["Event Coordination", "Community Leadership", "AI/ML Promotion", "Marketing Strategy"]
  },
  {
    id: "ainex-visionx",
    role: "Team Member & UI/Frontend Contributor",
    organization: "AINEX VisionX 2026 (AiFI × GDG)",
    period: "2026",
    location: "Bengaluru, India",
    type: "Hackathon / Project Team",
    badge: "Top 7 Finalist",
    certificateId: "ainex-visionx-cert",
    highlights: [
      "Collaborated in a high-intensity AI challenge organized jointly by AiFI and Google Developer Groups (GDG).",
      "Co-designed the AI Vision / Navigation Assistant concept for visually impaired accessibility.",
      "Contributed to frontend interface workflow and audio feedback trigger design.",
      "Selected as one of the Top 7 finalist teams among competitive university project submissions."
    ],
    tags: ["Computer Vision", "YOLO", "Accessibility AI", "Hackathon Finalist"]
  }
];

export const achievements: AchievementItem[] = [
  {
    id: "ainex-top-7",
    title: "Top 7 Finalist — AINEX VisionX 2026",
    issuer: "AiFI × Google Developer Groups (GDG)",
    category: "AI Hackathon",
    date: "2026",
    icon: "Trophy",
    badge: "Prestigious Finish",
    certificateId: "ainex-visionx-cert",
    description: "Achieved Top 7 ranking in the AINEX VisionX 2026 AI challenge for developing an AI-driven vision and navigation assistant prototype for visually impaired individuals.",
    highlights: [
      "Selected among top competing teams across universities",
      "Presented computer vision pipeline to technical jury"
    ]
  },
  {
    id: "hackerrank-practice",
    title: "Active Problem Solver on HackerRank",
    issuer: "HackerRank",
    category: "Coding & Problem Solving",
    icon: "Code",
    badge: "Continuous Practice",
    description: "Regularly practicing algorithmic challenges, core programming language fundamentals in C, C++, and Python, and SQL database query problems.",
    highlights: [
      "Hands-on practice in C, C++, and Python syntax",
      "SQL query problem sets and relational constraints"
    ]
  },
  {
    id: "dsa-challenge",
    title: "30-Day DSA Practice Challenge",
    issuer: "Self-Driven Technical Milestone",
    category: "Algorithms & Foundations",
    icon: "Brain",
    badge: "Consistency",
    description: "Completed dedicated 30-day algorithmic sprint focused on fundamental data structures (arrays, strings, linked lists, stacks, queues, and recursion) in C++.",
    highlights: [
      "Built consistent daily problem-solving discipline",
      "Strengthened time and space complexity analysis"
    ]
  },
  {
    id: "data-analysis-portfolio",
    title: "Multiple Hands-On Data & AI Deployments",
    issuer: "Independent Project Portfolio",
    category: "Practical Engineering",
    icon: "BarChart",
    badge: "Real Deployments",
    description: "Authored and launched multiple end-to-end data and software applications including a live Streamlit AI Business Analyst, IPL analytics suite, and C++ graphics system.",
    highlights: [
      "Publicly deployed cloud web applications",
      "Clean version-controlled GitHub repositories"
    ]
  }
];

export const educationInfo: EducationItem = {
  degree: "B.Tech in Computer Science & Information Technology",
  institution: "REVA University",
  location: "Bengaluru, Karnataka, India",
  period: "2025 – 2029",
  expectedGraduation: "July 2029",
  currentSemester: "3rd Semester",
  highlights: [
    "Building solid foundations in Data Structures & Algorithms, Object-Oriented Programming, and DBMS.",
    "Active member of campus tech ecosystem including AiFI (AI/ML Club) and GDG developer events.",
    "Pursuing self-directed specializations in Data Science, Exploratory Data Analysis, and Applied AI.",
    "Focusing on learning-by-building through real hackathon prototypes and interactive web analytics apps."
  ],
  coreSubjects: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (C++)",
    "Computer Organization & Architecture",
    "Discrete Mathematics",
    "Software Engineering Principles"
  ]
};

export const currentlyLearning: LearningItem[] = [
  {
    topic: "Data Structures & Algorithms",
    area: "Core Foundations",
    progress: "Active Practice",
    currentFocus: "Trees, Graphs, Recursion & Dynamic Programming in C++",
    icon: "Binary"
  },
  {
    topic: "Modern C++ (OOP & STL)",
    area: "Systems & Software",
    progress: "Deepening Skills",
    currentFocus: "STL Containers, Iterators, Custom Memory & 2D Graphics",
    icon: "Cpu"
  },
  {
    topic: "Relational DBMS & SQL",
    area: "Data Infrastructure",
    progress: "Academic & Applied",
    currentFocus: "Indexing, Query Optimization, Normalization & ACID Transactions",
    icon: "Database"
  },
  {
    topic: "Data Science & EDA",
    area: "Analytics & Insights",
    progress: "Project-Driven",
    currentFocus: "Advanced Pandas pipelines, Feature Engineering & Statistical Modeling",
    icon: "LineChart"
  },
  {
    topic: "Machine Learning Fundamentals",
    area: "Artificial Intelligence",
    progress: "Expanding Knowledge",
    currentFocus: "Supervised Algorithms (Regression, Classification) & Model Evaluation",
    icon: "Sparkles"
  }
];
