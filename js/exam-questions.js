/* ══════════════════════════════════════════════════════════════
   EXAM QUESTIONS — 200 total: 100 slide-verified + 100 original study Q&A
══════════════════════════════════════════════════════════════ */
const EXAM_QUESTIONS = [
  {
    "id": 1,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"Requirements Gathering - Challenges\": Lack of (or Poor) ___",
    "answer": "Stakeholder Involvement",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 6"
  },
  {
    "id": 2,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"WHAT IS AGILE? - Origins\": 1997 -> FDD (___, Singapore banking).",
    "answer": "De Luca/Coad",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 4"
  },
  {
    "id": 3,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"WHAT IS SCM? Source Control Management\": ___ (SCM), also known as",
    "answer": "Source Control Management",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 2"
  },
  {
    "id": 4,
    "topic": "Greenfield vs Brownfield",
    "question": "Complete the slide statement from \"Greenfield vs Brownfield - Comparison\": ___ - free choice of Low - must respect existing integrations stack, design",
    "answer": "Flexibility High",
    "type": "short_answer",
    "source": "04 - Green vs Brown.pdf, slide 10"
  },
  {
    "id": 5,
    "topic": "Code Quality",
    "question": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - self-documenting, meaningful names, consistent style",
    "answer": "Readability",
    "type": "short_answer",
    "source": "05 - Code Quality.pdf, slide 4"
  },
  {
    "id": 6,
    "topic": "Software Patterns",
    "question": "Complete the slide statement from \"Idioms vs Patterns\": ___, concise, native-style code",
    "answer": "Idiom Language-specific Readable",
    "type": "short_answer",
    "source": "06 - Software Patterns.pdf, slide 5"
  },
  {
    "id": 7,
    "topic": "TDD – Test Driven Development",
    "question": "Complete the slide statement from \"What is TDD?\": ___ flips the traditional workflow, tests are not an afterthought",
    "answer": "TDD",
    "type": "short_answer",
    "source": "07 - TDD - Test Driven Development.pdf, slide 2"
  },
  {
    "id": 8,
    "topic": "Software Process Models",
    "question": "Complete the slide statement from \"Agile vs Waterfall\": ___ late Discovered early",
    "answer": "Risk Discovered",
    "type": "short_answer",
    "source": "08 - Process Models.pdf, slide 11"
  },
  {
    "id": 9,
    "topic": "SDLC & ALM",
    "question": "Complete the slide statement from \"Introduction\": Why understanding ___ is essential",
    "answer": "SDLC and ALM",
    "type": "short_answer",
    "source": "09 - SDLC & ALM.pdf, slide 2"
  },
  {
    "id": 10,
    "topic": "Full Stack Development",
    "question": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": Knowing all layers helps developers communicate effectively across front-end, ___, and database teams",
    "answer": "API",
    "type": "short_answer",
    "source": "10 - Full Stack Development.pdf, slide 3"
  },
  {
    "id": 11,
    "topic": "APIs",
    "question": "Complete the slide statement from \"What is an API?\": ___ (Application Programming Interface): A defined way for software systems to communicate",
    "answer": "API",
    "type": "short_answer",
    "source": "11 - APIs.pdf, slide 2"
  },
  {
    "id": 12,
    "topic": "DDD & SOLID",
    "question": "Complete the slide statement from \"Advanced Design Principles: Domain-Driven Design & SOLID\": Design is how it works.\" - ___",
    "answer": "Steve Jobs",
    "type": "short_answer",
    "source": "12 - DDD & SOLID.pdf, slide 2"
  },
  {
    "id": 13,
    "topic": "Persistence Layer",
    "question": "Complete the slide statement from \"Why We Need Persistence\": ___ - users, settings, progress, messages, etc",
    "answer": "Persistence means saving state",
    "type": "short_answer",
    "source": "13 - Persistence.pdf, slide 3"
  },
  {
    "id": 14,
    "topic": "Sync vs Async",
    "question": "Complete the slide statement from \"Comparing Sync vs Async\": ___ wait Continues immediately",
    "answer": "Waiting Must",
    "type": "short_answer",
    "source": "14 - Sync vs Async.pdf, slide 5"
  },
  {
    "id": 15,
    "topic": "Cross-Platform Development",
    "question": "Complete the slide statement from \"The History of Portability\": 1995: ___ -> Write once, run anywhere",
    "answer": "Java & JVM",
    "type": "short_answer",
    "source": "15 - Cross Platform.pdf, slide 4"
  },
  {
    "id": 16,
    "topic": "Refactor vs Rewrite",
    "question": "Complete the slide statement from \"What Is Rewriting?\": ___ backend with Node.js",
    "answer": "Replacing PHP",
    "type": "short_answer",
    "source": "16 - Refactor vs Rewrite.pdf, slide 4"
  },
  {
    "id": 17,
    "topic": "Defensive Programming",
    "question": "Complete the slide statement from \"Key Principles\": ___ - minimize side effects",
    "answer": "Keep functions predictable",
    "type": "short_answer",
    "source": "Defensive Programming.pdf, slide 5"
  },
  {
    "id": 18,
    "topic": "Feature Flags",
    "question": "Complete the slide statement from \"Where feature flags can live\": In the backend or ___",
    "answer": "API",
    "type": "short_answer",
    "source": "Feature Flags.pdf, slide 12"
  },
  {
    "id": 19,
    "topic": "MVP Evaluation & Code Freeze",
    "question": "Complete the slide statement from \"Deciding What to Cut or Postpone\": If no -> move it to the \"___\" list (if you will keep your project alive)",
    "answer": "Future Enhancements",
    "type": "short_answer",
    "source": "MVP Evaluation, Code Freeze.pdf, slide 6"
  },
  {
    "id": 20,
    "topic": "Troubleshooting Methods",
    "question": "Complete the slide statement from \"Objectives\": Conduct root-cause analysis (___) on technical and human errors",
    "answer": "RCA",
    "type": "short_answer",
    "source": "Troubleshooting Methods.pdf, slide 3"
  },
  {
    "id": 21,
    "topic": "Versioning",
    "question": "Complete the slide statement from \"Common Versioning Approaches\": Date-based 2025.11.11 Ubuntu, ___ for frequent releases",
    "answer": "JetBrains Great",
    "type": "short_answer",
    "source": "Versioning.pdf, slide 3"
  },
  {
    "id": 22,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"User Story Writing - Sample Acceptance Criteria (A/C)\": Site displays or redirects to ___ if Add To Cart clicked",
    "answer": "Shopping Cart",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 18"
  },
  {
    "id": 23,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"WHAT IS AGILE? - Origins\": 2001 -> ___ (formal unifying umbrella).",
    "answer": "Agile Manifesto",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 4"
  },
  {
    "id": 24,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"WHAT IS SCM? Source Control Management\": ___ (VCS), is a critical component in modern software development.",
    "answer": "Version Control Systems",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 2"
  },
  {
    "id": 25,
    "topic": "Greenfield vs Brownfield",
    "question": "Complete the slide statement from \"Greenfield vs Brownfield - Comparison\": ___ risk (will it succeed?) Technical risk (can we modernize safely?)",
    "answer": "Risk Market",
    "type": "short_answer",
    "source": "04 - Green vs Brown.pdf, slide 10"
  },
  {
    "id": 26,
    "topic": "Code Quality",
    "question": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - modular, loosely coupled, easy to change without breaking",
    "answer": "Maintainability",
    "type": "short_answer",
    "source": "05 - Code Quality.pdf, slide 4"
  },
  {
    "id": 27,
    "topic": "Software Patterns",
    "question": "Complete the slide statement from \"Idioms vs Patterns\": ___ architectural or design problems",
    "answer": "Pattern Language-agnostic Solve",
    "type": "short_answer",
    "source": "06 - Software Patterns.pdf, slide 5"
  },
  {
    "id": 28,
    "topic": "TDD – Test Driven Development",
    "question": "Complete the slide statement from \"History of TDD\": Influenced Agile and ___ practices",
    "answer": "CI/CD",
    "type": "short_answer",
    "source": "07 - TDD - Test Driven Development.pdf, slide 3"
  },
  {
    "id": 29,
    "topic": "Software Process Models",
    "question": "Complete the slide statement from \"Agile vs Waterfall\": ___ of project Continuous",
    "answer": "Feedback End",
    "type": "short_answer",
    "source": "08 - Process Models.pdf, slide 11"
  },
  {
    "id": 30,
    "topic": "SDLC & ALM",
    "question": "Complete the slide statement from \"ALM at a Glance\": Example: ___'s entire music recommendation pipeline lifecycle",
    "answer": "Managing Spotify",
    "type": "short_answer",
    "source": "09 - SDLC & ALM.pdf, slide 5"
  },
  {
    "id": 31,
    "topic": "Full Stack Development",
    "question": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": ___ - they can trace an issue end-to-end",
    "answer": "Easier debugging and integration",
    "type": "short_answer",
    "source": "10 - Full Stack Development.pdf, slide 3"
  },
  {
    "id": 32,
    "topic": "APIs",
    "question": "Complete the slide statement from \"Why APIs Matter\": Drive platform ecosystems (___, Twitter,",
    "answer": "Google Maps",
    "type": "short_answer",
    "source": "11 - APIs.pdf, slide 3"
  },
  {
    "id": 33,
    "topic": "DDD & SOLID",
    "question": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": Introduced by ___ (2003) in",
    "answer": "Eric Evans",
    "type": "short_answer",
    "source": "12 - DDD & SOLID.pdf, slide 4"
  },
  {
    "id": 34,
    "topic": "Persistence Layer",
    "question": "Complete the slide statement from \"Volatile vs. Non-Volatile Memory\": ___ feels different in this regard",
    "answer": "Cloud Storage",
    "type": "short_answer",
    "source": "13 - Persistence.pdf, slide 5"
  },
  {
    "id": 35,
    "topic": "Sync vs Async",
    "question": "Complete the slide statement from \"Comparing Sync vs Async\": ___ under Scales better load",
    "answer": "Performance Slower",
    "type": "short_answer",
    "source": "14 - Sync vs Async.pdf, slide 5"
  },
  {
    "id": 36,
    "topic": "Cross-Platform Development",
    "question": "Complete the slide statement from \"The History of Portability\": 2000s: .___, Flash, Qt",
    "answer": "NET CLR",
    "type": "short_answer",
    "source": "15 - Cross Platform.pdf, slide 4"
  },
  {
    "id": 37,
    "topic": "Refactor vs Rewrite",
    "question": "Complete the slide statement from \"Refactor vs Rewrite\": ___ upfront High upfront",
    "answer": "Cost Lower",
    "type": "short_answer",
    "source": "16 - Refactor vs Rewrite.pdf, slide 7"
  },
  {
    "id": 38,
    "topic": "Defensive Programming",
    "question": "Complete the slide statement from \"Real-World Connection\": Every ___ endpoint must check authentication, authorization, and data type",
    "answer": "API",
    "type": "short_answer",
    "source": "Defensive Programming.pdf, slide 17"
  },
  {
    "id": 39,
    "topic": "MVP Evaluation & Code Freeze",
    "question": "Complete the slide statement from \"Deciding What to Cut or Postpone\": ___ - it's focusing",
    "answer": "Cutting is not quitting",
    "type": "short_answer",
    "source": "MVP Evaluation, Code Freeze.pdf, slide 6"
  },
  {
    "id": 40,
    "topic": "Troubleshooting Methods",
    "question": "Complete the slide statement from \"Types of Problems\": Integration issue ___ mismatch, Postman, Swagger, mocks version drift",
    "answer": "API",
    "type": "short_answer",
    "source": "Troubleshooting Methods.pdf, slide 5"
  },
  {
    "id": 41,
    "topic": "Versioning",
    "question": "Complete the slide statement from \"Common Versioning Approaches\": Build-based 1.0.1342 ___ systems Machine-friendly",
    "answer": "CI/CD",
    "type": "short_answer",
    "source": "Versioning.pdf, slide 3"
  },
  {
    "id": 42,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"User Story Writing - Sample Tasks\": Use ___ to determine inventory count, per product SKU",
    "answer": "API",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 19"
  },
  {
    "id": 43,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - features no one needs",
    "answer": "Overproduction",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 10"
  },
  {
    "id": 44,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"SCM - History\": ___ (SCCS), Centralized, Obsolete",
    "answer": "Source Code Control System",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 3"
  },
  {
    "id": 45,
    "topic": "Greenfield vs Brownfield",
    "question": "Complete the slide statement from \"Greenfield vs Brownfield - Industry\": ___ / Enterprises (banks, airlines, insurance, manufacturing, government)",
    "answer": "Established Industries",
    "type": "short_answer",
    "source": "04 - Green vs Brown.pdf, slide 12"
  },
  {
    "id": 46,
    "topic": "Code Quality",
    "question": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - fewer bugs, predictable behavior",
    "answer": "Reliability",
    "type": "short_answer",
    "source": "05 - Code Quality.pdf, slide 4"
  },
  {
    "id": 47,
    "topic": "Software Patterns",
    "question": "Complete the slide statement from \"Common Pattern Categories\": ___ - how objects are created",
    "answer": "Creational",
    "type": "short_answer",
    "source": "06 - Software Patterns.pdf, slide 9"
  },
  {
    "id": 48,
    "topic": "TDD – Test Driven Development",
    "question": "Complete the slide statement from \"History of TDD\": ___ - \"Test-Driven Development: By",
    "answer": "Kent Beck",
    "type": "short_answer",
    "source": "07 - TDD - Test Driven Development.pdf, slide 3"
  },
  {
    "id": 49,
    "topic": "Software Process Models",
    "question": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - collection of squads with a shared mission or business goal",
    "answer": "Tribes",
    "type": "short_answer",
    "source": "08 - Process Models.pdf, slide 14"
  },
  {
    "id": 50,
    "topic": "SDLC & ALM",
    "question": "Complete the slide statement from \"Example Scenarios\": Managing the entire ___ platform for K-12 education over a decade",
    "answer": "Google Classroom",
    "type": "short_answer",
    "source": "09 - SDLC & ALM.pdf, slide 7"
  },
  {
    "id": 51,
    "topic": "Full Stack Development",
    "question": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": Faster Prototyping & ___ Delivery",
    "answer": "MVP",
    "type": "short_answer",
    "source": "10 - Full Stack Development.pdf, slide 3"
  },
  {
    "id": 52,
    "topic": "APIs",
    "question": "Complete the slide statement from \"Pre-Web \"API-like\" Technologies\": CORBA (___) : Early 1990s",
    "answer": "Common Object Request Broker Architecture",
    "type": "short_answer",
    "source": "11 - APIs.pdf, slide 4"
  },
  {
    "id": 53,
    "topic": "DDD & SOLID",
    "question": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___: Tackling Complexity in the Heart of Software",
    "answer": "Domain-Driven Design",
    "type": "short_answer",
    "source": "12 - DDD & SOLID.pdf, slide 4"
  },
  {
    "id": 54,
    "topic": "Persistence Layer",
    "question": "Complete the slide statement from \"Persistence in Layered Architecture\": Repository hides whether data lives in a file, database, or accessed via ___",
    "answer": "API",
    "type": "short_answer",
    "source": "13 - Persistence.pdf, slide 7"
  },
  {
    "id": 55,
    "topic": "Sync vs Async",
    "question": "Complete the slide statement from \"AJAX: Asynchronous Web Requests\": AJAX = Asynchronous JavaScript and ___ (today,",
    "answer": "XML",
    "type": "short_answer",
    "source": "14 - Sync vs Async.pdf, slide 7"
  },
  {
    "id": 56,
    "topic": "Cross-Platform Development",
    "question": "Complete the slide statement from \"The History of Portability\": 2010s - present: Flutter, ___, WebAssembly",
    "answer": "React Native",
    "type": "short_answer",
    "source": "15 - Cross Platform.pdf, slide 4"
  },
  {
    "id": 57,
    "topic": "Refactor vs Rewrite",
    "question": "Complete the slide statement from \"Refactor vs Rewrite\": ___ same Often changes",
    "answer": "Tech Stack Usually",
    "type": "short_answer",
    "source": "16 - Refactor vs Rewrite.pdf, slide 7"
  },
  {
    "id": 58,
    "topic": "MVP Evaluation & Code Freeze",
    "question": "Complete the slide statement from \"The Final Sprint\": ___ - demos reveal problems",
    "answer": "Begin rehearsing the demo",
    "type": "short_answer",
    "source": "MVP Evaluation, Code Freeze.pdf, slide 7"
  },
  {
    "id": 59,
    "topic": "Troubleshooting Methods",
    "question": "Complete the slide statement from \"Types of Problems\": ___ queries, Profilers, traces memory leaks",
    "answer": "Performance Slow",
    "type": "short_answer",
    "source": "Troubleshooting Methods.pdf, slide 5"
  },
  {
    "id": 60,
    "topic": "Versioning",
    "question": "Complete the slide statement from \"Semantic Versioning (SemVer) - read more\": ___: \"A shared language for change\"",
    "answer": "Semantic Versioning",
    "type": "short_answer",
    "source": "Versioning.pdf, slide 4"
  },
  {
    "id": 61,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"User Story Writing - Definition of Done (DOD)\": the ___ has been implemented",
    "answer": "Acceptance Criteria",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 23"
  },
  {
    "id": 62,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - no partially done work",
    "answer": "Inventory",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 10"
  },
  {
    "id": 63,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"SCM - History\": ___ (RCS), Centralized, Limited Availability",
    "answer": "Revision Control System",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 3"
  },
  {
    "id": 64,
    "topic": "Greenfield vs Brownfield",
    "question": "Complete the slide statement from \"Greenfield vs Brownfield - Industry\": Brownfield may appear if they pivot and need to integrate with third-party/partner systems or refactor their own ___",
    "answer": "MVP",
    "type": "short_answer",
    "source": "04 - Green vs Brown.pdf, slide 12"
  },
  {
    "id": 65,
    "topic": "Code Quality",
    "question": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - optimized but not at the expense of clarity",
    "answer": "Performance",
    "type": "short_answer",
    "source": "05 - Code Quality.pdf, slide 4"
  },
  {
    "id": 66,
    "topic": "Software Patterns",
    "question": "Complete the slide statement from \"Common Pattern Categories\": ___ - how classes relate to each other",
    "answer": "Structural",
    "type": "short_answer",
    "source": "06 - Software Patterns.pdf, slide 9"
  },
  {
    "id": 67,
    "topic": "TDD – Test Driven Development",
    "question": "Complete the slide statement from \"Types of Testing\": ___ - functions and methods",
    "answer": "Unit",
    "type": "short_answer",
    "source": "07 - TDD - Test Driven Development.pdf, slide 7"
  },
  {
    "id": 68,
    "topic": "Software Process Models",
    "question": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - Group of people with the same role or skill set, such as developers, designers, or testers, who belong to different squads but work together to share knowledge and best practices.",
    "answer": "Chapters",
    "type": "short_answer",
    "source": "08 - Process Models.pdf, slide 14"
  },
  {
    "id": 69,
    "topic": "SDLC & ALM",
    "question": "Complete the slide statement from \"Benefits of SDLC\": Example: ___ startup launching their",
    "answer": "Mid-size SaaS",
    "type": "short_answer",
    "source": "09 - SDLC & ALM.pdf, slide 8"
  },
  {
    "id": 70,
    "topic": "Full Stack Development",
    "question": "Complete the slide statement from \"Full-Stack Developer - Then and Now\": \"Full-stack\" now includes DevOps, ___, and sometimes cloud knowledge (FSD -> Full Stack + DevOps)",
    "answer": "CI/CD",
    "type": "short_answer",
    "source": "10 - Full Stack Development.pdf, slide 5"
  },
  {
    "id": 71,
    "topic": "APIs",
    "question": "Complete the slide statement from \"Pre-Web \"API-like\" Technologies\": ___ - building blocks for all later API technologies",
    "answer": "Low-level communication (TCP/UDP)",
    "type": "short_answer",
    "source": "11 - APIs.pdf, slide 4"
  },
  {
    "id": 72,
    "topic": "DDD & SOLID",
    "question": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___: Let the business domain drive software structure, not technology or database.",
    "answer": "Core Idea",
    "type": "short_answer",
    "source": "12 - DDD & SOLID.pdf, slide 4"
  },
  {
    "id": 73,
    "topic": "Persistence Layer",
    "question": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> Orchestration, service logic",
    "answer": "Application Layer",
    "type": "short_answer",
    "source": "13 - Persistence.pdf, slide 8"
  },
  {
    "id": 74,
    "topic": "Sync vs Async",
    "question": "Complete the slide statement from \"AJAX: Asynchronous Web Requests\": Has evolved to use fetch() (or Axios, ___)",
    "answer": "React Query",
    "type": "short_answer",
    "source": "14 - Sync vs Async.pdf, slide 7"
  },
  {
    "id": 75,
    "topic": "Cross-Platform Development",
    "question": "Complete the slide statement from \"Native vs Cross-Platform\": ___ codebases Shared codebase",
    "answer": "Maintenance Separate",
    "type": "short_answer",
    "source": "15 - Cross Platform.pdf, slide 5"
  },
  {
    "id": 76,
    "topic": "Refactor vs Rewrite",
    "question": "Complete the slide statement from \"Refactor vs Rewrite\": ___ tests preserved Must rebuild tests",
    "answer": "Testing Regression",
    "type": "short_answer",
    "source": "16 - Refactor vs Rewrite.pdf, slide 7"
  },
  {
    "id": 77,
    "topic": "MVP Evaluation & Code Freeze",
    "question": "Complete the slide statement from \"Final Polish Checklist\": ___ - rehearsal is important, don't wing it!",
    "answer": "Demo script rehearsed",
    "type": "short_answer",
    "source": "MVP Evaluation, Code Freeze.pdf, slide 9"
  },
  {
    "id": 78,
    "topic": "Troubleshooting Methods",
    "question": "Complete the slide statement from \"Troubleshooting Mindset\": ___ - every fix is potential documentation",
    "answer": "Keep notes",
    "type": "short_answer",
    "source": "Troubleshooting Methods.pdf, slide 6"
  },
  {
    "id": 79,
    "topic": "Versioning",
    "question": "Complete the slide statement from \"Applying SemVer in Real Projects\": Versioned ___ allows for backward compatibility while encouraging upgrades",
    "answer": "API",
    "type": "short_answer",
    "source": "Versioning.pdf, slide 5"
  },
  {
    "id": 80,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"User Story Writing - Life Cycle\": Added to ___ (by Product Owner)",
    "answer": "Product Backlog",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 24"
  },
  {
    "id": 81,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - context switching, silos, handoffs",
    "answer": "Motion",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 10"
  },
  {
    "id": 82,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"SCM - History\": ___ (CVS), Centralized, Replaced",
    "answer": "Concurrent Versions System",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 3"
  },
  {
    "id": 83,
    "topic": "Greenfield vs Brownfield",
    "question": "Complete the slide statement from \"Greenfield Development - What do developers do?\": Setting up new infrastructure, ___ pipelines, and deployment workflows",
    "answer": "CI/CD",
    "type": "short_answer",
    "source": "04 - Green vs Brown.pdf, slide 13"
  },
  {
    "id": 84,
    "topic": "Code Quality",
    "question": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - easy to unit test, mock, and verify",
    "answer": "Testability",
    "type": "short_answer",
    "source": "05 - Code Quality.pdf, slide 4"
  },
  {
    "id": 85,
    "topic": "Software Patterns",
    "question": "Complete the slide statement from \"Common Pattern Categories\": ___ - how classes interact with each other",
    "answer": "Behavioral",
    "type": "short_answer",
    "source": "06 - Software Patterns.pdf, slide 9"
  },
  {
    "id": 86,
    "topic": "TDD – Test Driven Development",
    "question": "Complete the slide statement from \"Types of Testing\": ___ - the entire stack",
    "answer": "Integration",
    "type": "short_answer",
    "source": "07 - TDD - Test Driven Development.pdf, slide 7"
  },
  {
    "id": 87,
    "topic": "Software Process Models",
    "question": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - Community of interest across entire organization. Anyone can join and learn from others who share a similar passion or challenge.",
    "answer": "Guilds",
    "type": "short_answer",
    "source": "08 - Process Models.pdf, slide 14"
  },
  {
    "id": 88,
    "topic": "SDLC & ALM",
    "question": "Complete the slide statement from \"SDLC Phases Explained\": ___: Meetings, surveys, SRS documents",
    "answer": "Requirement Analysis",
    "type": "short_answer",
    "source": "09 - SDLC & ALM.pdf, slide 10"
  },
  {
    "id": 89,
    "topic": "Full Stack Development",
    "question": "Complete the slide statement from \"Before the Full Stack - Predecessor Technologies\": Early web: ___ + CGI scripts",
    "answer": "HTML",
    "type": "short_answer",
    "source": "10 - Full Stack Development.pdf, slide 6"
  },
  {
    "id": 90,
    "topic": "APIs",
    "question": "Complete the slide statement from \"A Brief History of APIs\": 2010s - ___ / RESTful APIs",
    "answer": "JSON",
    "type": "short_answer",
    "source": "11 - APIs.pdf, slide 5"
  },
  {
    "id": 91,
    "topic": "DDD & SOLID",
    "question": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___ is about modeling business logic",
    "answer": "DDD",
    "type": "short_answer",
    "source": "12 - DDD & SOLID.pdf, slide 4"
  },
  {
    "id": 92,
    "topic": "Persistence Layer",
    "question": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> Entities, value objects, business rules",
    "answer": "Domain Layer",
    "type": "short_answer",
    "source": "13 - Persistence.pdf, slide 8"
  },
  {
    "id": 93,
    "topic": "Sync vs Async",
    "question": "Complete the slide statement from \"Async in Modern JS Frameworks\": ___ - Async hooks (useEffect, Suspense)",
    "answer": "React",
    "type": "short_answer",
    "source": "14 - Sync vs Async.pdf, slide 14"
  },
  {
    "id": 94,
    "topic": "Cross-Platform Development",
    "question": "Complete the slide statement from \"The JVM and Its Legacy\": ___, Kotlin, Scala, Groovy",
    "answer": "Supports Java",
    "type": "short_answer",
    "source": "15 - Cross Platform.pdf, slide 7"
  },
  {
    "id": 95,
    "topic": "Refactor vs Rewrite",
    "question": "Complete the slide statement from \"Refactoring Toward Microservices\": ___ - modernize one module at a time",
    "answer": "Incremental evolution",
    "type": "short_answer",
    "source": "16 - Refactor vs Rewrite.pdf, slide 10"
  },
  {
    "id": 96,
    "topic": "Troubleshooting Methods",
    "question": "Complete the slide statement from \"Tools of the Trade\": Logs: timestamped, structured (___ preferred)",
    "answer": "JSON",
    "type": "short_answer",
    "source": "Troubleshooting Methods.pdf, slide 8"
  },
  {
    "id": 97,
    "topic": "Versioning",
    "question": "Complete the slide statement from \"Versioning APIs - Keeping Clients Stable\": ___ - clients know what to expect from each version",
    "answer": "Builds trust",
    "type": "short_answer",
    "source": "Versioning.pdf, slide 6"
  },
  {
    "id": 98,
    "topic": "Requirements Engineering",
    "question": "Complete the slide statement from \"Agile Terminology\": ___ - when the team collaboratively gets user stories to DOR",
    "answer": "Grooming",
    "type": "short_answer",
    "source": "01 - Requirements Engineering.pdf, slide 26"
  },
  {
    "id": 99,
    "topic": "Agile & Scrum",
    "question": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - blocks, approvals, dependencies",
    "answer": "Waiting",
    "type": "short_answer",
    "source": "02 - Agile & Scrum.pdf, slide 10"
  },
  {
    "id": 100,
    "topic": "SCM, Git & GitHub",
    "question": "Complete the slide statement from \"SCM - History\": Perforce (___), Centralized, Actively maintained",
    "answer": "Helix Core",
    "type": "short_answer",
    "source": "03 - SCM, Git, GitHub.pdf, slide 3"
  },
  {
    "id": 101,
    "topic": "Requirements Engineering",
    "type": "short_answer",
    "question": "What are the three elements of the classic software trilemma?",
    "answer": "Good, Fast, and Cheap — you can only pick two."
  },
  {
    "id": 102,
    "topic": "Requirements Engineering",
    "type": "short_answer",
    "question": "What are the main requirements elicitation techniques?",
    "answer": "Interviews, focus groups, surveys, shadowing/observation, copycatting, document analysis, and prototyping."
  },
  {
    "id": 103,
    "topic": "Requirements Engineering",
    "type": "short_answer",
    "question": "What are functional requirements? Give examples.",
    "answer": "Behaviors the system must perform — e.g., Search, Authentication, Add to Cart, Take Payment."
  },
  {
    "id": 104,
    "topic": "Requirements Engineering",
    "type": "short_answer",
    "question": "What are Non-Functional Requirements (NFRs)? Give examples.",
    "answer": "Quality attributes the system must have — e.g., Performance, Security, Compatibility, Compliance."
  },
  {
    "id": 105,
    "topic": "Requirements Engineering",
    "type": "short_answer",
    "question": "What is the standard user story format?",
    "answer": "\"As a [user persona], I want [describe need] so that [describe benefit]\""
  },
  {
    "id": 106,
    "topic": "Agile & Scrum",
    "type": "short_answer",
    "question": "What is Agile?",
    "answer": "An iterative and incremental approach to project management that prioritizes flexibility, collaboration, and customer feedback."
  },
  {
    "id": 107,
    "topic": "Agile & Scrum",
    "type": "short_answer",
    "question": "When was the Agile Manifesto published and who wrote it?",
    "answer": "2001, by 17 software practitioners who met in Snowbird, Utah."
  },
  {
    "id": 108,
    "topic": "Agile & Scrum",
    "type": "short_answer",
    "question": "What are the 4 core values of the Agile Manifesto?",
    "answer": "1) Individuals & interactions over processes/tools\n2) Working software over documentation\n3) Customer collaboration over contracts\n4) Responding to change over following a plan"
  },
  {
    "id": 109,
    "topic": "Agile & Scrum",
    "type": "short_answer",
    "question": "When was Scrum formalized and by whom?",
    "answer": "1995 by Jeff Sutherland and Ken Schwaber."
  },
  {
    "id": 110,
    "topic": "Agile & Scrum",
    "type": "short_answer",
    "question": "What 1940s concept influenced Agile methodology?",
    "answer": "Kanban, developed at Toyota with Lean roots."
  },
  {
    "id": 111,
    "topic": "SCM, Git & GitHub",
    "type": "short_answer",
    "question": "What does SCM stand for and what is it?",
    "answer": "Source Control Management (also called Version Control Systems/VCS). It tracks and manages changes to source code over time."
  },
  {
    "id": 112,
    "topic": "SCM, Git & GitHub",
    "type": "short_answer",
    "question": "What is the difference between centralized and distributed VCS?",
    "answer": "Centralized (SVN, Perforce): single central repository, always needs network. Distributed (Git, Mercurial): every user has a full copy, full offline work possible."
  },
  {
    "id": 113,
    "topic": "SCM, Git & GitHub",
    "type": "short_answer",
    "question": "What was the first centralized VCS and when was it created?",
    "answer": "SCCS (Source Code Control System) in the 1970s–1980s."
  },
  {
    "id": 114,
    "topic": "SCM, Git & GitHub",
    "type": "short_answer",
    "question": "When did Git emerge and what type of VCS is it?",
    "answer": "2000s. Git is a distributed VCS and is currently the most widely used."
  },
  {
    "id": 115,
    "topic": "SCM, Git & GitHub",
    "type": "short_answer",
    "question": "Name three modern cloud-based SCM platforms.",
    "answer": "GitHub, GitLab, and Bitbucket (also Azure DevOps)."
  },
  {
    "id": 116,
    "topic": "Greenfield vs Brownfield",
    "type": "short_answer",
    "question": "What is Greenfield development?",
    "answer": "Starting a project from scratch with no existing systems, codebases, or constraints. Developers have complete freedom in technology stack, architecture, and design."
  },
  {
    "id": 117,
    "topic": "Greenfield vs Brownfield",
    "type": "short_answer",
    "question": "What is Brownfield development?",
    "answer": "Working within or building on top of an existing system, often with legacy code, infrastructure, or organizational processes. Involves refactoring, modernizing, or extending existing solutions."
  },
  {
    "id": 118,
    "topic": "Greenfield vs Brownfield",
    "type": "short_answer",
    "question": "Which type of project typically has higher flexibility: Greenfield or Brownfield?",
    "answer": "Greenfield — developers have high freedom to choose any stack or design. Brownfield has low flexibility due to existing integrations."
  },
  {
    "id": 119,
    "topic": "Greenfield vs Brownfield",
    "type": "short_answer",
    "question": "What type of risk is more common in Greenfield vs Brownfield projects?",
    "answer": "Greenfield: market risk (will it succeed?). Brownfield: technical risk (can we modernize safely?)."
  },
  {
    "id": 120,
    "topic": "Greenfield vs Brownfield",
    "type": "short_answer",
    "question": "What skill set is most demanded in Brownfield projects?",
    "answer": "Strong debugging, refactoring, and system analysis skills."
  },
  {
    "id": 121,
    "topic": "Code Quality",
    "type": "short_answer",
    "question": "What is Code Quality?",
    "answer": "A measure of how well code adheres to standards, practices, and maintainability principles."
  },
  {
    "id": 122,
    "topic": "Code Quality",
    "type": "short_answer",
    "question": "What is the difference between internal and external code quality?",
    "answer": "Internal: structure, readability, maintainability. External: correctness, performance, security, usability."
  },
  {
    "id": 123,
    "topic": "Code Quality",
    "type": "short_answer",
    "question": "List the 7 attributes of code quality from the slides.",
    "answer": "Readability, Maintainability, Reliability, Performance, Testability, Scalability, Appropriateness."
  },
  {
    "id": 124,
    "topic": "Code Quality",
    "type": "short_answer",
    "question": "What is a linter?",
    "answer": "A static analysis tool that analyzes source code to flag potential errors, bugs, stylistic issues, and suspicious constructs. It acts as an automated code reviewer."
  },
  {
    "id": 125,
    "topic": "Code Quality",
    "type": "short_answer",
    "question": "What is Cyclomatic Complexity?",
    "answer": "A complexity metric that measures the number of linearly independent paths through a program — higher values indicate more complex, harder-to-test code."
  },
  {
    "id": 126,
    "topic": "Software Patterns",
    "type": "short_answer",
    "question": "What are software patterns?",
    "answer": "Reusable solutions to recurring problems. Not code copy-paste, but generalizable templates that exist at multiple levels (low, mid, high)."
  },
  {
    "id": 127,
    "topic": "Software Patterns",
    "type": "short_answer",
    "question": "What are the three levels of software patterns?",
    "answer": "Low-level (language idioms/syntax), Mid-level (design patterns like MVC/Observer/Factory), High-level (architecture patterns like Microservices/CQRS)."
  },
  {
    "id": 128,
    "topic": "Software Patterns",
    "type": "short_answer",
    "question": "What is a language idiom in programming?",
    "answer": "A natural, commonly accepted way of solving problems in a specific language — makes code readable, concise, and \"native-feeling.\""
  },
  {
    "id": 129,
    "topic": "Software Patterns",
    "type": "short_answer",
    "question": "What is the difference between an Idiom and a Design Pattern?",
    "answer": "Idioms are language-specific and make code readable. Patterns are language-agnostic and solve architectural/design problems."
  },
  {
    "id": 130,
    "topic": "Software Patterns",
    "type": "short_answer",
    "question": "Give examples of mid-level (design) patterns.",
    "answer": "Observer, Factory, MVC (Model-View-Controller), Strategy, Builder, Repository, Adapter."
  },
  {
    "id": 131,
    "topic": "TDD – Test Driven Development",
    "type": "short_answer",
    "question": "What is TDD?",
    "answer": "A development approach where you write tests BEFORE writing code. Follows the Red-Green-Refactor (RGR) cycle. Tests are not an afterthought."
  },
  {
    "id": 132,
    "topic": "TDD – Test Driven Development",
    "type": "short_answer",
    "question": "What is the Red-Green-Refactor (RGR) cycle?",
    "answer": "RED: Write a failing test. GREEN: Write just enough code to make it pass. REFACTOR: Clean up the code while keeping tests passing."
  },
  {
    "id": 133,
    "topic": "TDD – Test Driven Development",
    "type": "short_answer",
    "question": "Who founded TDD and when?",
    "answer": "Kent Beck established TDD in 2002 with his book \"Test-Driven Development: By Example.\" Rooted in Extreme Programming (XP)."
  },
  {
    "id": 134,
    "topic": "TDD – Test Driven Development",
    "type": "short_answer",
    "question": "What are the six types of testing covered in the slides?",
    "answer": "Unit, Integration, Regression, Stress/Load, End-To-End (E2E), UI/Usability."
  },
  {
    "id": 135,
    "topic": "TDD – Test Driven Development",
    "type": "short_answer",
    "question": "What is the Arrange-Act-Assert (AAA) pattern?",
    "answer": "A testing pattern that divides each test into three sections: Arrange (set up data), Act (invoke the function), Assert (verify the result)."
  },
  {
    "id": 136,
    "topic": "Software Process Models",
    "type": "short_answer",
    "question": "What is a software process model?",
    "answer": "A framework that defines how a software project is planned, developed, tested, and delivered. Used to manage people, time, cost, and quality."
  },
  {
    "id": 137,
    "topic": "Software Process Models",
    "type": "short_answer",
    "question": "What are the phases of the Waterfall model?",
    "answer": "Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase must be complete before the next begins."
  },
  {
    "id": 138,
    "topic": "Software Process Models",
    "type": "short_answer",
    "question": "When should you use Waterfall?",
    "answer": "Requirements are clear/fixed, client unavailable for feedback, regulated industries (aerospace, defense, medical), strong documentation emphasis."
  },
  {
    "id": 139,
    "topic": "Software Process Models",
    "type": "short_answer",
    "question": "When should you use Agile?",
    "answer": "Requirements are unclear or evolving, frequent iterations needed, collaborative self-managed team, MVPs, startups, R&D, SaaS."
  },
  {
    "id": 140,
    "topic": "Software Process Models",
    "type": "short_answer",
    "question": "What is a Hybrid/Spiral process model?",
    "answer": "Combines elements of Waterfall and Agile — iterative cycles with structured phases, balancing flexibility and documentation."
  },
  {
    "id": 141,
    "topic": "SDLC & ALM",
    "type": "short_answer",
    "question": "What does SDLC stand for and what is it?",
    "answer": "Software Development Life Cycle. A structured methodology for developing software through defined phases."
  },
  {
    "id": 142,
    "topic": "SDLC & ALM",
    "type": "short_answer",
    "question": "What does ALM stand for and what is it?",
    "answer": "Application Lifecycle Management. A broader discipline encompassing the complete lifespan of an application from inception to retirement."
  },
  {
    "id": 143,
    "topic": "SDLC & ALM",
    "type": "short_answer",
    "question": "How does SDLC relate to ALM?",
    "answer": "SDLC is a subset of ALM. ALM extends beyond development to include planning, release, operations, governance, and sunset/retirement."
  },
  {
    "id": 144,
    "topic": "SDLC & ALM",
    "type": "short_answer",
    "question": "What are the stages of ALM?",
    "answer": "Ideation → Planning → Development (SDLC) → Release → Operations → Governance → Sunset."
  },
  {
    "id": 145,
    "topic": "SDLC & ALM",
    "type": "short_answer",
    "question": "What is the real-world analogy for SDLC vs ALM?",
    "answer": "SDLC = designing and building a car in the factory. ALM = managing the car's full lifecycle: manufacturing, selling, servicing, upgrading, and decommissioning."
  },
  {
    "id": 146,
    "topic": "Full Stack Development",
    "type": "short_answer",
    "question": "What was the old definition of a Full Stack Developer (2010s)?",
    "answer": "\"One person who builds the entire web app — HTML/CSS, JS, backend, and database.\""
  },
  {
    "id": 147,
    "topic": "Full Stack Development",
    "type": "short_answer",
    "question": "What is the modern definition of a Full Stack Developer (2020s)?",
    "answer": "\"An engineer who understands and can navigate multiple layers of the stack, even if they specialize in one.\""
  },
  {
    "id": 148,
    "topic": "Full Stack Development",
    "type": "short_answer",
    "question": "What is a T-shaped developer?",
    "answer": "A developer with broad knowledge across multiple layers of the stack but deep expertise in one specific area."
  },
  {
    "id": 149,
    "topic": "Full Stack Development",
    "type": "short_answer",
    "question": "What are the three tiers of the full stack?",
    "answer": "Front-end (client/UI), Middle tier (API/business logic), and Back-end (database/persistence)."
  },
  {
    "id": 150,
    "topic": "Full Stack Development",
    "type": "short_answer",
    "question": "What is \"Full Stack + DevOps\" sometimes called?",
    "answer": "FSD — Full Stack Developer expanded to include DevOps, CI/CD, and sometimes cloud knowledge."
  },
  {
    "id": 151,
    "topic": "APIs",
    "type": "short_answer",
    "question": "What is an API?",
    "answer": "Application Programming Interface — a defined way for software systems to communicate. It encapsulates complexity and exposes controlled functionality."
  },
  {
    "id": 152,
    "topic": "APIs",
    "type": "short_answer",
    "question": "What is REST and who defined it?",
    "answer": "REpresentational State Transfer, defined by Roy Fielding in 2000 in his dissertation. It is stateless, uses HTTP, and is resource-based (nouns, not verbs)."
  },
  {
    "id": 153,
    "topic": "APIs",
    "type": "short_answer",
    "question": "What are the 5 REST principles?",
    "answer": "1) Stateless communication\n2) Client-server separation\n3) Uniform interface\n4) Resource-based (nouns)\n5) Cacheable responses"
  },
  {
    "id": 154,
    "topic": "APIs",
    "type": "short_answer",
    "question": "What is SOAP and what does it use?",
    "answer": "Simple Object Access Protocol — uses XML + WSDL (Web Services Description Language). Strong typing but verbose and brittle."
  },
  {
    "id": 155,
    "topic": "APIs",
    "type": "short_answer",
    "question": "What are the common HTTP verbs used in REST?",
    "answer": "GET, POST, PUT, PATCH, DELETE"
  },
  {
    "id": 156,
    "topic": "DDD & SOLID",
    "type": "short_answer",
    "question": "What is Domain-Driven Design (DDD) and who introduced it?",
    "answer": "A strategic and architectural philosophy that lets the business domain drive software structure (not technology or database). Introduced by Eric Evans in 2003."
  },
  {
    "id": 157,
    "topic": "DDD & SOLID",
    "type": "short_answer",
    "question": "What are the DDD Building Blocks?",
    "answer": "Entities (identity), Value Objects (immutable, identity by value), Aggregates & Aggregate Roots, Repositories, Services, Events."
  },
  {
    "id": 158,
    "topic": "DDD & SOLID",
    "type": "short_answer",
    "question": "What is a DDD Entity?",
    "answer": "An object with a unique identity that persists over time — e.g., Player, Order, Customer. Identity is what makes two entities different even if their attributes are the same."
  },
  {
    "id": 159,
    "topic": "DDD & SOLID",
    "type": "short_answer",
    "question": "What is a DDD Value Object?",
    "answer": "An immutable object identified by its value, not an ID — e.g., Money($10), Coordinates(lat, lng). Best for enforcing semantic typing."
  },
  {
    "id": 160,
    "topic": "DDD & SOLID",
    "type": "short_answer",
    "question": "What is a DDD Aggregate Root?",
    "answer": "The root entity of an Aggregate cluster. All access to the aggregate goes through the root, which enforces consistency boundaries."
  },
  {
    "id": 161,
    "topic": "Persistence Layer",
    "type": "short_answer",
    "question": "What is persistence in software?",
    "answer": "Persistence is the art of making data outlive the program that created it — saving state so it survives beyond a single program execution."
  },
  {
    "id": 162,
    "topic": "Persistence Layer",
    "type": "short_answer",
    "question": "What is the difference between volatile and non-volatile memory?",
    "answer": "Volatile (RAM): disappears when power is off. Non-volatile (Disk, SSD, Flash): survives power loss. Persistence relies on non-volatile storage."
  },
  {
    "id": 163,
    "topic": "Persistence Layer",
    "type": "short_answer",
    "question": "What does the persistence layer do?",
    "answer": "Manages where and how data is stored and retrieved. Converts in-memory objects to storable formats and back. Handles save, update, delete, query. Protects upper layers from storage details."
  },
  {
    "id": 164,
    "topic": "Persistence Layer",
    "type": "short_answer",
    "question": "How does the persistence layer fit in layered architecture?",
    "answer": "UI → Application → Domain → Persistence → Infrastructure. The repository hides whether data lives in a file, database, or API."
  },
  {
    "id": 165,
    "topic": "Persistence Layer",
    "type": "short_answer",
    "question": "Why do we need persistence?",
    "answer": "When a program ends, its variables disappear. Persistence saves state — users, settings, progress, messages — so it survives between program runs."
  },
  {
    "id": 166,
    "topic": "Sync vs Async",
    "type": "short_answer",
    "question": "What is synchronous execution?",
    "answer": "Tasks run one after another — each must finish before the next starts. Simple and predictable but can be slow. Analogy: waiting in line."
  },
  {
    "id": 167,
    "topic": "Sync vs Async",
    "type": "short_answer",
    "question": "What is asynchronous execution?",
    "answer": "Tasks can start and finish later — work continues while waiting. Improves responsiveness and efficiency. Analogy: starting laundry while doing other things."
  },
  {
    "id": 168,
    "topic": "Sync vs Async",
    "type": "short_answer",
    "question": "What is the difference between blocking and non-blocking?",
    "answer": "Blocking: program halts until a task completes. Non-blocking: can start other work while waiting. Analogy: one chef cooks while others wait (blocking) vs. everyone multitasking (non-blocking)."
  },
  {
    "id": 169,
    "topic": "Sync vs Async",
    "type": "short_answer",
    "question": "What is AJAX?",
    "answer": "Asynchronous JavaScript and XML. Fetches data without reloading the page. Originally used XMLHttpRequest; evolved to use fetch() or Axios/React Query."
  },
  {
    "id": 170,
    "topic": "Sync vs Async",
    "type": "short_answer",
    "question": "What is a thread?",
    "answer": "The smallest unit of execution inside a program. Multiple threads allow concurrent execution within a single process."
  },
  {
    "id": 171,
    "topic": "Cross-Platform Development",
    "type": "short_answer",
    "question": "What is the historical timeline of cross-platform development?",
    "answer": "Assembly (hardware-specific) → C (compile anywhere) → Java/JVM 1995 (write once, run anywhere) → .NET CLR, Flash, Qt (2000s) → Flutter, React Native, WebAssembly (2010s+)"
  },
  {
    "id": 172,
    "topic": "Cross-Platform Development",
    "type": "short_answer",
    "question": "What is the JVM and what does it enable?",
    "answer": "Java Virtual Machine — executes platform-neutral bytecode. Enables \"write once, run anywhere.\" Supports Java, Kotlin, Scala, Groovy."
  },
  {
    "id": 173,
    "topic": "Cross-Platform Development",
    "type": "short_answer",
    "question": "What is the difference between Native, Bytecode, and Interpreted execution?",
    "answer": "Native: compiled directly for CPU (C/C++). Bytecode: intermediate form executed by VM (Java, .NET). Interpreted: read line-by-line (Python, JS). Hybrid (JIT/AOT): compiles some code at runtime."
  },
  {
    "id": 174,
    "topic": "Cross-Platform Development",
    "type": "short_answer",
    "question": "What is WebAssembly (WASM)?",
    "answer": "A binary instruction format that allows code written in languages like C++, Rust, or Go to run in web browsers at near-native speed."
  },
  {
    "id": 175,
    "topic": "Cross-Platform Development",
    "type": "short_answer",
    "question": "What are examples of cross-platform frameworks?",
    "answer": "Flutter (Google), React Native (Meta), MAUI (.NET), Kotlin Multiplatform."
  },
  {
    "id": 176,
    "topic": "Refactor vs Rewrite",
    "type": "short_answer",
    "question": "What is refactoring?",
    "answer": "Improving the internal structure of code WITHOUT changing its external behavior. Examples: simplify functions, rename variables, extract classes, add tests. \"Clean up the house without moving out.\""
  },
  {
    "id": 177,
    "topic": "Refactor vs Rewrite",
    "type": "short_answer",
    "question": "What is rewriting?",
    "answer": "Rebuilding the system from scratch, often with new tech or design principles. Examples: replacing PHP with Node.js, monolith → microservices. \"Demolish and rebuild — same address, new foundation.\""
  },
  {
    "id": 178,
    "topic": "Refactor vs Rewrite",
    "type": "short_answer",
    "question": "Why do teams refactor code?",
    "answer": "Code smells (long methods, duplication), hard to add features safely, poor readability, no tests, gradual performance degradation. Goal: incremental improvement without breaking behavior."
  },
  {
    "id": 179,
    "topic": "Refactor vs Rewrite",
    "type": "short_answer",
    "question": "Why do teams rewrite software?",
    "answer": "Tech stack is obsolete, architecture can't scale, legacy frameworks/security issues, team doesn't understand old code, integrating new platforms."
  },
  {
    "id": 180,
    "topic": "Refactor vs Rewrite",
    "type": "short_answer",
    "question": "Compare refactor vs rewrite on risk and cost.",
    "answer": "Refactor: lower risk, lower upfront cost, incremental delivery. Rewrite: higher risk, high upfront cost, all-at-once delivery."
  },
  {
    "id": 181,
    "topic": "Defensive Programming",
    "type": "short_answer",
    "question": "What is defensive programming?",
    "answer": "A mindset and set of techniques that make software behave predictably even under unexpected conditions. Goal: anticipate failures, prevent/limit damage, communicate errors clearly."
  },
  {
    "id": 182,
    "topic": "Defensive Programming",
    "type": "short_answer",
    "question": "What are the key principles of defensive programming?",
    "answer": "Validate all inputs, avoid assumptions about data/environment/state, fail fast and clearly, use guard clauses instead of deep nesting, handle edge cases (nulls, empty arrays, limits), minimize side effects."
  },
  {
    "id": 183,
    "topic": "Defensive Programming",
    "type": "short_answer",
    "question": "What does \"fail fast, fail clearly\" mean?",
    "answer": "When an error occurs, detect it immediately and communicate it explicitly (via exceptions, asserts) rather than silently continuing in an invalid state."
  },
  {
    "id": 184,
    "topic": "Defensive Programming",
    "type": "short_answer",
    "question": "What is a guard clause?",
    "answer": "An early return or check at the start of a function that handles invalid/edge-case inputs immediately, avoiding deep nesting (if-else trees)."
  },
  {
    "id": 185,
    "topic": "Feature Flags",
    "type": "short_answer",
    "question": "What is a feature flag?",
    "answer": "A switch that controls whether a feature is enabled. The code exists even when the feature is hidden or disabled. Flags can be changed by environment, user, role, tier, region, or runtime condition."
  },
  {
    "id": 186,
    "topic": "Feature Flags",
    "type": "short_answer",
    "question": "What is the difference between deployment and release?",
    "answer": "Deployment: code is installed in an environment. Release: users are allowed to access it. Feature flags let these happen at different times."
  },
  {
    "id": 187,
    "topic": "Feature Flags",
    "type": "short_answer",
    "question": "What are the 6 common categories of feature flags?",
    "answer": "Release flags, Experiment flags, Operations flags, Permission/entitlement flags, Tier/subscription flags, Kill switches."
  },
  {
    "id": 188,
    "topic": "Feature Flags",
    "type": "short_answer",
    "question": "What are release flags used for?",
    "answer": "To hide new functionality until it is ready. Common for UI redesigns, new workflows, new services. Allows code to be merged and deployed before public availability."
  },
  {
    "id": 189,
    "topic": "MVP Evaluation & Code Freeze",
    "type": "short_answer",
    "question": "What does MVP stand for and what does it really mean?",
    "answer": "Minimum Viable Product. Minimum = only essential functionality. Viable = reliable, stable, demonstrable. Product = can be handed off, shown, or used. NOT a prototype."
  },
  {
    "id": 190,
    "topic": "MVP Evaluation & Code Freeze",
    "type": "short_answer",
    "question": "What is the \"Late-Stage Trap\" near the end of a project?",
    "answer": "Common behaviors: adding \"just one more feature,\" neglecting documentation/polish, ignoring testing debt, over-optimizing things users will never see."
  },
  {
    "id": 191,
    "topic": "MVP Evaluation & Code Freeze",
    "type": "short_answer",
    "question": "What is a Code Freeze?",
    "answer": "A period when no new features are added — only fixes, tests, or documentation updates are allowed."
  },
  {
    "id": 192,
    "topic": "MVP Evaluation & Code Freeze",
    "type": "short_answer",
    "question": "What are the 3 questions to ask when deciding what to cut or postpone?",
    "answer": "1) Does this directly improve the user's core experience?\n2) Can we test it in time?\n3) Does it risk breaking something stable?\nIf no → move to \"Future Enhancements.\""
  },
  {
    "id": 193,
    "topic": "Troubleshooting Methods",
    "type": "short_answer",
    "question": "What percentage of engineering time is spent diagnosing issues according to the slides?",
    "answer": "70–80% of engineering time is spent diagnosing, not coding."
  },
  {
    "id": 194,
    "topic": "Troubleshooting Methods",
    "type": "short_answer",
    "question": "What is the Troubleshooting Mindset?",
    "answer": "Be curious (not defensive), assume unknowns (not incompetence), verify assumptions with data (not anecdotes), treat symptoms as clues (not conclusions), keep notes."
  },
  {
    "id": 195,
    "topic": "Troubleshooting Methods",
    "type": "short_answer",
    "question": "What are the 5 categories of software problems?",
    "answer": "Code logic bugs, Integration issues, Configuration/Environment issues, Performance issues, Process/Team issues."
  },
  {
    "id": 196,
    "topic": "Troubleshooting Methods",
    "type": "short_answer",
    "question": "What tools are used for integration issues?",
    "answer": "Postman, Swagger, and mocks — to test API mismatches and version drift."
  },
  {
    "id": 197,
    "topic": "Versioning",
    "type": "short_answer",
    "question": "What is Semantic Versioning (SemVer) and what is its format?",
    "answer": "A versioning standard with format MAJOR.MINOR.PATCH (e.g., v2.4.6). MAJOR = breaking changes, MINOR = new compatible features, PATCH = bug fixes."
  },
  {
    "id": 198,
    "topic": "Versioning",
    "type": "short_answer",
    "question": "What does each SemVer component mean?",
    "answer": "MAJOR: breaking changes (users must update code). MINOR: new features, still backward-compatible. PATCH: bug fixes, no behavior change."
  },
  {
    "id": 199,
    "topic": "Versioning",
    "type": "short_answer",
    "question": "What are SemVer pre-release suffixes?",
    "answer": "-alpha, -beta, -rc.1 (release candidate). E.g., v2.0.0-beta.1 signals an unreleased, pre-production version."
  },
  {
    "id": 200,
    "topic": "Versioning",
    "type": "short_answer",
    "question": "What are the four common versioning approaches?",
    "answer": "Sequential (1, 2, 3), Date-based (2025.11.11), Build-based (1.0.1342), Semantic/SemVer (1.2.3)."
  }
];
