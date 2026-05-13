/* ══════════════════════════════════════════════════════════════
   DECK DATA — Merged: original Q&A flashcards + slide-verified T/F, FIB, MC
   Source: CMPS3350-Spring-2026-Slides.zip (verified) + original study-friendly format
══════════════════════════════════════════════════════════════ */
const DECKS = [
  {
    "id": "req-eng",
    "title": "Requirements Engineering",
    "icon": "[REQ]",
    "color": "#b8ff57",
    "cards": [
      {
        "q": "What are the three elements of the classic software trilemma?",
        "a": "Good, Fast, and Cheap — you can only pick two."
      },
      {
        "q": "What are the main requirements elicitation techniques?",
        "a": "Interviews, focus groups, surveys, shadowing/observation, copycatting, document analysis, and prototyping."
      },
      {
        "q": "What are functional requirements? Give examples.",
        "a": "Behaviors the system must perform — e.g., Search, Authentication, Add to Cart, Take Payment."
      },
      {
        "q": "What are Non-Functional Requirements (NFRs)? Give examples.",
        "a": "Quality attributes the system must have — e.g., Performance, Security, Compatibility, Compliance."
      },
      {
        "q": "What is the standard user story format?",
        "a": "\"As a [user persona], I want [describe need] so that [describe benefit]\""
      },
      {
        "q": "What is an Epic in agile story writing?",
        "a": "A large, high-level requirement that describes a broad feature, meant to be broken into smaller user stories later."
      },
      {
        "q": "What are the two types of project decomposition (slicing)?",
        "a": "Vertical (fully functional features end-to-end) and Horizontal (layer-based implementation)."
      },
      {
        "q": "List four common requirements gathering challenges.",
        "a": "Lack of stakeholder involvement, ambiguous/unclear input, conflicting data, feature/scope creep, and unrealistic expectations."
      },
      {
        "q": "What is the difference between an Epic and a User Story?",
        "a": "An Epic is a large, broad requirement; a User Story is a smaller, specific requirement derived from an Epic that can be completed in a sprint."
      },
      {
        "q": "What should the requirements gathering process identify before development begins?",
        "a": "Stakeholders, audience/users, deliverables, timeline/roadmap, and resources such as people and tools."
      },
      {
        "q": "What is Behavior-Driven Development (BDD) story writing used for?",
        "a": "BDD describes expected behavior through concrete scenarios, often using Given/When/Then language so requirements are testable and understandable."
      },
      {
        "q": "What is the purpose of acceptance criteria in a user story?",
        "a": "Acceptance criteria define the conditions that must be met before a story is considered complete and acceptable."
      },
      {
        "q": "What are story points used for in Agile requirements planning?",
        "a": "Story points estimate the relative effort, complexity, and uncertainty of a user story rather than exact hours."
      },
      {
        "q": "What is a Definition of Ready (DoR)?",
        "a": "A checklist that confirms a user story is clear, understood, sized, and prepared before the team begins implementation."
      },
      {
        "q": "What is a Definition of Done (DoD)?",
        "a": "A shared checklist that defines when a story is fully complete, including code, tests, review, documentation, and acceptance criteria."
      },
      {
        "q": "What is a technical story?",
        "a": "A development task focused on technical work such as infrastructure, refactoring, tooling, setup, or architecture rather than a direct user-facing feature."
      },
      {
        "q": "Why are sample tasks added under a user story?",
        "a": "Tasks break a story into concrete implementation steps so developers can plan and track the work more clearly."
      },
      {
        "q": "What does “ready to implement” mean for a user story?",
        "a": "The story has enough detail, acceptance criteria, dependencies, and priority clarity for developers to begin work safely."
      },
      {
        "q": "What usually happens across the life cycle of a user story?",
        "a": "A story moves from idea/backlog to refinement, ready, in progress, review/testing, done, and possibly release."
      }
    ],
    "truefalse": [
      {
        "q": "The \"CLASSIC TRILEMMA\" slide says: \"GOOD\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 2."
      },
      {
        "q": "The \"CLASSIC TRILEMMA\" slide says: \"FAST CHEAP\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 2."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide says: \"Identify:\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide says: \"Stakeholders\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide says: \"Audience/Users\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide says: \"Deliverables\".",
        "answer": true,
        "exp": "True. Source: 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"CLASSIC TRILEMMA\" slide lists this point: \"Bonus: tie version bump to SemVer release (v2.0.0 -> /api/v2/)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 2."
      },
      {
        "q": "The \"CLASSIC TRILEMMA\" slide lists this point: \"By story points, by hours\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 2."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide lists this point: \"Rapid delivery is needed\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide lists this point: \"Benefit from working on greenfield to learn best practices\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide lists this point: \"TA -> Devs: Deliver detailed specs, edge cases, validation rules\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 4."
      },
      {
        "q": "The \"Requirements Gathering - Process\" slide lists this point: \"Slower initial development\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 01 - Requirements Engineering.pdf, slide 4."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Requirements Gathering - Challenges\": Lack of (or Poor) ___",
        "a": "Stakeholder Involvement",
        "hint": "01 - Requirements Engineering.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"User Story Writing - Sample Acceptance Criteria (A/C)\": Site displays or redirects to ___ if Add To Cart clicked",
        "a": "Shopping Cart",
        "hint": "01 - Requirements Engineering.pdf, slide 18"
      },
      {
        "q": "Complete the slide statement from \"User Story Writing - Sample Tasks\": Use ___ to determine inventory count, per product SKU",
        "a": "API",
        "hint": "01 - Requirements Engineering.pdf, slide 19"
      },
      {
        "q": "Complete the slide statement from \"User Story Writing - Definition of Done (DOD)\": the ___ has been implemented",
        "a": "Acceptance Criteria",
        "hint": "01 - Requirements Engineering.pdf, slide 23"
      },
      {
        "q": "Complete the slide statement from \"User Story Writing - Life Cycle\": Added to ___ (by Product Owner)",
        "a": "Product Backlog",
        "hint": "01 - Requirements Engineering.pdf, slide 24"
      },
      {
        "q": "Complete the slide statement from \"Agile Terminology\": ___ - when the team collaboratively gets user stories to DOR",
        "a": "Grooming",
        "hint": "01 - Requirements Engineering.pdf, slide 26"
      },
      {
        "q": "Complete the slide statement from \"Agile Terminology\": ___ - A user story that satisfies DOR, ready to be committed",
        "a": "Approved",
        "hint": "01 - Requirements Engineering.pdf, slide 26"
      },
      {
        "q": "Complete the slide statement from \"Agile Terminology\": ___ - A period that accomplishes a set of features/user stories",
        "a": "Sprint",
        "hint": "01 - Requirements Engineering.pdf, slide 26"
      },
      {
        "q": "Complete the slide statement from \"Agile Terminology\": ___ - A user story assigned to a sprint, being worked on",
        "a": "Committed",
        "hint": "01 - Requirements Engineering.pdf, slide 26"
      },
      {
        "q": "Complete the slide statement from \"Agile Terminology\": ___ - Satisfies DOD, closed out of a sprint, not in Backlog",
        "a": "Completed",
        "hint": "01 - Requirements Engineering.pdf, slide 26"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"CLASSIC TRILEMMA\" slide?",
        "options": {
          "A": "The Agile Manifesto",
          "B": "FAST CHEAP",
          "C": "Agile is an iterative and incremental approach (for process or project management) that prio...",
          "D": "Goal: Deliver increments of working software quickly, with close collaboration instead of ri..."
        },
        "answer": "B",
        "topic": "Requirements Engineering",
        "exp": "The correct option is from 01 - Requirements Engineering.pdf, slide 2.",
        "correctAnswerText": "FAST CHEAP",
        "deckId": "req-eng"
      },
      {
        "q": "Which point is listed on the \"Requirements Gathering - Process\" slide?",
        "options": {
          "A": "Agile is an iterative and incremental approach (for process or project management) that prio...",
          "B": "Goal: Deliver increments of working software quickly, with close collaboration instead of ri...",
          "C": "Identify:",
          "D": "The Agile Manifesto"
        },
        "answer": "C",
        "topic": "Requirements Engineering",
        "exp": "The correct option is from 01 - Requirements Engineering.pdf, slide 4.",
        "correctAnswerText": "Identify:",
        "deckId": "req-eng"
      },
      {
        "q": "Which point is listed on the \"Requirements Gathering - Elicitation\" slide?",
        "options": {
          "A": "Goal: Deliver increments of working software quickly, with close collaboration instead of ri...",
          "B": "Agile is an iterative and incremental approach (for process or project management) that prio...",
          "C": "The Agile Manifesto",
          "D": "Interviews, Focus Groups, Surveys"
        },
        "answer": "D",
        "topic": "Requirements Engineering",
        "exp": "The correct option is from 01 - Requirements Engineering.pdf, slide 5.",
        "correctAnswerText": "Interviews, Focus Groups, Surveys",
        "deckId": "req-eng"
      },
      {
        "q": "Which point is listed on the \"Requirements Gathering - Challenges\" slide?",
        "options": {
          "A": "Lack of (or Poor) Stakeholder Involvement",
          "B": "The Agile Manifesto",
          "C": "Goal: Deliver increments of working software quickly, with close collaboration instead of ri...",
          "D": "Agile is an iterative and incremental approach (for process or project management) that prio..."
        },
        "answer": "A",
        "topic": "Requirements Engineering",
        "exp": "The correct option is from 01 - Requirements Engineering.pdf, slide 6.",
        "correctAnswerText": "Lack of (or Poor) Stakeholder Involvement",
        "deckId": "req-eng"
      }
    ]
  },
  {
    "id": "agile",
    "title": "Agile & Scrum",
    "icon": "[AGR]",
    "color": "#57d9ff",
    "cards": [
      {
        "q": "What is Agile?",
        "a": "An iterative and incremental approach to project management that prioritizes flexibility, collaboration, and customer feedback."
      },
      {
        "q": "When was the Agile Manifesto published and who wrote it?",
        "a": "2001, by 17 software practitioners who met in Snowbird, Utah."
      },
      {
        "q": "What are the 4 core values of the Agile Manifesto?",
        "a": "1) Individuals & interactions over processes/tools\n2) Working software over documentation\n3) Customer collaboration over contracts\n4) Responding to change over following a plan"
      },
      {
        "q": "When was Scrum formalized and by whom?",
        "a": "1995 by Jeff Sutherland and Ken Schwaber."
      },
      {
        "q": "What 1940s concept influenced Agile methodology?",
        "a": "Kanban, developed at Toyota with Lean roots."
      },
      {
        "q": "What is the goal of Agile?",
        "a": "Deliver increments of working software quickly, with close collaboration instead of rigid planning."
      },
      {
        "q": "What is SAFe and when was it published?",
        "a": "Scaled Agile Framework (SAFe), published in 2011 by Dean Leffingwell."
      },
      {
        "q": "What is Extreme Programming (XP) and who created it?",
        "a": "XP is an Agile methodology created by Kent Beck, originating from the Chrysler C3 project (1996–1999)."
      },
      {
        "q": "What is the Agile mindset?",
        "a": "The Agile mindset values adaptability, collaboration, feedback, continuous improvement, and delivering working software in small increments."
      },
      {
        "q": "How does Scrum differ from traditional Waterfall planning?",
        "a": "Scrum uses short iterative sprints with frequent feedback, while Waterfall moves through fixed sequential phases with heavy upfront planning."
      },
      {
        "q": "What is Lean’s main goal in Agile thinking?",
        "a": "Lean focuses on removing waste, improving flow, and delivering customer value efficiently."
      },
      {
        "q": "What is Extreme Programming (XP) known for emphasizing?",
        "a": "XP emphasizes engineering practices such as TDD, pair programming, continuous integration, refactoring, and frequent releases."
      },
      {
        "q": "What is the Scrum framework built around?",
        "a": "Scrum is built around roles, events, artifacts, and short sprint cycles that produce increments of working software."
      },
      {
        "q": "What is the purpose of the Daily Standup?",
        "a": "The Daily Standup helps the team synchronize work, identify blockers, and plan progress for the next day."
      },
      {
        "q": "What is the Scrum Master’s main responsibility?",
        "a": "The Scrum Master coaches the team, facilitates Scrum events, removes impediments, and helps protect the Agile process."
      },
      {
        "q": "What is the difference between a Sprint Review and a Sprint Retrospective?",
        "a": "The Sprint Review inspects the product increment; the Retrospective inspects the team’s process and how to improve it."
      },
      {
        "q": "What is a sprint?",
        "a": "A sprint is a fixed-length iteration where the Scrum team builds, tests, and delivers a usable increment of work."
      },
      {
        "q": "What is an MVP not supposed to be?",
        "a": "An MVP is not a throwaway prototype, a broken demo, or a complete final product with every planned feature."
      }
    ],
    "truefalse": [
      {
        "q": "The \"WHAT IS AGILE?\" slide says: \"Agile is an iterative and incremental approach (for process or project management) that prioritizes flexibility, collaboration, and customer feedback\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS AGILE?\" slide says: \"Goal: Deliver increments of working software quickly, with close collaboration instead of rigid planning\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide says: \"History\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide says: \"The Agile Manifesto\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide says: \"Compare to Waterfall\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - Origins\" slide says: \"1940s -> Kanban (Toyota, Lean roots).\".",
        "answer": true,
        "exp": "True. Source: 02 - Agile & Scrum.pdf, slide 4."
      },
      {
        "q": "The \"WHAT IS AGILE?\" slide lists this point: \"Scenario SDLC ALM\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS AGILE?\" slide lists this point: \"OpenAI, etc.)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide lists this point: \"DDD uses many patterns, but it isn't itself one\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide lists this point: \"iOS (Swift)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - The MINDSET\" slide lists this point: \"Influenced Agile and CI/CD practices\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS AGILE? - Origins\" slide lists this point: \"Hardware crashes, bugs, or power loss can destroy data\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 02 - Agile & Scrum.pdf, slide 4."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"WHAT IS AGILE? - Origins\": 1997 -> FDD (___, Singapore banking).",
        "a": "De Luca/Coad",
        "hint": "02 - Agile & Scrum.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"WHAT IS AGILE? - Origins\": 2001 -> ___ (formal unifying umbrella).",
        "a": "Agile Manifesto",
        "hint": "02 - Agile & Scrum.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - features no one needs",
        "a": "Overproduction",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - no partially done work",
        "a": "Inventory",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - context switching, silos, handoffs",
        "a": "Motion",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - blocks, approvals, dependencies",
        "a": "Waiting",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - polish, premature optimization",
        "a": "Overprocessing",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"FLAVORS OF AGILE - Lean - Remove Waste\": ___ - hotfixes, rework, not enough testing",
        "a": "Defects",
        "hint": "02 - Agile & Scrum.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Scrum vs XP\": ___ - management & collaboration framework",
        "a": "Scrum",
        "hint": "02 - Agile & Scrum.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"SCRUM TERMINOLOGY\": ___ - Someone who provides an increment of value (actual devs, designers, testers, writers)",
        "a": "Developer",
        "hint": "02 - Agile & Scrum.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"SCRUM TERMINOLOGY\": ___ - What was added to the product",
        "a": "Increment",
        "hint": "02 - Agile & Scrum.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"SCRUM TERMINOLOGY\": ___ - Period of execution (usually 2 weeks)",
        "a": "Sprints",
        "hint": "02 - Agile & Scrum.pdf, slide 14"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"WHAT IS AGILE?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Agile is an iterative and incremental approach (for process or project management) that prio..."
        },
        "answer": "D",
        "topic": "Agile & Scrum",
        "exp": "The correct option is from 02 - Agile & Scrum.pdf, slide 2.",
        "correctAnswerText": "Agile is an iterative and incremental approach (for process or project management) that prio...",
        "deckId": "agile"
      },
      {
        "q": "Which point is listed on the \"WHAT IS AGILE? - The MINDSET\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "The Agile Manifesto"
        },
        "answer": "D",
        "topic": "Agile & Scrum",
        "exp": "The correct option is from 02 - Agile & Scrum.pdf, slide 3.",
        "correctAnswerText": "The Agile Manifesto",
        "deckId": "agile"
      },
      {
        "q": "Which point is listed on the \"WHAT IS AGILE? - Origins\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "1940s -> Kanban (Toyota, Lean roots)."
        },
        "answer": "D",
        "topic": "Agile & Scrum",
        "exp": "The correct option is from 02 - Agile & Scrum.pdf, slide 4.",
        "correctAnswerText": "1940s -> Kanban (Toyota, Lean roots).",
        "deckId": "agile"
      },
      {
        "q": "Which point is listed on the \"Waterfall 1 2 vs Scrum\" slide?",
        "options": {
          "A": "Requirements Design Implementation Deployment Maintenance",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "Agile & Scrum",
        "exp": "The correct option is from 02 - Agile & Scrum.pdf, slide 5.",
        "correctAnswerText": "Requirements Design Implementation Deployment Maintenance",
        "deckId": "agile"
      }
    ]
  },
  {
    "id": "scm",
    "title": "SCM, Git & GitHub",
    "icon": "[SCM]",
    "color": "#ff9f57",
    "cards": [
      {
        "q": "What does SCM stand for and what is it?",
        "a": "Source Control Management (also called Version Control Systems/VCS). It tracks and manages changes to source code over time."
      },
      {
        "q": "What is the difference between centralized and distributed VCS?",
        "a": "Centralized (SVN, Perforce): single central repository, always needs network. Distributed (Git, Mercurial): every user has a full copy, full offline work possible."
      },
      {
        "q": "What was the first centralized VCS and when was it created?",
        "a": "SCCS (Source Code Control System) in the 1970s–1980s."
      },
      {
        "q": "When did Git emerge and what type of VCS is it?",
        "a": "2000s. Git is a distributed VCS and is currently the most widely used."
      },
      {
        "q": "Name three modern cloud-based SCM platforms.",
        "a": "GitHub, GitLab, and Bitbucket (also Azure DevOps)."
      },
      {
        "q": "What are the key advantages of distributed VCS over centralized?",
        "a": "Full offline work, fast branching, local commits, full history clone, better merging."
      },
      {
        "q": "In distributed VCS, how does branching differ from centralized?",
        "a": "Branching is fast and cheap — branches are \"first-class citizens\" with no network needed. In centralized (e.g., SVN), branching is often slow and painful."
      },
      {
        "q": "What is CVS and what replaced it?",
        "a": "Concurrent Versions System — a centralized VCS from the 1990s. It was replaced by SVN and later Git."
      },
      {
        "q": "What is a feature branch used for in Git workflow?",
        "a": "A feature branch isolates work on a specific feature or fix so it can be developed and tested without disrupting shared branches."
      },
      {
        "q": "What is the purpose of committing changes to a feature branch?",
        "a": "Commits save logical checkpoints of work and create a traceable history before merging into shared branches."
      },
      {
        "q": "Why do teams merge feature branches into a local dev branch first?",
        "a": "It lets developers integrate and test changes locally before pushing them to the remote shared development branch."
      },
      {
        "q": "What is the purpose of pushing a dev branch to the remote repository?",
        "a": "Pushing shares integrated code with the team and updates the central remote copy used for collaboration and CI/testing."
      },
      {
        "q": "Why should developers pull changes from other team members regularly?",
        "a": "Regular pulls reduce merge conflicts, keep local work current, and reveal integration problems earlier."
      },
      {
        "q": "What is a forward merge?",
        "a": "A forward merge brings newer changes from a shared branch into a feature branch so the feature stays current before final merge."
      },
      {
        "q": "What is a pull request (PR)?",
        "a": "A pull request proposes merging code from one branch into another and allows review, discussion, testing, and approval."
      },
      {
        "q": "Why might a release branch be used during a sprint?",
        "a": "A release branch stabilizes code for QA and release while new development can continue separately."
      },
      {
        "q": "What should happen if QA finds bugs on a release branch?",
        "a": "The team fixes the issues, retests, and only releases once testing confirms the fixes are complete."
      },
      {
        "q": "Why clean up branches after a release?",
        "a": "Cleaning old branches reduces confusion, keeps the repository organized, and prevents stale work from being reused by mistake."
      }
    ],
    "truefalse": [
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide says: \"Source Control Management (SCM), also known as\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide says: \"Version Control Systems (VCS), is a critical component in modern software development.\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide says: \"SCM/VCS allows teams to track and manage changes (and changers) to source code over time.\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"SCM - History\" slide says: \"Early Systems (1970s-1980s)\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 3."
      },
      {
        "q": "The \"SCM - History\" slide says: \"Source Code Control System (SCCS), Centralized, Obsolete\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 3."
      },
      {
        "q": "The \"SCM - History\" slide says: \"Revision Control System (RCS), Centralized, Limited Availability\".",
        "answer": true,
        "exp": "True. Source: 03 - SCM, Git, GitHub.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide lists this point: \"IMPORTANT: It's about relativity, not time\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide lists this point: \"AI frameworks (TensorFlow, PyTorch, JAX, ONNX)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS SCM? Source Control Management\" slide lists this point: \"Keep notes - every fix is potential documentation\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 2."
      },
      {
        "q": "The \"SCM - History\" slide lists this point: \"You need to make the code testable (especially with TDD)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 3."
      },
      {
        "q": "The \"SCM - History\" slide lists this point: \"DDD fixes this by enforcing one shared vocabulary - the ubiquitous language - in both the code and meetings\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 3."
      },
      {
        "q": "The \"SCM - History\" slide lists this point: \"The challenge: deciding how to get there - incremental refactor or full rewrite\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 03 - SCM, Git, GitHub.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"WHAT IS SCM? Source Control Management\": ___ (SCM), also known as",
        "a": "Source Control Management",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"WHAT IS SCM? Source Control Management\": ___ (VCS), is a critical component in modern software development.",
        "a": "Version Control Systems",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": ___ (SCCS), Centralized, Obsolete",
        "a": "Source Code Control System",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": ___ (RCS), Centralized, Limited Availability",
        "a": "Revision Control System",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": ___ (CVS), Centralized, Replaced",
        "a": "Concurrent Versions System",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": Perforce (___), Centralized, Actively maintained",
        "a": "Helix Core",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": Bitbucket (___), Cloud/Self, Active",
        "a": "Git and Mercurial",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - History\": Azure DevOps (Formerly VSTS/TFS), ___, Active",
        "a": "Centralized and Distributed",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"SCM - Centralized vs Distributed - 1 of 2\": ___, Perforce, CVS Git, Mercurial, Fossil",
        "a": "Tools SVN",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"SCM - Centralized vs Distributed - 1 of 2\": ___ central repository Every user has a full copy (clone) of the repository",
        "a": "Repository Architecture Single",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"SCM - Centralized vs Distributed - 1 of 2\": ___ required for most actions Only needed to push/pull; full",
        "a": "Internet/Network Dependency Always",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"SCM - Centralized vs Distributed - 1 of 2\": ___ go directly to central repo Commits are local first, then pushed to remote",
        "a": "Commit Behavior Commits",
        "hint": "03 - SCM, Git, GitHub.pdf, slide 4"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"WHAT IS SCM? Source Control Management\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Source Control Management (SCM), also known as",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "SCM, Git & GitHub",
        "exp": "The correct option is from 03 - SCM, Git, GitHub.pdf, slide 2.",
        "correctAnswerText": "Source Control Management (SCM), also known as",
        "deckId": "scm"
      },
      {
        "q": "Which point is listed on the \"SCM - History\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Early Systems (1970s-1980s)",
          "C": "Stakeholders",
          "D": "FAST CHEAP"
        },
        "answer": "B",
        "topic": "SCM, Git & GitHub",
        "exp": "The correct option is from 03 - SCM, Git, GitHub.pdf, slide 3.",
        "correctAnswerText": "Early Systems (1970s-1980s)",
        "deckId": "scm"
      },
      {
        "q": "Which point is listed on the \"SCM - Centralized vs Distributed - 1 of 2\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Tools SVN, Perforce, CVS Git, Mercurial, Fossil"
        },
        "answer": "D",
        "topic": "SCM, Git & GitHub",
        "exp": "The correct option is from 03 - SCM, Git, GitHub.pdf, slide 4.",
        "correctAnswerText": "Tools SVN, Perforce, CVS Git, Mercurial, Fossil",
        "deckId": "scm"
      },
      {
        "q": "Which point is listed on the \"SCM - Centralized vs Distributed - 2 of 2\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify:",
          "C": "Tools SVN, Perforce, CVS Git, Mercurial, Fossil",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "SCM, Git & GitHub",
        "exp": "The correct option is from 03 - SCM, Git, GitHub.pdf, slide 5.",
        "correctAnswerText": "Tools SVN, Perforce, CVS Git, Mercurial, Fossil",
        "deckId": "scm"
      }
    ]
  },
  {
    "id": "greenfield",
    "title": "Greenfield vs Brownfield",
    "icon": "[GB]",
    "color": "#c084fc",
    "cards": [
      {
        "q": "What is Greenfield development?",
        "a": "Starting a project from scratch with no existing systems, codebases, or constraints. Developers have complete freedom in technology stack, architecture, and design."
      },
      {
        "q": "What is Brownfield development?",
        "a": "Working within or building on top of an existing system, often with legacy code, infrastructure, or organizational processes. Involves refactoring, modernizing, or extending existing solutions."
      },
      {
        "q": "Which type of project typically has higher flexibility: Greenfield or Brownfield?",
        "a": "Greenfield — developers have high freedom to choose any stack or design. Brownfield has low flexibility due to existing integrations."
      },
      {
        "q": "What type of risk is more common in Greenfield vs Brownfield projects?",
        "a": "Greenfield: market risk (will it succeed?). Brownfield: technical risk (can we modernize safely?)."
      },
      {
        "q": "What skill set is most demanded in Brownfield projects?",
        "a": "Strong debugging, refactoring, and system analysis skills."
      },
      {
        "q": "What type of organizations typically do Greenfield development?",
        "a": "Startups and new product teams. Brownfield is more common in enterprises and mature industries."
      },
      {
        "q": "What is the parking lot analogy used to explain Brownfield development?",
        "a": "Brownfield work is like trying to park or maneuver in a crowded lot: existing constraints limit your choices and make changes harder."
      },
      {
        "q": "What is a monolith?",
        "a": "A monolith is an application where many features and layers are packaged and deployed together as one unit."
      },
      {
        "q": "When is a monolith often a good choice?",
        "a": "A monolith is often good for small teams, MVPs, simple domains, and projects that need fast initial delivery."
      },
      {
        "q": "When should a monolith usually be avoided?",
        "a": "A monolith may be poor when different parts need independent scaling, deployment, ownership, or reliability boundaries."
      },
      {
        "q": "What is technical debt?",
        "a": "Technical debt is the future cost created by shortcuts, rushed decisions, hacks, poor design, or postponed cleanup."
      },
      {
        "q": "How does technical debt usually happen?",
        "a": "It often comes from deadline pressure, unclear requirements, weak reviews, temporary fixes, outdated dependencies, or lack of tests."
      },
      {
        "q": "Why is technical debt different in Greenfield and Brownfield work?",
        "a": "Greenfield debt is often created by early speed-focused decisions; Brownfield debt is inherited from existing systems and past choices."
      },
      {
        "q": "What are common strategies for managing technical debt?",
        "a": "Track it, prioritize risky areas, refactor incrementally, add tests, improve documentation, and avoid large risky rewrites unless justified."
      },
      {
        "q": "Why do startups often accept more technical debt?",
        "a": "Startups may prioritize speed, learning, and market validation over long-term maintainability in the early stages."
      },
      {
        "q": "What is the hard truth about technical debt in mature systems?",
        "a": "Technical debt rarely disappears on its own; it must be managed intentionally or it slows every future change."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Greenfield - What is it?\" slide says: \"Imagine \"green fields\" of land\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide says: \"Starting a project from scratch\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide says: \"no existing systems, codebases, or constraints\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide says: \"Developers have complete freedom in technology stack, architecture, and design\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Brownfield - What is it?\" slide says: \"Imagine \"brown fields\" of land\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 9."
      },
      {
        "q": "The \"Brownfield - What is it?\" slide says: \"Previously developed/industrial land\".",
        "answer": true,
        "exp": "True. Source: 04 - Green vs Brown.pdf, slide 9."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide lists this point: \"Key point: tiers are often implemented with a mix of flags, permissions, and billing entitlements\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide lists this point: \"APIs are the glue of modern systems\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide lists this point: \"Completed (implemented and tested)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Greenfield - What is it?\" slide lists this point: \"Design : System architecture, ER diagrams, UI mockups\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 8."
      },
      {
        "q": "The \"Brownfield - What is it?\" slide lists this point: \"Takeaway: \"The web's answer to the JVM dream.\"\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 9."
      },
      {
        "q": "The \"Brownfield - What is it?\" slide lists this point: \"React + Redux + Hooks\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 04 - Green vs Brown.pdf, slide 9."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Greenfield vs Brownfield - Comparison\": ___ - free choice of Low - must respect existing integrations stack, design",
        "a": "Flexibility High",
        "hint": "04 - Green vs Brown.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Greenfield vs Brownfield - Comparison\": ___ risk (will it succeed?) Technical risk (can we modernize safely?)",
        "a": "Risk Market",
        "hint": "04 - Green vs Brown.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Greenfield vs Brownfield - Industry\": ___ / Enterprises (banks, airlines, insurance, manufacturing, government)",
        "a": "Established Industries",
        "hint": "04 - Green vs Brown.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"Greenfield vs Brownfield - Industry\": Brownfield may appear if they pivot and need to integrate with third-party/partner systems or refactor their own ___",
        "a": "MVP",
        "hint": "04 - Green vs Brown.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"Greenfield Development - What do developers do?\": Setting up new infrastructure, ___ pipelines, and deployment workflows",
        "a": "CI/CD",
        "hint": "04 - Green vs Brown.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 1 of 2.\": ___ - improving structure, readability, and maintainability without changing external behavior",
        "a": "Refactoring legacy code",
        "hint": "04 - Green vs Brown.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 1 of 2.\": ___ - diagnosing and resolving issues, often in poorly documented or fragile systems",
        "a": "Bug fixing & regression management",
        "hint": "04 - Green vs Brown.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 1 of 2.\": ___ - connecting old systems to new APIs, services, or platforms (via adapters, facades, middleware)",
        "a": "System integration",
        "hint": "04 - Green vs Brown.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 1 of 2.\": ___ - moving from legacy frameworks, databases, or infrastructure (e.g., on-prem -> cloud, monolith ->",
        "a": "Migration work",
        "hint": "04 - Green vs Brown.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 2 of 2.\": ___ - profiling and optimizing bottlenecks in aging codebases",
        "a": "Performance tuning",
        "hint": "04 - Green vs Brown.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 2 of 2.\": ___ - gradually replacing \"quick hacks\" with more sustainable solutions",
        "a": "Technical debt reduction",
        "hint": "04 - Green vs Brown.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Brownfield Development - What do developers do? 2 of 2.\": ___ - ensuring outdated systems meet modern security, regulatory, or auditing standards",
        "a": "Compliance & security patching",
        "hint": "04 - Green vs Brown.pdf, slide 15"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Greenfield - What is it?\" slide?",
        "options": {
          "A": "Imagine \"green fields\" of land",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Greenfield vs Brownfield",
        "exp": "The correct option is from 04 - Green vs Brown.pdf, slide 8.",
        "correctAnswerText": "Imagine \"green fields\" of land",
        "deckId": "greenfield"
      },
      {
        "q": "Which point is listed on the \"Brownfield - What is it?\" slide?",
        "options": {
          "A": "Imagine \"brown fields\" of land",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "A",
        "topic": "Greenfield vs Brownfield",
        "exp": "The correct option is from 04 - Green vs Brown.pdf, slide 9.",
        "correctAnswerText": "Imagine \"brown fields\" of land",
        "deckId": "greenfield"
      },
      {
        "q": "Which point is listed on the \"Greenfield vs Brownfield - Comparison\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Factor Greenfield Brownfield"
        },
        "answer": "D",
        "topic": "Greenfield vs Brownfield",
        "exp": "The correct option is from 04 - Green vs Brown.pdf, slide 10.",
        "correctAnswerText": "Factor Greenfield Brownfield",
        "deckId": "greenfield"
      },
      {
        "q": "Which point is listed on the \"Greenfield vs Brownfield - Who does what?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Junior Developers",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "B",
        "topic": "Greenfield vs Brownfield",
        "exp": "The correct option is from 04 - Green vs Brown.pdf, slide 11.",
        "correctAnswerText": "Junior Developers",
        "deckId": "greenfield"
      }
    ]
  },
  {
    "id": "codequality",
    "title": "Code Quality",
    "icon": "[CQ]",
    "color": "#ffd057",
    "cards": [
      {
        "q": "What is Code Quality?",
        "a": "A measure of how well code adheres to standards, practices, and maintainability principles."
      },
      {
        "q": "What is the difference between internal and external code quality?",
        "a": "Internal: structure, readability, maintainability. External: correctness, performance, security, usability."
      },
      {
        "q": "List the 7 attributes of code quality from the slides.",
        "a": "Readability, Maintainability, Reliability, Performance, Testability, Scalability, Appropriateness."
      },
      {
        "q": "What is a linter?",
        "a": "A static analysis tool that analyzes source code to flag potential errors, bugs, stylistic issues, and suspicious constructs. It acts as an automated code reviewer."
      },
      {
        "q": "What is Cyclomatic Complexity?",
        "a": "A complexity metric that measures the number of linearly independent paths through a program — higher values indicate more complex, harder-to-test code."
      },
      {
        "q": "Name four static analysis tools mentioned in the slides.",
        "a": "SonarQube, ESLint, Pylint, PMD."
      },
      {
        "q": "What are examples of \"Dead or Redundant Code\" flagged by static analysis?",
        "a": "Unused variables, unused functions/methods, unreachable code after return/throw, duplicate code fragments."
      },
      {
        "q": "What naming convention issues does static analysis flag?",
        "a": "Names not following camelCase/PascalCase/snake_case, single-letter names for non-loop variables, magic numbers/strings instead of named constants."
      },
      {
        "q": "Why is measuring code quality difficult?",
        "a": "Code quality includes both objective signals like complexity and subjective factors like readability, maintainability, and design appropriateness."
      },
      {
        "q": "What is a static analysis report used for?",
        "a": "It summarizes issues found without running the program, such as code smells, security risks, duplication, complexity, and style violations."
      },
      {
        "q": "What does high code complexity usually indicate?",
        "a": "High complexity often means code has many branches or paths, making it harder to test, understand, and maintain."
      },
      {
        "q": "What is a code smell?",
        "a": "A code smell is a warning sign that code may be poorly structured even if it currently works correctly."
      },
      {
        "q": "Give examples of common code smells.",
        "a": "Long methods, duplicate code, large classes, magic numbers, deep nesting, unclear names, dead code, and too many responsibilities."
      },
      {
        "q": "Why are code reviews important for quality?",
        "a": "Code reviews catch defects, spread knowledge, improve consistency, enforce standards, and reduce maintainability problems."
      },
      {
        "q": "What should a reviewer look for beyond whether code works?",
        "a": "Reviewers should check readability, edge cases, test coverage, maintainability, security, performance, and consistency with project standards."
      },
      {
        "q": "How can code quality degrade over time?",
        "a": "It degrades through rushed fixes, weak ownership, skipped tests, duplicated logic, poor naming, and unresolved technical debt."
      },
      {
        "q": "Why is duplicate code harmful?",
        "a": "Duplicate code makes changes harder because the same logic must be updated in multiple places, increasing the risk of inconsistencies."
      },
      {
        "q": "Why are magic numbers and strings considered poor quality?",
        "a": "They hide meaning and make code harder to understand, test, and safely modify compared with named constants."
      }
    ],
    "truefalse": [
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide says: \"A measure of how well code adheres to standards, practices, and maintainability principles\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide says: \"Internal quality\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide says: \"structure, readability, maintainability\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide says: \"External quality\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide says: \"correctness, performance, security, usability\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"ATTRIBUTES OF CODE QUALITY\" slide says: \"Readability - self-documenting, meaningful names, consistent style\".",
        "answer": true,
        "exp": "True. Source: 05 - Code Quality.pdf, slide 4."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide lists this point: \"After a deployment, the QA environment loses all test data. Every table is empty\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 2."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide lists this point: \"Over-optimizing things users will never see\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide lists this point: \"Cacheable responses\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide lists this point: \"Multiple tasks update the same data simultaneously\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"WHAT IS CODE QUALITY?\" slide lists this point: \"Multi-year enterprise SaaS ❌ ✔\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 3."
      },
      {
        "q": "The \"ATTRIBUTES OF CODE QUALITY\" slide lists this point: \"Better Troubleshooting and Debugging\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 05 - Code Quality.pdf, slide 4."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - self-documenting, meaningful names, consistent style",
        "a": "Readability",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - modular, loosely coupled, easy to change without breaking",
        "a": "Maintainability",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - fewer bugs, predictable behavior",
        "a": "Reliability",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - optimized but not at the expense of clarity",
        "a": "Performance",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - easy to unit test, mock, and verify",
        "a": "Testability",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - supports growth without rewrites",
        "a": "Scalability",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"ATTRIBUTES OF CODE QUALITY\": ___ - use of patterns suitable to the code's intents",
        "a": "Appropriateness",
        "hint": "05 - Code Quality.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"MEASURING CODE QUALITY\": ___ - unit, integration, end-to-end test coverage - TBD Later",
        "a": "Test Code coverage",
        "hint": "05 - Code Quality.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"MEASURING CODE QUALITY\": ___ - number of issues found, time to review",
        "a": "Code review metrics",
        "hint": "05 - Code Quality.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"MEASURING CODE QUALITY - Static Analysis Tools\": ___ - tool that analyzes source code to flag potential errors, bugs, stylistic issues, and suspicious constructs.",
        "a": "LINTER",
        "hint": "05 - Code Quality.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"MEASURING CODE QUALITY - CODE COMPLEXITY\": ___ - How many independent paths through the code?",
        "a": "Cyclomatic complexity",
        "hint": "05 - Code Quality.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"MEASURING CODE QUALITY - CODE COMPLEXITY\": ___ - Based on LOC,",
        "a": "Maintainability Index",
        "hint": "05 - Code Quality.pdf, slide 13"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"WHAT IS CODE QUALITY?\" slide?",
        "options": {
          "A": "A measure of how well code adheres to standards, practices, and maintainability principles",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Code Quality",
        "exp": "The correct option is from 05 - Code Quality.pdf, slide 2.",
        "correctAnswerText": "A measure of how well code adheres to standards, practices, and maintainability principles",
        "deckId": "codequality"
      },
      {
        "q": "Which point is listed on the \"ATTRIBUTES OF CODE QUALITY\" slide?",
        "options": {
          "A": "Readability - self-documenting, meaningful names, consistent style",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Code Quality",
        "exp": "The correct option is from 05 - Code Quality.pdf, slide 4.",
        "correctAnswerText": "Readability - self-documenting, meaningful names, consistent style",
        "deckId": "codequality"
      },
      {
        "q": "Which point is listed on the \"MEASURING CODE QUALITY\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "Static analysis tools (SonarQube, ESLint, Pylint, PMD)",
          "D": "FAST CHEAP"
        },
        "answer": "C",
        "topic": "Code Quality",
        "exp": "The correct option is from 05 - Code Quality.pdf, slide 5.",
        "correctAnswerText": "Static analysis tools (SonarQube, ESLint, Pylint, PMD)",
        "deckId": "codequality"
      },
      {
        "q": "Which point is listed on the \"MEASURING CODE QUALITY - Static Analysis Tools\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "LINTER - tool that analyzes source code to flag potential errors, bugs, stylistic issues, an...",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "B",
        "topic": "Code Quality",
        "exp": "The correct option is from 05 - Code Quality.pdf, slide 6.",
        "correctAnswerText": "LINTER - tool that analyzes source code to flag potential errors, bugs, stylistic issues, an...",
        "deckId": "codequality"
      }
    ]
  },
  {
    "id": "patterns",
    "title": "Software Patterns",
    "icon": "[PTN]",
    "color": "#57ffd8",
    "cards": [
      {
        "q": "What are software patterns?",
        "a": "Reusable solutions to recurring problems. Not code copy-paste, but generalizable templates that exist at multiple levels (low, mid, high)."
      },
      {
        "q": "What are the three levels of software patterns?",
        "a": "Low-level (language idioms/syntax), Mid-level (design patterns like MVC/Observer/Factory), High-level (architecture patterns like Microservices/CQRS)."
      },
      {
        "q": "What is a language idiom in programming?",
        "a": "A natural, commonly accepted way of solving problems in a specific language — makes code readable, concise, and \"native-feeling.\""
      },
      {
        "q": "What is the difference between an Idiom and a Design Pattern?",
        "a": "Idioms are language-specific and make code readable. Patterns are language-agnostic and solve architectural/design problems."
      },
      {
        "q": "Give examples of mid-level (design) patterns.",
        "a": "Observer, Factory, MVC (Model-View-Controller), Strategy, Builder, Repository, Adapter."
      },
      {
        "q": "Give examples of high-level (architecture) patterns.",
        "a": "Microservices, CQRS (Command Query Responsibility Segregation), Onion Architecture."
      },
      {
        "q": "Why use software patterns?",
        "a": "They accelerate development by following a proven path, improve communication between developers, and provide tested, reliable solutions."
      },
      {
        "q": "What are the Gang of Four (GoF) design patterns?",
        "a": "They are classic object-oriented design patterns grouped into creational, structural, and behavioral categories."
      },
      {
        "q": "What is an anti-pattern?",
        "a": "An anti-pattern is a common but harmful solution that appears useful but creates maintainability, scalability, or design problems."
      },
      {
        "q": "What are the three common GoF pattern categories?",
        "a": "Creational patterns, structural patterns, and behavioral patterns."
      },
      {
        "q": "What do creational patterns help with?",
        "a": "Creational patterns help manage object creation, such as Factory, Builder, Prototype, and Singleton."
      },
      {
        "q": "What do structural patterns help with?",
        "a": "Structural patterns help organize relationships between classes or components, such as Adapter, Facade, Composite, and Decorator."
      },
      {
        "q": "What do behavioral patterns help with?",
        "a": "Behavioral patterns define communication and responsibility between objects, such as Observer, Strategy, Command, and Iterator."
      },
      {
        "q": "Why should patterns align with language and framework choices?",
        "a": "A pattern that fits one language or framework may be unnecessary, awkward, or harmful in another environment."
      },
      {
        "q": "What is a common pitfall when using design patterns?",
        "a": "Overusing patterns can overcomplicate simple code and create unnecessary abstraction."
      },
      {
        "q": "When should you use a design pattern?",
        "a": "Use a pattern when the problem is recurring, the pattern fits naturally, and it improves clarity, flexibility, or maintainability."
      },
      {
        "q": "When should you avoid a design pattern?",
        "a": "Avoid a pattern when the problem is simple, the pattern adds unnecessary complexity, or the team does not understand the tradeoffs."
      }
    ],
    "truefalse": [
      {
        "q": "The \"What are software patterns?\" slide says: \"Reusable solutions to recurring problems\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide says: \"Not code copy-paste, but generalizable templates\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide says: \"Exist at multiple levels:\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide says: \"low-level (syntax)\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide says: \"mid-level (design)\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide says: \"high-level (architecture)\".",
        "answer": true,
        "exp": "True. Source: 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Every bug has both a technical and process side\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Bitbucket (Git and Mercurial), Cloud/Self, Active\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Maintainability index\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Harder for UI-heavy or async logic\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Evolution over revolution\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      },
      {
        "q": "The \"What are software patterns?\" slide lists this point: \"Insomnia Lightweight REST/GraphQL Fast debugging, team sync, plugin\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 06 - Software Patterns.pdf, slide 2."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Idioms vs Patterns\": ___, concise, native-style code",
        "a": "Idiom Language-specific Readable",
        "hint": "06 - Software Patterns.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Idioms vs Patterns\": ___ architectural or design problems",
        "a": "Pattern Language-agnostic Solve",
        "hint": "06 - Software Patterns.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Common Pattern Categories\": ___ - how objects are created",
        "a": "Creational",
        "hint": "06 - Software Patterns.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Common Pattern Categories\": ___ - how classes relate to each other",
        "a": "Structural",
        "hint": "06 - Software Patterns.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Common Pattern Categories\": ___ - how classes interact with each other",
        "a": "Behavioral",
        "hint": "06 - Software Patterns.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Common Pattern Categories\": ___ - High-level separation of concerns",
        "a": "Architectural",
        "hint": "06 - Software Patterns.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Common Pattern Categories\": MVC, Microservices, ___, CQRS",
        "a": "Clean Arch",
        "hint": "06 - Software Patterns.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Platform-Specific Patterns\": ___, UoW, Clean Arch",
        "a": "Backend CQRS",
        "hint": "06 - Software Patterns.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Pattern - Language - Framework Alignment\": C++ Builder, Factory, Singleton, Strategy, Manual + ___ implemented manually",
        "a": "Idioms Patterns",
        "hint": "06 - Software Patterns.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Pattern - Language - Framework Alignment\": C# (.NET) CQRS, Mediator, UoW, ___ + Libraries MediatR, built-in DI, manual CQRS",
        "a": "Repository Partial",
        "hint": "06 - Software Patterns.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Pattern - Language - Framework Alignment\": Python (Django) MVC, ___, Template Method Built-in Django follows strict patterns OOB",
        "a": "ORM",
        "hint": "06 - Software Patterns.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Pattern - Language - Framework Alignment\": JS (React) Component, Composition, HOC, Context Manual + FW React patterns emerge from its ___",
        "a": "API",
        "hint": "06 - Software Patterns.pdf, slide 11"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"What are software patterns?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Reusable solutions to recurring problems",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "B",
        "topic": "Software Patterns",
        "exp": "The correct option is from 06 - Software Patterns.pdf, slide 2.",
        "correctAnswerText": "Reusable solutions to recurring problems",
        "deckId": "patterns"
      },
      {
        "q": "Which point is listed on the \"The spectrum of software patterns\" slide?",
        "options": {
          "A": "Low-level",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Software Patterns",
        "exp": "The correct option is from 06 - Software Patterns.pdf, slide 3.",
        "correctAnswerText": "Low-level",
        "deckId": "patterns"
      },
      {
        "q": "Which point is listed on the \"Language Idioms - \"Patterns\" at the code level\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Natural, commonly accepted ways of solving problems in a given language",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "Software Patterns",
        "exp": "The correct option is from 06 - Software Patterns.pdf, slide 4.",
        "correctAnswerText": "Natural, commonly accepted ways of solving problems in a given language",
        "deckId": "patterns"
      },
      {
        "q": "Which point is listed on the \"Idioms vs Patterns\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Concept Scope Purpose",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "Software Patterns",
        "exp": "The correct option is from 06 - Software Patterns.pdf, slide 5.",
        "correctAnswerText": "Concept Scope Purpose",
        "deckId": "patterns"
      }
    ]
  },
  {
    "id": "tdd",
    "title": "TDD – Test Driven Development",
    "icon": "[TDD]",
    "color": "#ff6b6b",
    "cards": [
      {
        "q": "What is TDD?",
        "a": "A development approach where you write tests BEFORE writing code. Follows the Red-Green-Refactor (RGR) cycle. Tests are not an afterthought."
      },
      {
        "q": "What is the Red-Green-Refactor (RGR) cycle?",
        "a": "RED: Write a failing test. GREEN: Write just enough code to make it pass. REFACTOR: Clean up the code while keeping tests passing."
      },
      {
        "q": "Who founded TDD and when?",
        "a": "Kent Beck established TDD in 2002 with his book \"Test-Driven Development: By Example.\" Rooted in Extreme Programming (XP)."
      },
      {
        "q": "What are the six types of testing covered in the slides?",
        "a": "Unit, Integration, Regression, Stress/Load, End-To-End (E2E), UI/Usability."
      },
      {
        "q": "What is the Arrange-Act-Assert (AAA) pattern?",
        "a": "A testing pattern that divides each test into three sections: Arrange (set up data), Act (invoke the function), Assert (verify the result)."
      },
      {
        "q": "When should you NOT use TDD?",
        "a": "Exploratory or prototype development, highly visual/UI-intensive apps, frequently changing requirements, or when high uncertainty exists."
      },
      {
        "q": "What software patterns are a GOOD fit for TDD?",
        "a": "Strategy, Repository, Dependency Injection, Factory, Builder, Adapter, Observer — they enable natural decoupling and clear boundaries."
      },
      {
        "q": "What software patterns are a BAD fit for TDD?",
        "a": "Singleton, Service Locator, Facade — they tend to create tight coupling that makes testing difficult."
      },
      {
        "q": "Why does TDD improve design?",
        "a": "Because writing tests first pushes developers toward small, focused, decoupled code with clear inputs and outputs."
      },
      {
        "q": "Why should TDD sometimes be avoided for prototypes?",
        "a": "Prototypes involve exploration and uncertainty, so writing detailed tests too early can slow learning and create throwaway test code."
      },
      {
        "q": "What is unit testing?",
        "a": "Unit testing verifies a small isolated piece of code, such as a function or class, independently from the rest of the system."
      },
      {
        "q": "What is integration testing?",
        "a": "Integration testing checks whether multiple components, services, or layers work together correctly."
      },
      {
        "q": "What is regression testing?",
        "a": "Regression testing ensures that new changes do not break behavior that previously worked."
      },
      {
        "q": "What is stress or load testing?",
        "a": "Stress/load testing measures how the system behaves under heavy traffic, high data volume, or resource pressure."
      },
      {
        "q": "What does E2E testing verify?",
        "a": "End-to-end testing verifies a complete user flow through the full system, often from UI to API to database."
      },
      {
        "q": "What is the difference between mocking and stubbing?",
        "a": "Stubs return canned data, while mocks can verify how dependencies were called or used."
      },
      {
        "q": "What is code coverage?",
        "a": "Code coverage measures how much of the codebase is executed by tests, usually reported as a percentage."
      },
      {
        "q": "Why is high code coverage not enough by itself?",
        "a": "High coverage only proves code ran during tests; it does not prove the tests check the right behavior or edge cases."
      }
    ],
    "truefalse": [
      {
        "q": "The \"What is TDD?\" slide says: \"Write tests BEFORE writing code\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide says: \"Follows the Red-Green-Refactor (RGR) cycle\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide says: \"Focuses on small, testable units of code\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide says: \"TDD flips the traditional workflow, tests are not an afterthought\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide says: \"Each test corresponds to a specific requirement or function\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"History of TDD\" slide says: \"Rooted in Extreme Programming (XP)\".",
        "answer": true,
        "exp": "True. Source: 07 - TDD - Test Driven Development.pdf, slide 3."
      },
      {
        "q": "The \"What is TDD?\" slide lists this point: \"A kill switch is a high-priority flag used to shut off a feature quickly\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide lists this point: \"Use middleware pipelines for auth, rate-limiting, and CORS\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide lists this point: \"No recent code changes\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide lists this point: \"Verify auth headers, token expiry, CORS settings, and input sanitization\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"What is TDD?\" slide lists this point: \"Does it mostly work but looks ugly? -> Refactor\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 2."
      },
      {
        "q": "The \"History of TDD\" slide lists this point: \"Are functions/classes the right size (not too large or too small)?\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 07 - TDD - Test Driven Development.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"What is TDD?\": ___ flips the traditional workflow, tests are not an afterthought",
        "a": "TDD",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"History of TDD\": Influenced Agile and ___ practices",
        "a": "CI/CD",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"History of TDD\": ___ - \"Test-Driven Development: By",
        "a": "Kent Beck",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing\": ___ - functions and methods",
        "a": "Unit",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing\": ___ - the entire stack",
        "a": "Integration",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing\": ___ - the entire application",
        "a": "Regression",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing\": ___ - push it to its limits",
        "a": "Stress/Load",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing\": ___ - check different workflows",
        "a": "End-To-End (E2E)",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Types of Testing - Unit Testing\": ___ - this is the central idea of TDD",
        "a": "Core to TDD",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"The Arrange-Act-Assert (AAA) Pattern\": ___ - Set up test data and environment",
        "a": "Arrange",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"The Arrange-Act-Assert (AAA) Pattern\": ___ - Verify the result or outcome",
        "a": "Assert",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"The Red-Green-Refactor (RGR) Cycle of writing tests\": ___ - Write just enough code to pass",
        "a": "GREEN",
        "hint": "07 - TDD - Test Driven Development.pdf, slide 10"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"What is TDD?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Write tests BEFORE writing code",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "TDD – Test Driven Development",
        "exp": "The correct option is from 07 - TDD - Test Driven Development.pdf, slide 2.",
        "correctAnswerText": "Write tests BEFORE writing code",
        "deckId": "tdd"
      },
      {
        "q": "Which point is listed on the \"History of TDD\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "Rooted in Extreme Programming (XP)"
        },
        "answer": "D",
        "topic": "TDD – Test Driven Development",
        "exp": "The correct option is from 07 - TDD - Test Driven Development.pdf, slide 3.",
        "correctAnswerText": "Rooted in Extreme Programming (XP)",
        "deckId": "tdd"
      },
      {
        "q": "Which point is listed on the \"Why use TDD?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Forces you to think about requirements first",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "TDD – Test Driven Development",
        "exp": "The correct option is from 07 - TDD - Test Driven Development.pdf, slide 4.",
        "correctAnswerText": "Forces you to think about requirements first",
        "deckId": "tdd"
      },
      {
        "q": "Which point is listed on the \"When NOT to use TDD?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Exploratory or prototype development"
        },
        "answer": "D",
        "topic": "TDD – Test Driven Development",
        "exp": "The correct option is from 07 - TDD - Test Driven Development.pdf, slide 5.",
        "correctAnswerText": "Exploratory or prototype development",
        "deckId": "tdd"
      }
    ]
  },
  {
    "id": "process",
    "title": "Software Process Models",
    "icon": "[SPM]",
    "color": "#ffa057",
    "cards": [
      {
        "q": "What is a software process model?",
        "a": "A framework that defines how a software project is planned, developed, tested, and delivered. Used to manage people, time, cost, and quality."
      },
      {
        "q": "What are the phases of the Waterfall model?",
        "a": "Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase must be complete before the next begins."
      },
      {
        "q": "When should you use Waterfall?",
        "a": "Requirements are clear/fixed, client unavailable for feedback, regulated industries (aerospace, defense, medical), strong documentation emphasis."
      },
      {
        "q": "When should you use Agile?",
        "a": "Requirements are unclear or evolving, frequent iterations needed, collaborative self-managed team, MVPs, startups, R&D, SaaS."
      },
      {
        "q": "What is a Hybrid/Spiral process model?",
        "a": "Combines elements of Waterfall and Agile — iterative cycles with structured phases, balancing flexibility and documentation."
      },
      {
        "q": "What is DevOps in the context of process models?",
        "a": "A process model that combines development and operations, emphasizing continuous integration, delivery, and deployment (CI/CD)."
      },
      {
        "q": "What are the Agile core practices listed in the slides?",
        "a": "Scrum, Kanban, XP, Scrumban, continuous delivery, frequent retrospectives, cross-functional teams."
      },
      {
        "q": "What are common software process models?",
        "a": "Waterfall, Agile, Scrum, Kanban, XP, Spiral/Hybrid, and DevOps-style continuous delivery models."
      },
      {
        "q": "Why is Waterfall useful in regulated projects?",
        "a": "Regulated projects often need predictable phases, formal sign-offs, documentation, traceability, and compliance evidence."
      },
      {
        "q": "When is Agile usually not a good fit?",
        "a": "Agile may struggle when the customer is unavailable, requirements are legally fixed, or documentation and approval gates dominate the project."
      },
      {
        "q": "What is dogfooding?",
        "a": "Dogfooding means using your own product internally so the team experiences issues before or alongside customers."
      },
      {
        "q": "Why was NASA presented as a Waterfall success case?",
        "a": "NASA-style projects can benefit from careful upfront planning, documentation, testing, and strict phase control because failure risk is extremely high."
      },
      {
        "q": "Why was Spotify presented as an Agile success case?",
        "a": "Spotify is associated with autonomous teams, iterative delivery, experimentation, and product-focused feedback loops."
      },
      {
        "q": "Why did the FBI Virtual Case File become a Waterfall failure example?",
        "a": "It suffered from changing requirements, large upfront design assumptions, and difficulty adapting during the build."
      },
      {
        "q": "What decision factors help choose Agile vs Waterfall?",
        "a": "Requirement stability, risk level, customer availability, regulation, team experience, documentation needs, and tolerance for change."
      },
      {
        "q": "What is the danger of using Agile badly?",
        "a": "Poor Agile can become chaotic: unclear priorities, weak documentation, no discipline, poor testing, and constant scope churn."
      },
      {
        "q": "What is the main takeaway when choosing a process model?",
        "a": "Choose the model that fits the project’s uncertainty, risk, team, stakeholders, and delivery constraints rather than using one approach everywhere."
      }
    ],
    "truefalse": [
      {
        "q": "The \"What is a software process model?\" slide says: \"Defines how a software project is planned, developed, tested, and delivered\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 2."
      },
      {
        "q": "The \"What is a software process model?\" slide says: \"Used to manage people, time, cost, and quality\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 2."
      },
      {
        "q": "The \"Common Process Models\" slide says: \"Waterfall\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide says: \"Agile\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide says: \"Hybrid / Iterative / Spiral\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide says: \"DevOps\".",
        "answer": true,
        "exp": "True. Source: 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"What is a software process model?\" slide lists this point: \"A class should do one thing, and do it well\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 2."
      },
      {
        "q": "The \"What is a software process model?\" slide lists this point: \"Heavy focus on innovation, speed, and feature delivery\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 2."
      },
      {
        "q": "The \"Common Process Models\" slide lists this point: \"Decision made during Requirement Analysis or Planning\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide lists this point: \"Multiple components need to communicate in a structured way\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide lists this point: \"Stateless Functions\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 3."
      },
      {
        "q": "The \"Common Process Models\" slide lists this point: \"Intertwined across UI, logic, and data layers\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 08 - Process Models.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Agile vs Waterfall\": ___ late Discovered early",
        "a": "Risk Discovered",
        "hint": "08 - Process Models.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Agile vs Waterfall\": ___ of project Continuous",
        "a": "Feedback End",
        "hint": "08 - Process Models.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - collection of squads with a shared mission or business goal",
        "a": "Tribes",
        "hint": "08 - Process Models.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - Group of people with the same role or skill set, such as developers, designers, or testers, who belong to different squads but work together to share knowledge and best practices.",
        "a": "Chapters",
        "hint": "08 - Process Models.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Success - Spotify\": ___ - Community of interest across entire organization. Anyone can join and learn from others who share a similar passion or challenge.",
        "a": "Guilds",
        "hint": "08 - Process Models.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Created autonomous Agile \"squads\" that scaled globally while continuously delivering features based on user feedback.",
        "a": "Spotify",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Transitioned to Agile across product and infrastructure teams, leading to faster release cycles and greater internal alignment.",
        "a": "Microsoft (Visual Studio Team Services)",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": Atlassian (Jira, Confluence) - ___ while building Agile tools; moved from big quarterly releases to fast, iterative delivery with Kanban and feature flags.",
        "a": "Dogfooded Agile",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Adopted Agile across multiple teams to improve time-to-market; used \"scrum of scrums\" for cross-team coordination in large product groups.",
        "a": "Salesforce",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Large enterprise that transformed into Agile tribes and squads, increasing productivity and cross-functional collaboration even in a regulated environment.",
        "a": "ING Bank",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Migrated to Agile + DevOps at scale, enabling faster delivery of financial software with integrated testing and CI/CD.",
        "a": "Capital One",
        "hint": "08 - Process Models.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Case Study - Agile Successes - More Examples\": ___ - Leverages Agile at the team level (with a freedom & responsibility culture); teams independently ship and own services.",
        "a": "Netflix",
        "hint": "08 - Process Models.pdf, slide 15"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"What is a software process model?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "Defines how a software project is planned, developed, tested, and delivered",
          "D": "FAST CHEAP"
        },
        "answer": "C",
        "topic": "Software Process Models",
        "exp": "The correct option is from 08 - Process Models.pdf, slide 2.",
        "correctAnswerText": "Defines how a software project is planned, developed, tested, and delivered",
        "deckId": "process"
      },
      {
        "q": "Which point is listed on the \"Common Process Models\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Waterfall",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "Software Process Models",
        "exp": "The correct option is from 08 - Process Models.pdf, slide 3.",
        "correctAnswerText": "Waterfall",
        "deckId": "process"
      },
      {
        "q": "Which point is listed on the \"Waterfall : A Closer Look\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Linear, phase-based:",
          "C": "Stakeholders",
          "D": "FAST CHEAP"
        },
        "answer": "B",
        "topic": "Software Process Models",
        "exp": "The correct option is from 08 - Process Models.pdf, slide 4.",
        "correctAnswerText": "Linear, phase-based:",
        "deckId": "process"
      },
      {
        "q": "Which point is listed on the \"Waterfall : When to use it\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "Requirements are clear, fixed, and well understood"
        },
        "answer": "D",
        "topic": "Software Process Models",
        "exp": "The correct option is from 08 - Process Models.pdf, slide 6.",
        "correctAnswerText": "Requirements are clear, fixed, and well understood",
        "deckId": "process"
      }
    ]
  },
  {
    "id": "sdlc",
    "title": "SDLC & ALM",
    "icon": "[SLC]",
    "color": "#57aaff",
    "cards": [
      {
        "q": "What does SDLC stand for and what is it?",
        "a": "Software Development Life Cycle. A structured methodology for developing software through defined phases."
      },
      {
        "q": "What does ALM stand for and what is it?",
        "a": "Application Lifecycle Management. A broader discipline encompassing the complete lifespan of an application from inception to retirement."
      },
      {
        "q": "How does SDLC relate to ALM?",
        "a": "SDLC is a subset of ALM. ALM extends beyond development to include planning, release, operations, governance, and sunset/retirement."
      },
      {
        "q": "What are the stages of ALM?",
        "a": "Ideation → Planning → Development (SDLC) → Release → Operations → Governance → Sunset."
      },
      {
        "q": "What is the real-world analogy for SDLC vs ALM?",
        "a": "SDLC = designing and building a car in the factory. ALM = managing the car's full lifecycle: manufacturing, selling, servicing, upgrading, and decommissioning."
      },
      {
        "q": "What are the benefits of SDLC?",
        "a": "Clearly defined phases, project tracking and accountability, quality assurance through testing, easier developer onboarding."
      },
      {
        "q": "What are the benefits of ALM?",
        "a": "End-to-end traceability, better visibility for product managers, enables auditing/regulatory compliance, supports product roadmap planning."
      },
      {
        "q": "What is the purpose of SDLC phases?",
        "a": "SDLC phases organize development work so teams can plan, build, test, deploy, maintain, and track software systematically."
      },
      {
        "q": "What are ALM components beyond development?",
        "a": "ALM includes planning, requirements, release management, operations, governance, compliance, support, and retirement."
      },
      {
        "q": "What kinds of documents appear in ALM?",
        "a": "ALM can include business cases, requirements, design documents, test plans, release notes, support plans, compliance records, and retirement plans."
      },
      {
        "q": "What is the role of a Product Owner?",
        "a": "The Product Owner represents product priorities, manages backlog direction, and helps define value and acceptance for work items."
      },
      {
        "q": "What is the role of a Business Analyst?",
        "a": "A Business Analyst helps gather requirements, clarify business needs, document workflows, and translate stakeholder goals into actionable work."
      },
      {
        "q": "What is the role of a Technical Analyst?",
        "a": "A Technical Analyst connects business requirements to technical feasibility, constraints, systems, integrations, and implementation details."
      },
      {
        "q": "What is the role of a System Architect?",
        "a": "The System Architect defines high-level technical structure, major components, integration strategy, and long-term design direction."
      },
      {
        "q": "What is a RACI matrix?",
        "a": "A responsibility assignment matrix that identifies who is Responsible, Accountable, Consulted, and Informed for project activities."
      },
      {
        "q": "What is a build vs buy decision?",
        "a": "A decision about whether to create a custom solution or purchase/adopt an existing product or service."
      },
      {
        "q": "What are common ALM challenges?",
        "a": "Common challenges include poor traceability, unclear ownership, tool fragmentation, weak governance, changing requirements, and communication gaps."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Introduction\" slide says: \"Why understanding SDLC and ALM is essential\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide says: \"Industry demand for lifecycle management skills\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide says: \"Focus of this lecture: roles, concepts, comparisons, examples, best practices\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Definitions\" slide says: \"SDLC (Software Development Life Cycle)\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 3."
      },
      {
        "q": "The \"Definitions\" slide says: \"Structured methodology for developing software.\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 3."
      },
      {
        "q": "The \"Definitions\" slide says: \"ALM (Application Lifecycle Management)\".",
        "answer": true,
        "exp": "True. Source: 09 - SDLC & ALM.pdf, slide 3."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"[ Presentation Layer ] -> UI, screens, controllers\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Example Bad: UserService handles auth + email\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"class ApplicationManager { public void CreateUser(string username, string password) { ... } public void Del...\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 2."
      },
      {
        "q": "The \"Definitions\" slide lists this point: \"At this stage, scope control = success\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 3."
      },
      {
        "q": "The \"Definitions\" slide lists this point: \"REST JSON/HTTP Simple, widely supported Over/under-fetching\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 3."
      },
      {
        "q": "The \"Definitions\" slide lists this point: \"Android (Kotlin)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 09 - SDLC & ALM.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Introduction\": Why understanding ___ is essential",
        "a": "SDLC and ALM",
        "hint": "09 - SDLC & ALM.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"ALM at a Glance\": Example: ___'s entire music recommendation pipeline lifecycle",
        "a": "Managing Spotify",
        "hint": "09 - SDLC & ALM.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Example Scenarios\": Managing the entire ___ platform for K-12 education over a decade",
        "a": "Google Classroom",
        "hint": "09 - SDLC & ALM.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Benefits of SDLC\": Example: ___ startup launching their",
        "a": "Mid-size SaaS",
        "hint": "09 - SDLC & ALM.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___: Meetings, surveys, SRS documents",
        "a": "Requirement Analysis",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___ : System architecture, ER diagrams, UI mockups",
        "a": "Design",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___ : Coding by dev teams, peer reviews",
        "a": "Implementation",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___ : Unit, integration, regression, UAT",
        "a": "Testing",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___ : CI/CD pipelines, version control",
        "a": "Deployment",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"SDLC Phases Explained\": ___ : Bug fixes, patches, scalability",
        "a": "Maintenance",
        "hint": "09 - SDLC & ALM.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"ALM Components\": ___ (Backlogs, user stories, budgets)",
        "a": "Planning and Estimation",
        "hint": "09 - SDLC & ALM.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"ALM Components\": ___ (DevOps tools, rollback strategies)",
        "a": "Release Management",
        "hint": "09 - SDLC & ALM.pdf, slide 11"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Introduction\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "Why understanding SDLC and ALM is essential"
        },
        "answer": "D",
        "topic": "SDLC & ALM",
        "exp": "The correct option is from 09 - SDLC & ALM.pdf, slide 2.",
        "correctAnswerText": "Why understanding SDLC and ALM is essential",
        "deckId": "sdlc"
      },
      {
        "q": "Which point is listed on the \"Definitions\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "SDLC (Software Development Life Cycle)",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "SDLC & ALM",
        "exp": "The correct option is from 09 - SDLC & ALM.pdf, slide 3.",
        "correctAnswerText": "SDLC (Software Development Life Cycle)",
        "deckId": "sdlc"
      },
      {
        "q": "Which point is listed on the \"SDLC at a Glance\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Goal: Deliver quality software in structured stages",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "SDLC & ALM",
        "exp": "The correct option is from 09 - SDLC & ALM.pdf, slide 4.",
        "correctAnswerText": "Goal: Deliver quality software in structured stages",
        "deckId": "sdlc"
      },
      {
        "q": "Which point is listed on the \"ALM at a Glance\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Goal: Manage all aspects of the application from inception to retirement"
        },
        "answer": "D",
        "topic": "SDLC & ALM",
        "exp": "The correct option is from 09 - SDLC & ALM.pdf, slide 5.",
        "correctAnswerText": "Goal: Manage all aspects of the application from inception to retirement",
        "deckId": "sdlc"
      }
    ]
  },
  {
    "id": "fullstack",
    "title": "Full Stack Development",
    "icon": "[FS]",
    "color": "#ff9fcd",
    "cards": [
      {
        "q": "What was the old definition of a Full Stack Developer (2010s)?",
        "a": "\"One person who builds the entire web app — HTML/CSS, JS, backend, and database.\""
      },
      {
        "q": "What is the modern definition of a Full Stack Developer (2020s)?",
        "a": "\"An engineer who understands and can navigate multiple layers of the stack, even if they specialize in one.\""
      },
      {
        "q": "What is a T-shaped developer?",
        "a": "A developer with broad knowledge across multiple layers of the stack but deep expertise in one specific area."
      },
      {
        "q": "What are the three tiers of the full stack?",
        "a": "Front-end (client/UI), Middle tier (API/business logic), and Back-end (database/persistence)."
      },
      {
        "q": "What is \"Full Stack + DevOps\" sometimes called?",
        "a": "FSD — Full Stack Developer expanded to include DevOps, CI/CD, and sometimes cloud knowledge."
      },
      {
        "q": "Why does Full Stack development matter for debugging?",
        "a": "A full-stack mindset lets you trace bugs through the entire request-response lifecycle — from UI assumption to API error to inefficient query."
      },
      {
        "q": "What were predecessor technologies before the full stack era (1970s-1990s)?",
        "a": "Monolithic (one-tier) applications, client-server model (two-tier, n-tier), mainframe terminals, desktop apps with direct DB access, early web with HTML + CGI scripts."
      },
      {
        "q": "What does the front-end layer handle?",
        "a": "The front-end handles the user interface, user interactions, rendering, validation, accessibility, and communication with APIs."
      },
      {
        "q": "What does the middle tier handle?",
        "a": "The middle tier handles API endpoints, business logic, authentication, validation, orchestration, and communication between UI and data layers."
      },
      {
        "q": "What does the back-end/data layer handle?",
        "a": "The back-end layer handles persistence, databases, data models, queries, transactions, and storage-related concerns."
      },
      {
        "q": "What is a common full-stack web combination?",
        "a": "A common combination is a JavaScript front end, REST API or Node/Express middle tier, and a SQL or NoSQL database."
      },
      {
        "q": "What is the data flow in a typical full-stack app?",
        "a": "User action in the UI triggers an API request, the middle tier processes it, the database stores or retrieves data, and the result returns to the UI."
      },
      {
        "q": "What is a Single Page Application (SPA)?",
        "a": "An SPA loads once in the browser and updates content dynamically using JavaScript rather than reloading full pages."
      },
      {
        "q": "What is a Progressive Web App (PWA)?",
        "a": "A PWA is a web app enhanced with app-like features such as offline support, installability, caching, and responsive behavior."
      },
      {
        "q": "Why is separation of concerns important in full-stack development?",
        "a": "It keeps UI, business logic, and persistence responsibilities clear so the system is easier to test, modify, and debug."
      },
      {
        "q": "What is a common front-end best practice?",
        "a": "Keep components focused, validate user input, handle loading/error states, and avoid mixing UI code with business or data-access logic."
      },
      {
        "q": "What is a common pitfall across full-stack layers?",
        "a": "A common pitfall is leaking responsibilities across layers, such as putting database logic in the UI or business rules only in the front end."
      }
    ],
    "truefalse": [
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide says: \"What is the \"full stack?\"\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide says: \"Preview: front-end, middle tier, back-end\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide says: \"Why this matters for modern teams\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide says: \"Holistic Understanding of Systems\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 3."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide says: \"Full-stack developers can see how layers interact - UI triggers API, API hits DB, DB returns results\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 3."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide says: \"This reduces blind spots between teams\".",
        "answer": true,
        "exp": "True. Source: 10 - Full Stack Development.pdf, slide 3."
      },
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide lists this point: \"Great for testing real workflows, login flows, shopping carts, etc\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide lists this point: \"iOS (Swift)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"The Modern Full Stack : A Complete View of Software Systems\" slide lists this point: \"Improves modularity and design\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 2."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide lists this point: \"Scenes, actors, props = entities and value objects\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 3."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide lists this point: \"Systems often evolve from simple feature flags into broader feature management, entitlement, and configurat...\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 3."
      },
      {
        "q": "The \"Why Full Stack Development Matters : Why - 1 of 2\" slide lists this point: \"Liskov Substitution\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 10 - Full Stack Development.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": Knowing all layers helps developers communicate effectively across front-end, ___, and database teams",
        "a": "API",
        "hint": "10 - Full Stack Development.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": ___ - they can trace an issue end-to-end",
        "a": "Easier debugging and integration",
        "hint": "10 - Full Stack Development.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Why Full Stack Development Matters : Why - 1 of 2\": Faster Prototyping & ___ Delivery",
        "a": "MVP",
        "hint": "10 - Full Stack Development.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Full-Stack Developer - Then and Now\": \"Full-stack\" now includes DevOps, ___, and sometimes cloud knowledge (FSD -> Full Stack + DevOps)",
        "a": "CI/CD",
        "hint": "10 - Full Stack Development.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Before the Full Stack - Predecessor Technologies\": Early web: ___ + CGI scripts",
        "a": "HTML",
        "hint": "10 - Full Stack Development.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"Rise of the Full Stack\": Rise of JS frameworks and ___ APIs",
        "a": "REST",
        "hint": "10 - Full Stack Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Rise of the Full Stack\": Birth of \"___\" role (~2010)",
        "a": "Full Stack Developer",
        "hint": "10 - Full Stack Development.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"The Front-End Layer\": For mobile: Flutter, KMP, ___, SwiftUI",
        "a": "React Native",
        "hint": "10 - Full Stack Development.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"The Middle Tier (Middleware/API Layer)\": Node.js (Express, NestJS), .NET Core, ___, Django,",
        "a": "Spring Boot",
        "hint": "10 - Full Stack Development.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"The Back-End Layer (Data & Persistence)\": ___: PostgreSQL, MySQL, SQL Server",
        "a": "SQL",
        "hint": "10 - Full Stack Development.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"The Back-End Layer (Data & Persistence)\": ORMs: Dapper, PetaPoco, Prisma, ___, NHibernate",
        "a": "EF/EF Core",
        "hint": "10 - Full Stack Development.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"Beyond Web/Mobile: Other Full Stacks\": ___: Unity (C#), Unreal (C++)",
        "a": "Game Development",
        "hint": "10 - Full Stack Development.pdf, slide 15"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"The Modern Full Stack : A Complete View of Software Systems\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "What is the \"full stack?\"",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "B",
        "topic": "Full Stack Development",
        "exp": "The correct option is from 10 - Full Stack Development.pdf, slide 2.",
        "correctAnswerText": "What is the \"full stack?\"",
        "deckId": "fullstack"
      },
      {
        "q": "Which point is listed on the \"Why Full Stack Development Matters : Why - 1 of 2\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "Holistic Understanding of Systems"
        },
        "answer": "D",
        "topic": "Full Stack Development",
        "exp": "The correct option is from 10 - Full Stack Development.pdf, slide 3.",
        "correctAnswerText": "Holistic Understanding of Systems",
        "deckId": "fullstack"
      },
      {
        "q": "Which point is listed on the \"Why Full Stack Development Matters : Why - 2 of 2\" slide?",
        "options": {
          "A": "Better Troubleshooting and Debugging",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "A",
        "topic": "Full Stack Development",
        "exp": "The correct option is from 10 - Full Stack Development.pdf, slide 4.",
        "correctAnswerText": "Better Troubleshooting and Debugging",
        "deckId": "fullstack"
      },
      {
        "q": "Which point is listed on the \"Full-Stack Developer - Then and Now\" slide?",
        "options": {
          "A": "Old Definition (2010s):",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Full Stack Development",
        "exp": "The correct option is from 10 - Full Stack Development.pdf, slide 5.",
        "correctAnswerText": "Old Definition (2010s):",
        "deckId": "fullstack"
      }
    ]
  },
  {
    "id": "apis",
    "title": "APIs",
    "icon": "[API]",
    "color": "#a0ff8f",
    "cards": [
      {
        "q": "What is an API?",
        "a": "Application Programming Interface — a defined way for software systems to communicate. It encapsulates complexity and exposes controlled functionality."
      },
      {
        "q": "What is REST and who defined it?",
        "a": "REpresentational State Transfer, defined by Roy Fielding in 2000 in his dissertation. It is stateless, uses HTTP, and is resource-based (nouns, not verbs)."
      },
      {
        "q": "What are the 5 REST principles?",
        "a": "1) Stateless communication\n2) Client-server separation\n3) Uniform interface\n4) Resource-based (nouns)\n5) Cacheable responses"
      },
      {
        "q": "What is SOAP and what does it use?",
        "a": "Simple Object Access Protocol — uses XML + WSDL (Web Services Description Language). Strong typing but verbose and brittle."
      },
      {
        "q": "What are the common HTTP verbs used in REST?",
        "a": "GET, POST, PUT, PATCH, DELETE"
      },
      {
        "q": "What are GraphQL and gRPC, and which companies developed them?",
        "a": "GraphQL was developed by Facebook for structured querying. gRPC was developed by Google using binary transport — both are 2020s-era API technologies."
      },
      {
        "q": "What is RPC (Remote Procedure Call)?",
        "a": "An early (1980s-90s) protocol that allows one program to execute code on another machine as if it were local. Foundation for many distributed systems."
      },
      {
        "q": "What is the restaurant menu analogy for APIs?",
        "a": "An API is like a restaurant menu — it lists what you can request (the interface) but hides how the kitchen (implementation) actually works."
      },
      {
        "q": "Why do APIs matter in software systems?",
        "a": "APIs allow systems, services, front ends, mobile apps, and third parties to communicate through clear controlled interfaces."
      },
      {
        "q": "What is JSON?",
        "a": "JSON is a lightweight text-based data format commonly used for API requests and responses because it is readable and easy to parse."
      },
      {
        "q": "Why is JSON often preferred over XML for modern web APIs?",
        "a": "JSON is usually less verbose, easier to read, maps naturally to JavaScript objects, and works well with REST APIs."
      },
      {
        "q": "What is GraphQL best used for?",
        "a": "GraphQL is useful when clients need flexible queries and want to request exactly the fields they need."
      },
      {
        "q": "What is gRPC best used for?",
        "a": "gRPC is useful for high-performance internal service-to-service communication using Protocol Buffers and HTTP/2."
      },
      {
        "q": "What is API authentication?",
        "a": "Authentication verifies who the caller is, often using login credentials, API keys, sessions, or bearer tokens."
      },
      {
        "q": "What is API authorization?",
        "a": "Authorization determines what an authenticated caller is allowed to access or do, often using roles, permissions, or scopes."
      },
      {
        "q": "What is CORS?",
        "a": "Cross-Origin Resource Sharing, a browser security mechanism that controls which origins can call an API from client-side code."
      },
      {
        "q": "Why is API documentation important?",
        "a": "Documentation helps developers discover endpoints, request formats, authentication rules, response examples, and expected errors."
      },
      {
        "q": "What is an API gateway?",
        "a": "An API gateway sits between clients and services to handle routing, authentication, rate limiting, logging, and cross-cutting concerns."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Application Programming\" slide says: \"Interface (API)\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"Application Programming\" slide says: \"Evolution, Practices & Pitfalls\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"Application Programming\" slide says: \"CMPS 3350-MM\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"What is an API?\" slide says: \"API (Application Programming Interface): A defined way for software systems to communicate\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 2."
      },
      {
        "q": "The \"What is an API?\" slide says: \"Purpose: Encapsulates complexity and exposes controlled functionality\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 2."
      },
      {
        "q": "The \"What is an API?\" slide says: \"Analogy: Like a restaurant menu - it lists what you can request, not how the kitchen works\".",
        "answer": true,
        "exp": "True. Source: 11 - APIs.pdf, slide 2."
      },
      {
        "q": "The \"Application Programming\" slide lists this point: \"Cyclomatic Complexity, Halstead Volume\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"Application Programming\" slide lists this point: \"Decision Factor Refactor Rewrite\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"Application Programming\" slide lists this point: \"Logs show requests hitting middleware but failing auth check\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 1."
      },
      {
        "q": "The \"What is an API?\" slide lists this point: \"Benefits Recap\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 2."
      },
      {
        "q": "The \"What is an API?\" slide lists this point: \"Update stakeholders R C I I I I\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 2."
      },
      {
        "q": "The \"What is an API?\" slide lists this point: \"Pattern: solves a recurring problem effectively\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 11 - APIs.pdf, slide 2."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"What is an API?\": ___ (Application Programming Interface): A defined way for software systems to communicate",
        "a": "API",
        "hint": "11 - APIs.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"Why APIs Matter\": Drive platform ecosystems (___, Twitter,",
        "a": "Google Maps",
        "hint": "11 - APIs.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Pre-Web \"API-like\" Technologies\": CORBA (___) : Early 1990s",
        "a": "Common Object Request Broker Architecture",
        "hint": "11 - APIs.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Pre-Web \"API-like\" Technologies\": ___ - building blocks for all later API technologies",
        "a": "Low-level communication (TCP/UDP)",
        "hint": "11 - APIs.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"A Brief History of APIs\": 2010s - ___ / RESTful APIs",
        "a": "JSON",
        "hint": "11 - APIs.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Predecessor Technologies\": Early remote procedure call using ___ payloads over HTTP",
        "a": "XML",
        "hint": "11 - APIs.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"Predecessor Technologies\": Inspired ___'s standardization",
        "a": "SOAP",
        "hint": "11 - APIs.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"REST Emerges\": Defined by: ___ in 2000",
        "a": "Roy Fielding",
        "hint": "11 - APIs.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"REST Example\": Uses ___ methods to represent actions",
        "a": "HTTP",
        "hint": "11 - APIs.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"REST Verbs and CRUD Operations\": ___ verbs align naturally with CRUD semantics",
        "a": "REST",
        "hint": "11 - APIs.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"REST Verbs and CRUD Operations - Alignment\": ___ /api/users Adds a new resource. The server assigns the ID",
        "a": "POST Create",
        "hint": "11 - APIs.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"REST Verbs and CRUD Operations - Alignment\": ___ /api/users or Retrieves one or more resources",
        "a": "GET Read",
        "hint": "11 - APIs.pdf, slide 10"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Application Programming\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Interface (API)",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "APIs",
        "exp": "The correct option is from 11 - APIs.pdf, slide 1.",
        "correctAnswerText": "Interface (API)",
        "deckId": "apis"
      },
      {
        "q": "Which point is listed on the \"What is an API?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "API (Application Programming Interface): A defined way for software systems to communicate"
        },
        "answer": "D",
        "topic": "APIs",
        "exp": "The correct option is from 11 - APIs.pdf, slide 2.",
        "correctAnswerText": "API (Application Programming Interface): A defined way for software systems to communicate",
        "deckId": "apis"
      },
      {
        "q": "Which point is listed on the \"Why APIs Matter\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Enable integration between apps, services, and devices"
        },
        "answer": "D",
        "topic": "APIs",
        "exp": "The correct option is from 11 - APIs.pdf, slide 3.",
        "correctAnswerText": "Enable integration between apps, services, and devices",
        "deckId": "apis"
      },
      {
        "q": "Which point is listed on the \"Pre-Web \"API-like\" Technologies\" slide?",
        "options": {
          "A": "Before the web era, systems still needed to communicate - but mostly within local networks o...",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "APIs",
        "exp": "The correct option is from 11 - APIs.pdf, slide 4.",
        "correctAnswerText": "Before the web era, systems still needed to communicate - but mostly within local networks o...",
        "deckId": "apis"
      }
    ]
  },
  {
    "id": "ddd-solid",
    "title": "DDD & SOLID",
    "icon": "[DDD]",
    "color": "#e0a0ff",
    "cards": [
      {
        "q": "What is Domain-Driven Design (DDD) and who introduced it?",
        "a": "A strategic and architectural philosophy that lets the business domain drive software structure (not technology or database). Introduced by Eric Evans in 2003."
      },
      {
        "q": "What are the DDD Building Blocks?",
        "a": "Entities (identity), Value Objects (immutable, identity by value), Aggregates & Aggregate Roots, Repositories, Services, Events."
      },
      {
        "q": "What is a DDD Entity?",
        "a": "An object with a unique identity that persists over time — e.g., Player, Order, Customer. Identity is what makes two entities different even if their attributes are the same."
      },
      {
        "q": "What is a DDD Value Object?",
        "a": "An immutable object identified by its value, not an ID — e.g., Money($10), Coordinates(lat, lng). Best for enforcing semantic typing."
      },
      {
        "q": "What is a DDD Aggregate Root?",
        "a": "The root entity of an Aggregate cluster. All access to the aggregate goes through the root, which enforces consistency boundaries."
      },
      {
        "q": "What is the \"city plan vs. buildings\" analogy for DDD vs. patterns?",
        "a": "DDD is the city plan (how neighborhoods connect, where roads go). Patterns are the individual buildings (how each is constructed). DDD tells you which patterns to use and where."
      },
      {
        "q": "What is ubiquitous language in DDD?",
        "a": "A shared vocabulary between developers and domain experts, used consistently in both code and conversation to model the business domain accurately."
      },
      {
        "q": "What does SOLID stand for?",
        "a": "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
      },
      {
        "q": "Why do advanced design principles exist?",
        "a": "They help manage complexity, reduce coupling, improve maintainability, and keep software aligned with business needs."
      },
      {
        "q": "What is a domain in DDD?",
        "a": "A domain is the problem space or business area the software is built to support, such as ordering, payments, scheduling, or inventory."
      },
      {
        "q": "What is an aggregate in DDD?",
        "a": "An aggregate is a cluster of related objects treated as one consistency boundary, with an aggregate root controlling access."
      },
      {
        "q": "What is a repository in DDD?",
        "a": "A repository provides a domain-friendly interface for retrieving and saving aggregates while hiding persistence details."
      },
      {
        "q": "What is a domain service?",
        "a": "A domain service holds business logic that does not naturally belong inside a single entity or value object."
      },
      {
        "q": "What is a domain event?",
        "a": "A domain event records that something important happened in the domain, such as OrderPlaced or PaymentCompleted."
      },
      {
        "q": "What is a bounded context?",
        "a": "A bounded context is a clear boundary where a particular domain model and language apply consistently."
      },
      {
        "q": "What is the Single Responsibility Principle?",
        "a": "A class or module should have one main reason to change and focus on one responsibility."
      },
      {
        "q": "What is the Liskov Substitution Principle?",
        "a": "Subtypes should be usable wherever their base types are expected without breaking correct behavior."
      },
      {
        "q": "What is Dependency Inversion?",
        "a": "High-level modules should depend on abstractions rather than low-level concrete implementations."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Advanced Design Principles: Domain-Driven Design & SOLID\" slide says: \"\"Design is not just what it looks like and feels like.\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 2."
      },
      {
        "q": "The \"Advanced Design Principles: Domain-Driven Design & SOLID\" slide says: \"Design is how it works.\" - Steve Jobs\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 2."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide says: \"Reduce complexity\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide says: \"Improve maintainability and scalability\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide says: \"Enable team collaboration\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide says: \"Avoid \"big ball of mud\" architecture\".",
        "answer": true,
        "exp": "True. Source: 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Advanced Design Principles: Domain-Driven Design & SOLID\" slide lists this point: \"Tier or subscription flags\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 2."
      },
      {
        "q": "The \"Advanced Design Principles: Domain-Driven Design & SOLID\" slide lists this point: \"Remove flags when they are no longer needed\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 2."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide lists this point: \"Idiom Language-specific Readable, concise, native-style code\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide lists this point: \"REST JSON/HTTP Simple, widely supported Over/under-fetching\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide lists this point: \"Stakeholders\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 3."
      },
      {
        "q": "The \"Why Design Principles Exist\" slide lists this point: \"Internal expertise vs external support\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 12 - DDD & SOLID.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Advanced Design Principles: Domain-Driven Design & SOLID\": Design is how it works.\" - ___",
        "a": "Steve Jobs",
        "hint": "12 - DDD & SOLID.pdf, slide 2"
      },
      {
        "q": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": Introduced by ___ (2003) in",
        "a": "Eric Evans",
        "hint": "12 - DDD & SOLID.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___: Tackling Complexity in the Heart of Software",
        "a": "Domain-Driven Design",
        "hint": "12 - DDD & SOLID.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___: Let the business domain drive software structure, not technology or database.",
        "a": "Core Idea",
        "hint": "12 - DDD & SOLID.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Part I - Domain-Driven Design - Origins\": ___ is about modeling business logic",
        "a": "DDD",
        "hint": "12 - DDD & SOLID.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Domain-Driven Design - DDD is not a pattern\": Used for: ___, Factory Pattern,",
        "a": "Repository Pattern",
        "hint": "12 - DDD & SOLID.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Domain-Driven Design - DDD is not a pattern\": ___, Strategy Pattern, etc.",
        "a": "Observer Pattern",
        "hint": "12 - DDD & SOLID.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"What Is a Domain?\": Example Domains: ___, Banking,",
        "a": "Tennis Matches",
        "hint": "12 - DDD & SOLID.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"DDD Building Blocks\": ___ -> immutable, identity by value (e.g.,",
        "a": "Value Objects",
        "hint": "12 - DDD & SOLID.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"DDD Building Blocks\": ___ -> clusters of entities treated as one unit",
        "a": "Aggregates & Aggregate Roots",
        "hint": "12 - DDD & SOLID.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"DDD Building Blocks - Simplified\": ___ define what exists",
        "a": "Entities and Value Objects",
        "hint": "12 - DDD & SOLID.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"DDD Building Blocks - Analogy 1\": ___ - e.g., \"Tennis Tournament Management Inc.\"",
        "a": "Domain - The overall company's business",
        "hint": "12 - DDD & SOLID.pdf, slide 11"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Advanced Design Principles: Domain-Driven Design & SOLID\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "\"Design is not just what it looks like and feels like.",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "DDD & SOLID",
        "exp": "The correct option is from 12 - DDD & SOLID.pdf, slide 2.",
        "correctAnswerText": "\"Design is not just what it looks like and feels like.",
        "deckId": "ddd-solid"
      },
      {
        "q": "Which point is listed on the \"Why Design Principles Exist\" slide?",
        "options": {
          "A": "Reduce complexity",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "DDD & SOLID",
        "exp": "The correct option is from 12 - DDD & SOLID.pdf, slide 3.",
        "correctAnswerText": "Reduce complexity",
        "deckId": "ddd-solid"
      },
      {
        "q": "Which point is listed on the \"Part I - Domain-Driven Design - Origins\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Introduced by Eric Evans (2003) in"
        },
        "answer": "D",
        "topic": "DDD & SOLID",
        "exp": "The correct option is from 12 - DDD & SOLID.pdf, slide 4.",
        "correctAnswerText": "Introduced by Eric Evans (2003) in",
        "deckId": "ddd-solid"
      },
      {
        "q": "Which point is listed on the \"Domain-Driven Design - DDD is not a pattern\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Design patterns are specific, reusable solutions to common software problems."
        },
        "answer": "D",
        "topic": "DDD & SOLID",
        "exp": "The correct option is from 12 - DDD & SOLID.pdf, slide 5.",
        "correctAnswerText": "Design patterns are specific, reusable solutions to common software problems.",
        "deckId": "ddd-solid"
      }
    ]
  },
  {
    "id": "persistence",
    "title": "Persistence Layer",
    "icon": "[PER]",
    "color": "#57d9a0",
    "cards": [
      {
        "q": "What is persistence in software?",
        "a": "Persistence is the art of making data outlive the program that created it — saving state so it survives beyond a single program execution."
      },
      {
        "q": "What is the difference between volatile and non-volatile memory?",
        "a": "Volatile (RAM): disappears when power is off. Non-volatile (Disk, SSD, Flash): survives power loss. Persistence relies on non-volatile storage."
      },
      {
        "q": "What does the persistence layer do?",
        "a": "Manages where and how data is stored and retrieved. Converts in-memory objects to storable formats and back. Handles save, update, delete, query. Protects upper layers from storage details."
      },
      {
        "q": "How does the persistence layer fit in layered architecture?",
        "a": "UI → Application → Domain → Persistence → Infrastructure. The repository hides whether data lives in a file, database, or API."
      },
      {
        "q": "Why do we need persistence?",
        "a": "When a program ends, its variables disappear. Persistence saves state — users, settings, progress, messages — so it survives between program runs."
      },
      {
        "q": "Give real-world examples of persistence.",
        "a": "Game saves (player progress → file on disk), Contacts app (names/numbers → internal database), Notes app (text → cloud or file), Web browser (history/cookies → local files or databases)."
      },
      {
        "q": "What does “persistence without databases” mean?",
        "a": "Data can be saved using files, local storage, serialized objects, or external APIs instead of a traditional database."
      },
      {
        "q": "Why did software move from files to databases?",
        "a": "Databases provide better querying, consistency, multi-user access, indexing, reliability, security, and management of growing data."
      },
      {
        "q": "What is a query?",
        "a": "A query is a request for data, often asking storage to find, filter, sort, insert, update, or delete information."
      },
      {
        "q": "What is SQL?",
        "a": "SQL is a language used to define, query, and manipulate data in relational databases."
      },
      {
        "q": "What is an ORM?",
        "a": "An Object-Relational Mapper connects object-oriented code to relational databases by mapping objects to tables and rows."
      },
      {
        "q": "Why do data models not always match code models?",
        "a": "Objects, relationships, inheritance, and behavior in code do not always map cleanly to tables, rows, and foreign keys."
      },
      {
        "q": "What persistence problem happens when many users act at the same time?",
        "a": "Concurrent access can create conflicts, race conditions, stale reads, lost updates, or inconsistent data without proper control."
      },
      {
        "q": "What does ACID help guarantee?",
        "a": "ACID helps transactions remain atomic, consistent, isolated, and durable so data stays reliable."
      },
      {
        "q": "Why do backups matter in persistence?",
        "a": "Backups protect against data loss caused by crashes, corruption, accidental deletion, hardware failure, or bad deployments."
      },
      {
        "q": "Why is persistence security important?",
        "a": "Stored data may contain sensitive information, so systems need access control, validation, encryption, auditing, and safe query practices."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Introduction\" slide says: \"Persistence is the art of making data outlive the program that created it.\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 2."
      },
      {
        "q": "The \"Why We Need Persistence\" slide says: \"When a program ends, its variables disappear\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide says: \"To \"remember\" between runs, data must live outside memory\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide says: \"Persistence means saving state - users, settings, progress, messages, etc\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide says: \"Example:\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide says: \"your phone remembers your contacts after rebooting\".",
        "answer": true,
        "exp": "True. Source: 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Protocol Buffers\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 2."
      },
      {
        "q": "The \"Why We Need Persistence\" slide lists this point: \"LOCAL REPO main Merge other devs work if your work depends on theirs sprint1 dev Merge ⤵ feature1 feature2\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide lists this point: \"What is the current version of your product now?\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide lists this point: \"Even small apps go through SDLC phases\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide lists this point: \"Document Analysis\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 3."
      },
      {
        "q": "The \"Why We Need Persistence\" slide lists this point: \"SDLC is practiced universally in all software development environments - startups, enterprises, and government\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 13 - Persistence.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Why We Need Persistence\": ___ - users, settings, progress, messages, etc",
        "a": "Persistence means saving state",
        "hint": "13 - Persistence.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Volatile vs. Non-Volatile Memory\": ___ feels different in this regard",
        "a": "Cloud Storage",
        "hint": "13 - Persistence.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Persistence in Layered Architecture\": Repository hides whether data lives in a file, database, or accessed via ___",
        "a": "API",
        "hint": "13 - Persistence.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> Orchestration, service logic",
        "a": "Application Layer",
        "hint": "13 - Persistence.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> Entities, value objects, business rules",
        "a": "Domain Layer",
        "hint": "13 - Persistence.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> Data access, repositories, mappers",
        "a": "Persistence Layer",
        "hint": "13 - Persistence.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"Where the Persistence Layer Lives\": [ ___ ] -> External systems (DB, file, APIs)",
        "a": "Infrastructure Layer",
        "hint": "13 - Persistence.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"Persistence vs Infrastructure Layers\": Uses repositories, data mappers, ___ classes, entity-to-table converters",
        "a": "ORM",
        "hint": "13 - Persistence.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Persistence vs Infrastructure Layers\": Relies on OS, DB clients & connections, file I/O, ___ clients, email services, queues, logging, external API clients",
        "a": "HTTP",
        "hint": "13 - Persistence.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"Persistence Without Databases\": Serialize objects to ___",
        "a": "JSON",
        "hint": "13 - Persistence.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Introduction to SQL\": ___ = Structured Query Language",
        "a": "SQL",
        "hint": "13 - Persistence.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"Introduction to SQL\": ___ - works across many systems (MySQL, PostgreSQL, SQL",
        "a": "Standardized",
        "hint": "13 - Persistence.pdf, slide 13"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Introduction\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Persistence is the art of making data outlive the program that created it.",
          "C": "FAST CHEAP",
          "D": "Identify:"
        },
        "answer": "B",
        "topic": "Persistence Layer",
        "exp": "The correct option is from 13 - Persistence.pdf, slide 2.",
        "correctAnswerText": "Persistence is the art of making data outlive the program that created it.",
        "deckId": "persistence"
      },
      {
        "q": "Which point is listed on the \"Why We Need Persistence\" slide?",
        "options": {
          "A": "When a program ends, its variables disappear",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Persistence Layer",
        "exp": "The correct option is from 13 - Persistence.pdf, slide 3.",
        "correctAnswerText": "When a program ends, its variables disappear",
        "deckId": "persistence"
      },
      {
        "q": "Which point is listed on the \"Everyday Examples of Persistence\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Example What's Being Remembered How It's Stored",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "B",
        "topic": "Persistence Layer",
        "exp": "The correct option is from 13 - Persistence.pdf, slide 4.",
        "correctAnswerText": "Example What's Being Remembered How It's Stored",
        "deckId": "persistence"
      },
      {
        "q": "Which point is listed on the \"Volatile vs. Non-Volatile Memory\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Volatile: RAM - disappears when power is off"
        },
        "answer": "D",
        "topic": "Persistence Layer",
        "exp": "The correct option is from 13 - Persistence.pdf, slide 5.",
        "correctAnswerText": "Volatile: RAM - disappears when power is off",
        "deckId": "persistence"
      }
    ]
  },
  {
    "id": "sync-async",
    "title": "Sync vs Async",
    "icon": "[SYN]",
    "color": "#ffdd57",
    "cards": [
      {
        "q": "What is synchronous execution?",
        "a": "Tasks run one after another — each must finish before the next starts. Simple and predictable but can be slow. Analogy: waiting in line."
      },
      {
        "q": "What is asynchronous execution?",
        "a": "Tasks can start and finish later — work continues while waiting. Improves responsiveness and efficiency. Analogy: starting laundry while doing other things."
      },
      {
        "q": "What is the difference between blocking and non-blocking?",
        "a": "Blocking: program halts until a task completes. Non-blocking: can start other work while waiting. Analogy: one chef cooks while others wait (blocking) vs. everyone multitasking (non-blocking)."
      },
      {
        "q": "What is AJAX?",
        "a": "Asynchronous JavaScript and XML. Fetches data without reloading the page. Originally used XMLHttpRequest; evolved to use fetch() or Axios/React Query."
      },
      {
        "q": "What is a thread?",
        "a": "The smallest unit of execution inside a program. Multiple threads allow concurrent execution within a single process."
      },
      {
        "q": "What are the tradeoffs of async vs sync?",
        "a": "Sync: simpler, predictable, slower under load. Async: requires callbacks/events/promises, scales better, more complex."
      },
      {
        "q": "Give an example of AJAX in JavaScript.",
        "a": "fetch(\"/api/data\").then(r => r.json()).then(showData); — fetches data from a server without reloading the page."
      },
      {
        "q": "What is the difference between a process and a thread?",
        "a": "A process is a running program with its own memory space; a thread is a smaller execution path inside a process."
      },
      {
        "q": "What is a single-threaded process?",
        "a": "A process that runs one main thread of execution, handling work sequentially unless it uses async/event mechanisms."
      },
      {
        "q": "What is a multi-threaded process?",
        "a": "A process that uses multiple threads to perform work concurrently within the same program."
      },
      {
        "q": "What are WebSockets used for?",
        "a": "WebSockets provide persistent two-way communication between client and server for real-time updates."
      },
      {
        "q": "What is Pub/Sub?",
        "a": "Publish/Subscribe is a messaging model where publishers send messages to topics and subscribers receive messages from those topics."
      },
      {
        "q": "What is a race condition?",
        "a": "A race condition happens when program behavior depends on unpredictable timing between concurrent operations."
      },
      {
        "q": "How can race conditions be prevented?",
        "a": "Use locks, transactions, queues, immutable data, atomic operations, synchronization, or controlled message passing."
      },
      {
        "q": "What is lazy loading?",
        "a": "Lazy loading delays loading data or resources until they are actually needed."
      },
      {
        "q": "What is prefetching?",
        "a": "Prefetching loads data before it is needed to reduce waiting time later."
      },
      {
        "q": "What is a safe concurrency design goal?",
        "a": "Design systems so shared state is controlled, operations are predictable, and failures do not corrupt data."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Intro\" slide says: \"\"synchronous\" and \"asynchronous\" are fundamental patterns that shape how software behaves, scales, and responds\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 2."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide says: \"Tasks run one after another\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide says: \"Each must finish before the next starts\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide says: \"Simple, predictable, but can be slow\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide says: \"Analogy: Waiting in line - one customer at a time\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Asynchronous\"?\" slide says: \"Tasks can start, then finish later\".",
        "answer": true,
        "exp": "True. Source: 14 - Sync vs Async.pdf, slide 4."
      },
      {
        "q": "The \"Intro\" slide lists this point: \"Concept Scope Purpose\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 2."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide lists this point: \"Needing simplicity & readability\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide lists this point: \"Helpful in A/B testing or controlled evaluation\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide lists this point: \"SDLC phases\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Synchronous\"?\" slide lists this point: \"Cross-functional teams\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 3."
      },
      {
        "q": "The \"What Is \"Asynchronous\"?\" slide lists this point: \"History Stored only on server Fully replicated on every client\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 14 - Sync vs Async.pdf, slide 4."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Comparing Sync vs Async\": ___ wait Continues immediately",
        "a": "Waiting Must",
        "hint": "14 - Sync vs Async.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Comparing Sync vs Async\": ___ under Scales better load",
        "a": "Performance Slower",
        "hint": "14 - Sync vs Async.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"AJAX: Asynchronous Web Requests\": AJAX = Asynchronous JavaScript and ___ (today,",
        "a": "XML",
        "hint": "14 - Sync vs Async.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"AJAX: Asynchronous Web Requests\": Has evolved to use fetch() (or Axios, ___)",
        "a": "React Query",
        "hint": "14 - Sync vs Async.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Async in Modern JS Frameworks\": ___ - Async hooks (useEffect, Suspense)",
        "a": "React",
        "hint": "14 - Sync vs Async.pdf, slide 14"
      },
      {
        "q": "Complete the slide statement from \"Message Brokers & Pub/Sub\": Examples: RabbitMQ, Kafka, ___",
        "a": "AWS SQS",
        "hint": "14 - Sync vs Async.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Preventing Race Conditions\": ___ - only one thread at a time",
        "a": "Locks / Mutexes",
        "hint": "14 - Sync vs Async.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"Preventing Race Conditions\": ___ - don't modify shared data",
        "a": "Immutability",
        "hint": "14 - Sync vs Async.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"Preventing Race Conditions\": ___ - communicate instead of sharing",
        "a": "Message Passing",
        "hint": "14 - Sync vs Async.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"Preventing Race Conditions\": ___ - Node.js avoids data races",
        "a": "Single Event Loop",
        "hint": "14 - Sync vs Async.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"ACID: Data Safety\": ___ state No negative balance maintained",
        "a": "Consistency Valid",
        "hint": "14 - Sync vs Async.pdf, slide 18"
      },
      {
        "q": "Complete the slide statement from \"ACID: Data Safety\": ___ until commit Two edits don't mix",
        "a": "Isolation Hidden",
        "hint": "14 - Sync vs Async.pdf, slide 18"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Intro\" slide?",
        "options": {
          "A": "\"synchronous\" and \"asynchronous\" are fundamental patterns that shape how software behaves, s...",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "Sync vs Async",
        "exp": "The correct option is from 14 - Sync vs Async.pdf, slide 2.",
        "correctAnswerText": "\"synchronous\" and \"asynchronous\" are fundamental patterns that shape how software behaves, s...",
        "deckId": "sync-async"
      },
      {
        "q": "Which point is listed on the \"What Is \"Synchronous\"?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "Tasks run one after another"
        },
        "answer": "D",
        "topic": "Sync vs Async",
        "exp": "The correct option is from 14 - Sync vs Async.pdf, slide 3.",
        "correctAnswerText": "Tasks run one after another",
        "deckId": "sync-async"
      },
      {
        "q": "Which point is listed on the \"What Is \"Asynchronous\"?\" slide?",
        "options": {
          "A": "Tasks can start, then finish later",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "A",
        "topic": "Sync vs Async",
        "exp": "The correct option is from 14 - Sync vs Async.pdf, slide 4.",
        "correctAnswerText": "Tasks can start, then finish later",
        "deckId": "sync-async"
      },
      {
        "q": "Which point is listed on the \"Comparing Sync vs Async\" slide?",
        "options": {
          "A": "Feature Synchronous Asynchronous",
          "B": "Stakeholders",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "A",
        "topic": "Sync vs Async",
        "exp": "The correct option is from 14 - Sync vs Async.pdf, slide 5.",
        "correctAnswerText": "Feature Synchronous Asynchronous",
        "deckId": "sync-async"
      }
    ]
  },
  {
    "id": "crossplatform",
    "title": "Cross-Platform Development",
    "icon": "[CP]",
    "color": "#ff9f57",
    "cards": [
      {
        "q": "What is the historical timeline of cross-platform development?",
        "a": "Assembly (hardware-specific) → C (compile anywhere) → Java/JVM 1995 (write once, run anywhere) → .NET CLR, Flash, Qt (2000s) → Flutter, React Native, WebAssembly (2010s+)"
      },
      {
        "q": "What is the JVM and what does it enable?",
        "a": "Java Virtual Machine — executes platform-neutral bytecode. Enables \"write once, run anywhere.\" Supports Java, Kotlin, Scala, Groovy."
      },
      {
        "q": "What is the difference between Native, Bytecode, and Interpreted execution?",
        "a": "Native: compiled directly for CPU (C/C++). Bytecode: intermediate form executed by VM (Java, .NET). Interpreted: read line-by-line (Python, JS). Hybrid (JIT/AOT): compiles some code at runtime."
      },
      {
        "q": "What is WebAssembly (WASM)?",
        "a": "A binary instruction format that allows code written in languages like C++, Rust, or Go to run in web browsers at near-native speed."
      },
      {
        "q": "What are examples of cross-platform frameworks?",
        "a": "Flutter (Google), React Native (Meta), MAUI (.NET), Kotlin Multiplatform."
      },
      {
        "q": "What are examples of native development tools?",
        "a": "SwiftUI for iOS/macOS, Kotlin Compose for Android."
      },
      {
        "q": "What inspired .NET CLR and Android ART/Dalvik?",
        "a": "Both were inspired by the JVM concept — intermediate bytecode executed by a virtual machine. .NET uses Intermediate Language (IL); Android uses ART/Dalvik for mobile."
      },
      {
        "q": "What is the big question in cross-platform development?",
        "a": "Whether one codebase can deliver acceptable quality, performance, and user experience across multiple platforms."
      },
      {
        "q": "What is portability?",
        "a": "Portability is the ability for software to run on different hardware, operating systems, or runtimes with minimal changes."
      },
      {
        "q": "What is native development?",
        "a": "Native development uses platform-specific languages, frameworks, and tools to build software optimized for one platform."
      },
      {
        "q": "What is cross-platform development?",
        "a": "Cross-platform development uses shared code or frameworks to target multiple platforms from one main codebase."
      },
      {
        "q": "What are the benefits of cross-platform development?",
        "a": "Benefits include shared code, faster delivery, lower cost, consistent features, and easier support across platforms."
      },
      {
        "q": "What are the challenges of cross-platform development?",
        "a": "Challenges include performance limits, platform-specific behavior, plugin gaps, UI differences, debugging complexity, and native API access."
      },
      {
        "q": "What is Electron?",
        "a": "Electron is a framework that bundles Chromium and Node.js so web technologies can be used to build desktop applications."
      },
      {
        "q": "What is a downside of Electron?",
        "a": "Electron apps can be large and memory-heavy because they bundle a browser runtime."
      },
      {
        "q": "When should a team choose cross-platform?",
        "a": "Choose cross-platform when speed, shared logic, consistent UX, and broad reach matter more than maximum native optimization."
      },
      {
        "q": "When should a team choose native development?",
        "a": "Choose native when performance, platform-specific UX, deep hardware integration, or operating-system features are critical."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Introduction\" slide says: \"\"How software runs everywhere - from Java to WebAssembly.\"\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 2."
      },
      {
        "q": "The \"The Big Question\" slide says: \"\"Why can't one program just run everywhere?\"\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The Big Question\" slide says: \"Targets: Windows, macOS, Android, iOS, Linux, etc\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The Big Question\" slide says: \"Motivation: reduce cost, unify code, speed delivery.\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The History of Portability\" slide says: \"1970s - 80s: assembly -> hardware-specific\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 4."
      },
      {
        "q": "The \"The History of Portability\" slide says: \"C enabled \"compile anywhere.\"\".",
        "answer": true,
        "exp": "True. Source: 15 - Cross Platform.pdf, slide 4."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"The team is not trained in Agile practices\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 2."
      },
      {
        "q": "The \"The Big Question\" slide lists this point: \"Long lines exceeding style guide limits (e.g.,\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The Big Question\" slide lists this point: \"Product Owner, Solution Architect, Enterprise Architect,\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The Big Question\" slide lists this point: \"Pull Request (PR) A request to merge changes from one branch into another (usually used on hosted platforms).\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 3."
      },
      {
        "q": "The \"The History of Portability\" slide lists this point: \"Branching Limited, often slow or painful (SVN) Fast and cheap; branches are first-class citizens\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 4."
      },
      {
        "q": "The \"The History of Portability\" slide lists this point: \"When the flag would create more confusion than value\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 15 - Cross Platform.pdf, slide 4."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"The History of Portability\": 1995: ___ -> Write once, run anywhere",
        "a": "Java & JVM",
        "hint": "15 - Cross Platform.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"The History of Portability\": 2000s: .___, Flash, Qt",
        "a": "NET CLR",
        "hint": "15 - Cross Platform.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"The History of Portability\": 2010s - present: Flutter, ___, WebAssembly",
        "a": "React Native",
        "hint": "15 - Cross Platform.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Native vs Cross-Platform\": ___ codebases Shared codebase",
        "a": "Maintenance Separate",
        "hint": "15 - Cross Platform.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"The JVM and Its Legacy\": ___, Kotlin, Scala, Groovy",
        "a": "Supports Java",
        "hint": "15 - Cross Platform.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"The JVM and Its Legacy\": .NET CLR -> ___ (IL)",
        "a": "Intermediate Language",
        "hint": "15 - Cross Platform.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"The JVM and Its Legacy\": ___ -> universal compiler backend",
        "a": "LLVM IR",
        "hint": "15 - Cross Platform.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"How a Virtual Machine Enables Portability\": ___ implementations handle OS details",
        "a": "Platform-specific VM",
        "hint": "15 - Cross Platform.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"How a Virtual Machine Enables Portability\": Source Code -> Bytecode -> ___ ->",
        "a": "Virtual Machine",
        "hint": "15 - Cross Platform.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"VM / Hybrid / Cross-Platform vs Native\": Native Swift, Kotlin Machine code Platform ___ Fastest Limited",
        "a": "SDK",
        "hint": "15 - Cross Platform.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"VM / Hybrid / Cross-Platform vs Native\": VM-Based Java, .NET Bytecode->___ bindings Medium High",
        "a": "JIT/AOT Platform",
        "hint": "15 - Cross Platform.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"VM / Hybrid / Cross-Platform vs Native\": Hybrid / Engine Flutter, Compiled to ARM Custom engine ___",
        "a": "Near-Native High",
        "hint": "15 - Cross Platform.pdf, slide 10"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Introduction\" slide?",
        "options": {
          "A": "Identify:",
          "B": "\"How software runs everywhere - from Java to WebAssembly.\"",
          "C": "FAST CHEAP",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "Cross-Platform Development",
        "exp": "The correct option is from 15 - Cross Platform.pdf, slide 2.",
        "correctAnswerText": "\"How software runs everywhere - from Java to WebAssembly.\"",
        "deckId": "crossplatform"
      },
      {
        "q": "Which point is listed on the \"The Big Question\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "\"Why can't one program just run everywhere?\"",
          "C": "Identify:",
          "D": "FAST CHEAP"
        },
        "answer": "B",
        "topic": "Cross-Platform Development",
        "exp": "The correct option is from 15 - Cross Platform.pdf, slide 3.",
        "correctAnswerText": "\"Why can't one program just run everywhere?\"",
        "deckId": "crossplatform"
      },
      {
        "q": "Which point is listed on the \"The History of Portability\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "1970s - 80s: assembly -> hardware-specific",
          "D": "FAST CHEAP"
        },
        "answer": "C",
        "topic": "Cross-Platform Development",
        "exp": "The correct option is from 15 - Cross Platform.pdf, slide 4.",
        "correctAnswerText": "1970s - 80s: assembly -> hardware-specific",
        "deckId": "crossplatform"
      },
      {
        "q": "Which point is listed on the \"Native vs Cross-Platform\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Aspect Native Cross-Platform",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "B",
        "topic": "Cross-Platform Development",
        "exp": "The correct option is from 15 - Cross Platform.pdf, slide 5.",
        "correctAnswerText": "Aspect Native Cross-Platform",
        "deckId": "crossplatform"
      }
    ]
  },
  {
    "id": "refactor",
    "title": "Refactor vs Rewrite",
    "icon": "[R/R]",
    "color": "#57b8ff",
    "cards": [
      {
        "q": "What is refactoring?",
        "a": "Improving the internal structure of code WITHOUT changing its external behavior. Examples: simplify functions, rename variables, extract classes, add tests. \"Clean up the house without moving out.\""
      },
      {
        "q": "What is rewriting?",
        "a": "Rebuilding the system from scratch, often with new tech or design principles. Examples: replacing PHP with Node.js, monolith → microservices. \"Demolish and rebuild — same address, new foundation.\""
      },
      {
        "q": "Why do teams refactor code?",
        "a": "Code smells (long methods, duplication), hard to add features safely, poor readability, no tests, gradual performance degradation. Goal: incremental improvement without breaking behavior."
      },
      {
        "q": "Why do teams rewrite software?",
        "a": "Tech stack is obsolete, architecture can't scale, legacy frameworks/security issues, team doesn't understand old code, integrating new platforms."
      },
      {
        "q": "Compare refactor vs rewrite on risk and cost.",
        "a": "Refactor: lower risk, lower upfront cost, incremental delivery. Rewrite: higher risk, high upfront cost, all-at-once delivery."
      },
      {
        "q": "What are \"code smells\"?",
        "a": "Indicators of poor code quality that suggest refactoring is needed — e.g., long methods, code duplication, tangled logic, inconsistent style, no tests."
      },
      {
        "q": "What is the decision framework for refactor vs rewrite?",
        "a": "Consider risk, cost, deadlines, test coverage, architecture limits, team knowledge, business value, and whether behavior must remain stable."
      },
      {
        "q": "What are microservices?",
        "a": "Microservices are small independently deployable services organized around business capabilities."
      },
      {
        "q": "What does refactoring toward microservices mean?",
        "a": "It means gradually extracting pieces of a system into services while keeping the larger system working."
      },
      {
        "q": "What does rewriting as microservices mean?",
        "a": "It means rebuilding the system around a microservice architecture, usually with higher risk and major design changes."
      },
      {
        "q": "What is the Strangler Fig pattern?",
        "a": "A migration pattern where new functionality gradually wraps and replaces parts of an old system until the legacy system can be retired."
      },
      {
        "q": "What is a warning sign that refactoring may not be enough?",
        "a": "The architecture fundamentally cannot support required scale, reliability, security, or business direction."
      },
      {
        "q": "What organizational factors affect refactor vs rewrite decisions?",
        "a": "Team skill, ownership, deadlines, budget, stakeholder patience, documentation, testing culture, and operational risk."
      },
      {
        "q": "What is a modular monolith?",
        "a": "A monolith organized into clear internal modules with strong boundaries, making it cleaner without requiring distributed services."
      },
      {
        "q": "Why can microservices make a system worse?",
        "a": "They add deployment, networking, data consistency, monitoring, and operational complexity if the team is not ready."
      },
      {
        "q": "What practical guideline should teams follow before rewriting?",
        "a": "Do not rewrite just because code is ugly; justify it with clear business, technical, and risk-based reasons."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Objectives\" slide says: \"Define refactoring and rewriting\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide says: \"Identify when each is appropriate\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide says: \"Compare their risks, costs, and outcomes\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide says: \"Recognize technical debt symptoms\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide says: \"Evaluate real-world case studies\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"What Is Refactoring?\" slide says: \"Refactoring = improving the internal structure of code without changing its external behavior\".",
        "answer": true,
        "exp": "True. Source: 16 - Refactor vs Rewrite.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"REMOTE REPOSITORY main sprint1 dev\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Protocol Buffers\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Buffers & caches -> smooth I/O\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Domain - The overall company's business - e.g., \"Tennis Tournament Management Inc.\"\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Keep functions predictable - minimize side effects\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 2."
      },
      {
        "q": "The \"What Is Refactoring?\" slide lists this point: \"Use gRPC for backend performance and service-to-service calls\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against 16 - Refactor vs Rewrite.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"What Is Rewriting?\": ___ backend with Node.js",
        "a": "Replacing PHP",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Refactor vs Rewrite\": ___ upfront High upfront",
        "a": "Cost Lower",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Refactor vs Rewrite\": ___ same Often changes",
        "a": "Tech Stack Usually",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Refactor vs Rewrite\": ___ tests preserved Must rebuild tests",
        "a": "Testing Regression",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Refactoring Toward Microservices\": ___ - modernize one module at a time",
        "a": "Incremental evolution",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"Rewriting as Microservices\": Independent ___ per service",
        "a": "CI/CD",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 11"
      },
      {
        "q": "Complete the slide statement from \"Refactor vs Rewrite: Microservices Edition\": ___ transition Must rebuild",
        "a": "Test Coverage Helps",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"When Refactoring Works Best\": You can identify natural seams (___,",
        "a": "User Auth",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"When Refactoring Works Best\": ___ - build new modules as services and connect them gradually",
        "a": "Start small",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"Beyond the Code: Organizational Factors\": ___ often favor refactoring",
        "a": "Business Pressure Deadlines",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"Beyond the Code: Organizational Factors\": ___ services = more ops overhead",
        "a": "Cost Multiple",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 17"
      },
      {
        "q": "Complete the slide statement from \"Beyond the Code: Organizational Factors\": ___ must handle autonomy & cross-service communication",
        "a": "Culture Teams",
        "hint": "16 - Refactor vs Rewrite.pdf, slide 17"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Objectives\" slide?",
        "options": {
          "A": "Define refactoring and rewriting",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "Refactor vs Rewrite",
        "exp": "The correct option is from 16 - Refactor vs Rewrite.pdf, slide 2.",
        "correctAnswerText": "Define refactoring and rewriting",
        "deckId": "refactor"
      },
      {
        "q": "Which point is listed on the \"What Is Refactoring?\" slide?",
        "options": {
          "A": "Refactoring = improving the internal structure of code without changing its external behavior",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "Refactor vs Rewrite",
        "exp": "The correct option is from 16 - Refactor vs Rewrite.pdf, slide 3.",
        "correctAnswerText": "Refactoring = improving the internal structure of code without changing its external behavior",
        "deckId": "refactor"
      },
      {
        "q": "Which point is listed on the \"What Is Rewriting?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "FAST CHEAP",
          "C": "Rewriting = rebuilding the system from scratch",
          "D": "Stakeholders"
        },
        "answer": "C",
        "topic": "Refactor vs Rewrite",
        "exp": "The correct option is from 16 - Refactor vs Rewrite.pdf, slide 4.",
        "correctAnswerText": "Rewriting = rebuilding the system from scratch",
        "deckId": "refactor"
      },
      {
        "q": "Which point is listed on the \"Why Software Gets Refactored\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Code smells: long methods, duplication, tangled logic",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "Refactor vs Rewrite",
        "exp": "The correct option is from 16 - Refactor vs Rewrite.pdf, slide 5.",
        "correctAnswerText": "Code smells: long methods, duplication, tangled logic",
        "deckId": "refactor"
      }
    ]
  },
  {
    "id": "defensive",
    "title": "Defensive Programming",
    "icon": "[DEF]",
    "color": "#ff8f57",
    "cards": [
      {
        "q": "What is defensive programming?",
        "a": "A mindset and set of techniques that make software behave predictably even under unexpected conditions. Goal: anticipate failures, prevent/limit damage, communicate errors clearly."
      },
      {
        "q": "What are the key principles of defensive programming?",
        "a": "Validate all inputs, avoid assumptions about data/environment/state, fail fast and clearly, use guard clauses instead of deep nesting, handle edge cases (nulls, empty arrays, limits), minimize side effects."
      },
      {
        "q": "What does \"fail fast, fail clearly\" mean?",
        "a": "When an error occurs, detect it immediately and communicate it explicitly (via exceptions, asserts) rather than silently continuing in an invalid state."
      },
      {
        "q": "What is a guard clause?",
        "a": "An early return or check at the start of a function that handles invalid/edge-case inputs immediately, avoiding deep nesting (if-else trees)."
      },
      {
        "q": "Why does defensive programming matter?",
        "a": "Prevents subtle bugs and crashes, saves debugging time, improves maintainability, reduces security vulnerabilities, makes code safer to modify or reuse."
      },
      {
        "q": "What is the core philosophy of defensive programming?",
        "a": "\"Hope for the best, code for the worst.\" Good code \"fails safe,\" not \"fails hard.\""
      },
      {
        "q": "Why is defensive programming important for user input?",
        "a": "User input can be missing, malformed, malicious, too large, or unexpected, so validating it prevents errors and vulnerabilities."
      },
      {
        "q": "What is an assertion?",
        "a": "An assertion checks that a condition expected by the programmer is true, often used to catch programmer errors during development."
      },
      {
        "q": "What is a fail-safe default?",
        "a": "A default behavior that chooses the safest option when something is unknown, invalid, or unavailable."
      },
      {
        "q": "What does handling exceptions gracefully mean?",
        "a": "It means catching expected failures, giving useful feedback, logging details, and avoiding crashes or silent corruption."
      },
      {
        "q": "Why is silently catching exceptions dangerous?",
        "a": "It hides real failures, makes debugging harder, and can leave the system in an invalid or insecure state."
      },
      {
        "q": "Why should defensive code avoid assumptions about environment?",
        "a": "Files, networks, permissions, APIs, configurations, and dependencies can fail or differ across machines and deployments."
      },
      {
        "q": "How do guard clauses improve readability?",
        "a": "They handle invalid cases early and keep the main logic less nested and easier to follow."
      },
      {
        "q": "What is an edge case?",
        "a": "An unusual or boundary input such as null, empty values, zero, maximum limits, invalid formats, or missing data."
      },
      {
        "q": "What is a common defensive programming anti-pattern?",
        "a": "Ignoring errors, catching everything silently, trusting all input, overusing global state, or returning unclear failure values."
      },
      {
        "q": "How does defensive programming connect to real-world production systems?",
        "a": "Production systems face unreliable users, networks, files, APIs, and dependencies, so defensive code helps keep failures controlled."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Introduction\" slide says: \"\"Hope for the best, code for the worst.\"\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide says: \"Part of robust software engineering practices\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide says: \"Prevents crashes, undefined behavior, and misuse\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide says: \"Complements testing, not replaces it\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"What Is Defensive Programming?\" slide says: \"A mindset and set of techniques that make software behave predictably even under unexpected conditions.\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 3."
      },
      {
        "q": "The \"What Is Defensive Programming?\" slide says: \"Goal:\".",
        "answer": true,
        "exp": "True. Source: Defensive Programming.pdf, slide 3."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Feature flags let those happen at different times\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"■ Untangle complex systems\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Keep troubleshooting guides in the repo (docs/)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Emphasize: separation of concerns, scalability, reusability\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 2."
      },
      {
        "q": "The \"What Is Defensive Programming?\" slide lists this point: \"Security: XSS prevention, sanitize inputs\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 3."
      },
      {
        "q": "The \"What Is Defensive Programming?\" slide lists this point: \"TDD drives cleaner architecture:\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Defensive Programming.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "The core philosophy: \"Hope for the best, ___ for the worst.\"",
        "a": "code",
        "hint": "Write it defensively"
      },
      {
        "q": "Defensive programming: ___ all inputs from users, APIs, and files.",
        "a": "validate",
        "hint": "Check before using"
      },
      {
        "q": "Use ___ clauses instead of deep nesting to handle edge cases early.",
        "a": "guard",
        "hint": "Early return pattern"
      },
      {
        "q": "\"Fail ___, fail clearly\" — detect errors immediately and communicate them.",
        "a": "fast",
        "hint": "Don't wait"
      },
      {
        "q": "Defensive programming reduces security ___ by catching invalid inputs.",
        "a": "vulnerabilities",
        "hint": "Security weaknesses"
      },
      {
        "q": "Why is defensive programming important for ___ input?",
        "a": "User",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an assertion? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a fail-safe default? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does handling exceptions gracefully mean? ___",
        "a": "means",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is silently catching exceptions dangerous? ___",
        "a": "real",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should defensive code avoid assumptions about environment? ___",
        "a": "APIs",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How do guard clauses improve readability? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an edge case? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a common defensive programming anti-pattern? ___",
        "a": "input",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How does defensive programming connect to real-world production systems? ___",
        "a": "face",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Introduction\" slide?",
        "options": {
          "A": "\"Hope for the best, code for the worst.\"",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "FAST CHEAP"
        },
        "answer": "A",
        "topic": "Defensive Programming",
        "exp": "The correct option is from Defensive Programming.pdf, slide 2.",
        "correctAnswerText": "\"Hope for the best, code for the worst.\"",
        "deckId": "defensive"
      },
      {
        "q": "Which point is listed on the \"What Is Defensive Programming?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "A mindset and set of techniques that make software behave predictably even under unexpected ..."
        },
        "answer": "D",
        "topic": "Defensive Programming",
        "exp": "The correct option is from Defensive Programming.pdf, slide 3.",
        "correctAnswerText": "A mindset and set of techniques that make software behave predictably even under unexpected ...",
        "deckId": "defensive"
      },
      {
        "q": "Which point is listed on the \"Why It Matters\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Prevents subtle bugs and crashes"
        },
        "answer": "D",
        "topic": "Defensive Programming",
        "exp": "The correct option is from Defensive Programming.pdf, slide 4.",
        "correctAnswerText": "Prevents subtle bugs and crashes",
        "deckId": "defensive"
      },
      {
        "q": "Which point is listed on the \"Key Principles\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Validate all inputs (from users, APIs, files, etc.)",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Defensive Programming",
        "exp": "The correct option is from Defensive Programming.pdf, slide 5.",
        "correctAnswerText": "Validate all inputs (from users, APIs, files, etc.)",
        "deckId": "defensive"
      }
    ]
  },
  {
    "id": "featureflags",
    "title": "Feature Flags",
    "icon": "[FLG]",
    "color": "#ff6bcd",
    "cards": [
      {
        "q": "What is a feature flag?",
        "a": "A switch that controls whether a feature is enabled. The code exists even when the feature is hidden or disabled. Flags can be changed by environment, user, role, tier, region, or runtime condition."
      },
      {
        "q": "What is the difference between deployment and release?",
        "a": "Deployment: code is installed in an environment. Release: users are allowed to access it. Feature flags let these happen at different times."
      },
      {
        "q": "What are the 6 common categories of feature flags?",
        "a": "Release flags, Experiment flags, Operations flags, Permission/entitlement flags, Tier/subscription flags, Kill switches."
      },
      {
        "q": "What are release flags used for?",
        "a": "To hide new functionality until it is ready. Common for UI redesigns, new workflows, new services. Allows code to be merged and deployed before public availability."
      },
      {
        "q": "What are experiment flags used for?",
        "a": "To compare multiple versions of a feature — A/B testing or controlled evaluation of layouts, flows, algorithms, or engagement strategies."
      },
      {
        "q": "What is a kill switch?",
        "a": "A flag category that allows a feature to be rapidly disabled if it causes problems in production — providing an emergency off switch."
      },
      {
        "q": "What are the common reasons to use feature flags?",
        "a": "Hide incomplete work, reduce risk during rollout, run experiments, limit features to certain users, support premium tiers, disable unstable functionality quickly."
      },
      {
        "q": "Where can feature flags live?",
        "a": "Feature flags can live in UI code, middle layers, backend services, configuration systems, databases, or feature management platforms."
      },
      {
        "q": "Why is hiding a feature in the UI not real security?",
        "a": "Users can bypass UI controls, so backend authorization must still enforce access rules."
      },
      {
        "q": "What are operations flags used for?",
        "a": "Operations flags control runtime behavior such as enabling/disabling expensive processes, scaling behavior, or emergency operational changes."
      },
      {
        "q": "What are permission or entitlement flags used for?",
        "a": "They control access based on roles, users, organizations, subscriptions, plans, quotas, or privileges."
      },
      {
        "q": "How do feature flags support SaaS tiers?",
        "a": "They enable or disable features based on pricing tier, subscription level, usage limits, or customer entitlements."
      },
      {
        "q": "What is user segmentation in feature flags?",
        "a": "User segmentation turns features on for selected groups such as beta users, regions, roles, accounts, percentages, or internal staff."
      },
      {
        "q": "How are feature flags used in games?",
        "a": "They can control seasonal events, difficulty tuning, rewards, cosmetics, experiments, live balancing, or emergency disabling of broken features."
      },
      {
        "q": "What are feature flag best practices?",
        "a": "Name flags clearly, document purpose, assign owners, test both states, monitor behavior, and remove old flags after use."
      },
      {
        "q": "What are common feature flag risks?",
        "a": "Risks include stale flags, complex conditional logic, inconsistent environments, hidden dependencies, and security mistakes."
      },
      {
        "q": "When should you not use a feature flag?",
        "a": "Avoid flags when a simple configuration, small code change, or normal release process is cleaner and the flag would add unnecessary complexity."
      }
    ],
    "truefalse": [
      {
        "q": "The \"What is a Feature Flag?\" slide says: \"A feature flag is a switch that controls whether a feature is enabled\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide says: \"The code exists even when the feature is hidden or disabled\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide says: \"Flags can be changed by environment, user, role, tier, region, or runtime condition\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide says: \"They help separate building a feature from exposing it\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"Why Use Feature Flags?\" slide says: \"Not every feature is ready for all users at the same time\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 3."
      },
      {
        "q": "The \"Why Use Feature Flags?\" slide says: \"Some features are risky, experimental, premium, or operationally sensitive\".",
        "answer": true,
        "exp": "True. Source: Feature Flags.pdf, slide 3."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide lists this point: \"Not code copy-paste, but generalizable templates\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide lists this point: \"Learning curve for teams\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide lists this point: \"Mercurial, Distributed, Declining\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"What is a Feature Flag?\" slide lists this point: \"Sprint/Release\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 2."
      },
      {
        "q": "The \"Why Use Feature Flags?\" slide lists this point: \"Socket Programming : 1980s onward\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 3."
      },
      {
        "q": "The \"Why Use Feature Flags?\" slide lists this point: \"Cost Fragile code, hidden bugs, high maintenance cost\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Feature Flags.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "A feature flag is a ___ that controls whether a feature is enabled.",
        "a": "switch",
        "hint": "On/off toggle"
      },
      {
        "q": "Deployment means code is installed; ___ means users can access it.",
        "a": "Release",
        "hint": "Two separate events"
      },
      {
        "q": "Experiment flags are used for ___ testing (comparing two versions).",
        "a": "A/B",
        "hint": "A vs B"
      },
      {
        "q": "A ___ switch is a flag that rapidly disables a problematic feature.",
        "a": "kill",
        "hint": "Emergency off"
      },
      {
        "q": "___ flags hide new functionality until it is ready for users.",
        "a": "Release",
        "hint": "Not yet public"
      },
      {
        "q": "Where can feature flags ___?",
        "a": "live",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is hiding a feature in the UI not real security? ___",
        "a": "must",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are operations flags used for? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are permission or entitlement flags used for? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How do feature flags support SaaS tiers? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___ segmentation in feature flags?",
        "a": "User",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How are feature flags used in games? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are feature flag best practices? ___",
        "a": "Name",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are common feature flag ___?",
        "a": "Risks",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ should you not use a feature flag?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"What is a Feature Flag?\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "FAST CHEAP",
          "D": "A feature flag is a switch that controls whether a feature is enabled"
        },
        "answer": "D",
        "topic": "Feature Flags",
        "exp": "The correct option is from Feature Flags.pdf, slide 2.",
        "correctAnswerText": "A feature flag is a switch that controls whether a feature is enabled",
        "deckId": "featureflags"
      },
      {
        "q": "Which point is listed on the \"Why Use Feature Flags?\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Not every feature is ready for all users at the same time",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Feature Flags",
        "exp": "The correct option is from Feature Flags.pdf, slide 3.",
        "correctAnswerText": "Not every feature is ready for all users at the same time",
        "deckId": "featureflags"
      },
      {
        "q": "Which point is listed on the \"The Basic Concept\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Stakeholders",
          "C": "Without flags, a deployed feature may become immediately visible to everyone",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Feature Flags",
        "exp": "The correct option is from Feature Flags.pdf, slide 4.",
        "correctAnswerText": "Without flags, a deployed feature may become immediately visible to everyone",
        "deckId": "featureflags"
      },
      {
        "q": "Which point is listed on the \"Deployment vs Release\" slide?",
        "options": {
          "A": "Identify:",
          "B": "Stakeholders",
          "C": "Deployment means code is installed in an environment",
          "D": "FAST CHEAP"
        },
        "answer": "C",
        "topic": "Feature Flags",
        "exp": "The correct option is from Feature Flags.pdf, slide 5.",
        "correctAnswerText": "Deployment means code is installed in an environment",
        "deckId": "featureflags"
      }
    ]
  },
  {
    "id": "mvp",
    "title": "MVP Evaluation & Code Freeze",
    "icon": "[MVP]",
    "color": "#aaff57",
    "cards": [
      {
        "q": "What does MVP stand for and what does it really mean?",
        "a": "Minimum Viable Product. Minimum = only essential functionality. Viable = reliable, stable, demonstrable. Product = can be handed off, shown, or used. NOT a prototype."
      },
      {
        "q": "What is the \"Late-Stage Trap\" near the end of a project?",
        "a": "Common behaviors: adding \"just one more feature,\" neglecting documentation/polish, ignoring testing debt, over-optimizing things users will never see."
      },
      {
        "q": "What is a Code Freeze?",
        "a": "A period when no new features are added — only fixes, tests, or documentation updates are allowed."
      },
      {
        "q": "What are the 3 questions to ask when deciding what to cut or postpone?",
        "a": "1) Does this directly improve the user's core experience?\n2) Can we test it in time?\n3) Does it risk breaking something stable?\nIf no → move to \"Future Enhancements.\""
      },
      {
        "q": "What are the priorities for the Final Sprint?",
        "a": "All intended features working, all problematic features addressed (fixed/modified/workaround/removed), comprehensive regression testing, prepare demo platform, all team members familiar with all layers."
      },
      {
        "q": "Why is \"Cutting is not quitting\"?",
        "a": "Cutting features during code freeze is about focusing — delivering a smaller but working product beats a large unfinished one."
      },
      {
        "q": "What is the late-stage trap?",
        "a": "The late-stage trap is when teams add last-minute features, neglect testing, ignore documentation, and risk destabilizing the product before delivery."
      },
      {
        "q": "How should a team re-evaluate an MVP near the deadline?",
        "a": "The team should confirm which features are essential, usable, testable, stable, and directly tied to the core user experience."
      },
      {
        "q": "What should be moved to future enhancements?",
        "a": "Features that are nice-to-have, risky, untested, nonessential, or likely to break stable functionality should be postponed."
      },
      {
        "q": "What should happen during the final sprint?",
        "a": "The team should stabilize features, fix known issues, run regression tests, prepare the demo, polish UI, and ensure everyone understands the system."
      },
      {
        "q": "Why does code freeze matter?",
        "a": "Code freeze protects stability by stopping new features and focusing the team on fixes, tests, documentation, and release readiness."
      },
      {
        "q": "What belongs on a final polish checklist?",
        "a": "UI cleanup, error handling, documentation, demo flow, test coverage, known bug review, consistent data, and deployment readiness."
      },
      {
        "q": "What is the “WOW factor” in a final project?",
        "a": "A polished or impressive detail that improves the demo without risking the core functionality."
      },
      {
        "q": "Why should the WOW factor be handled carefully?",
        "a": "It should enhance the product only after the MVP is stable, not distract the team or break essential features."
      },
      {
        "q": "What is the best mindset near code freeze?",
        "a": "Prioritize working, tested, demonstrable software over adding more features."
      },
      {
        "q": "Why is a smaller working product better than a larger unfinished one?",
        "a": "A stable product demonstrates value and reliability, while an unfinished product creates risk and may fail during evaluation."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Re-Evaluating the MVP & Preparing for Code Freeze\" slide says: \"Goal: Deliver a working product matters more than delivering everything (partially working)\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 2."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide says: \"Common team behaviors near the end:\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide says: \"Adding \"just one more feature\" ... HOWEVER\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide says: \"Neglecting documentation or polish\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide says: \"Ignoring testing debt. What hasn't been tested completely or enough?\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide says: \"Over-optimizing things users will never see\".",
        "answer": true,
        "exp": "True. Source: MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"Re-Evaluating the MVP & Preparing for Code Freeze\" slide lists this point: \"Mocking & Stubbing\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 2."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide lists this point: \"Tech debt always worsens if not actively managed\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide lists this point: \"Benefits Recap\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide lists this point: \"Systems are decades old, mission-critical, can't be replaced wholesale\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide lists this point: \"Small business or freelance projects\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 3."
      },
      {
        "q": "The \"The Late-Stage Trap\" slide lists this point: \"Easier debugging and integration - they can trace an issue end-to-end\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against MVP Evaluation, Code Freeze.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "MVP stands for Minimum ___ Product.",
        "a": "Viable",
        "hint": "It must work"
      },
      {
        "q": "A Code ___ means no new features — only fixes and documentation.",
        "a": "Freeze",
        "hint": "Stop adding"
      },
      {
        "q": "The three questions to cut features: Does it improve user experience? Can we test it? Does it risk ___ something stable?",
        "a": "breaking",
        "hint": "Damaging"
      },
      {
        "q": "A smaller ___ product beats a large unfinished one.",
        "a": "working",
        "hint": "Functional"
      },
      {
        "q": "\"___ is not quitting\" — it means focusing on what matters.",
        "a": "Cutting",
        "hint": "Removing features"
      },
      {
        "q": "What is the late-stage ___?",
        "a": "trap",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How should a ___ re-evaluate an MVP near the deadline?",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What should be moved to future enhancements? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What should happen during the final sprint? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why does ___ freeze matter?",
        "a": "Code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What belongs on a final polish checklist? ___",
        "a": "demo",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the “WOW factor” in a final project? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should the WOW factor be handled carefully? ___",
        "a": "only",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the best mindset near code freeze? ___",
        "a": "over",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is a smaller working product better than a larger unfinished one? ___",
        "a": "risk",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Re-Evaluating the MVP & Preparing for Code Freeze\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Goal: Deliver a working product matters more than delivering everything (partially working)"
        },
        "answer": "D",
        "topic": "MVP Evaluation & Code Freeze",
        "exp": "The correct option is from MVP Evaluation, Code Freeze.pdf, slide 2.",
        "correctAnswerText": "Goal: Deliver a working product matters more than delivering everything (partially working)",
        "deckId": "mvp"
      },
      {
        "q": "Which point is listed on the \"The Late-Stage Trap\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Identify:",
          "D": "Common team behaviors near the end:"
        },
        "answer": "D",
        "topic": "MVP Evaluation & Code Freeze",
        "exp": "The correct option is from MVP Evaluation, Code Freeze.pdf, slide 3.",
        "correctAnswerText": "Common team behaviors near the end:",
        "deckId": "mvp"
      },
      {
        "q": "Which point is listed on the \"What MVP Really Means (Now)\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Minimum Viable Product ≠ Prototype",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "MVP Evaluation & Code Freeze",
        "exp": "The correct option is from MVP Evaluation, Code Freeze.pdf, slide 4.",
        "correctAnswerText": "Minimum Viable Product ≠ Prototype",
        "deckId": "mvp"
      },
      {
        "q": "Which point is listed on the \"How to Re-Evaluate Your MVP\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "Focus your final sprint on:"
        },
        "answer": "D",
        "topic": "MVP Evaluation & Code Freeze",
        "exp": "The correct option is from MVP Evaluation, Code Freeze.pdf, slide 5.",
        "correctAnswerText": "Focus your final sprint on:",
        "deckId": "mvp"
      }
    ]
  },
  {
    "id": "troubleshooting",
    "title": "Troubleshooting Methods",
    "icon": "[TRB]",
    "color": "#ffa0ff",
    "cards": [
      {
        "q": "What percentage of engineering time is spent diagnosing issues according to the slides?",
        "a": "70–80% of engineering time is spent diagnosing, not coding."
      },
      {
        "q": "What is the Troubleshooting Mindset?",
        "a": "Be curious (not defensive), assume unknowns (not incompetence), verify assumptions with data (not anecdotes), treat symptoms as clues (not conclusions), keep notes."
      },
      {
        "q": "What are the 5 categories of software problems?",
        "a": "Code logic bugs, Integration issues, Configuration/Environment issues, Performance issues, Process/Team issues."
      },
      {
        "q": "What tools are used for integration issues?",
        "a": "Postman, Swagger, and mocks — to test API mismatches and version drift."
      },
      {
        "q": "What tools are used for performance issues?",
        "a": "Profilers and traces — to identify slow queries and memory leaks."
      },
      {
        "q": "What is Root Cause Analysis (RCA)?",
        "a": "A systematic method for identifying the underlying cause of a problem, not just the symptom. Used for both technical failures and human/process errors."
      },
      {
        "q": "What is the quote that opens the troubleshooting lecture?",
        "a": "\"Think of a bug as a story — your job is to trace its plot.\""
      },
      {
        "q": "What is the first step in systematic debugging?",
        "a": "Reproduce the issue reliably so the team can observe, test, and verify whether a fix works."
      },
      {
        "q": "What should happen after reproducing a bug?",
        "a": "The team should isolate the problem, gather evidence, form hypotheses, test one change at a time, and document the result."
      },
      {
        "q": "What are tools of the trade for troubleshooting?",
        "a": "Logs, debuggers, profilers, traces, monitoring dashboards, network tools, test suites, Postman, Swagger, and version history."
      },
      {
        "q": "What is a debugging anti-pattern?",
        "a": "Changing several things at once, guessing without data, ignoring logs, blaming people, or declaring a fix without reproducing the issue."
      },
      {
        "q": "What is the 5 Whys method?",
        "a": "A root cause analysis technique where the team repeatedly asks “why?” until it reaches the underlying cause."
      },
      {
        "q": "What is a Fishbone/Ishikawa diagram used for?",
        "a": "It visually organizes possible causes of a problem into categories so teams can reason about root causes systematically."
      },
      {
        "q": "Why should RCA focus on facts, not blame?",
        "a": "Blame discourages honesty; facts help the team fix systems, processes, and technical causes that allowed the issue."
      },
      {
        "q": "Why is communication important under pressure?",
        "a": "Clear communication reduces confusion, coordinates work, prevents duplicate effort, and keeps stakeholders informed during incidents."
      },
      {
        "q": "How does documentation prevent future problems?",
        "a": "Documentation preserves decisions, fixes, runbooks, known issues, and lessons learned so teams do not repeat the same mistakes."
      },
      {
        "q": "What does “symptoms are clues, not conclusions” mean?",
        "a": "Visible failures point toward a problem, but the real cause may be deeper in code, configuration, process, or infrastructure."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Introduction\" slide says: \"\"Think of a bug as a story - your job is to trace its plot.\"\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide says: \"Identify categories of software and process failures\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide says: \"Apply systematic debugging and diagnostic methods\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide says: \"Use logs, tests, and tools to reproduce and isolate issues\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide says: \"Conduct root-cause analysis (RCA) on technical and human errors\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide says: \"Develop team-based triage and escalation workflows\".",
        "answer": true,
        "exp": "True. Source: Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Introduction\" slide lists this point: \"Aspect Single-threaded Multi-threaded\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 2."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Industry demand for lifecycle management skills\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Flexible but can hide expensive queries\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"When the flag would create more confusion than value\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Massive \"God classes\" that do everything\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 3."
      },
      {
        "q": "The \"Objectives\" slide lists this point: \"Hybrid (JIT/AOT): Compiles some code at runtime for speed\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Troubleshooting Methods.pdf, slide 3."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Objectives\": Conduct root-cause analysis (___) on technical and human errors",
        "a": "RCA",
        "hint": "Troubleshooting Methods.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Types of Problems\": Integration issue ___ mismatch, Postman, Swagger, mocks version drift",
        "a": "API",
        "hint": "Troubleshooting Methods.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Types of Problems\": ___ queries, Profilers, traces memory leaks",
        "a": "Performance Slow",
        "hint": "Troubleshooting Methods.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Troubleshooting Mindset\": ___ - every fix is potential documentation",
        "a": "Keep notes",
        "hint": "Troubleshooting Methods.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"Tools of the Trade\": Logs: timestamped, structured (___ preferred)",
        "a": "JSON",
        "hint": "Troubleshooting Methods.pdf, slide 8"
      },
      {
        "q": "Complete the slide statement from \"Root Cause Analysis (RCA) - Traits of a Good 5 Whys Session\": ___ - 4 people directly involved)",
        "a": "Keep the group small (2",
        "hint": "Troubleshooting Methods.pdf, slide 12"
      },
      {
        "q": "Complete the slide statement from \"RCA - Fishbone / Ishikawa Diagram - 6 M's or 6 P's\": Man/Mind (People), Method (Process), Machines (Program), Materials (Product), Measurements (Policy), ___",
        "a": "Mother Nature",
        "hint": "Troubleshooting Methods.pdf, slide 13"
      },
      {
        "q": "Complete the slide statement from \"Team-Based Troubleshooting\": ___ - no blame culture",
        "a": "Reward transparency",
        "hint": "Troubleshooting Methods.pdf, slide 15"
      },
      {
        "q": "Complete the slide statement from \"Example 6 - \"The API That Ghosted Us\"\": 502 ___ from external endpoint",
        "a": "Bad Gateway",
        "hint": "Troubleshooting Methods.pdf, slide 24"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Introduction\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "\"Think of a bug as a story - your job is to trace its plot.\""
        },
        "answer": "D",
        "topic": "Troubleshooting Methods",
        "exp": "The correct option is from Troubleshooting Methods.pdf, slide 2.",
        "correctAnswerText": "\"Think of a bug as a story - your job is to trace its plot.\"",
        "deckId": "troubleshooting"
      },
      {
        "q": "Which point is listed on the \"Objectives\" slide?",
        "options": {
          "A": "FAST CHEAP",
          "B": "Identify categories of software and process failures",
          "C": "Identify:",
          "D": "Stakeholders"
        },
        "answer": "B",
        "topic": "Troubleshooting Methods",
        "exp": "The correct option is from Troubleshooting Methods.pdf, slide 3.",
        "correctAnswerText": "Identify categories of software and process failures",
        "deckId": "troubleshooting"
      },
      {
        "q": "Which point is listed on the \"Why Troubleshooting Matters\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "70-80% of engineering time is spent diagnosing, not coding",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Troubleshooting Methods",
        "exp": "The correct option is from Troubleshooting Methods.pdf, slide 4.",
        "correctAnswerText": "70-80% of engineering time is spent diagnosing, not coding",
        "deckId": "troubleshooting"
      },
      {
        "q": "Which point is listed on the \"Types of Problems\" slide?",
        "options": {
          "A": "Category Example Primary Tools",
          "B": "FAST CHEAP",
          "C": "Stakeholders",
          "D": "Identify:"
        },
        "answer": "A",
        "topic": "Troubleshooting Methods",
        "exp": "The correct option is from Troubleshooting Methods.pdf, slide 5.",
        "correctAnswerText": "Category Example Primary Tools",
        "deckId": "troubleshooting"
      }
    ]
  },
  {
    "id": "versioning",
    "title": "Versioning",
    "icon": "[VER]",
    "color": "#57d9ff",
    "cards": [
      {
        "q": "What is Semantic Versioning (SemVer) and what is its format?",
        "a": "A versioning standard with format MAJOR.MINOR.PATCH (e.g., v2.4.6). MAJOR = breaking changes, MINOR = new compatible features, PATCH = bug fixes."
      },
      {
        "q": "What does each SemVer component mean?",
        "a": "MAJOR: breaking changes (users must update code). MINOR: new features, still backward-compatible. PATCH: bug fixes, no behavior change."
      },
      {
        "q": "What are SemVer pre-release suffixes?",
        "a": "-alpha, -beta, -rc.1 (release candidate). E.g., v2.0.0-beta.1 signals an unreleased, pre-production version."
      },
      {
        "q": "What are the four common versioning approaches?",
        "a": "Sequential (1, 2, 3), Date-based (2025.11.11), Build-based (1.0.1342), Semantic/SemVer (1.2.3)."
      },
      {
        "q": "Why does versioning exist?",
        "a": "Every release should be traceable and reproducible. Teams, testers, and users need to know what changed. Version numbers connect code → commits → releases → issues."
      },
      {
        "q": "How does SemVer help with npm package management?",
        "a": "^ notation (e.g., ^1.2.0) allows auto-updates for safe PATCH and MINOR versions while blocking MAJOR breaking changes."
      },
      {
        "q": "Which organizations typically use date-based versioning?",
        "a": "Ubuntu and JetBrains — great for frequent releases where the date conveys freshness."
      },
      {
        "q": "Why does every release need to be traceable?",
        "a": "Traceability lets teams connect releases to commits, issues, bugs, fixes, documentation, and customer reports."
      },
      {
        "q": "What is sequential versioning?",
        "a": "A simple versioning approach that uses increasing numbers such as 1, 2, 3 for releases."
      },
      {
        "q": "What is build-based versioning?",
        "a": "A versioning approach that includes build numbers, such as 1.0.1342, to identify specific generated builds."
      },
      {
        "q": "Why do APIs need versioning?",
        "a": "API versioning keeps existing clients stable while allowing the server to introduce breaking changes or new behavior."
      },
      {
        "q": "What is URL-path API versioning?",
        "a": "Putting the version in the path, such as /api/v1/users or /api/v2/users."
      },
      {
        "q": "What is header-based API versioning?",
        "a": "Clients send the desired API version in a request header instead of putting it in the URL path."
      },
      {
        "q": "What is a GitHub release?",
        "a": "A GitHub release packages a versioned snapshot of code with tags, release notes, assets, and change information."
      },
      {
        "q": "What is a version tag in Git?",
        "a": "A tag marks a specific commit as an important version or release point, such as v1.2.0."
      },
      {
        "q": "How can GitHub labels support version readiness?",
        "a": "Labels can track issues or pull requests by status, release target, severity, priority, or readiness for a version."
      },
      {
        "q": "What is the final takeaway of versioning?",
        "a": "Versioning is not just numbering; it is communication, traceability, stability, and coordination across code, releases, users, and teams."
      }
    ],
    "truefalse": [
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"Every release should be traceable and reproducible\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"Teams, testers, and users need to know what changed and when\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"Version numbers connect code -> commits ->\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"releases -> issues\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"Without versioning, you can't meaningfully say\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide says: \"\"this bug was fixed in 1.2.3.\"\".",
        "answer": true,
        "exp": "True. Source: Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Note: duplicated models across FE and API are acceptable -> but avoid duplicated business logic\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Scrum - management & collaboration framework\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Typical org Startups, new product teams Enterprises, mature industries\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Confirm fixes with peer review before deploy\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Clearly defined phases\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      },
      {
        "q": "The \"Why Versioning Exists - Why Bother?\" slide lists this point: \"Data format converters (CSV, JSON, XML)\".",
        "answer": false,
        "exp": "False. The point is not on that slide; source checked against Versioning.pdf, slide 2."
      }
    ],
    "fillinblank": [
      {
        "q": "Complete the slide statement from \"Common Versioning Approaches\": Date-based 2025.11.11 Ubuntu, ___ for frequent releases",
        "a": "JetBrains Great",
        "hint": "Versioning.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Common Versioning Approaches\": Build-based 1.0.1342 ___ systems Machine-friendly",
        "a": "CI/CD",
        "hint": "Versioning.pdf, slide 3"
      },
      {
        "q": "Complete the slide statement from \"Semantic Versioning (SemVer) - read more\": ___: \"A shared language for change\"",
        "a": "Semantic Versioning",
        "hint": "Versioning.pdf, slide 4"
      },
      {
        "q": "Complete the slide statement from \"Applying SemVer in Real Projects\": Versioned ___ allows for backward compatibility while encouraging upgrades",
        "a": "API",
        "hint": "Versioning.pdf, slide 5"
      },
      {
        "q": "Complete the slide statement from \"Versioning APIs - Keeping Clients Stable\": ___ - clients know what to expect from each version",
        "a": "Builds trust",
        "hint": "Versioning.pdf, slide 6"
      },
      {
        "q": "Complete the slide statement from \"Versioning APIs - Common Versioning Approaches\": ___ path /api/v1/users Simple, visible Requires URL updates",
        "a": "URL",
        "hint": "Versioning.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Versioning APIs - Common Versioning Approaches\": ___: application/ Clean URLs Harder to debug manually vnd.myapp.v2+json",
        "a": "Header-based Accept",
        "hint": "Versioning.pdf, slide 7"
      },
      {
        "q": "Complete the slide statement from \"Versioning APIs - Sample Flow - Your Project, for example\": Document version notes in ___ description",
        "a": "README or Swagger",
        "hint": "Versioning.pdf, slide 9"
      },
      {
        "q": "Complete the slide statement from \"GitHub Releases and Version Tags\": Close milestone -> Tag commit -> ___",
        "a": "Create GitHub",
        "hint": "Versioning.pdf, slide 10"
      },
      {
        "q": "Complete the slide statement from \"GitHub Labels and Version Readiness\": ___ label patterns that align with versioning:",
        "a": "Common GitHub",
        "hint": "Versioning.pdf, slide 11"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which point is listed on the \"Why Versioning Exists - Why Bother?\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Every release should be traceable and reproducible",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Versioning",
        "exp": "The correct option is from Versioning.pdf, slide 2.",
        "correctAnswerText": "Every release should be traceable and reproducible",
        "deckId": "versioning"
      },
      {
        "q": "Which point is listed on the \"Common Versioning Approaches\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "FAST CHEAP",
          "C": "Type Example Used by Notes",
          "D": "Identify:"
        },
        "answer": "C",
        "topic": "Versioning",
        "exp": "The correct option is from Versioning.pdf, slide 3.",
        "correctAnswerText": "Type Example Used by Notes",
        "deckId": "versioning"
      },
      {
        "q": "Which point is listed on the \"Semantic Versioning (SemVer) - read more\" slide?",
        "options": {
          "A": "Semantic Versioning: \"A shared language for change\"",
          "B": "Identify:",
          "C": "Stakeholders",
          "D": "FAST CHEAP"
        },
        "answer": "A",
        "topic": "Versioning",
        "exp": "The correct option is from Versioning.pdf, slide 4.",
        "correctAnswerText": "Semantic Versioning: \"A shared language for change\"",
        "deckId": "versioning"
      },
      {
        "q": "Which point is listed on the \"Applying SemVer in Real Projects\" slide?",
        "options": {
          "A": "Stakeholders",
          "B": "Identify:",
          "C": "FAST CHEAP",
          "D": "Tells others what kind of changes to expect"
        },
        "answer": "D",
        "topic": "Versioning",
        "exp": "The correct option is from Versioning.pdf, slide 5.",
        "correctAnswerText": "Tells others what kind of changes to expect",
        "deckId": "versioning"
      }
    ]
  }
];
