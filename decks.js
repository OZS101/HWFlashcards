/* ══════════════════════════════════════════════════════════════
   DECK DATA — All 21 CMPS 3350 Lecture Modules
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
        "q": "The classic trilemma states you can have Good, Fast, AND Cheap all at once.",
        "answer": false,
        "exp": "You can only pick two — Good+Fast is expensive, Good+Cheap is slow, Fast+Cheap is lower quality."
      },
      {
        "q": "Shadowing and observation are valid requirements elicitation techniques.",
        "answer": true,
        "exp": "Shadowing (watching users in their natural environment) is a key elicitation method."
      },
      {
        "q": "Non-functional requirements include things like Search and Authentication.",
        "answer": false,
        "exp": "Search and Authentication are functional requirements. NFRs are quality attributes like Performance and Security."
      },
      {
        "q": "Vertical slicing means implementing one layer (e.g., UI only) at a time.",
        "answer": false,
        "exp": "Vertical slicing means delivering a fully functional feature end-to-end. Horizontal slicing is layer-based."
      },
      {
        "q": "Feature/Scope Creep is a common requirements gathering challenge.",
        "answer": true,
        "exp": "Scope creep — uncontrolled growth of requirements — is one of the most common project challenges."
      },
      {
        "q": "What should the requirements gathering process identify before development begins : Stakeholders, audience/users, deliverables, timeline/roadmap, and resources such as people and tools.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Behavior-Driven Development (BDD) story writing used for : BDD describes expected behavior through concrete scenarios, often using Given/When/Then language so requirements are testable and understa...",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the purpose of acceptance criteria in a user story : Acceptance criteria define the conditions that must be met before a story is considered complete and acceptable.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "story points used for in Agile requirements planning : Story points estimate the relative effort, complexity, and uncertainty of a user story rather than exact hours.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a Definition of Ready (DoR) : A checklist that confirms a user story is clear, understood, sized, and prepared before the team begins implementation.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a Definition of Done (DoD) : A shared checklist that defines when a story is fully complete, including code, tests, review, documentation, and acceptance criteria.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a technical story : A development task focused on technical work such as infrastructure, refactoring, tooling, setup, or architecture rather than a direct user-facing feature.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "sample tasks added under a user story : Tasks break a story into concrete implementation steps so developers can plan and track the work more clearly.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "“ready to implement” mean for a user story : The story has enough detail, acceptance criteria, dependencies, and priority clarity for developers to begin work safely.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What usually happens across the life cycle of a user story : A story moves from idea/backlog to refinement, ready, in progress, review/testing, done, and possibly release.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "The classic software trilemma consists of Good, Fast, and ___.",
        "a": "Cheap",
        "hint": "Think budget"
      },
      {
        "q": "As a [user persona], I want [describe need] so that ___.",
        "a": "[describe benefit]",
        "hint": "Why the user wants it"
      },
      {
        "q": "A large requirement broken into smaller user stories is called an ___.",
        "a": "Epic",
        "hint": "Think large-scale story"
      },
      {
        "q": "___ requirements include performance, security, and compliance.",
        "a": "Non-Functional",
        "hint": "Not about behavior, about quality"
      },
      {
        "q": "Two types of project slicing are Vertical and ___.",
        "a": "Horizontal",
        "hint": "The other axis"
      },
      {
        "q": "What should the requirements gathering process identify before development begins? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is Behavior-Driven Development (BDD) story writing used for? ___",
        "a": "often",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the purpose of acceptance criteria in a user story? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are story points used for in Agile requirements planning? ___",
        "a": "user",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a Definition of Ready (DoR)? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a Definition of Done (DoD)? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a technical story? ___",
        "a": "task",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why are sample tasks added under a user story? ___",
        "a": "into",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does “ready to implement” mean for a user story? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What usually happens across the life cycle of a user story? ___",
        "a": "from",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which is a NON-functional requirement?",
        "options": {
          "A": "Users can reset their password",
          "B": "The cart shows the running total",
          "C": "The system must respond within 200 ms under normal load",
          "D": "Admins can disable user accounts"
        },
        "answer": "C",
        "topic": "Requirements Engineering",
        "exp": "Performance/latency is a non-functional requirement (a quality). The others describe behaviors (functional).",
        "correctAnswerText": "The system must respond within 200 ms under normal load"
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
        "q": "Agile prioritizes rigid planning over responding to change.",
        "answer": false,
        "exp": "Agile values \"Responding to change over following a plan\" — flexibility is core."
      },
      {
        "q": "Scrum was formalized in 1995 by Sutherland and Schwaber.",
        "answer": true,
        "exp": "Correct. Though Scrum inspiration came from a 1986 Takeuchi/Nonaka paper."
      },
      {
        "q": "The Agile Manifesto was published in 2001.",
        "answer": true,
        "exp": "Correct. It formally unified various lightweight methodologies."
      },
      {
        "q": "Agile values processes and tools over individuals and interactions.",
        "answer": false,
        "exp": "The Manifesto states the opposite: \"Individuals and interactions over processes and tools.\""
      },
      {
        "q": "Kanban originated in the 1940s at Toyota.",
        "answer": true,
        "exp": "Correct. Kanban grew from Toyota's Lean manufacturing roots in the 1940s."
      },
      {
        "q": "the Agile mindset : The Agile mindset values adaptability, collaboration, feedback, continuous improvement, and delivering working software in small increments.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Scrum differ from traditional Waterfall planning : Scrum uses short iterative sprints with frequent feedback, while Waterfall moves through fixed sequential phases with heavy upfront planning.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Lean’s main goal in Agile thinking : Lean focuses on removing waste, improving flow, and delivering customer value efficiently.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Extreme Programming (XP) known for emphasizing : XP emphasizes engineering practices such as TDD, pair programming, continuous integration, refactoring, and frequent releases.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the Scrum framework built around : Scrum is built around roles, events, artifacts, and short sprint cycles that produce increments of working software.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the purpose of the Daily Standup : The Daily Standup helps the team synchronize work, identify blockers, and plan progress for the next day.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the Scrum Master’s main responsibility : The Scrum Master coaches the team, facilitates Scrum events, removes impediments, and helps protect the Agile process.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the difference between a Sprint Review and a Sprint Retrospective : The Sprint Review inspects the product increment; the Retrospective inspects the team’s process and how to improve it.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a sprint : A sprint is a fixed-length iteration where the Scrum team builds, tests, and delivers a usable increment of work.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an MVP not supposed to be : An MVP is not a throwaway prototype, a broken demo, or a complete final product with every planned feature.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Agile is ___ and incremental approach to project management.",
        "a": "iterative",
        "hint": "Repeating cycles"
      },
      {
        "q": "The Agile Manifesto was published in ___.",
        "a": "2001",
        "hint": "Early 2000s"
      },
      {
        "q": "Scrum was formalized by Sutherland and ___.",
        "a": "Schwaber",
        "hint": "Ken ___"
      },
      {
        "q": "Agile values customer ___ over contracts.",
        "a": "collaboration",
        "hint": "Working together"
      },
      {
        "q": "Kanban originated at ___ with Lean roots in the 1940s.",
        "a": "Toyota",
        "hint": "Japanese car company"
      },
      {
        "q": "What is the ___ mindset?",
        "a": "Agile",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How does Scrum differ from traditional Waterfall planning? ___",
        "a": "uses",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___’s main goal in Agile thinking?",
        "a": "Lean",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is Extreme Programming (XP) known for emphasizing? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the Scrum framework built around? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the purpose of the Daily Standup? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the Scrum Master’s main responsibility? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the difference between a ___ Review and a Sprint Retrospective?",
        "a": "Sprint",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a sprint? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an MVP not supposed to be? ___",
        "a": "demo",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which is NOT one of the four values of the Agile Manifesto?",
        "options": {
          "A": "Individuals and interactions over processes and tools",
          "B": "Working software over comprehensive documentation",
          "C": "Following a detailed plan over responding to change",
          "D": "Customer collaboration over contract negotiation"
        },
        "answer": "C",
        "topic": "Agile",
        "exp": "Agile VALUES responding to change OVER following a plan — the reverse of the option shown.",
        "correctAnswerText": "Following a detailed plan over responding to change"
      },
      {
        "q": "Which Scrum event focuses on the PROCESS rather than the product?",
        "options": {
          "A": "Sprint Planning",
          "B": "Daily Standup",
          "C": "Sprint Review",
          "D": "Sprint Retrospective"
        },
        "answer": "D",
        "topic": "Agile/Scrum",
        "exp": "Retrospectives discuss the process — what to keep, change, improve. Reviews discuss the product itself.",
        "correctAnswerText": "Sprint Retrospective"
      },
      {
        "q": "Which is a TYPICAL responsibility of a Scrum Master?",
        "options": {
          "A": "Write all the unit tests",
          "B": "Coach the team, facilitate events, remove impediments, advocate Agile",
          "C": "Write the product backlog",
          "D": "Approve customer purchases"
        },
        "answer": "B",
        "topic": "Scrum",
        "exp": "Scrum Master is a servant-leader: coach, facilitator, protector. The Product Owner manages the backlog.",
        "correctAnswerText": "Coach the team, facilitate events, remove impediments, advocate Agile"
      },
      {
        "q": "Which is TRUE about an MVP?",
        "options": {
          "A": "It is the final, polished product",
          "B": "It is the same as a prototype",
          "C": "It is usable and demonstrable, delivering enough value to test key assumptions",
          "D": "It must include every planned feature"
        },
        "answer": "C",
        "topic": "Agile / MVP",
        "exp": "MVP is minimum, viable (works), product (can be used or handed off). It is NOT a prototype or the final product.",
        "correctAnswerText": "It is usable and demonstrable, delivering enough value to test key assumptions"
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
        "q": "Git is a centralized version control system.",
        "answer": false,
        "exp": "Git is distributed — every user has a full clone of the repository including full history."
      },
      {
        "q": "In a centralized VCS, you can commit code without network access.",
        "answer": false,
        "exp": "Centralized VCS requires network for most actions including commits."
      },
      {
        "q": "Distributed VCS allows fully offline operations including commit, branch, and log.",
        "answer": true,
        "exp": "Correct — distributed systems like Git store the full repo locally."
      },
      {
        "q": "GitHub is a version control system.",
        "answer": false,
        "exp": "GitHub is a cloud platform for hosting Git repositories, not a VCS itself. Git is the VCS."
      },
      {
        "q": "In Git, branching is fast and inexpensive compared to SVN.",
        "answer": true,
        "exp": "Correct — Git branches are lightweight pointers, making branching nearly instant."
      },
      {
        "q": "a feature branch used for in Git workflow : A feature branch isolates work on a specific feature or fix so it can be developed and tested without disrupting shared branches.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the purpose of committing changes to a feature branch : Commits save logical checkpoints of work and create a traceable history before merging into shared branches.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "teams merge feature branches into a local dev branch first : It lets developers integrate and test changes locally before pushing them to the remote shared development branch.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the purpose of pushing a dev branch to the remote repository : Pushing shares integrated code with the team and updates the central remote copy used for collaboration and CI/testing.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should developers pull changes from other team members regularly : Regular pulls reduce merge conflicts, keep local work current, and reveal integration problems earlier.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a forward merge : A forward merge brings newer changes from a shared branch into a feature branch so the feature stays current before final merge.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a pull request (PR) : A pull request proposes merging code from one branch into another and allows review, discussion, testing, and approval.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why might a release branch be used during a sprint : A release branch stabilizes code for QA and release while new development can continue separately.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What should happen if QA finds bugs on a release branch : The team fixes the issues, retests, and only releases once testing confirms the fixes are complete.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why clean up branches after a release : Cleaning old branches reduces confusion, keeps the repository organized, and prevents stale work from being reused by mistake.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "SCM stands for Source Control ___.",
        "a": "Management",
        "hint": "How you handle versions"
      },
      {
        "q": "Git is a ___ version control system (not centralized).",
        "a": "distributed",
        "hint": "Everyone has a copy"
      },
      {
        "q": "GitHub, GitLab, and ___ are modern cloud SCM platforms.",
        "a": "Bitbucket",
        "hint": "Atlassian's platform"
      },
      {
        "q": "In centralized VCS, commits go directly to the ___ repository.",
        "a": "central",
        "hint": "The one master copy"
      },
      {
        "q": "SCCS, RCS, CVS, and SVN are all examples of ___ VCS.",
        "a": "centralized",
        "hint": "Single server"
      },
      {
        "q": "What is a feature branch used for in Git ___flow?",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the purpose of committing changes to a feature branch? ___",
        "a": "save",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why do teams merge feature branches into a local dev branch first? ___",
        "a": "lets",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the purpose of pushing a dev branch to the remote repository? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should developers pull changes from other team members regularly? ___",
        "a": "keep",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a forward merge? ___",
        "a": "from",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a ___ request (PR)?",
        "a": "pull",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why might a release branch be used during a sprint? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What should happen if QA finds bugs on a release branch? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why clean up branches after a release? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which Git command would you use to apply a single specific commit from one branch onto another?",
        "options": {
          "A": "git rebase",
          "B": "git cherry-pick",
          "C": "git squash",
          "D": "git tag"
        },
        "answer": "B",
        "topic": "SCM/Git",
        "exp": "Cherry-pick applies a specific commit from one branch onto another. Rebase replays a series; squash collapses commits; tag marks a release.",
        "correctAnswerText": "git cherry-pick"
      },
      {
        "q": "Which SCM type is BEST for an open-source project with worldwide contributors?",
        "options": {
          "A": "Centralized (e.g., SVN)",
          "B": "Distributed (e.g., Git)",
          "C": "Spreadsheet-based versioning",
          "D": "Manual file copies labeled v1, v2, v3"
        },
        "answer": "B",
        "topic": "SCM",
        "exp": "Distributed VCS like Git gives each contributor a full repo with history — perfect for distributed teams and offline work.",
        "correctAnswerText": "Distributed (e.g., Git)"
      },
      {
        "q": "Which Git operation REWRITES history?",
        "options": {
          "A": "Fetch",
          "B": "Pull",
          "C": "Merge",
          "D": "Rebase"
        },
        "answer": "D",
        "topic": "Git",
        "exp": "Rebase replays commits onto another branch, rewriting history. Merge preserves history with a merge commit.",
        "correctAnswerText": "Rebase"
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
        "q": "Greenfield development means working with an existing legacy codebase.",
        "answer": false,
        "exp": "Greenfield means starting from scratch — \"green fields\" with no existing constraints."
      },
      {
        "q": "Brownfield projects typically involve refactoring, modernizing, or extending existing systems.",
        "answer": true,
        "exp": "Correct. Brownfield = previously developed systems, like previously industrial land."
      },
      {
        "q": "Greenfield projects have low flexibility in choosing technology stacks.",
        "answer": false,
        "exp": "Greenfield has HIGH flexibility — developers can choose any stack or design."
      },
      {
        "q": "Brownfield development is more common in startups.",
        "answer": false,
        "exp": "Brownfield is more common in enterprises and mature industries. Startups typically do Greenfield."
      },
      {
        "q": "Technical risk (can we modernize safely?) is the primary risk in Brownfield projects.",
        "answer": true,
        "exp": "Correct. Market risk (will it succeed?) is the primary Greenfield risk."
      },
      {
        "q": "the parking lot analogy used to explain Brownfield development : Brownfield work is like trying to park or maneuver in a crowded lot: existing constraints limit your choices and make changes harder.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a monolith : A monolith is an application where many features and layers are packaged and deployed together as one unit.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a monolith often a good choice : A monolith is often good for small teams, MVPs, simple domains, and projects that need fast initial delivery.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should a monolith usually be avoided : A monolith may be poor when different parts need independent scaling, deployment, ownership, or reliability boundaries.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "technical debt : Technical debt is the future cost created by shortcuts, rushed decisions, hacks, poor design, or postponed cleanup.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "technical debt usually happen : It often comes from deadline pressure, unclear requirements, weak reviews, temporary fixes, outdated dependencies, or lack of tests.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "technical debt different in Greenfield and Brownfield work : Greenfield debt is often created by early speed-focused decisions; Brownfield debt is inherited from existing systems and past choices.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "common strategies for managing technical debt : Track it, prioritize risky areas, refactor incrementally, add tests, improve documentation, and avoid large risky rewrites unless justified.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "startups often accept more technical debt : Startups may prioritize speed, learning, and market validation over long-term maintainability in the early stages.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the hard truth about technical debt in mature systems : Technical debt rarely disappears on its own; it must be managed intentionally or it slows every future change.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "___ development means starting a project from scratch with no existing systems.",
        "a": "Greenfield",
        "hint": "Think open fields"
      },
      {
        "q": "___ development involves working on an existing legacy system.",
        "a": "Brownfield",
        "hint": "Previously developed land"
      },
      {
        "q": "Brownfield requires strong ___, refactoring, and system skills.",
        "a": "debugging",
        "hint": "Finding problems in old code"
      },
      {
        "q": "Greenfield has ___ flexibility, Brownfield has low flexibility.",
        "a": "high",
        "hint": "Complete freedom"
      },
      {
        "q": "Greenfield faces ___ risk; Brownfield faces technical risk.",
        "a": "market",
        "hint": "Will anyone buy it?"
      },
      {
        "q": "What is the parking lot analogy used to explain Brownfield development? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a monolith? ___",
        "a": "many",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "When is a monolith often a ___ choice?",
        "a": "good",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "When should a monolith usually be avoided? ___",
        "a": "poor",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is technical ___?",
        "a": "debt",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How does technical debt usually happen? ___",
        "a": "from",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is technical ___ different in Greenfield and Brownfield work?",
        "a": "debt",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are common strategies for managing technical debt? ___",
        "a": "Track",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why do startups often accept more technical debt? ___",
        "a": "over",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the hard truth about technical ___ in mature systems?",
        "a": "debt",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "An e-commerce site needs to keep working while you incrementally replace its legacy checkout system. Which pattern is ideal?",
        "options": {
          "A": "Singleton",
          "B": "Strangler Fig",
          "C": "Big Bang Rewrite",
          "D": "God Object"
        },
        "answer": "B",
        "topic": "Green vs Brown / Refactor vs Rewrite",
        "exp": "The Strangler Fig pattern gradually replaces pieces of a legacy system while keeping it running — minimal downtime, reversible.",
        "correctAnswerText": "Strangler Fig"
      },
      {
        "q": "A startup builds a new product with no legacy systems. This is:",
        "options": {
          "A": "Brownfield development",
          "B": "Greenfield development",
          "C": "Strangler-fig migration",
          "D": "Refactoring"
        },
        "answer": "B",
        "topic": "Greenfield",
        "exp": "Greenfield = new project, no legacy constraints. Brownfield = building within existing systems.",
        "correctAnswerText": "Greenfield development"
      },
      {
        "q": "A monolith is MOST appropriate when:",
        "options": {
          "A": "You have hundreds of developers worldwide",
          "B": "You need extreme regional latency optimization",
          "C": "You are building an MVP with a small team and a tight deadline",
          "D": "Multiple parts of the system must scale independently"
        },
        "answer": "C",
        "topic": "Greenfield / Monolith",
        "exp": "Monoliths shine for MVPs, small teams, simple domains, and tight deadlines. Large/varied scale favors microservices.",
        "correctAnswerText": "You are building an MVP with a small team and a tight deadline"
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
        "q": "External code quality refers to internal structure and readability.",
        "answer": false,
        "exp": "External quality is about correctness, performance, security, and usability — things the user sees."
      },
      {
        "q": "A linter is an automated code reviewer that flags stylistic and error-prone code.",
        "answer": true,
        "exp": "Correct — a linter analyzes source code for issues without executing it."
      },
      {
        "q": "SonarQube and ESLint are examples of static analysis tools.",
        "answer": true,
        "exp": "Correct. Pylint and PMD are also mentioned in the slides."
      },
      {
        "q": "Cyclomatic complexity measures code readability.",
        "answer": false,
        "exp": "Cyclomatic complexity measures the number of independent paths through code — it's a complexity/testability metric."
      },
      {
        "q": "Magic numbers/strings instead of named constants is flagged by static analysis tools.",
        "answer": true,
        "exp": "Correct — \"magic\" literal values make code harder to understand and maintain."
      },
      {
        "q": "measuring code quality difficult : Code quality includes both objective signals like complexity and subjective factors like readability, maintainability, and design appropriateness.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a static analysis report used for : It summarizes issues found without running the program, such as code smells, security risks, duplication, complexity, and style violations.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "high code complexity usually indicate : High complexity often means code has many branches or paths, making it harder to test, understand, and maintain.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a code smell : A code smell is a warning sign that code may be poorly structured even if it currently works correctly.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Give examples of common code smells. : Long methods, duplicate code, large classes, magic numbers, deep nesting, unclear names, dead code, and too many responsibilities.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "code reviews important for quality : Code reviews catch defects, spread knowledge, improve consistency, enforce standards, and reduce maintainability problems.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What should a reviewer look for beyond whether code works : Reviewers should check readability, edge cases, test coverage, maintainability, security, performance, and consistency with project stand...",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "code quality degrade over time : It degrades through rushed fixes, weak ownership, skipped tests, duplicated logic, poor naming, and unresolved technical debt.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "duplicate code harmful : Duplicate code makes changes harder because the same logic must be updated in multiple places, increasing the risk of inconsistencies.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "magic numbers and strings considered poor quality : They hide meaning and make code harder to understand, test, and safely modify compared with named constants.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Code Quality measures how well code adheres to standards and ___ principles.",
        "a": "maintainability",
        "hint": "How easy it is to change"
      },
      {
        "q": "A ___ is a tool that analyzes source code to flag errors and stylistic issues.",
        "a": "linter",
        "hint": "Think ESLint, Pylint"
      },
      {
        "q": "___ complexity measures the number of independent paths through code.",
        "a": "Cyclomatic",
        "hint": "Named after cycles/paths"
      },
      {
        "q": "Internal code quality covers structure, readability, and ___.",
        "a": "maintainability",
        "hint": "Easy to modify"
      },
      {
        "q": "SonarQube, ESLint, Pylint, and ___ are static analysis tools.",
        "a": "PMD",
        "hint": "Java-focused tool"
      },
      {
        "q": "Why is measuring ___ quality difficult?",
        "a": "Code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a static analysis report used for? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does ___ code complexity usually indicate?",
        "a": "High",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a ___ smell?",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Give examples of common code smells.",
        "a": "Long",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why are ___ reviews important for quality?",
        "a": "Code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What should a reviewer look for beyond whether code works? ___",
        "a": "edge",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How can code quality degrade over time? ___",
        "a": "weak",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is duplicate ___ harmful?",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why are magic numbers and strings considered poor quality? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which BEST defines technical debt?",
        "options": {
          "A": "Money owed to a software vendor",
          "B": "The future cost of quick decisions today (shortcuts, hacks)",
          "C": "Unpaid feature requests in the backlog",
          "D": "Code that has not yet been deployed"
        },
        "answer": "B",
        "topic": "Tech Debt",
        "exp": "Technical debt (coined by Ward Cunningham) is the future cost of shortcuts taken to ship faster today.",
        "correctAnswerText": "The future cost of quick decisions today (shortcuts, hacks)"
      },
      {
        "q": "Which is the BEST kind of cohesion?",
        "options": {
          "A": "Coincidental",
          "B": "Sequential",
          "C": "Functional",
          "D": "Procedural"
        },
        "answer": "C",
        "topic": "Code Quality",
        "exp": "Functional cohesion = all parts work toward one purpose (matches SRP). Coincidental is the worst.",
        "correctAnswerText": "Functional"
      },
      {
        "q": "Which is a code SMELL rather than a bug?",
        "options": {
          "A": "A null pointer exception in production",
          "B": "A 600-line method that compiles and runs correctly",
          "C": "A failing unit test",
          "D": "A merge conflict in Git"
        },
        "answer": "B",
        "topic": "Code Quality",
        "exp": "A long method is a SMELL — the code works, but the design is weak. Smells suggest deeper issues without being defects themselves.",
        "correctAnswerText": "A 600-line method that compiles and runs correctly"
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
        "q": "Software patterns are meant to be copied and pasted directly into code.",
        "answer": false,
        "exp": "Patterns are generalizable templates — they guide thinking, not copy-paste solutions."
      },
      {
        "q": "MVC (Model-View-Controller) is a mid-level design pattern.",
        "answer": true,
        "exp": "Correct — MVC is a classic mid-level design pattern for structuring applications."
      },
      {
        "q": "Microservices is an example of a low-level language idiom.",
        "answer": false,
        "exp": "Microservices is a high-level architecture pattern, not a language idiom."
      },
      {
        "q": "Idioms are language-agnostic and solve architectural problems.",
        "answer": false,
        "exp": "Patterns are language-agnostic. Idioms are language-specific ways of writing natural code."
      },
      {
        "q": "The Observer, Factory, and Strategy are examples of design patterns.",
        "answer": true,
        "exp": "Correct — these are well-known mid-level design patterns."
      },
      {
        "q": "the Gang of Four (GoF) design patterns : They are classic object-oriented design patterns grouped into creational, structural, and behavioral categories.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an anti-pattern : An anti-pattern is a common but harmful solution that appears useful but creates maintainability, scalability, or design problems.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the three common GoF pattern categories : Creational patterns, structural patterns, and behavioral patterns.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "creational patterns help with : Creational patterns help manage object creation, such as Factory, Builder, Prototype, and Singleton.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "structural patterns help with : Structural patterns help organize relationships between classes or components, such as Adapter, Facade, Composite, and Decorator.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "behavioral patterns help with : Behavioral patterns define communication and responsibility between objects, such as Observer, Strategy, Command, and Iterator.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should patterns align with language and framework choices : A pattern that fits one language or framework may be unnecessary, awkward, or harmful in another environment.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a common pitfall when using design patterns : Overusing patterns can overcomplicate simple code and create unnecessary abstraction.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should you use a design pattern : Use a pattern when the problem is recurring, the pattern fits naturally, and it improves clarity, flexibility, or maintainability.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should you avoid a design pattern : Avoid a pattern when the problem is simple, the pattern adds unnecessary complexity, or the team does not understand the tradeoffs.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Software patterns exist at three levels: low, mid, and ___.",
        "a": "high",
        "hint": "Think architecture"
      },
      {
        "q": "___ are language-specific ways of solving problems naturally in a given language.",
        "a": "Idioms",
        "hint": "Like using ?? in JavaScript"
      },
      {
        "q": "Observer, Factory, and MVC are examples of ___ patterns.",
        "a": "design",
        "hint": "Mid-level patterns"
      },
      {
        "q": "Microservices and CQRS are examples of ___ patterns.",
        "a": "architecture",
        "hint": "High-level patterns"
      },
      {
        "q": "Patterns are ___ (not language-specific), while idioms are language-specific.",
        "a": "language-agnostic",
        "hint": "Work in any language"
      },
      {
        "q": "What are the Gang of Four (GoF) design patterns? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an anti-pattern? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are the three common GoF pattern categories? ___",
        "a": "patterns",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What do creational patterns ___ with?",
        "a": "help",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What do structural patterns ___ with?",
        "a": "help",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What do behavioral patterns help with? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should patterns align with language and framework choices? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a common pitfall when using design patterns? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ should you use a design pattern?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ should you avoid a design pattern?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which is the BEST description of the Repository pattern's purpose?",
        "options": {
          "A": "Encrypt data at rest",
          "B": "Abstract data-access logic so the rest of the app doesn't care about the storage mechanism",
          "C": "Replace ACID transactions",
          "D": "Optimize HTTP latency"
        },
        "answer": "B",
        "topic": "Persistence",
        "exp": "Repository abstracts storage details (file, DB, API) behind a domain-friendly interface. Improves testability.",
        "correctAnswerText": "Abstract data-access logic so the rest of the app doesn't care about the storage mechanism"
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
        "q": "In TDD, you write code first and then write tests to verify it.",
        "answer": false,
        "exp": "TDD flips the workflow — tests are written BEFORE the code, not after."
      },
      {
        "q": "The RGR cycle stands for Red-Green-Refactor.",
        "answer": true,
        "exp": "Correct — Red (failing test) → Green (passing test) → Refactor (clean code)."
      },
      {
        "q": "Kent Beck formalized TDD in 2002.",
        "answer": true,
        "exp": "Correct — his book \"Test-Driven Development: By Example\" established the foundation."
      },
      {
        "q": "TDD is ideal for highly visual, UI-intensive applications.",
        "answer": false,
        "exp": "TDD is NOT recommended for highly visual/UI-intensive apps — visual components are hard to unit test."
      },
      {
        "q": "The Singleton pattern is a good fit for TDD.",
        "answer": false,
        "exp": "Singleton is listed as a BAD fit — it creates global state that makes isolated testing very difficult."
      },
      {
        "q": "TDD improve design : Because writing tests first pushes developers toward small, focused, decoupled code with clear inputs and outputs.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should TDD sometimes be avoided for prototypes : Prototypes involve exploration and uncertainty, so writing detailed tests too early can slow learning and create throwaway test code.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "unit testing : Unit testing verifies a small isolated piece of code, such as a function or class, independently from the rest of the system.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "integration testing : Integration testing checks whether multiple components, services, or layers work together correctly.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "regression testing : Regression testing ensures that new changes do not break behavior that previously worked.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "stress or load testing : Stress/load testing measures how the system behaves under heavy traffic, high data volume, or resource pressure.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "E2E testing verify : End-to-end testing verifies a complete user flow through the full system, often from UI to API to database.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the difference between mocking and stubbing : Stubs return canned data, while mocks can verify how dependencies were called or used.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "code coverage : Code coverage measures how much of the codebase is executed by tests, usually reported as a percentage.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "high code coverage not enough by itself : High coverage only proves code ran during tests; it does not prove the tests check the right behavior or edge cases.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "TDD stands for Test-___ Development.",
        "a": "Driven",
        "hint": "Tests come first"
      },
      {
        "q": "The RGR cycle is: Red, Green, and ___.",
        "a": "Refactor",
        "hint": "Clean up the code"
      },
      {
        "q": "The ___ pattern divides tests into Arrange, Act, and Assert sections.",
        "a": "AAA",
        "hint": "Three A's"
      },
      {
        "q": "TDD was founded by Kent ___ in 2002.",
        "a": "Beck",
        "hint": "Authored \"TDD: By Example\""
      },
      {
        "q": "TDD encourages writing only what's needed to fulfill a ___.",
        "a": "test",
        "hint": "The failing check"
      },
      {
        "q": "Why does TDD improve design? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should TDD sometimes be avoided for prototypes? ___",
        "a": "slow",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___ testing?",
        "a": "Unit",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is integration testing? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is regression testing? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is stress or load testing? ___",
        "a": "high",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does E2E testing verify? ___",
        "a": "user",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the difference between mocking and stubbing? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___ coverage?",
        "a": "Code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is ___ code coverage not enough by itself?",
        "a": "High",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "A team writes its tests AFTER the code is complete, just to confirm everything works. Is this TDD?",
        "options": {
          "A": "Yes — any unit testing is TDD",
          "B": "No — TDD writes tests BEFORE the code",
          "C": "Only if the tests pass on the first run",
          "D": "Only if integration tests are also included"
        },
        "answer": "B",
        "topic": "TDD",
        "exp": "TDD inverts the workflow: write a failing test (RED) → write minimum code to pass (GREEN) → refactor. Tests after code is NOT TDD.",
        "correctAnswerText": "No — TDD writes tests BEFORE the code"
      },
      {
        "q": "You are choosing patterns and want them to support TDD well. Which combination is BEST?",
        "options": {
          "A": "Singleton + Service Locator + Facade",
          "B": "Dependency Injection + Strategy + Repository",
          "C": "God Object + Spaghetti + Copy-Paste",
          "D": "Anti-Pattern + Singleton + Globals"
        },
        "answer": "B",
        "topic": "Patterns / TDD",
        "exp": "DI, Strategy, and Repository decouple dependencies and allow easy mocking — ideal for TDD. The first option HIDES dependencies.",
        "correctAnswerText": "Dependency Injection + Strategy + Repository"
      },
      {
        "q": "Which BEST describes the difference between Mocks and Stubs?",
        "options": {
          "A": "Mocks return canned data; stubs record interactions",
          "B": "Stubs return canned data; mocks record how they were used",
          "C": "They are the same thing",
          "D": "Both replace databases automatically"
        },
        "answer": "B",
        "topic": "TDD",
        "exp": "Stubs return canned/fixed values. Mocks RECORD interactions, letting tests assert on call patterns.",
        "correctAnswerText": "Stubs return canned data; mocks record how they were used"
      },
      {
        "q": "Which is a common test framework for Java?",
        "options": {
          "A": "xUnit",
          "B": "JUnit",
          "C": "Jest",
          "D": "Mocha"
        },
        "answer": "B",
        "topic": "TDD",
        "exp": "JUnit (and TestNG) for Java; xUnit/NUnit/MSTest for C#; Jest/Mocha for JavaScript.",
        "correctAnswerText": "JUnit"
      },
      {
        "q": "A test that exercises the FULL stack — UI → API → DB — by simulating real user behavior is:",
        "options": {
          "A": "Unit test",
          "B": "Integration test",
          "C": "End-to-End (E2E) test",
          "D": "Stress test"
        },
        "answer": "C",
        "topic": "TDD",
        "exp": "E2E tests cover user journeys across the full system. Slower, but essential for critical workflows.",
        "correctAnswerText": "End-to-End (E2E) test"
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
        "q": "In Waterfall, you can start Implementation before Requirements are complete.",
        "answer": false,
        "exp": "Waterfall is strictly linear — each phase must be complete before the next begins."
      },
      {
        "q": "Agile is best used when requirements are unclear or evolving.",
        "answer": true,
        "exp": "Correct — Agile is designed for environments where requirements change frequently."
      },
      {
        "q": "Waterfall is ideal for startups and R&D teams.",
        "answer": false,
        "exp": "Agile/iterative approaches are better for startups. Waterfall suits regulated industries with fixed requirements."
      },
      {
        "q": "DevOps emphasizes continuous integration, delivery, and deployment.",
        "answer": true,
        "exp": "Correct — DevOps bridges development and operations through CI/CD pipelines."
      },
      {
        "q": "A Hybrid/Spiral model combines elements of Waterfall and Agile.",
        "answer": true,
        "exp": "Correct — Spiral/Hybrid models blend structured phases with iterative flexibility."
      },
      {
        "q": "common software process models : Waterfall, Agile, Scrum, Kanban, XP, Spiral/Hybrid, and DevOps-style continuous delivery models.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Waterfall useful in regulated projects : Regulated projects often need predictable phases, formal sign-offs, documentation, traceability, and compliance evidence.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Agile usually not a good fit : Agile may struggle when the customer is unavailable, requirements are legally fixed, or documentation and approval gates dominate the project.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "dogfooding : Dogfooding means using your own product internally so the team experiences issues before or alongside customers.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "NASA presented as a Waterfall success case : NASA-style projects can benefit from careful upfront planning, documentation, testing, and strict phase control because failure risk is extremely high.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Spotify presented as an Agile success case : Spotify is associated with autonomous teams, iterative delivery, experimentation, and product-focused feedback loops.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the FBI Virtual Case File become a Waterfall failure example : It suffered from changing requirements, large upfront design assumptions, and difficulty adapting during the build.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What decision factors help choose Agile vs Waterfall : Requirement stability, risk level, customer availability, regulation, team experience, documentation needs, and tolerance for change.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the danger of using Agile badly : Poor Agile can become chaotic: unclear priorities, weak documentation, no discipline, poor testing, and constant scope churn.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the main takeaway when choosing a process model : Choose the model that fits the project’s uncertainty, risk, team, stakeholders, and delivery constraints rather than using one approach everywhere.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Waterfall phases are: Requirements, Design, Implementation, Testing, Deployment, and ___.",
        "a": "Maintenance",
        "hint": "After going live"
      },
      {
        "q": "In Waterfall, each ___ must be complete before the next begins.",
        "a": "phase",
        "hint": "Sequential step"
      },
      {
        "q": "Agile is best for requirements that are unclear or ___.",
        "a": "evolving",
        "hint": "Changing over time"
      },
      {
        "q": "___ combines development and operations with CI/CD pipelines.",
        "a": "DevOps",
        "hint": "Dev + Ops"
      },
      {
        "q": "Scrum, Kanban, and XP are Agile ___ practices.",
        "a": "core",
        "hint": "Fundamental methods"
      },
      {
        "q": "What are common software process models? ___",
        "a": "Agile",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is Waterfall useful in regulated projects? ___",
        "a": "need",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ is Agile usually not a good fit?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is dogfooding? ___",
        "a": "your",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why was NASA presented as a Waterfall success case? ___",
        "a": "from",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why was Spotify presented as an Agile success case? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why did the FBI Virtual Case File become a Waterfall failure example? ___",
        "a": "from",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What decision factors help choose Agile vs Waterfall? ___",
        "a": "risk",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the danger of using Agile badly? ___",
        "a": "Poor",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the main takeaway when choosing a process model? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which best describes 'dogfooding'?",
        "options": {
          "A": "Stress-testing a system at peak load",
          "B": "Using your own product internally before/during release",
          "C": "Compiling code for multiple platforms at once",
          "D": "Running automated regression tests after every commit"
        },
        "answer": "B",
        "topic": "Process Models",
        "exp": "Dogfooding ('eat your own dog food') means employees use the product themselves to catch bugs and build empathy.",
        "correctAnswerText": "Using your own product internally before/during release"
      },
      {
        "q": "Which is the FBI's famous failed project, cited as a Waterfall failure due to changing requirements mid-build?",
        "options": {
          "A": "NASA Apollo",
          "B": "Virtual Case File",
          "C": "Spotify Discover Weekly",
          "D": "Netflix Cosmos"
        },
        "answer": "B",
        "topic": "Process Models",
        "exp": "The FBI's Virtual Case File failed (Waterfall), losing $170M before being abandoned.",
        "correctAnswerText": "Virtual Case File"
      },
      {
        "q": "Which best matches the Agile vs Waterfall trade-off?",
        "options": {
          "A": "Waterfall is iterative; Agile is sequential",
          "B": "Waterfall is phase-based with upfront planning; Agile is iterative with continuous feedback",
          "C": "They are identical",
          "D": "Waterfall fits startups; Agile fits aerospace"
        },
        "answer": "B",
        "topic": "Process Models",
        "exp": "Waterfall: sequential phases, fixed plan. Agile: iterative cycles, embrace change. Aerospace tends Waterfall; startups tend Agile.",
        "correctAnswerText": "Waterfall is phase-based with upfront planning; Agile is iterative with continuous feedback"
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
        "q": "ALM is a subset of SDLC.",
        "answer": false,
        "exp": "It's the opposite — SDLC is a subset of ALM. ALM is the broader discipline."
      },
      {
        "q": "SDLC phases include Requirements, Design, Implementation, Testing, Deployment, and Maintenance.",
        "answer": true,
        "exp": "Correct — these are the key phases of the Software Development Life Cycle."
      },
      {
        "q": "ALM covers only the development phase of an application.",
        "answer": false,
        "exp": "ALM covers the entire lifespan: Ideation → Planning → Development → Release → Operations → Governance → Sunset."
      },
      {
        "q": "SDLC helps with project tracking, accountability, and quality assurance.",
        "answer": true,
        "exp": "Correct — these are listed as key benefits of using SDLC."
      },
      {
        "q": "Managing a banking platform across multiple regulatory regions is an ALM use case.",
        "answer": true,
        "exp": "Correct — ALM is suited for long-lived, complex, regulated systems."
      },
      {
        "q": "the purpose of SDLC phases : SDLC phases organize development work so teams can plan, build, test, deploy, maintain, and track software systematically.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "ALM components beyond development : ALM includes planning, requirements, release management, operations, governance, compliance, support, and retirement.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What kinds of documents appear in ALM : ALM can include business cases, requirements, design documents, test plans, release notes, support plans, compliance records, and retirement plans.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the role of a Product Owner : The Product Owner represents product priorities, manages backlog direction, and helps define value and acceptance for work items.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the role of a Business Analyst : A Business Analyst helps gather requirements, clarify business needs, document workflows, and translate stakeholder goals into actionable work.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the role of a Technical Analyst : A Technical Analyst connects business requirements to technical feasibility, constraints, systems, integrations, and implementation details.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the role of a System Architect : The System Architect defines high-level technical structure, major components, integration strategy, and long-term design direction.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a RACI matrix : A responsibility assignment matrix that identifies who is Responsible, Accountable, Consulted, and Informed for project activities.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a build vs buy decision : A decision about whether to create a custom solution or purchase/adopt an existing product or service.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "common ALM challenges : Common challenges include poor traceability, unclear ownership, tool fragmentation, weak governance, changing requirements, and communication gaps.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "SDLC stands for Software Development ___ Cycle.",
        "a": "Life",
        "hint": "The whole journey"
      },
      {
        "q": "ALM stands for Application ___ Management.",
        "a": "Lifecycle",
        "hint": "From birth to retirement"
      },
      {
        "q": "SDLC is a ___ of ALM.",
        "a": "subset",
        "hint": "Contained within"
      },
      {
        "q": "ALM stages include Ideation, Planning, Development, Release, Operations, Governance, and ___.",
        "a": "Sunset",
        "hint": "End of life"
      },
      {
        "q": "ALM enables ___ and regulatory compliance through end-to-end traceability.",
        "a": "auditing",
        "hint": "Inspection and verification"
      },
      {
        "q": "What is the purpose of ___ phases?",
        "a": "SDLC",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are ALM components beyond development? ___",
        "a": "release",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What kinds of documents appear in ALM? ___",
        "a": "test",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the role of a Product Owner? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the role of a Business Analyst? ___",
        "a": "into",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the role of a Technical ___?",
        "a": "Analyst",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the role of a System Architect? ___",
        "a": "major",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a RACI matrix? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a build vs buy decision? ___",
        "a": "about",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are common ALM challenges? ___",
        "a": "poor",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which best captures the difference between SDLC and ALM?",
        "options": {
          "A": "SDLC = the entire app lifespan; ALM = just development",
          "B": "ALM is a subset of SDLC",
          "C": "SDLC develops the software; ALM manages the entire application from idea to sunset",
          "D": "They are synonyms"
        },
        "answer": "C",
        "topic": "SDLC & ALM",
        "exp": "SDLC is a subset of ALM. SDLC focuses on building; ALM includes ideation, ops, governance, sunset.",
        "correctAnswerText": "SDLC develops the software; ALM manages the entire application from idea to sunset"
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
        "q": "Modern Full Stack Developers must build the entire app alone.",
        "answer": false,
        "exp": "Modern definition: they navigate multiple layers and understand them, even if they specialize in one."
      },
      {
        "q": "A T-shaped developer has broad knowledge across layers but is deep in one area.",
        "answer": true,
        "exp": "Correct — the \"T\" shape: wide horizontal bar = broad knowledge, vertical bar = deep specialty."
      },
      {
        "q": "Full Stack development reduces blind spots between front-end, API, and database teams.",
        "answer": true,
        "exp": "Correct — holistic understanding helps developers see how layers interact."
      },
      {
        "q": "CGI (Common Gateway Interface) was a modern full-stack technology from the 2020s.",
        "answer": false,
        "exp": "CGI was an early web technology from the 1990s — each request launched a new process."
      },
      {
        "q": "Full Stack developers can trace issues end-to-end from UI to database.",
        "answer": true,
        "exp": "Correct — this cross-layer visibility is a key benefit of full-stack knowledge."
      },
      {
        "q": "the front-end layer handle : The front-end handles the user interface, user interactions, rendering, validation, accessibility, and communication with APIs.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the middle tier handle : The middle tier handles API endpoints, business logic, authentication, validation, orchestration, and communication between UI and data layers.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the back-end/data layer handle : The back-end layer handles persistence, databases, data models, queries, transactions, and storage-related concerns.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a common full-stack web combination : A common combination is a JavaScript front end, REST API or Node/Express middle tier, and a SQL or NoSQL database.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the data flow in a typical full-stack app : User action in the UI triggers an API request, the middle tier processes it, the database stores or retrieves data, and the result returns to the UI.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a Single Page Application (SPA) : An SPA loads once in the browser and updates content dynamically using JavaScript rather than reloading full pages.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a Progressive Web App (PWA) : A PWA is a web app enhanced with app-like features such as offline support, installability, caching, and responsive behavior.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "separation of concerns important in full-stack development : It keeps UI, business logic, and persistence responsibilities clear so the system is easier to test, modify, and debug.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a common front-end best practice : Keep components focused, validate user input, handle loading/error states, and avoid mixing UI code with business or data-access logic.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a common pitfall across full-stack layers : A common pitfall is leaking responsibilities across layers, such as putting database logic in the UI or business rules only in the front end.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "A ___ developer has broad skills across layers but deep expertise in one.",
        "a": "T-shaped",
        "hint": "Think of the letter T"
      },
      {
        "q": "The three tiers are front-end, ___, and back-end.",
        "a": "middle tier",
        "hint": "Where the API lives"
      },
      {
        "q": "FSD can stand for Full Stack + ___.",
        "a": "DevOps",
        "hint": "Operations side"
      },
      {
        "q": "Early web used HTML + ___ scripts for dynamic content in the 1990s.",
        "a": "CGI",
        "hint": "Common Gateway Interface"
      },
      {
        "q": "Full Stack developers can trace bugs through the entire request-___ lifecycle.",
        "a": "response",
        "hint": "Request and ___"
      },
      {
        "q": "What does the front-end layer handle? ___",
        "a": "user",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does the middle ___ handle?",
        "a": "tier",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does the back-end/___ layer handle?",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a common full-stack web combination? ___",
        "a": "REST",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the data flow in a typical full-stack app? ___",
        "a": "User",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a Single Page Application (SPA)? ___",
        "a": "once",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a Progressive Web App (PWA)? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is separation of concerns important in full-stack development? ___",
        "a": "test",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a common front-end best practice? ___",
        "a": "Keep",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a common pitfall across full-stack layers? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "A SPA (Single Page Application) is best described as:",
        "options": {
          "A": "A backend API exposing endpoints",
          "B": "An app that loads once and updates dynamically via JavaScript",
          "C": "A SQL persistence layer",
          "D": "A page generated server-side per request"
        },
        "answer": "B",
        "topic": "Full Stack",
        "exp": "SPAs load once, then dynamically update the page (Gmail, Notion, Slack). SSR pages are generated per request.",
        "correctAnswerText": "An app that loads once and updates dynamically via JavaScript"
      },
      {
        "q": "A 'T-shaped' developer is one who:",
        "options": {
          "A": "Has expertise in exactly two languages",
          "B": "Has broad knowledge across multiple layers and deep expertise in one",
          "C": "Only specializes in databases",
          "D": "Only writes test code"
        },
        "answer": "B",
        "topic": "Full Stack",
        "exp": "T-shaped = broad horizontal + deep vertical specialty. Common framing of modern full-stack devs.",
        "correctAnswerText": "Has broad knowledge across multiple layers and deep expertise in one"
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
        "q": "REST was defined by Roy Fielding in 2000.",
        "answer": true,
        "exp": "Correct — Fielding described REST in his doctoral dissertation at UC Irvine."
      },
      {
        "q": "REST APIs use verbs in URLs (e.g., /getUser, /deletePost).",
        "answer": false,
        "exp": "REST is resource-based (nouns) — e.g., GET /users/1 rather than /getUser/1."
      },
      {
        "q": "SOAP uses JSON for data exchange.",
        "answer": false,
        "exp": "SOAP uses XML with WSDL. JSON/RESTful APIs came later and are more human-readable."
      },
      {
        "q": "GraphQL was developed by Facebook.",
        "answer": true,
        "exp": "Correct — Facebook developed GraphQL for structured data querying."
      },
      {
        "q": "REST requires the server to store session state between requests.",
        "answer": false,
        "exp": "REST is stateless — each request contains all information needed; the server stores no session state."
      },
      {
        "q": "APIs matter in software systems : APIs allow systems, services, front ends, mobile apps, and third parties to communicate through clear controlled interfaces.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "JSON : JSON is a lightweight text-based data format commonly used for API requests and responses because it is readable and easy to parse.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "JSON often preferred over XML for modern web APIs : JSON is usually less verbose, easier to read, maps naturally to JavaScript objects, and works well with REST APIs.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "GraphQL best used for : GraphQL is useful when clients need flexible queries and want to request exactly the fields they need.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "gRPC best used for : gRPC is useful for high-performance internal service-to-service communication using Protocol Buffers and HTTP/2.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "API authentication : Authentication verifies who the caller is, often using login credentials, API keys, sessions, or bearer tokens.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "API authorization : Authorization determines what an authenticated caller is allowed to access or do, often using roles, permissions, or scopes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "CORS : Cross-Origin Resource Sharing, a browser security mechanism that controls which origins can call an API from client-side code.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "API documentation important : Documentation helps developers discover endpoints, request formats, authentication rules, response examples, and expected errors.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an API gateway : An API gateway sits between clients and services to handle routing, authentication, rate limiting, logging, and cross-cutting concerns.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "REST stands for REpresentational ___ Transfer.",
        "a": "State",
        "hint": "REST = Re...State Transfer"
      },
      {
        "q": "REST was defined by Roy ___ in 2000.",
        "a": "Fielding",
        "hint": "His dissertation"
      },
      {
        "q": "The five common REST HTTP verbs are GET, POST, PUT, PATCH, and ___.",
        "a": "DELETE",
        "hint": "Removing resources"
      },
      {
        "q": "SOAP uses ___ and WSDL for data exchange (not JSON).",
        "a": "XML",
        "hint": "Extensible Markup Language"
      },
      {
        "q": "GraphQL was developed by ___, while gRPC was developed by Google.",
        "a": "Facebook",
        "hint": "Now Meta"
      },
      {
        "q": "Why do ___ matter in software systems?",
        "a": "APIs",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___?",
        "a": "JSON",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is ___ often preferred over XML for modern web APIs?",
        "a": "JSON",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is GraphQL best used for? ___",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___ best used for?",
        "a": "gRPC",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is API authentication? ___",
        "a": "keys",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ is API authorization?",
        "a": "what",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is CORS? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is API documentation important? ___",
        "a": "helps",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an API gateway? ___",
        "a": "sits",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which of these REST verbs is NOT idempotent?",
        "options": {
          "A": "GET",
          "B": "PUT",
          "C": "DELETE",
          "D": "POST"
        },
        "answer": "D",
        "topic": "APIs",
        "exp": "POST creates new resources on each call — not idempotent. GET/PUT/DELETE are idempotent.",
        "correctAnswerText": "POST"
      },
      {
        "q": "What does CORS stand for, and which configuration is recommended?",
        "options": {
          "A": "Cross-Origin Resource Sharing; configure specific allowed origins, not '*' for sensitive APIs",
          "B": "Cross-Origin Request Standard; allow any origin",
          "C": "Cross-Object Reference Schema; disable for performance",
          "D": "Centralized Origin Resource Sync; rotate keys daily"
        },
        "answer": "A",
        "topic": "APIs",
        "exp": "CORS = Cross-Origin Resource Sharing. Configure SPECIFIC origins (not '*' in production) for security.",
        "correctAnswerText": "Cross-Origin Resource Sharing; configure specific allowed origins, not '*' for sensitive APIs"
      },
      {
        "q": "Which API style uses Protocol Buffers and HTTP/2 for high-throughput internal microservices?",
        "options": {
          "A": "REST",
          "B": "SOAP",
          "C": "gRPC",
          "D": "GraphQL"
        },
        "answer": "C",
        "topic": "APIs",
        "exp": "gRPC uses Protocol Buffers and HTTP/2 — binary, strongly typed, fast — great for internal microservice communication.",
        "correctAnswerText": "gRPC"
      },
      {
        "q": "Which describes idempotency in REST?",
        "options": {
          "A": "The request is processed asynchronously",
          "B": "Repeating the same request produces the same effect as one",
          "C": "The response is always cached",
          "D": "Only authenticated users may call"
        },
        "answer": "B",
        "topic": "APIs",
        "exp": "Idempotent: calling it once or many times yields the same result. GET, PUT, DELETE are idempotent.",
        "correctAnswerText": "Repeating the same request produces the same effect as one"
      },
      {
        "q": "Which BEST describes the difference between Authentication and Authorization?",
        "options": {
          "A": "Authentication = what you can do; Authorization = who you are",
          "B": "Authentication = who you are; Authorization = what you can do",
          "C": "They are the same",
          "D": "Both refer to encrypting passwords"
        },
        "answer": "B",
        "topic": "APIs",
        "exp": "Authentication identifies who you are (login, token). Authorization grants what you can do (roles, scopes).",
        "correctAnswerText": "Authentication = who you are; Authorization = what you can do"
      },
      {
        "q": "Which is the BEST description of REST?",
        "options": {
          "A": "An XML-based RPC protocol with WSDL contracts",
          "B": "A stateless, resource-based architectural style over HTTP, defined by Roy Fielding",
          "C": "A binary RPC protocol over HTTP/2",
          "D": "A query language for graph data"
        },
        "answer": "B",
        "topic": "APIs",
        "exp": "REST (Fielding, 2000) is stateless, resource-based, uniform-interface, cacheable, client-server. SOAP is XML-based; gRPC is binary; GraphQL is query language.",
        "correctAnswerText": "A stateless, resource-based architectural style over HTTP, defined by Roy Fielding"
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
        "q": "DDD (Domain-Driven Design) is itself a design pattern.",
        "answer": false,
        "exp": "DDD is a strategic and architectural philosophy — it uses patterns but is not itself one."
      },
      {
        "q": "Eric Evans introduced DDD in 2003.",
        "answer": true,
        "exp": "Correct — in his book \"Domain-Driven Design: Tackling Complexity in the Heart of Software.\""
      },
      {
        "q": "A DDD Value Object has a unique ID that persists over time.",
        "answer": false,
        "exp": "Value Objects are identified by their value, not an ID. Entities have persistent identity."
      },
      {
        "q": "The Ubiquitous Language in DDD is a shared vocabulary between devs and domain experts.",
        "answer": true,
        "exp": "Correct — this shared language bridges the gap between technical and business understanding."
      },
      {
        "q": "An Aggregate Root controls all access to its cluster of entities.",
        "answer": true,
        "exp": "Correct — all interactions with the aggregate go through the root to maintain consistency."
      },
      {
        "q": "advanced design principles exist : They help manage complexity, reduce coupling, improve maintainability, and keep software aligned with business needs.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a domain in DDD : A domain is the problem space or business area the software is built to support, such as ordering, payments, scheduling, or inventory.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an aggregate in DDD : An aggregate is a cluster of related objects treated as one consistency boundary, with an aggregate root controlling access.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a repository in DDD : A repository provides a domain-friendly interface for retrieving and saving aggregates while hiding persistence details.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a domain service : A domain service holds business logic that does not naturally belong inside a single entity or value object.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a domain event : A domain event records that something important happened in the domain, such as OrderPlaced or PaymentCompleted.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a bounded context : A bounded context is a clear boundary where a particular domain model and language apply consistently.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the Single Responsibility Principle : A class or module should have one main reason to change and focus on one responsibility.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the Liskov Substitution Principle : Subtypes should be usable wherever their base types are expected without breaking correct behavior.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Dependency Inversion : High-level modules should depend on abstractions rather than low-level concrete implementations.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "DDD was introduced by Eric ___ in 2003.",
        "a": "Evans",
        "hint": "His famous book on DDD"
      },
      {
        "q": "In DDD, an ___ is an object with unique identity that persists over time.",
        "a": "Entity",
        "hint": "Like a Player or Order"
      },
      {
        "q": "___ objects are immutable and identified by their value, not an ID.",
        "a": "Value",
        "hint": "e.g., Money($10)"
      },
      {
        "q": "DDD's core idea: let the business ___ drive software structure.",
        "a": "domain",
        "hint": "The problem space"
      },
      {
        "q": "SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency ___.",
        "a": "Inversion",
        "hint": "Depend on abstractions"
      },
      {
        "q": "Why do advanced design principles exist? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a domain in DDD? ___",
        "a": "area",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an aggregate in DDD? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a repository in DDD? ___",
        "a": "while",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a domain service? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a domain event? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a bounded context? ___",
        "a": "clear",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the Single Responsibility Principle? ___",
        "a": "have",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the Liskov Substitution Principle? ___",
        "a": "base",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is Dependency Inversion? ___",
        "a": "than",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which is the BEST description of a Value Object in DDD?",
        "options": {
          "A": "A database table with auto-incrementing IDs",
          "B": "An immutable object identified by its values, not identity",
          "C": "A REST endpoint returning JSON",
          "D": "A class that handles dependency injection"
        },
        "answer": "B",
        "topic": "DDD",
        "exp": "Value Objects (e.g., Money, Coordinates) are immutable and identified by their values. Entities have identity (e.g., User #42).",
        "correctAnswerText": "An immutable object identified by its values, not identity"
      },
      {
        "q": "What does the 'I' in SOLID stand for?",
        "options": {
          "A": "Inversion of Inheritance",
          "B": "Interface Segregation",
          "C": "Implementation Independence",
          "D": "Idempotency"
        },
        "answer": "B",
        "topic": "SOLID",
        "exp": "Interface Segregation: no client should be forced to depend on methods it does not use. Prefer many small interfaces.",
        "correctAnswerText": "Interface Segregation"
      },
      {
        "q": "Which BEST describes the Open/Closed Principle?",
        "options": {
          "A": "Open for refactoring, closed for modification",
          "B": "Open for extension, closed for modification",
          "C": "Open for inheritance, closed for composition",
          "D": "Open for users, closed for developers"
        },
        "answer": "B",
        "topic": "SOLID",
        "exp": "Open for EXTENSION (via abstraction/inheritance), closed for MODIFICATION (don't edit existing code).",
        "correctAnswerText": "Open for extension, closed for modification"
      },
      {
        "q": "A class is responsible for authentication, sending emails, AND logging. Which SOLID principle is violated?",
        "options": {
          "A": "Single Responsibility (S)",
          "B": "Open/Closed (O)",
          "C": "Liskov Substitution (L)",
          "D": "Interface Segregation (I)"
        },
        "answer": "A",
        "topic": "SOLID",
        "exp": "Single Responsibility says a class should do one thing well. Three unrelated jobs violates SRP.",
        "correctAnswerText": "Single Responsibility (S)"
      },
      {
        "q": "Which BEST describes the difference between an Entity and a Value Object in DDD?",
        "options": {
          "A": "Entity has identity; Value Object is immutable and identified by value",
          "B": "Entity is immutable; Value Object has identity",
          "C": "Both have identity",
          "D": "Neither has identity"
        },
        "answer": "A",
        "topic": "DDD",
        "exp": "Entity = identity (User #42). Value Object = immutable, identity by value (Money($5)).",
        "correctAnswerText": "Entity has identity; Value Object is immutable and identified by value"
      },
      {
        "q": "Which BEST describes a Bounded Context in DDD?",
        "options": {
          "A": "A type of integration test",
          "B": "A sub-section of the domain with its own model and language",
          "C": "A SQL transaction scope",
          "D": "A code repository in Git"
        },
        "answer": "B",
        "topic": "DDD",
        "exp": "Bounded Contexts split large domains into autonomous areas (e.g., Inventory vs Sales) each with its own model.",
        "correctAnswerText": "A sub-section of the domain with its own model and language"
      },
      {
        "q": "Which is FALSE about DDD?",
        "options": {
          "A": "It promotes a ubiquitous language",
          "B": "It uses Entities, Value Objects, and Aggregates",
          "C": "It is itself a single design pattern",
          "D": "It uses Bounded Contexts to split large domains"
        },
        "answer": "C",
        "topic": "DDD",
        "exp": "DDD is NOT a pattern. It is a strategic/architectural philosophy that tells you WHICH patterns to use.",
        "correctAnswerText": "It is itself a single design pattern"
      },
      {
        "q": "Which describes the Open Closed Principle's typical implementation strategy?",
        "options": {
          "A": "Edit existing code freely",
          "B": "Favor abstraction and inheritance/composition over modifying existing code",
          "C": "Avoid polymorphism",
          "D": "Use Singletons whenever possible"
        },
        "answer": "B",
        "topic": "SOLID",
        "exp": "OCP encourages adding behavior via new types (abstraction, polymorphism), not by modifying existing classes.",
        "correctAnswerText": "Favor abstraction and inheritance/composition over modifying existing code"
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
        "q": "RAM is considered non-volatile storage.",
        "answer": false,
        "exp": "RAM is volatile — it loses all data when the power is off. SSDs and disks are non-volatile."
      },
      {
        "q": "The persistence layer protects upper layers from knowing how storage works.",
        "answer": true,
        "exp": "Correct — this abstraction is a key purpose of the persistence layer."
      },
      {
        "q": "Persistence allows data to outlive the program that created it.",
        "answer": true,
        "exp": "Correct — this is the definition of persistence from the slides."
      },
      {
        "q": "In layered architecture, the UI layer directly accesses the database.",
        "answer": false,
        "exp": "The UI calls the Application layer, which calls the Domain/Repository, which calls the Persistence layer."
      },
      {
        "q": "Cloud storage behaves the same as local non-volatile storage.",
        "answer": false,
        "exp": "The slides note that \"cloud storage feels different\" — it has its own abstraction and failure modes."
      },
      {
        "q": "“persistence without databases” mean : Data can be saved using files, local storage, serialized objects, or external APIs instead of a traditional database.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "software move from files to databases : Databases provide better querying, consistency, multi-user access, indexing, reliability, security, and management of growing data.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a query : A query is a request for data, often asking storage to find, filter, sort, insert, update, or delete information.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "SQL : SQL is a language used to define, query, and manipulate data in relational databases.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an ORM : An Object-Relational Mapper connects object-oriented code to relational databases by mapping objects to tables and rows.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "data models not always match code models : Objects, relationships, inheritance, and behavior in code do not always map cleanly to tables, rows, and foreign keys.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What persistence problem happens when many users act at the same time : Concurrent access can create conflicts, race conditions, stale reads, lost updates, or inconsistent data without proper control.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "ACID help guarantee : ACID helps transactions remain atomic, consistent, isolated, and durable so data stays reliable.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "backups matter in persistence : Backups protect against data loss caused by crashes, corruption, accidental deletion, hardware failure, or bad deployments.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "persistence security important : Stored data may contain sensitive information, so systems need access control, validation, encryption, auditing, and safe query practices.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Persistence is the art of making data ___ the program that created it.",
        "a": "outlive",
        "hint": "Survive beyond"
      },
      {
        "q": "___ memory (RAM) disappears when power is off.",
        "a": "Volatile",
        "hint": "Temporary"
      },
      {
        "q": "Non-___ memory like SSDs and disks survives power loss.",
        "a": "volatile",
        "hint": "Permanent storage"
      },
      {
        "q": "The layered architecture order is: UI → Application → Domain → ___ → Infrastructure.",
        "a": "Persistence",
        "hint": "The data storage layer"
      },
      {
        "q": "A ___ hides whether data lives in a file, database, or accessed via API.",
        "a": "repository",
        "hint": "DDD pattern for data access"
      },
      {
        "q": "What does “persistence without ___bases” mean?",
        "a": "Data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why did software move from files to ___bases?",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a query? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is SQL? ___",
        "a": "used",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is an ORM? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why do data models not always match ___ models?",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What persistence problem happens when many users act at the same time? ___",
        "a": "race",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does ___ help guarantee?",
        "a": "ACID",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why do backups matter in persistence? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is persistence security important? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which ACID property guarantees that, after a successful commit, data is NOT lost even if power fails?",
        "options": {
          "A": "Atomicity",
          "B": "Consistency",
          "C": "Isolation",
          "D": "Durability"
        },
        "answer": "D",
        "topic": "Persistence",
        "exp": "Durability: once a transaction is confirmed, it stays saved (even across crashes).",
        "correctAnswerText": "Durability"
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
        "q": "In synchronous execution, the next task starts before the current one finishes.",
        "answer": false,
        "exp": "Synchronous means each task must FINISH before the next one starts."
      },
      {
        "q": "Asynchronous programming improves responsiveness by not blocking while waiting.",
        "answer": true,
        "exp": "Correct — async allows other work to continue while waiting for I/O or network responses."
      },
      {
        "q": "AJAX stands for Asynchronous JavaScript and XML.",
        "answer": true,
        "exp": "Correct — though modern AJAX typically uses JSON, not XML."
      },
      {
        "q": "Blocking I/O allows a program to do other work while waiting for a response.",
        "answer": false,
        "exp": "Blocking I/O HALTS the program until the task completes. Non-blocking allows other work."
      },
      {
        "q": "A thread is the smallest unit of execution inside a program.",
        "answer": true,
        "exp": "Correct — threads are what allow concurrent execution within a process."
      },
      {
        "q": "the difference between a process and a thread : A process is a running program with its own memory space; a thread is a smaller execution path inside a process.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a single-threaded process : A process that runs one main thread of execution, handling work sequentially unless it uses async/event mechanisms.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a multi-threaded process : A process that uses multiple threads to perform work concurrently within the same program.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "WebSockets used for : WebSockets provide persistent two-way communication between client and server for real-time updates.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Pub/Sub : Publish/Subscribe is a messaging model where publishers send messages to topics and subscribers receive messages from those topics.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a race condition : A race condition happens when program behavior depends on unpredictable timing between concurrent operations.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "race conditions be prevented : Use locks, transactions, queues, immutable data, atomic operations, synchronization, or controlled message passing.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "lazy loading : Lazy loading delays loading data or resources until they are actually needed.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "prefetching : Prefetching loads data before it is needed to reduce waiting time later.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a safe concurrency design goal : Design systems so shared state is controlled, operations are predictable, and failures do not corrupt data.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "In ___ execution, tasks run one after another with no overlap.",
        "a": "synchronous",
        "hint": "Sequential"
      },
      {
        "q": "___ execution allows tasks to start and finish later while other work continues.",
        "a": "Asynchronous",
        "hint": "Non-blocking"
      },
      {
        "q": "AJAX stands for Asynchronous JavaScript and ___.",
        "a": "XML",
        "hint": "Markup language (now usually JSON)"
      },
      {
        "q": "A ___ program halts until a task completes before continuing.",
        "a": "blocking",
        "hint": "One chef, others wait"
      },
      {
        "q": "A ___ is the smallest unit of execution inside a program.",
        "a": "thread",
        "hint": "Concurrent execution unit"
      },
      {
        "q": "What is the difference between a process and a thread? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a single-threaded process? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a multi-threaded process? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are WebSockets used for? ___",
        "a": "client",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is Pub/Sub? ___",
        "a": "send",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a ___ condition?",
        "a": "race",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How can race conditions be prevented? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is ___ loading?",
        "a": "Lazy",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is prefetching? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a safe concurrency design goal? ___",
        "a": "data",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Two threads update the same balance variable. Without synchronization, the final value is unpredictable. This is called a:",
        "options": {
          "A": "Stack overflow",
          "B": "Race condition",
          "C": "Memory leak",
          "D": "Deadlock"
        },
        "answer": "B",
        "topic": "Sync vs Async",
        "exp": "Race condition: outcome depends on the timing of concurrent accesses to shared data. Prevent with locks, immutability, message passing, etc.",
        "correctAnswerText": "Race condition"
      },
      {
        "q": "Which describes ASYNCHRONOUS execution?",
        "options": {
          "A": "Tasks run one after another, each waiting",
          "B": "Tasks can start, then finish later; work continues while waiting",
          "C": "Only one thread is allowed",
          "D": "All tasks run in parallel by default"
        },
        "answer": "B",
        "topic": "Sync vs Async",
        "exp": "Async = non-blocking; the caller continues other work while waiting. Sync = step-by-step, blocking.",
        "correctAnswerText": "Tasks can start, then finish later; work continues while waiting"
      },
      {
        "q": "Which BEST distinguishes a Queue from a Pub/Sub model?",
        "options": {
          "A": "Queue is one-to-many; Pub/Sub is one-to-one",
          "B": "Queue is one-to-one; Pub/Sub is one-to-many",
          "C": "They are the same thing",
          "D": "Queues use HTTP only; Pub/Sub uses TCP"
        },
        "answer": "B",
        "topic": "Sync vs Async",
        "exp": "Queues deliver one message to one consumer; Pub/Sub fans out to all subscribers.",
        "correctAnswerText": "Queue is one-to-one; Pub/Sub is one-to-many"
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
        "q": "Java was designed with \"write once, run anywhere\" as a key goal.",
        "answer": true,
        "exp": "Correct — the JVM enables Java bytecode to run on any platform that has a JVM."
      },
      {
        "q": "Native applications run faster than interpreted code.",
        "answer": true,
        "exp": "Correct — native code is compiled directly to machine code, which is the fastest execution method."
      },
      {
        "q": "Flutter and React Native are examples of native development frameworks.",
        "answer": false,
        "exp": "Flutter and React Native are cross-platform frameworks. SwiftUI and Kotlin Compose are native."
      },
      {
        "q": "WebAssembly allows near-native performance in web browsers.",
        "answer": true,
        "exp": "Correct — WASM is a binary format that enables high-performance code in browsers."
      },
      {
        "q": "Interpreted code (Python, JavaScript) is compiled to machine code before execution.",
        "answer": false,
        "exp": "Interpreted code is read line-by-line at runtime. Native code is compiled to machine code ahead of time."
      },
      {
        "q": "the big question in cross-platform development : Whether one codebase can deliver acceptable quality, performance, and user experience across multiple platforms.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "portability : Portability is the ability for software to run on different hardware, operating systems, or runtimes with minimal changes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "native development : Native development uses platform-specific languages, frameworks, and tools to build software optimized for one platform.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "cross-platform development : Cross-platform development uses shared code or frameworks to target multiple platforms from one main codebase.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the benefits of cross-platform development : Benefits include shared code, faster delivery, lower cost, consistent features, and easier support across platforms.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the challenges of cross-platform development : Challenges include performance limits, platform-specific behavior, plugin gaps, UI differences, debugging complexity, and native API access.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Electron : Electron is a framework that bundles Chromium and Node.js so web technologies can be used to build desktop applications.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a downside of Electron : Electron apps can be large and memory-heavy because they bundle a browser runtime.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should a team choose cross-platform : Choose cross-platform when speed, shared logic, consistent UX, and broad reach matter more than maximum native optimization.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should a team choose native development : Choose native when performance, platform-specific UX, deep hardware integration, or operating-system features are critical.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Java's motto was \"write once, ___ anywhere.\"",
        "a": "run",
        "hint": "Execute anywhere"
      },
      {
        "q": "JVM stands for Java ___ Machine.",
        "a": "Virtual",
        "hint": "Abstract execution environment"
      },
      {
        "q": "___ is a binary format that allows C++/Rust to run in web browsers at near-native speed.",
        "a": "WebAssembly",
        "hint": "Also called WASM"
      },
      {
        "q": "Flutter and React Native are examples of ___ frameworks.",
        "a": "cross-platform",
        "hint": "One codebase, many platforms"
      },
      {
        "q": "SwiftUI and Kotlin ___ are native development tools.",
        "a": "Compose",
        "hint": "Android-native UI framework"
      },
      {
        "q": "What is the big question in cross-platform development? ___",
        "a": "user",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is portability? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is native development? ___",
        "a": "uses",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is cross-platform development? ___",
        "a": "uses",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are the benefits of cross-platform development? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are the challenges of cross-platform development? ___",
        "a": "gaps",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is Electron? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a downside of Electron? ___",
        "a": "apps",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ should a team choose cross-platform?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "___ should a team choose native development?",
        "a": "when",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "Which framework bundles Chromium and Node.js to run web apps as desktop apps?",
        "options": {
          "A": "Flutter",
          "B": "Electron",
          "C": "Xamarin",
          "D": "Cordova"
        },
        "answer": "B",
        "topic": "Cross-Platform",
        "exp": "Electron bundles Chromium + Node.js. Used by VS Code, Slack, Discord, Notion, Postman.",
        "correctAnswerText": "Electron"
      },
      {
        "q": "Which BEST describes WebAssembly (WASM)?",
        "options": {
          "A": "A new JavaScript dialect for browsers only",
          "B": "A binary module format compiled from C/C++/Rust/Go/.NET that runs at near-native speed, sandboxed and portable",
          "C": "An HTML replacement",
          "D": "A CSS preprocessor"
        },
        "answer": "B",
        "topic": "Cross-Platform",
        "exp": "WASM is a portable binary format compiled from many languages; runs in browsers, servers, and edge environments.",
        "correctAnswerText": "A binary module format compiled from C/C++/Rust/Go/.NET that runs at near-native speed, sandboxed and portable"
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
        "q": "Refactoring changes the external behavior of the software.",
        "answer": false,
        "exp": "Refactoring improves INTERNAL structure while preserving external behavior — this is its core definition."
      },
      {
        "q": "A rewrite is lower risk than refactoring.",
        "answer": false,
        "exp": "Rewrites are HIGHER risk — they involve rebuilding from scratch, with the danger of losing features and introducing new bugs."
      },
      {
        "q": "Migrating from a monolith to microservices is an example of a rewrite.",
        "answer": true,
        "exp": "Correct — this is a significant architectural change that constitutes a rewrite."
      },
      {
        "q": "Code smells indicate that refactoring may be needed.",
        "answer": true,
        "exp": "Correct — code smells like long methods, duplication, and tangled logic signal refactoring opportunities."
      },
      {
        "q": "Refactoring delivers improvements incrementally over time.",
        "answer": true,
        "exp": "Correct — refactoring is incremental, unlike rewrites which tend to be all-at-once."
      },
      {
        "q": "the decision framework for refactor vs rewrite : Consider risk, cost, deadlines, test coverage, architecture limits, team knowledge, business value, and whether behavior must remain stable.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "microservices : Microservices are small independently deployable services organized around business capabilities.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "refactoring toward microservices mean : It means gradually extracting pieces of a system into services while keeping the larger system working.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "rewriting as microservices mean : It means rebuilding the system around a microservice architecture, usually with higher risk and major design changes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the Strangler Fig pattern : A migration pattern where new functionality gradually wraps and replaces parts of an old system until the legacy system can be retired.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a warning sign that refactoring may not be enough : The architecture fundamentally cannot support required scale, reliability, security, or business direction.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What organizational factors affect refactor vs rewrite decisions : Team skill, ownership, deadlines, budget, stakeholder patience, documentation, testing culture, and operational risk.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a modular monolith : A monolith organized into clear internal modules with strong boundaries, making it cleaner without requiring distributed services.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "microservices make a system worse : They add deployment, networking, data consistency, monitoring, and operational complexity if the team is not ready.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What practical guideline should teams follow before rewriting : Do not rewrite just because code is ugly; justify it with clear business, technical, and risk-based reasons.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "Refactoring improves internal structure without changing ___ behavior.",
        "a": "external",
        "hint": "What users see"
      },
      {
        "q": "A ___ rebuilds the system from scratch with new tech or design.",
        "a": "rewrite",
        "hint": "Start fresh"
      },
      {
        "q": "Code smells like long methods and ___ code signal the need for refactoring.",
        "a": "duplicate",
        "hint": "Repeated code"
      },
      {
        "q": "Refactor has ___ risk; rewrite has higher risk.",
        "a": "lower",
        "hint": "Safer option"
      },
      {
        "q": "Replacing PHP with Node.js or migrating monolith → microservices is an example of a ___.",
        "a": "rewrite",
        "hint": "New foundation"
      },
      {
        "q": "What is the decision framework for refactor vs rewrite? ___",
        "a": "risk",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are microservices? ___",
        "a": "small",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does refactoring toward microservices mean? ___",
        "a": "into",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does rewriting as microservices mean? ___",
        "a": "with",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the Strangler Fig pattern? ___",
        "a": "where",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a warning sign that refactoring may not be enough? ___",
        "a": "scale",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What organizational factors affect refactor vs rewrite decisions? ___",
        "a": "Team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a modular monolith? ___",
        "a": "into",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why can microservices make a system worse? ___",
        "a": "They",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What practical guideline should teams follow before rewriting? ___",
        "a": "just",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": []
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
        "q": "Defensive programming assumes all inputs will be valid.",
        "answer": false,
        "exp": "Defensive programming assumes inputs may be INVALID and validates them explicitly."
      },
      {
        "q": "Guard clauses help avoid deep nesting by handling edge cases early.",
        "answer": true,
        "exp": "Correct — a guard clause returns early for invalid conditions instead of wrapping code in nested ifs."
      },
      {
        "q": "\"Fail fast, fail clearly\" means silently ignoring errors and continuing.",
        "answer": false,
        "exp": "\"Fail fast\" means detecting errors IMMEDIATELY and communicating them explicitly — the opposite of silent failures."
      },
      {
        "q": "Defensive programming complements testing but does not replace it.",
        "answer": true,
        "exp": "Correct — from the slides: it \"complements testing, not replaces it.\""
      },
      {
        "q": "Good defensive code \"fails safe\" rather than \"fails hard.\"",
        "answer": true,
        "exp": "Correct — the goal is controlled, predictable failure rather than crashes or undefined behavior."
      },
      {
        "q": "defensive programming important for user input : User input can be missing, malformed, malicious, too large, or unexpected, so validating it prevents errors and vulnerabilities.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an assertion : An assertion checks that a condition expected by the programmer is true, often used to catch programmer errors during development.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a fail-safe default : A default behavior that chooses the safest option when something is unknown, invalid, or unavailable.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "handling exceptions gracefully mean : It means catching expected failures, giving useful feedback, logging details, and avoiding crashes or silent corruption.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "silently catching exceptions dangerous : It hides real failures, makes debugging harder, and can leave the system in an invalid or insecure state.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should defensive code avoid assumptions about environment : Files, networks, permissions, APIs, configurations, and dependencies can fail or differ across machines and deployments.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "guard clauses improve readability : They handle invalid cases early and keep the main logic less nested and easier to follow.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "an edge case : An unusual or boundary input such as null, empty values, zero, maximum limits, invalid formats, or missing data.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a common defensive programming anti-pattern : Ignoring errors, catching everything silently, trusting all input, overusing global state, or returning unclear failure values.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "defensive programming connect to real-world production systems : Production systems face unreliable users, networks, files, APIs, and dependencies, so defensive code helps keep failures controlled.",
        "answer": true,
        "exp": "This is correct according to the course material."
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
        "q": "A function has many nested if statements that check for valid inputs before doing the real work. Which defensive technique should refactor this?",
        "options": {
          "A": "Magic numbers",
          "B": "Guard clauses (early returns)",
          "C": "Singleton instances",
          "D": "Silent exception catches"
        },
        "answer": "B",
        "topic": "Defensive Programming",
        "exp": "Guard clauses do early returns for invalid conditions, flattening deep nesting and reducing missed branches.",
        "correctAnswerText": "Guard clauses (early returns)"
      },
      {
        "q": "Defensive programming and testing differ in that:",
        "options": {
          "A": "Testing replaces the need for defensive code",
          "B": "Defensive programming prevents problems inside the code; testing detects them afterwards",
          "C": "Defensive programming covers UI only",
          "D": "Testing only matters in TDD"
        },
        "answer": "B",
        "topic": "Defensive Programming",
        "exp": "Defensive code prevents bad states; tests detect them. They complement each other.",
        "correctAnswerText": "Defensive programming prevents problems inside the code; testing detects them afterwards"
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
        "q": "When a feature flag is off, the feature's code is deleted from the codebase.",
        "answer": false,
        "exp": "The code EXISTS even when the feature is hidden or disabled — the flag just controls whether it's active."
      },
      {
        "q": "Deployment and release always happen at the same time.",
        "answer": false,
        "exp": "Feature flags allow deployment and release to happen at DIFFERENT times — this is one of their key benefits."
      },
      {
        "q": "Experiment flags are used for A/B testing different feature versions.",
        "answer": true,
        "exp": "Correct — experiment flags compare multiple versions for controlled evaluation."
      },
      {
        "q": "A kill switch is a type of feature flag that disables functionality quickly.",
        "answer": true,
        "exp": "Correct — kill switches provide an emergency off switch for problematic features."
      },
      {
        "q": "Feature flags can be changed based on user, role, region, or runtime condition.",
        "answer": true,
        "exp": "Correct — this granular control is what makes feature flags so powerful."
      },
      {
        "q": "feature flags live : Feature flags can live in UI code, middle layers, backend services, configuration systems, databases, or feature management platforms.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "hiding a feature in the UI not real security : Users can bypass UI controls, so backend authorization must still enforce access rules.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "operations flags used for : Operations flags control runtime behavior such as enabling/disabling expensive processes, scaling behavior, or emergency operational changes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "permission or entitlement flags used for : They control access based on roles, users, organizations, subscriptions, plans, quotas, or privileges.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "feature flags support SaaS tiers : They enable or disable features based on pricing tier, subscription level, usage limits, or customer entitlements.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "user segmentation in feature flags : User segmentation turns features on for selected groups such as beta users, regions, roles, accounts, percentages, or internal staff.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "feature flags used in games : They can control seasonal events, difficulty tuning, rewards, cosmetics, experiments, live balancing, or emergency disabling of broken features.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "feature flag best practices : Name flags clearly, document purpose, assign owners, test both states, monitor behavior, and remove old flags after use.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "common feature flag risks : Risks include stale flags, complex conditional logic, inconsistent environments, hidden dependencies, and security mistakes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "When should you not use a feature flag : Avoid flags when a simple configuration, small code change, or normal release process is cleaner and the flag would add unnecessary complexity.",
        "answer": true,
        "exp": "This is correct according to the course material."
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
        "q": "Which is a HIGH-priority feature flag used to quickly shut off a misbehaving feature in production?",
        "options": {
          "A": "Release flag",
          "B": "Experiment flag",
          "C": "Kill switch",
          "D": "Tier flag"
        },
        "answer": "C",
        "topic": "Feature Flags",
        "exp": "Kill switches are emergency off-switches for features causing problems. Faster than a redeploy.",
        "correctAnswerText": "Kill switch"
      },
      {
        "q": "Which feature flag type would you use to compare two layouts and choose the one with better engagement?",
        "options": {
          "A": "Kill switch",
          "B": "Experiment flag",
          "C": "Tier flag",
          "D": "Permission flag"
        },
        "answer": "B",
        "topic": "Feature Flags",
        "exp": "Experiment flags drive A/B tests — comparing variants on real user behavior.",
        "correctAnswerText": "Experiment flag"
      },
      {
        "q": "Which is NOT a feature flag category?",
        "options": {
          "A": "Release flag",
          "B": "Experiment flag",
          "C": "Operations flag",
          "D": "Authentication flag"
        },
        "answer": "D",
        "topic": "Feature Flags",
        "exp": "Common types include release, experiment, operations, permission/entitlement, tier, and kill switches. 'Authentication flag' is not a standard category.",
        "correctAnswerText": "Authentication flag"
      },
      {
        "q": "Which is TRUE about feature flags?",
        "options": {
          "A": "Hiding a button in the UI is sufficient access control",
          "B": "They allow deployment and release to happen at different times",
          "C": "They eliminate the need for testing",
          "D": "Old flags should never be removed"
        },
        "answer": "B",
        "topic": "Feature Flags",
        "exp": "Decouple DEPLOY (code present) from RELEASE (users granted access). UI hiding is NOT security; backend enforces.",
        "correctAnswerText": "They allow deployment and release to happen at different times"
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
        "q": "MVP means building as many features as possible before launch.",
        "answer": false,
        "exp": "MVP = MINIMUM viable — only essential functionality needed for the user stories."
      },
      {
        "q": "A Code Freeze allows new features to be added as long as they're small.",
        "answer": false,
        "exp": "Code Freeze means NO new features — only fixes, tests, and documentation updates."
      },
      {
        "q": "\"Cutting is not quitting\" — cutting features during code freeze is a form of focus.",
        "answer": true,
        "exp": "Correct — a smaller working product beats a large unfinished one."
      },
      {
        "q": "A viable MVP must be reliable, stable, and demonstrable.",
        "answer": true,
        "exp": "Correct — \"Viable\" means it can actually be shown or handed off."
      },
      {
        "q": "During the final sprint, only the lead developer needs to test all parts.",
        "answer": false,
        "exp": "ALL team members should test all parts and be familiar with all layers."
      },
      {
        "q": "the late-stage trap : The late-stage trap is when teams add last-minute features, neglect testing, ignore documentation, and risk destabilizing the product before delivery.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "How should a team re-evaluate an MVP near the deadline : The team should confirm which features are essential, usable, testable, stable, and directly tied to the core user experience.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What should be moved to future enhancements : Features that are nice-to-have, risky, untested, nonessential, or likely to break stable functionality should be postponed.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What should happen during the final sprint : The team should stabilize features, fix known issues, run regression tests, prepare the demo, polish UI, and ensure everyone understands the system.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "code freeze matter : Code freeze protects stability by stopping new features and focusing the team on fixes, tests, documentation, and release readiness.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What belongs on a final polish checklist : UI cleanup, error handling, documentation, demo flow, test coverage, known bug review, consistent data, and deployment readiness.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the “WOW factor” in a final project : A polished or impressive detail that improves the demo without risking the core functionality.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should the WOW factor be handled carefully : It should enhance the product only after the MVP is stable, not distract the team or break essential features.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the best mindset near code freeze : Prioritize working, tested, demonstrable software over adding more features.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a smaller working product better than a larger unfinished one : A stable product demonstrates value and reliability, while an unfinished product creates risk and may fail during evaluation.",
        "answer": true,
        "exp": "This is correct according to the course material."
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
        "q": "Which is the BEST late-stage strategy when nearing a deadline?",
        "options": {
          "A": "Add more features for impact",
          "B": "Refactor the entire codebase",
          "C": "Cut scope, stabilize, polish, rehearse",
          "D": "Switch tech stacks"
        },
        "answer": "C",
        "topic": "MVP / Code Freeze",
        "exp": "Late stage = scope control. Cut what isn't essential, stabilize, polish, and rehearse the demo.",
        "correctAnswerText": "Cut scope, stabilize, polish, rehearse"
      },
      {
        "q": "Which is the MAIN purpose of a code freeze?",
        "options": {
          "A": "Permanently halt development",
          "B": "Hide bugs from QA",
          "C": "Stabilize the build — only fixes, tests, and doc updates allowed",
          "D": "Switch to a new tech stack"
        },
        "answer": "C",
        "topic": "MVP/Code Freeze",
        "exp": "Code freeze = no new features; only fixes/tests/docs. Goal: stabilize for release.",
        "correctAnswerText": "Stabilize the build — only fixes, tests, and doc updates allowed"
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
        "q": "According to the slides, 70–80% of engineering time is spent coding new features.",
        "answer": false,
        "exp": "70-80% is spent DIAGNOSING, not coding — this is why troubleshooting skills are so valuable."
      },
      {
        "q": "Postman and Swagger are tools for diagnosing integration issues.",
        "answer": true,
        "exp": "Correct — these tools help test API mismatches and version drift between services."
      },
      {
        "q": "A good troubleshooter treats symptoms as conclusions rather than clues.",
        "answer": false,
        "exp": "The mindset says \"treat symptoms as CLUES, not conclusions\" — investigate further."
      },
      {
        "q": "Profilers and traces are used to diagnose performance issues like slow queries.",
        "answer": true,
        "exp": "Correct — profilers and distributed traces help identify bottlenecks."
      },
      {
        "q": "RCA (Root Cause Analysis) only applies to technical issues, not team/process issues.",
        "answer": false,
        "exp": "RCA applies to both technical failures AND human/process errors — from the slides."
      },
      {
        "q": "the first step in systematic debugging : Reproduce the issue reliably so the team can observe, test, and verify whether a fix works.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "What should happen after reproducing a bug : The team should isolate the problem, gather evidence, form hypotheses, test one change at a time, and document the result.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "tools of the trade for troubleshooting : Logs, debuggers, profilers, traces, monitoring dashboards, network tools, test suites, Postman, Swagger, and version history.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a debugging anti-pattern : Changing several things at once, guessing without data, ignoring logs, blaming people, or declaring a fix without reproducing the issue.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the 5 Whys method : A root cause analysis technique where the team repeatedly asks “why?” until it reaches the underlying cause.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a Fishbone/Ishikawa diagram used for : It visually organizes possible causes of a problem into categories so teams can reason about root causes systematically.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "Why should RCA focus on facts, not blame : Blame discourages honesty; facts help the team fix systems, processes, and technical causes that allowed the issue.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "communication important under pressure : Clear communication reduces confusion, coordinates work, prevents duplicate effort, and keeps stakeholders informed during incidents.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "documentation prevent future problems : Documentation preserves decisions, fixes, runbooks, known issues, and lessons learned so teams do not repeat the same mistakes.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "“symptoms are clues, not conclusions” mean : Visible failures point toward a problem, but the real cause may be deeper in code, configuration, process, or infrastructure.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "___ to 80% of engineering time is spent diagnosing, not coding.",
        "a": "70",
        "hint": "Majority of time"
      },
      {
        "q": "\"Think of a bug as a ___ — your job is to trace its plot.\"",
        "a": "story",
        "hint": "Narrative analogy"
      },
      {
        "q": "Postman and Swagger are tools for diagnosing ___ issues.",
        "a": "integration",
        "hint": "API mismatch"
      },
      {
        "q": "Profilers and traces help diagnose ___ issues like slow queries.",
        "a": "performance",
        "hint": "Speed and memory"
      },
      {
        "q": "___ Root Cause Analysis identifies the underlying cause, not just the symptom.",
        "a": "RCA",
        "hint": "Acronym"
      },
      {
        "q": "What is the first step in systematic debugging? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What should happen after reproducing a bug? ___",
        "a": "team",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What are tools of the trade for troubleshooting? ___",
        "a": "Logs",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a debugging anti-pattern? ___",
        "a": "once",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the 5 Whys method? ___",
        "a": "root",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a Fishbone/Ishikawa diagram used for? ___",
        "a": "into",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why should RCA focus on facts, not blame? ___",
        "a": "help",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why is communication important under pressure? ___",
        "a": "work",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How does documentation prevent future problems? ___",
        "a": "same",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What does “symptoms are clues, not conclusions” mean? ___",
        "a": "real",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "You discover an outage was caused because a background job loaded too much data into memory. Asking 'why?' repeatedly until you trace it to a missing review checklist is an example of:",
        "options": {
          "A": "Pair programming",
          "B": "5 Whys",
          "C": "Continuous Integration",
          "D": "Strangler Fig"
        },
        "answer": "B",
        "topic": "Troubleshooting",
        "exp": "5 Whys repeatedly drills into 'why?' until you reach a root cause (often a process gap), not just the symptom.",
        "correctAnswerText": "5 Whys"
      },
      {
        "q": "Which is a DEBUGGING anti-pattern?",
        "options": {
          "A": "Reproducing the bug reliably",
          "B": "Reading logs carefully",
          "C": "Adding regression tests after the fix",
          "D": "Changing several variables at once to 'see what happens'"
        },
        "answer": "D",
        "topic": "Troubleshooting",
        "exp": "Change one variable at a time — otherwise you can't isolate the cause.",
        "correctAnswerText": "Changing several variables at once to 'see what happens'"
      },
      {
        "q": "Which is the FIRST step in systematic debugging?",
        "options": {
          "A": "Push a panic commit",
          "B": "Reproduce the issue reliably",
          "C": "Open a postmortem doc",
          "D": "Change three variables at once"
        },
        "answer": "B",
        "topic": "Troubleshooting",
        "exp": "Reproduce first; without reproduction you're guessing. Then isolate, instrument, hypothesize, validate, document.",
        "correctAnswerText": "Reproduce the issue reliably"
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
        "q": "In SemVer, a MAJOR version bump means backward-compatible new features were added.",
        "answer": false,
        "exp": "MINOR = new compatible features. MAJOR = breaking changes that require users to update their code."
      },
      {
        "q": "SemVer format is MAJOR.MINOR.PATCH.",
        "answer": true,
        "exp": "Correct — e.g., v2.4.6 where 2=major, 4=minor, 6=patch."
      },
      {
        "q": "A PATCH version bump in SemVer indicates a breaking API change.",
        "answer": false,
        "exp": "PATCH = bug fixes with no behavior change. Breaking changes require a MAJOR version bump."
      },
      {
        "q": "Date-based versioning is used by Ubuntu and JetBrains.",
        "answer": true,
        "exp": "Correct — e.g., Ubuntu 22.04 (April 2022). Great for frequent releases."
      },
      {
        "q": "Without versioning, you cannot meaningfully say \"this bug was fixed in 1.2.3.\"",
        "answer": true,
        "exp": "Correct — this is from the slides as a key reason versioning exists."
      },
      {
        "q": "every release need to be traceable : Traceability lets teams connect releases to commits, issues, bugs, fixes, documentation, and customer reports.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "sequential versioning : A simple versioning approach that uses increasing numbers such as 1, 2, 3 for releases.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "build-based versioning : A versioning approach that includes build numbers, such as 1.0.1342, to identify specific generated builds.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "APIs need versioning : API versioning keeps existing clients stable while allowing the server to introduce breaking changes or new behavior.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "URL-path API versioning : Putting the version in the path, such as /api/v1/users or /api/v2/users.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "header-based API versioning : Clients send the desired API version in a request header instead of putting it in the URL path.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a GitHub release : A GitHub release packages a versioned snapshot of code with tags, release notes, assets, and change information.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "a version tag in Git : A tag marks a specific commit as an important version or release point, such as v1.2.0.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "GitHub labels support version readiness : Labels can track issues or pull requests by status, release target, severity, priority, or readiness for a version.",
        "answer": true,
        "exp": "This is correct according to the course material."
      },
      {
        "q": "the final takeaway of versioning : Versioning is not just numbering; it is communication, traceability, stability, and coordination across code, releases, users, and teams.",
        "answer": true,
        "exp": "This is correct according to the course material."
      }
    ],
    "fillinblank": [
      {
        "q": "SemVer format is ___.MINOR.PATCH.",
        "a": "MAJOR",
        "hint": "First number, breaking changes"
      },
      {
        "q": "MAJOR = breaking changes, MINOR = new features, PATCH = ___ fixes.",
        "a": "bug",
        "hint": "Small corrections"
      },
      {
        "q": "SemVer pre-release suffixes include -alpha, -beta, and ___.",
        "a": "-rc.1",
        "hint": "Release candidate"
      },
      {
        "q": "Ubuntu uses ___ versioning (e.g., 22.04 = April 2022).",
        "a": "date-based",
        "hint": "Year.Month format"
      },
      {
        "q": "The ^ notation in npm (e.g., ^1.2.0) allows auto-updates for safe ___ and MINOR versions.",
        "a": "PATCH",
        "hint": "Bug fixes are safe"
      },
      {
        "q": "Why does every release need to be traceable? ___",
        "a": "lets",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is sequential versioning? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is build-based versioning? ___",
        "a": "that",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "Why do APIs need versioning? ___",
        "a": "keeps",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is URL-___ API versioning?",
        "a": "path",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is header-based API versioning? ___",
        "a": "send",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a GitHub release? ___",
        "a": "code",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is a version tag in Git? ___",
        "a": "such",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "How can GitHub labels support version readiness? ___",
        "a": "pull",
        "hint": "Review the flashcard for this topic"
      },
      {
        "q": "What is the final takeaway of versioning? ___",
        "a": "just",
        "hint": "Review the flashcard for this topic"
      }
    ],
    "multiplechoice": [
      {
        "q": "You bump your library from 1.4.7 to 2.0.0. What does this signal?",
        "options": {
          "A": "Bug fix only",
          "B": "Backward-compatible feature additions",
          "C": "Breaking API changes",
          "D": "Pre-release"
        },
        "answer": "C",
        "topic": "Versioning",
        "exp": "MAJOR version bumps signal breaking changes. MINOR = new features (compatible). PATCH = bug fixes.",
        "correctAnswerText": "Breaking API changes"
      },
      {
        "q": "A team adds an /api/v2/ endpoint while keeping /api/v1/ alive for existing clients. This is an example of:",
        "options": {
          "A": "URL-path API versioning",
          "B": "Header-based API versioning",
          "C": "Subdomain versioning",
          "D": "Build-based versioning"
        },
        "answer": "A",
        "topic": "Versioning",
        "exp": "Versioning in the URL path (/v1/, /v2/) is the most visible and common method.",
        "correctAnswerText": "URL-path API versioning"
      },
      {
        "q": "A team uses /api/v1/ today. They release a backward-incompatible v2. Per SemVer, the library version most likely became:",
        "options": {
          "A": "1.0.1 → 1.0.2",
          "B": "1.5.0 → 1.6.0",
          "C": "1.5.0 → 2.0.0",
          "D": "1.5.0 → 1.5.1"
        },
        "answer": "C",
        "topic": "Versioning",
        "exp": "Breaking changes bump the MAJOR version: 1.x → 2.0.0.",
        "correctAnswerText": "1.5.0 → 2.0.0"
      }
    ]
  }
];
