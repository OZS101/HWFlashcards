/* ══════════════════════════════════════════════════════════════
   DECK DATA — All 21 CMPS 3350 Lecture Modules
══════════════════════════════════════════════════════════════ */
const DECKS = [
{
  id:'req-eng', title:'Requirements Engineering', icon:'📋', color:'#b8ff57',
  cards:[
    {q:'What are the three elements of the classic software trilemma?', a:'Good, Fast, and Cheap — you can only pick two.'},
    {q:'What are the main requirements elicitation techniques?', a:'Interviews, focus groups, surveys, shadowing/observation, copycatting, document analysis, and prototyping.'},
    {q:'What are functional requirements? Give examples.', a:'Behaviors the system must perform — e.g., Search, Authentication, Add to Cart, Take Payment.'},
    {q:'What are Non-Functional Requirements (NFRs)? Give examples.', a:'Quality attributes the system must have — e.g., Performance, Security, Compatibility, Compliance.'},
    {q:'What is the standard user story format?', a:'"As a [user persona], I want [describe need] so that [describe benefit]"'},
    {q:'What is an Epic in agile story writing?', a:'A large, high-level requirement that describes a broad feature, meant to be broken into smaller user stories later.'},
    {q:'What are the two types of project decomposition (slicing)?', a:'Vertical (fully functional features end-to-end) and Horizontal (layer-based implementation).'},
    {q:'List four common requirements gathering challenges.', a:'Lack of stakeholder involvement, ambiguous/unclear input, conflicting data, feature/scope creep, and unrealistic expectations.'},
    {q:'What is the difference between an Epic and a User Story?', a:'An Epic is a large, broad requirement; a User Story is a smaller, specific requirement derived from an Epic that can be completed in a sprint.'},
  ],
  truefalse:[
    {q:'The classic trilemma states you can have Good, Fast, AND Cheap all at once.', answer:false, exp:'You can only pick two — Good+Fast is expensive, Good+Cheap is slow, Fast+Cheap is lower quality.'},
    {q:'Shadowing and observation are valid requirements elicitation techniques.', answer:true, exp:'Shadowing (watching users in their natural environment) is a key elicitation method.'},
    {q:'Non-functional requirements include things like Search and Authentication.', answer:false, exp:'Search and Authentication are functional requirements. NFRs are quality attributes like Performance and Security.'},
    {q:'Vertical slicing means implementing one layer (e.g., UI only) at a time.', answer:false, exp:'Vertical slicing means delivering a fully functional feature end-to-end. Horizontal slicing is layer-based.'},
    {q:'Feature/Scope Creep is a common requirements gathering challenge.', answer:true, exp:'Scope creep — uncontrolled growth of requirements — is one of the most common project challenges.'},
  ],
  fillinblank:[
    {q:'The classic software trilemma consists of Good, Fast, and ___.', a:'Cheap', hint:'Think budget'},
    {q:'As a [user persona], I want [describe need] so that ___.', a:'[describe benefit]', hint:'Why the user wants it'},
    {q:'A large requirement broken into smaller user stories is called an ___.', a:'Epic', hint:'Think large-scale story'},
    {q:'___ requirements include performance, security, and compliance.', a:'Non-Functional', hint:'Not about behavior, about quality'},
    {q:'Two types of project slicing are Vertical and ___.', a:'Horizontal', hint:'The other axis'},
  ]
},
{
  id:'agile', title:'Agile & Scrum', icon:'🔄', color:'#57d9ff',
  cards:[
    {q:'What is Agile?', a:'An iterative and incremental approach to project management that prioritizes flexibility, collaboration, and customer feedback.'},
    {q:'When was the Agile Manifesto published and who wrote it?', a:'2001, by 17 software practitioners who met in Snowbird, Utah.'},
    {q:'What are the 4 core values of the Agile Manifesto?', a:'1) Individuals & interactions over processes/tools\n2) Working software over documentation\n3) Customer collaboration over contracts\n4) Responding to change over following a plan'},
    {q:'When was Scrum formalized and by whom?', a:'1995 by Jeff Sutherland and Ken Schwaber.'},
    {q:'What 1940s concept influenced Agile methodology?', a:'Kanban, developed at Toyota with Lean roots.'},
    {q:'What is the goal of Agile?', a:'Deliver increments of working software quickly, with close collaboration instead of rigid planning.'},
    {q:'What is SAFe and when was it published?', a:'Scaled Agile Framework (SAFe), published in 2011 by Dean Leffingwell.'},
    {q:'What is Extreme Programming (XP) and who created it?', a:'XP is an Agile methodology created by Kent Beck, originating from the Chrysler C3 project (1996–1999).'},
  ],
  truefalse:[
    {q:'Agile prioritizes rigid planning over responding to change.', answer:false, exp:'Agile values "Responding to change over following a plan" — flexibility is core.'},
    {q:'Scrum was formalized in 1995 by Sutherland and Schwaber.', answer:true, exp:'Correct. Though Scrum inspiration came from a 1986 Takeuchi/Nonaka paper.'},
    {q:'The Agile Manifesto was published in 2001.', answer:true, exp:'Correct. It formally unified various lightweight methodologies.'},
    {q:'Agile values processes and tools over individuals and interactions.', answer:false, exp:'The Manifesto states the opposite: "Individuals and interactions over processes and tools."'},
    {q:'Kanban originated in the 1940s at Toyota.', answer:true, exp:'Correct. Kanban grew from Toyota\'s Lean manufacturing roots in the 1940s.'},
  ],
  fillinblank:[
    {q:'Agile is ___ and incremental approach to project management.', a:'iterative', hint:'Repeating cycles'},
    {q:'The Agile Manifesto was published in ___.', a:'2001', hint:'Early 2000s'},
    {q:'Scrum was formalized by Sutherland and ___.', a:'Schwaber', hint:'Ken ___'},
    {q:'Agile values customer ___ over contracts.', a:'collaboration', hint:'Working together'},
    {q:'Kanban originated at ___ with Lean roots in the 1940s.', a:'Toyota', hint:'Japanese car company'},
  ]
},
{
  id:'scm', title:'SCM, Git & GitHub', icon:'🌿', color:'#ff9f57',
  cards:[
    {q:'What does SCM stand for and what is it?', a:'Source Control Management (also called Version Control Systems/VCS). It tracks and manages changes to source code over time.'},
    {q:'What is the difference between centralized and distributed VCS?', a:'Centralized (SVN, Perforce): single central repository, always needs network. Distributed (Git, Mercurial): every user has a full copy, full offline work possible.'},
    {q:'What was the first centralized VCS and when was it created?', a:'SCCS (Source Code Control System) in the 1970s–1980s.'},
    {q:'When did Git emerge and what type of VCS is it?', a:'2000s. Git is a distributed VCS and is currently the most widely used.'},
    {q:'Name three modern cloud-based SCM platforms.', a:'GitHub, GitLab, and Bitbucket (also Azure DevOps).'},
    {q:'What are the key advantages of distributed VCS over centralized?', a:'Full offline work, fast branching, local commits, full history clone, better merging.'},
    {q:'In distributed VCS, how does branching differ from centralized?', a:'Branching is fast and cheap — branches are "first-class citizens" with no network needed. In centralized (e.g., SVN), branching is often slow and painful.'},
    {q:'What is CVS and what replaced it?', a:'Concurrent Versions System — a centralized VCS from the 1990s. It was replaced by SVN and later Git.'},
  ],
  truefalse:[
    {q:'Git is a centralized version control system.', answer:false, exp:'Git is distributed — every user has a full clone of the repository including full history.'},
    {q:'In a centralized VCS, you can commit code without network access.', answer:false, exp:'Centralized VCS requires network for most actions including commits.'},
    {q:'Distributed VCS allows fully offline operations including commit, branch, and log.', answer:true, exp:'Correct — distributed systems like Git store the full repo locally.'},
    {q:'GitHub is a version control system.', answer:false, exp:'GitHub is a cloud platform for hosting Git repositories, not a VCS itself. Git is the VCS.'},
    {q:'In Git, branching is fast and inexpensive compared to SVN.', answer:true, exp:'Correct — Git branches are lightweight pointers, making branching nearly instant.'},
  ],
  fillinblank:[
    {q:'SCM stands for Source Control ___.', a:'Management', hint:'How you handle versions'},
    {q:'Git is a ___ version control system (not centralized).', a:'distributed', hint:'Everyone has a copy'},
    {q:'GitHub, GitLab, and ___ are modern cloud SCM platforms.', a:'Bitbucket', hint:'Atlassian\'s platform'},
    {q:'In centralized VCS, commits go directly to the ___ repository.', a:'central', hint:'The one master copy'},
    {q:'SCCS, RCS, CVS, and SVN are all examples of ___ VCS.', a:'centralized', hint:'Single server'},
  ]
},
{
  id:'greenfield', title:'Greenfield vs Brownfield', icon:'🏗️', color:'#c084fc',
  cards:[
    {q:'What is Greenfield development?', a:'Starting a project from scratch with no existing systems, codebases, or constraints. Developers have complete freedom in technology stack, architecture, and design.'},
    {q:'What is Brownfield development?', a:'Working within or building on top of an existing system, often with legacy code, infrastructure, or organizational processes. Involves refactoring, modernizing, or extending existing solutions.'},
    {q:'Which type of project typically has higher flexibility: Greenfield or Brownfield?', a:'Greenfield — developers have high freedom to choose any stack or design. Brownfield has low flexibility due to existing integrations.'},
    {q:'What type of risk is more common in Greenfield vs Brownfield projects?', a:'Greenfield: market risk (will it succeed?). Brownfield: technical risk (can we modernize safely?).'},
    {q:'What skill set is most demanded in Brownfield projects?', a:'Strong debugging, refactoring, and system analysis skills.'},
    {q:'What type of organizations typically do Greenfield development?', a:'Startups and new product teams. Brownfield is more common in enterprises and mature industries.'},
  ],
  truefalse:[
    {q:'Greenfield development means working with an existing legacy codebase.', answer:false, exp:'Greenfield means starting from scratch — "green fields" with no existing constraints.'},
    {q:'Brownfield projects typically involve refactoring, modernizing, or extending existing systems.', answer:true, exp:'Correct. Brownfield = previously developed systems, like previously industrial land.'},
    {q:'Greenfield projects have low flexibility in choosing technology stacks.', answer:false, exp:'Greenfield has HIGH flexibility — developers can choose any stack or design.'},
    {q:'Brownfield development is more common in startups.', answer:false, exp:'Brownfield is more common in enterprises and mature industries. Startups typically do Greenfield.'},
    {q:'Technical risk (can we modernize safely?) is the primary risk in Brownfield projects.', answer:true, exp:'Correct. Market risk (will it succeed?) is the primary Greenfield risk.'},
  ],
  fillinblank:[
    {q:'___ development means starting a project from scratch with no existing systems.', a:'Greenfield', hint:'Think open fields'},
    {q:'___ development involves working on an existing legacy system.', a:'Brownfield', hint:'Previously developed land'},
    {q:'Brownfield requires strong ___, refactoring, and system skills.', a:'debugging', hint:'Finding problems in old code'},
    {q:'Greenfield has ___ flexibility, Brownfield has low flexibility.', a:'high', hint:'Complete freedom'},
    {q:'Greenfield faces ___ risk; Brownfield faces technical risk.', a:'market', hint:'Will anyone buy it?'},
  ]
},
{
  id:'codequality', title:'Code Quality', icon:'✨', color:'#ffd057',
  cards:[
    {q:'What is Code Quality?', a:'A measure of how well code adheres to standards, practices, and maintainability principles.'},
    {q:'What is the difference between internal and external code quality?', a:'Internal: structure, readability, maintainability. External: correctness, performance, security, usability.'},
    {q:'List the 7 attributes of code quality from the slides.', a:'Readability, Maintainability, Reliability, Performance, Testability, Scalability, Appropriateness.'},
    {q:'What is a linter?', a:'A static analysis tool that analyzes source code to flag potential errors, bugs, stylistic issues, and suspicious constructs. It acts as an automated code reviewer.'},
    {q:'What is Cyclomatic Complexity?', a:'A complexity metric that measures the number of linearly independent paths through a program — higher values indicate more complex, harder-to-test code.'},
    {q:'Name four static analysis tools mentioned in the slides.', a:'SonarQube, ESLint, Pylint, PMD.'},
    {q:'What are examples of "Dead or Redundant Code" flagged by static analysis?', a:'Unused variables, unused functions/methods, unreachable code after return/throw, duplicate code fragments.'},
    {q:'What naming convention issues does static analysis flag?', a:'Names not following camelCase/PascalCase/snake_case, single-letter names for non-loop variables, magic numbers/strings instead of named constants.'},
  ],
  truefalse:[
    {q:'External code quality refers to internal structure and readability.', answer:false, exp:'External quality is about correctness, performance, security, and usability — things the user sees.'},
    {q:'A linter is an automated code reviewer that flags stylistic and error-prone code.', answer:true, exp:'Correct — a linter analyzes source code for issues without executing it.'},
    {q:'SonarQube and ESLint are examples of static analysis tools.', answer:true, exp:'Correct. Pylint and PMD are also mentioned in the slides.'},
    {q:'Cyclomatic complexity measures code readability.', answer:false, exp:'Cyclomatic complexity measures the number of independent paths through code — it\'s a complexity/testability metric.'},
    {q:'Magic numbers/strings instead of named constants is flagged by static analysis tools.', answer:true, exp:'Correct — "magic" literal values make code harder to understand and maintain.'},
  ],
  fillinblank:[
    {q:'Code Quality measures how well code adheres to standards and ___ principles.', a:'maintainability', hint:'How easy it is to change'},
    {q:'A ___ is a tool that analyzes source code to flag errors and stylistic issues.', a:'linter', hint:'Think ESLint, Pylint'},
    {q:'___ complexity measures the number of independent paths through code.', a:'Cyclomatic', hint:'Named after cycles/paths'},
    {q:'Internal code quality covers structure, readability, and ___.', a:'maintainability', hint:'Easy to modify'},
    {q:'SonarQube, ESLint, Pylint, and ___ are static analysis tools.', a:'PMD', hint:'Java-focused tool'},
  ]
},
{
  id:'patterns', title:'Software Patterns', icon:'🧩', color:'#57ffd8',
  cards:[
    {q:'What are software patterns?', a:'Reusable solutions to recurring problems. Not code copy-paste, but generalizable templates that exist at multiple levels (low, mid, high).'},
    {q:'What are the three levels of software patterns?', a:'Low-level (language idioms/syntax), Mid-level (design patterns like MVC/Observer/Factory), High-level (architecture patterns like Microservices/CQRS).'},
    {q:'What is a language idiom in programming?', a:'A natural, commonly accepted way of solving problems in a specific language — makes code readable, concise, and "native-feeling."'},
    {q:'What is the difference between an Idiom and a Design Pattern?', a:'Idioms are language-specific and make code readable. Patterns are language-agnostic and solve architectural/design problems.'},
    {q:'Give examples of mid-level (design) patterns.', a:'Observer, Factory, MVC (Model-View-Controller), Strategy, Builder, Repository, Adapter.'},
    {q:'Give examples of high-level (architecture) patterns.', a:'Microservices, CQRS (Command Query Responsibility Segregation), Onion Architecture.'},
    {q:'Why use software patterns?', a:'They accelerate development by following a proven path, improve communication between developers, and provide tested, reliable solutions.'},
  ],
  truefalse:[
    {q:'Software patterns are meant to be copied and pasted directly into code.', answer:false, exp:'Patterns are generalizable templates — they guide thinking, not copy-paste solutions.'},
    {q:'MVC (Model-View-Controller) is a mid-level design pattern.', answer:true, exp:'Correct — MVC is a classic mid-level design pattern for structuring applications.'},
    {q:'Microservices is an example of a low-level language idiom.', answer:false, exp:'Microservices is a high-level architecture pattern, not a language idiom.'},
    {q:'Idioms are language-agnostic and solve architectural problems.', answer:false, exp:'Patterns are language-agnostic. Idioms are language-specific ways of writing natural code.'},
    {q:'The Observer, Factory, and Strategy are examples of design patterns.', answer:true, exp:'Correct — these are well-known mid-level design patterns.'},
  ],
  fillinblank:[
    {q:'Software patterns exist at three levels: low, mid, and ___.', a:'high', hint:'Think architecture'},
    {q:'___ are language-specific ways of solving problems naturally in a given language.', a:'Idioms', hint:'Like using ?? in JavaScript'},
    {q:'Observer, Factory, and MVC are examples of ___ patterns.', a:'design', hint:'Mid-level patterns'},
    {q:'Microservices and CQRS are examples of ___ patterns.', a:'architecture', hint:'High-level patterns'},
    {q:'Patterns are ___ (not language-specific), while idioms are language-specific.', a:'language-agnostic', hint:'Work in any language'},
  ]
},
{
  id:'tdd', title:'TDD – Test Driven Development', icon:'🧪', color:'#ff6b6b',
  cards:[
    {q:'What is TDD?', a:'A development approach where you write tests BEFORE writing code. Follows the Red-Green-Refactor (RGR) cycle. Tests are not an afterthought.'},
    {q:'What is the Red-Green-Refactor (RGR) cycle?', a:'RED: Write a failing test. GREEN: Write just enough code to make it pass. REFACTOR: Clean up the code while keeping tests passing.'},
    {q:'Who founded TDD and when?', a:'Kent Beck established TDD in 2002 with his book "Test-Driven Development: By Example." Rooted in Extreme Programming (XP).'},
    {q:'What are the six types of testing covered in the slides?', a:'Unit, Integration, Regression, Stress/Load, End-To-End (E2E), UI/Usability.'},
    {q:'What is the Arrange-Act-Assert (AAA) pattern?', a:'A testing pattern that divides each test into three sections: Arrange (set up data), Act (invoke the function), Assert (verify the result).'},
    {q:'When should you NOT use TDD?', a:'Exploratory or prototype development, highly visual/UI-intensive apps, frequently changing requirements, or when high uncertainty exists.'},
    {q:'What software patterns are a GOOD fit for TDD?', a:'Strategy, Repository, Dependency Injection, Factory, Builder, Adapter, Observer — they enable natural decoupling and clear boundaries.'},
    {q:'What software patterns are a BAD fit for TDD?', a:'Singleton, Service Locator, Facade — they tend to create tight coupling that makes testing difficult.'},
  ],
  truefalse:[
    {q:'In TDD, you write code first and then write tests to verify it.', answer:false, exp:'TDD flips the workflow — tests are written BEFORE the code, not after.'},
    {q:'The RGR cycle stands for Red-Green-Refactor.', answer:true, exp:'Correct — Red (failing test) → Green (passing test) → Refactor (clean code).'},
    {q:'Kent Beck formalized TDD in 2002.', answer:true, exp:'Correct — his book "Test-Driven Development: By Example" established the foundation.'},
    {q:'TDD is ideal for highly visual, UI-intensive applications.', answer:false, exp:'TDD is NOT recommended for highly visual/UI-intensive apps — visual components are hard to unit test.'},
    {q:'The Singleton pattern is a good fit for TDD.', answer:false, exp:'Singleton is listed as a BAD fit — it creates global state that makes isolated testing very difficult.'},
  ],
  fillinblank:[
    {q:'TDD stands for Test-___ Development.', a:'Driven', hint:'Tests come first'},
    {q:'The RGR cycle is: Red, Green, and ___.', a:'Refactor', hint:'Clean up the code'},
    {q:'The ___ pattern divides tests into Arrange, Act, and Assert sections.', a:'AAA', hint:'Three A\'s'},
    {q:'TDD was founded by Kent ___ in 2002.', a:'Beck', hint:'Authored "TDD: By Example"'},
    {q:'TDD encourages writing only what\'s needed to fulfill a ___.', a:'test', hint:'The failing check'},
  ]
},
{
  id:'process', title:'Software Process Models', icon:'📊', color:'#ffa057',
  cards:[
    {q:'What is a software process model?', a:'A framework that defines how a software project is planned, developed, tested, and delivered. Used to manage people, time, cost, and quality.'},
    {q:'What are the phases of the Waterfall model?', a:'Requirements → Design → Implementation → Testing → Deployment → Maintenance. Each phase must be complete before the next begins.'},
    {q:'When should you use Waterfall?', a:'Requirements are clear/fixed, client unavailable for feedback, regulated industries (aerospace, defense, medical), strong documentation emphasis.'},
    {q:'When should you use Agile?', a:'Requirements are unclear or evolving, frequent iterations needed, collaborative self-managed team, MVPs, startups, R&D, SaaS.'},
    {q:'What is a Hybrid/Spiral process model?', a:'Combines elements of Waterfall and Agile — iterative cycles with structured phases, balancing flexibility and documentation.'},
    {q:'What is DevOps in the context of process models?', a:'A process model that combines development and operations, emphasizing continuous integration, delivery, and deployment (CI/CD).'},
    {q:'What are the Agile core practices listed in the slides?', a:'Scrum, Kanban, XP, Scrumban, continuous delivery, frequent retrospectives, cross-functional teams.'},
  ],
  truefalse:[
    {q:'In Waterfall, you can start Implementation before Requirements are complete.', answer:false, exp:'Waterfall is strictly linear — each phase must be complete before the next begins.'},
    {q:'Agile is best used when requirements are unclear or evolving.', answer:true, exp:'Correct — Agile is designed for environments where requirements change frequently.'},
    {q:'Waterfall is ideal for startups and R&D teams.', answer:false, exp:'Agile/iterative approaches are better for startups. Waterfall suits regulated industries with fixed requirements.'},
    {q:'DevOps emphasizes continuous integration, delivery, and deployment.', answer:true, exp:'Correct — DevOps bridges development and operations through CI/CD pipelines.'},
    {q:'A Hybrid/Spiral model combines elements of Waterfall and Agile.', answer:true, exp:'Correct — Spiral/Hybrid models blend structured phases with iterative flexibility.'},
  ],
  fillinblank:[
    {q:'Waterfall phases are: Requirements, Design, Implementation, Testing, Deployment, and ___.', a:'Maintenance', hint:'After going live'},
    {q:'In Waterfall, each ___ must be complete before the next begins.', a:'phase', hint:'Sequential step'},
    {q:'Agile is best for requirements that are unclear or ___.', a:'evolving', hint:'Changing over time'},
    {q:'___ combines development and operations with CI/CD pipelines.', a:'DevOps', hint:'Dev + Ops'},
    {q:'Scrum, Kanban, and XP are Agile ___ practices.', a:'core', hint:'Fundamental methods'},
  ]
},
{
  id:'sdlc', title:'SDLC & ALM', icon:'🔁', color:'#57aaff',
  cards:[
    {q:'What does SDLC stand for and what is it?', a:'Software Development Life Cycle. A structured methodology for developing software through defined phases.'},
    {q:'What does ALM stand for and what is it?', a:'Application Lifecycle Management. A broader discipline encompassing the complete lifespan of an application from inception to retirement.'},
    {q:'How does SDLC relate to ALM?', a:'SDLC is a subset of ALM. ALM extends beyond development to include planning, release, operations, governance, and sunset/retirement.'},
    {q:'What are the stages of ALM?', a:'Ideation → Planning → Development (SDLC) → Release → Operations → Governance → Sunset.'},
    {q:'What is the real-world analogy for SDLC vs ALM?', a:'SDLC = designing and building a car in the factory. ALM = managing the car\'s full lifecycle: manufacturing, selling, servicing, upgrading, and decommissioning.'},
    {q:'What are the benefits of SDLC?', a:'Clearly defined phases, project tracking and accountability, quality assurance through testing, easier developer onboarding.'},
    {q:'What are the benefits of ALM?', a:'End-to-end traceability, better visibility for product managers, enables auditing/regulatory compliance, supports product roadmap planning.'},
  ],
  truefalse:[
    {q:'ALM is a subset of SDLC.', answer:false, exp:'It\'s the opposite — SDLC is a subset of ALM. ALM is the broader discipline.'},
    {q:'SDLC phases include Requirements, Design, Implementation, Testing, Deployment, and Maintenance.', answer:true, exp:'Correct — these are the key phases of the Software Development Life Cycle.'},
    {q:'ALM covers only the development phase of an application.', answer:false, exp:'ALM covers the entire lifespan: Ideation → Planning → Development → Release → Operations → Governance → Sunset.'},
    {q:'SDLC helps with project tracking, accountability, and quality assurance.', answer:true, exp:'Correct — these are listed as key benefits of using SDLC.'},
    {q:'Managing a banking platform across multiple regulatory regions is an ALM use case.', answer:true, exp:'Correct — ALM is suited for long-lived, complex, regulated systems.'},
  ],
  fillinblank:[
    {q:'SDLC stands for Software Development ___ Cycle.', a:'Life', hint:'The whole journey'},
    {q:'ALM stands for Application ___ Management.', a:'Lifecycle', hint:'From birth to retirement'},
    {q:'SDLC is a ___ of ALM.', a:'subset', hint:'Contained within'},
    {q:'ALM stages include Ideation, Planning, Development, Release, Operations, Governance, and ___.', a:'Sunset', hint:'End of life'},
    {q:'ALM enables ___ and regulatory compliance through end-to-end traceability.', a:'auditing', hint:'Inspection and verification'},
  ]
},
{
  id:'fullstack', title:'Full Stack Development', icon:'🥞', color:'#ff9fcd',
  cards:[
    {q:'What was the old definition of a Full Stack Developer (2010s)?', a:'"One person who builds the entire web app — HTML/CSS, JS, backend, and database."'},
    {q:'What is the modern definition of a Full Stack Developer (2020s)?', a:'"An engineer who understands and can navigate multiple layers of the stack, even if they specialize in one."'},
    {q:'What is a T-shaped developer?', a:'A developer with broad knowledge across multiple layers of the stack but deep expertise in one specific area.'},
    {q:'What are the three tiers of the full stack?', a:'Front-end (client/UI), Middle tier (API/business logic), and Back-end (database/persistence).'},
    {q:'What is "Full Stack + DevOps" sometimes called?', a:'FSD — Full Stack Developer expanded to include DevOps, CI/CD, and sometimes cloud knowledge.'},
    {q:'Why does Full Stack development matter for debugging?', a:'A full-stack mindset lets you trace bugs through the entire request-response lifecycle — from UI assumption to API error to inefficient query.'},
    {q:'What were predecessor technologies before the full stack era (1970s-1990s)?', a:'Monolithic (one-tier) applications, client-server model (two-tier, n-tier), mainframe terminals, desktop apps with direct DB access, early web with HTML + CGI scripts.'},
  ],
  truefalse:[
    {q:'Modern Full Stack Developers must build the entire app alone.', answer:false, exp:'Modern definition: they navigate multiple layers and understand them, even if they specialize in one.'},
    {q:'A T-shaped developer has broad knowledge across layers but is deep in one area.', answer:true, exp:'Correct — the "T" shape: wide horizontal bar = broad knowledge, vertical bar = deep specialty.'},
    {q:'Full Stack development reduces blind spots between front-end, API, and database teams.', answer:true, exp:'Correct — holistic understanding helps developers see how layers interact.'},
    {q:'CGI (Common Gateway Interface) was a modern full-stack technology from the 2020s.', answer:false, exp:'CGI was an early web technology from the 1990s — each request launched a new process.'},
    {q:'Full Stack developers can trace issues end-to-end from UI to database.', answer:true, exp:'Correct — this cross-layer visibility is a key benefit of full-stack knowledge.'},
  ],
  fillinblank:[
    {q:'A ___ developer has broad skills across layers but deep expertise in one.', a:'T-shaped', hint:'Think of the letter T'},
    {q:'The three tiers are front-end, ___, and back-end.', a:'middle tier', hint:'Where the API lives'},
    {q:'FSD can stand for Full Stack + ___.', a:'DevOps', hint:'Operations side'},
    {q:'Early web used HTML + ___ scripts for dynamic content in the 1990s.', a:'CGI', hint:'Common Gateway Interface'},
    {q:'Full Stack developers can trace bugs through the entire request-___ lifecycle.', a:'response', hint:'Request and ___'},
  ]
},
{
  id:'apis', title:'APIs', icon:'🔌', color:'#a0ff8f',
  cards:[
    {q:'What is an API?', a:'Application Programming Interface — a defined way for software systems to communicate. It encapsulates complexity and exposes controlled functionality.'},
    {q:'What is REST and who defined it?', a:'REpresentational State Transfer, defined by Roy Fielding in 2000 in his dissertation. It is stateless, uses HTTP, and is resource-based (nouns, not verbs).'},
    {q:'What are the 5 REST principles?', a:'1) Stateless communication\n2) Client-server separation\n3) Uniform interface\n4) Resource-based (nouns)\n5) Cacheable responses'},
    {q:'What is SOAP and what does it use?', a:'Simple Object Access Protocol — uses XML + WSDL (Web Services Description Language). Strong typing but verbose and brittle.'},
    {q:'What are the common HTTP verbs used in REST?', a:'GET, POST, PUT, PATCH, DELETE'},
    {q:'What are GraphQL and gRPC, and which companies developed them?', a:'GraphQL was developed by Facebook for structured querying. gRPC was developed by Google using binary transport — both are 2020s-era API technologies.'},
    {q:'What is RPC (Remote Procedure Call)?', a:'An early (1980s-90s) protocol that allows one program to execute code on another machine as if it were local. Foundation for many distributed systems.'},
    {q:'What is the restaurant menu analogy for APIs?', a:'An API is like a restaurant menu — it lists what you can request (the interface) but hides how the kitchen (implementation) actually works.'},
  ],
  truefalse:[
    {q:'REST was defined by Roy Fielding in 2000.', answer:true, exp:'Correct — Fielding described REST in his doctoral dissertation at UC Irvine.'},
    {q:'REST APIs use verbs in URLs (e.g., /getUser, /deletePost).', answer:false, exp:'REST is resource-based (nouns) — e.g., GET /users/1 rather than /getUser/1.'},
    {q:'SOAP uses JSON for data exchange.', answer:false, exp:'SOAP uses XML with WSDL. JSON/RESTful APIs came later and are more human-readable.'},
    {q:'GraphQL was developed by Facebook.', answer:true, exp:'Correct — Facebook developed GraphQL for structured data querying.'},
    {q:'REST requires the server to store session state between requests.', answer:false, exp:'REST is stateless — each request contains all information needed; the server stores no session state.'},
  ],
  fillinblank:[
    {q:'REST stands for REpresentational ___ Transfer.', a:'State', hint:'REST = Re...State Transfer'},
    {q:'REST was defined by Roy ___ in 2000.', a:'Fielding', hint:'His dissertation'},
    {q:'The five common REST HTTP verbs are GET, POST, PUT, PATCH, and ___.', a:'DELETE', hint:'Removing resources'},
    {q:'SOAP uses ___ and WSDL for data exchange (not JSON).', a:'XML', hint:'Extensible Markup Language'},
    {q:'GraphQL was developed by ___, while gRPC was developed by Google.', a:'Facebook', hint:'Now Meta'},
  ]
},
{
  id:'ddd-solid', title:'DDD & SOLID', icon:'🏛️', color:'#e0a0ff',
  cards:[
    {q:'What is Domain-Driven Design (DDD) and who introduced it?', a:'A strategic and architectural philosophy that lets the business domain drive software structure (not technology or database). Introduced by Eric Evans in 2003.'},
    {q:'What are the DDD Building Blocks?', a:'Entities (identity), Value Objects (immutable, identity by value), Aggregates & Aggregate Roots, Repositories, Services, Events.'},
    {q:'What is a DDD Entity?', a:'An object with a unique identity that persists over time — e.g., Player, Order, Customer. Identity is what makes two entities different even if their attributes are the same.'},
    {q:'What is a DDD Value Object?', a:'An immutable object identified by its value, not an ID — e.g., Money($10), Coordinates(lat, lng). Best for enforcing semantic typing.'},
    {q:'What is a DDD Aggregate Root?', a:'The root entity of an Aggregate cluster. All access to the aggregate goes through the root, which enforces consistency boundaries.'},
    {q:'What is the "city plan vs. buildings" analogy for DDD vs. patterns?', a:'DDD is the city plan (how neighborhoods connect, where roads go). Patterns are the individual buildings (how each is constructed). DDD tells you which patterns to use and where.'},
    {q:'What is ubiquitous language in DDD?', a:'A shared vocabulary between developers and domain experts, used consistently in both code and conversation to model the business domain accurately.'},
    {q:'What does SOLID stand for?', a:'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.'},
  ],
  truefalse:[
    {q:'DDD (Domain-Driven Design) is itself a design pattern.', answer:false, exp:'DDD is a strategic and architectural philosophy — it uses patterns but is not itself one.'},
    {q:'Eric Evans introduced DDD in 2003.', answer:true, exp:'Correct — in his book "Domain-Driven Design: Tackling Complexity in the Heart of Software."'},
    {q:'A DDD Value Object has a unique ID that persists over time.', answer:false, exp:'Value Objects are identified by their value, not an ID. Entities have persistent identity.'},
    {q:'The Ubiquitous Language in DDD is a shared vocabulary between devs and domain experts.', answer:true, exp:'Correct — this shared language bridges the gap between technical and business understanding.'},
    {q:'An Aggregate Root controls all access to its cluster of entities.', answer:true, exp:'Correct — all interactions with the aggregate go through the root to maintain consistency.'},
  ],
  fillinblank:[
    {q:'DDD was introduced by Eric ___ in 2003.', a:'Evans', hint:'His famous book on DDD'},
    {q:'In DDD, an ___ is an object with unique identity that persists over time.', a:'Entity', hint:'Like a Player or Order'},
    {q:'___ objects are immutable and identified by their value, not an ID.', a:'Value', hint:'e.g., Money($10)'},
    {q:'DDD\'s core idea: let the business ___ drive software structure.', a:'domain', hint:'The problem space'},
    {q:'SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency ___.', a:'Inversion', hint:'Depend on abstractions'},
  ]
},
{
  id:'persistence', title:'Persistence Layer', icon:'💾', color:'#57d9a0',
  cards:[
    {q:'What is persistence in software?', a:'Persistence is the art of making data outlive the program that created it — saving state so it survives beyond a single program execution.'},
    {q:'What is the difference between volatile and non-volatile memory?', a:'Volatile (RAM): disappears when power is off. Non-volatile (Disk, SSD, Flash): survives power loss. Persistence relies on non-volatile storage.'},
    {q:'What does the persistence layer do?', a:'Manages where and how data is stored and retrieved. Converts in-memory objects to storable formats and back. Handles save, update, delete, query. Protects upper layers from storage details.'},
    {q:'How does the persistence layer fit in layered architecture?', a:'UI → Application → Domain → Persistence → Infrastructure. The repository hides whether data lives in a file, database, or API.'},
    {q:'Why do we need persistence?', a:'When a program ends, its variables disappear. Persistence saves state — users, settings, progress, messages — so it survives between program runs.'},
    {q:'Give real-world examples of persistence.', a:'Game saves (player progress → file on disk), Contacts app (names/numbers → internal database), Notes app (text → cloud or file), Web browser (history/cookies → local files or databases).'},
  ],
  truefalse:[
    {q:'RAM is considered non-volatile storage.', answer:false, exp:'RAM is volatile — it loses all data when the power is off. SSDs and disks are non-volatile.'},
    {q:'The persistence layer protects upper layers from knowing how storage works.', answer:true, exp:'Correct — this abstraction is a key purpose of the persistence layer.'},
    {q:'Persistence allows data to outlive the program that created it.', answer:true, exp:'Correct — this is the definition of persistence from the slides.'},
    {q:'In layered architecture, the UI layer directly accesses the database.', answer:false, exp:'The UI calls the Application layer, which calls the Domain/Repository, which calls the Persistence layer.'},
    {q:'Cloud storage behaves the same as local non-volatile storage.', answer:false, exp:'The slides note that "cloud storage feels different" — it has its own abstraction and failure modes.'},
  ],
  fillinblank:[
    {q:'Persistence is the art of making data ___ the program that created it.', a:'outlive', hint:'Survive beyond'},
    {q:'___ memory (RAM) disappears when power is off.', a:'Volatile', hint:'Temporary'},
    {q:'Non-___ memory like SSDs and disks survives power loss.', a:'volatile', hint:'Permanent storage'},
    {q:'The layered architecture order is: UI → Application → Domain → ___ → Infrastructure.', a:'Persistence', hint:'The data storage layer'},
    {q:'A ___ hides whether data lives in a file, database, or accessed via API.', a:'repository', hint:'DDD pattern for data access'},
  ]
},
{
  id:'sync-async', title:'Sync vs Async', icon:'⚡', color:'#ffdd57',
  cards:[
    {q:'What is synchronous execution?', a:'Tasks run one after another — each must finish before the next starts. Simple and predictable but can be slow. Analogy: waiting in line.'},
    {q:'What is asynchronous execution?', a:'Tasks can start and finish later — work continues while waiting. Improves responsiveness and efficiency. Analogy: starting laundry while doing other things.'},
    {q:'What is the difference between blocking and non-blocking?', a:'Blocking: program halts until a task completes. Non-blocking: can start other work while waiting. Analogy: one chef cooks while others wait (blocking) vs. everyone multitasking (non-blocking).'},
    {q:'What is AJAX?', a:'Asynchronous JavaScript and XML. Fetches data without reloading the page. Originally used XMLHttpRequest; evolved to use fetch() or Axios/React Query.'},
    {q:'What is a thread?', a:'The smallest unit of execution inside a program. Multiple threads allow concurrent execution within a single process.'},
    {q:'What are the tradeoffs of async vs sync?', a:'Sync: simpler, predictable, slower under load. Async: requires callbacks/events/promises, scales better, more complex.'},
    {q:'Give an example of AJAX in JavaScript.', a:'fetch("/api/data").then(r => r.json()).then(showData); — fetches data from a server without reloading the page.'},
  ],
  truefalse:[
    {q:'In synchronous execution, the next task starts before the current one finishes.', answer:false, exp:'Synchronous means each task must FINISH before the next one starts.'},
    {q:'Asynchronous programming improves responsiveness by not blocking while waiting.', answer:true, exp:'Correct — async allows other work to continue while waiting for I/O or network responses.'},
    {q:'AJAX stands for Asynchronous JavaScript and XML.', answer:true, exp:'Correct — though modern AJAX typically uses JSON, not XML.'},
    {q:'Blocking I/O allows a program to do other work while waiting for a response.', answer:false, exp:'Blocking I/O HALTS the program until the task completes. Non-blocking allows other work.'},
    {q:'A thread is the smallest unit of execution inside a program.', answer:true, exp:'Correct — threads are what allow concurrent execution within a process.'},
  ],
  fillinblank:[
    {q:'In ___ execution, tasks run one after another with no overlap.', a:'synchronous', hint:'Sequential'},
    {q:'___ execution allows tasks to start and finish later while other work continues.', a:'Asynchronous', hint:'Non-blocking'},
    {q:'AJAX stands for Asynchronous JavaScript and ___.', a:'XML', hint:'Markup language (now usually JSON)'},
    {q:'A ___ program halts until a task completes before continuing.', a:'blocking', hint:'One chef, others wait'},
    {q:'A ___ is the smallest unit of execution inside a program.', a:'thread', hint:'Concurrent execution unit'},
  ]
},
{
  id:'crossplatform', title:'Cross-Platform Development', icon:'📱', color:'#ff9f57',
  cards:[
    {q:'What is the historical timeline of cross-platform development?', a:'Assembly (hardware-specific) → C (compile anywhere) → Java/JVM 1995 (write once, run anywhere) → .NET CLR, Flash, Qt (2000s) → Flutter, React Native, WebAssembly (2010s+)'},
    {q:'What is the JVM and what does it enable?', a:'Java Virtual Machine — executes platform-neutral bytecode. Enables "write once, run anywhere." Supports Java, Kotlin, Scala, Groovy.'},
    {q:'What is the difference between Native, Bytecode, and Interpreted execution?', a:'Native: compiled directly for CPU (C/C++). Bytecode: intermediate form executed by VM (Java, .NET). Interpreted: read line-by-line (Python, JS). Hybrid (JIT/AOT): compiles some code at runtime.'},
    {q:'What is WebAssembly (WASM)?', a:'A binary instruction format that allows code written in languages like C++, Rust, or Go to run in web browsers at near-native speed.'},
    {q:'What are examples of cross-platform frameworks?', a:'Flutter (Google), React Native (Meta), MAUI (.NET), Kotlin Multiplatform.'},
    {q:'What are examples of native development tools?', a:'SwiftUI for iOS/macOS, Kotlin Compose for Android.'},
    {q:'What inspired .NET CLR and Android ART/Dalvik?', a:'Both were inspired by the JVM concept — intermediate bytecode executed by a virtual machine. .NET uses Intermediate Language (IL); Android uses ART/Dalvik for mobile.'},
  ],
  truefalse:[
    {q:'Java was designed with "write once, run anywhere" as a key goal.', answer:true, exp:'Correct — the JVM enables Java bytecode to run on any platform that has a JVM.'},
    {q:'Native applications run faster than interpreted code.', answer:true, exp:'Correct — native code is compiled directly to machine code, which is the fastest execution method.'},
    {q:'Flutter and React Native are examples of native development frameworks.', answer:false, exp:'Flutter and React Native are cross-platform frameworks. SwiftUI and Kotlin Compose are native.'},
    {q:'WebAssembly allows near-native performance in web browsers.', answer:true, exp:'Correct — WASM is a binary format that enables high-performance code in browsers.'},
    {q:'Interpreted code (Python, JavaScript) is compiled to machine code before execution.', answer:false, exp:'Interpreted code is read line-by-line at runtime. Native code is compiled to machine code ahead of time.'},
  ],
  fillinblank:[
    {q:'Java\'s motto was "write once, ___ anywhere."', a:'run', hint:'Execute anywhere'},
    {q:'JVM stands for Java ___ Machine.', a:'Virtual', hint:'Abstract execution environment'},
    {q:'___ is a binary format that allows C++/Rust to run in web browsers at near-native speed.', a:'WebAssembly', hint:'Also called WASM'},
    {q:'Flutter and React Native are examples of ___ frameworks.', a:'cross-platform', hint:'One codebase, many platforms'},
    {q:'SwiftUI and Kotlin ___ are native development tools.', a:'Compose', hint:'Android-native UI framework'},
  ]
},
{
  id:'refactor', title:'Refactor vs Rewrite', icon:'🔧', color:'#57b8ff',
  cards:[
    {q:'What is refactoring?', a:'Improving the internal structure of code WITHOUT changing its external behavior. Examples: simplify functions, rename variables, extract classes, add tests. "Clean up the house without moving out."'},
    {q:'What is rewriting?', a:'Rebuilding the system from scratch, often with new tech or design principles. Examples: replacing PHP with Node.js, monolith → microservices. "Demolish and rebuild — same address, new foundation."'},
    {q:'Why do teams refactor code?', a:'Code smells (long methods, duplication), hard to add features safely, poor readability, no tests, gradual performance degradation. Goal: incremental improvement without breaking behavior.'},
    {q:'Why do teams rewrite software?', a:'Tech stack is obsolete, architecture can\'t scale, legacy frameworks/security issues, team doesn\'t understand old code, integrating new platforms.'},
    {q:'Compare refactor vs rewrite on risk and cost.', a:'Refactor: lower risk, lower upfront cost, incremental delivery. Rewrite: higher risk, high upfront cost, all-at-once delivery.'},
    {q:'What are "code smells"?', a:'Indicators of poor code quality that suggest refactoring is needed — e.g., long methods, code duplication, tangled logic, inconsistent style, no tests.'},
  ],
  truefalse:[
    {q:'Refactoring changes the external behavior of the software.', answer:false, exp:'Refactoring improves INTERNAL structure while preserving external behavior — this is its core definition.'},
    {q:'A rewrite is lower risk than refactoring.', answer:false, exp:'Rewrites are HIGHER risk — they involve rebuilding from scratch, with the danger of losing features and introducing new bugs.'},
    {q:'Migrating from a monolith to microservices is an example of a rewrite.', answer:true, exp:'Correct — this is a significant architectural change that constitutes a rewrite.'},
    {q:'Code smells indicate that refactoring may be needed.', answer:true, exp:'Correct — code smells like long methods, duplication, and tangled logic signal refactoring opportunities.'},
    {q:'Refactoring delivers improvements incrementally over time.', answer:true, exp:'Correct — refactoring is incremental, unlike rewrites which tend to be all-at-once.'},
  ],
  fillinblank:[
    {q:'Refactoring improves internal structure without changing ___ behavior.', a:'external', hint:'What users see'},
    {q:'A ___ rebuilds the system from scratch with new tech or design.', a:'rewrite', hint:'Start fresh'},
    {q:'Code smells like long methods and ___ code signal the need for refactoring.', a:'duplicate', hint:'Repeated code'},
    {q:'Refactor has ___ risk; rewrite has higher risk.', a:'lower', hint:'Safer option'},
    {q:'Replacing PHP with Node.js or migrating monolith → microservices is an example of a ___.', a:'rewrite', hint:'New foundation'},
  ]
},
{
  id:'defensive', title:'Defensive Programming', icon:'🛡️', color:'#ff8f57',
  cards:[
    {q:'What is defensive programming?', a:'A mindset and set of techniques that make software behave predictably even under unexpected conditions. Goal: anticipate failures, prevent/limit damage, communicate errors clearly.'},
    {q:'What are the key principles of defensive programming?', a:'Validate all inputs, avoid assumptions about data/environment/state, fail fast and clearly, use guard clauses instead of deep nesting, handle edge cases (nulls, empty arrays, limits), minimize side effects.'},
    {q:'What does "fail fast, fail clearly" mean?', a:'When an error occurs, detect it immediately and communicate it explicitly (via exceptions, asserts) rather than silently continuing in an invalid state.'},
    {q:'What is a guard clause?', a:'An early return or check at the start of a function that handles invalid/edge-case inputs immediately, avoiding deep nesting (if-else trees).'},
    {q:'Why does defensive programming matter?', a:'Prevents subtle bugs and crashes, saves debugging time, improves maintainability, reduces security vulnerabilities, makes code safer to modify or reuse.'},
    {q:'What is the core philosophy of defensive programming?', a:'"Hope for the best, code for the worst." Good code "fails safe," not "fails hard."'},
  ],
  truefalse:[
    {q:'Defensive programming assumes all inputs will be valid.', answer:false, exp:'Defensive programming assumes inputs may be INVALID and validates them explicitly.'},
    {q:'Guard clauses help avoid deep nesting by handling edge cases early.', answer:true, exp:'Correct — a guard clause returns early for invalid conditions instead of wrapping code in nested ifs.'},
    {q:'"Fail fast, fail clearly" means silently ignoring errors and continuing.', answer:false, exp:'"Fail fast" means detecting errors IMMEDIATELY and communicating them explicitly — the opposite of silent failures.'},
    {q:'Defensive programming complements testing but does not replace it.', answer:true, exp:'Correct — from the slides: it "complements testing, not replaces it."'},
    {q:'Good defensive code "fails safe" rather than "fails hard."', answer:true, exp:'Correct — the goal is controlled, predictable failure rather than crashes or undefined behavior.'},
  ],
  fillinblank:[
    {q:'The core philosophy: "Hope for the best, ___ for the worst."', a:'code', hint:'Write it defensively'},
    {q:'Defensive programming: ___ all inputs from users, APIs, and files.', a:'validate', hint:'Check before using'},
    {q:'Use ___ clauses instead of deep nesting to handle edge cases early.', a:'guard', hint:'Early return pattern'},
    {q:'"Fail ___, fail clearly" — detect errors immediately and communicate them.', a:'fast', hint:'Don\'t wait'},
    {q:'Defensive programming reduces security ___ by catching invalid inputs.', a:'vulnerabilities', hint:'Security weaknesses'},
  ]
},
{
  id:'featureflags', title:'Feature Flags', icon:'🚩', color:'#ff6bcd',
  cards:[
    {q:'What is a feature flag?', a:'A switch that controls whether a feature is enabled. The code exists even when the feature is hidden or disabled. Flags can be changed by environment, user, role, tier, region, or runtime condition.'},
    {q:'What is the difference between deployment and release?', a:'Deployment: code is installed in an environment. Release: users are allowed to access it. Feature flags let these happen at different times.'},
    {q:'What are the 6 common categories of feature flags?', a:'Release flags, Experiment flags, Operations flags, Permission/entitlement flags, Tier/subscription flags, Kill switches.'},
    {q:'What are release flags used for?', a:'To hide new functionality until it is ready. Common for UI redesigns, new workflows, new services. Allows code to be merged and deployed before public availability.'},
    {q:'What are experiment flags used for?', a:'To compare multiple versions of a feature — A/B testing or controlled evaluation of layouts, flows, algorithms, or engagement strategies.'},
    {q:'What is a kill switch?', a:'A flag category that allows a feature to be rapidly disabled if it causes problems in production — providing an emergency off switch.'},
    {q:'What are the common reasons to use feature flags?', a:'Hide incomplete work, reduce risk during rollout, run experiments, limit features to certain users, support premium tiers, disable unstable functionality quickly.'},
  ],
  truefalse:[
    {q:'When a feature flag is off, the feature\'s code is deleted from the codebase.', answer:false, exp:'The code EXISTS even when the feature is hidden or disabled — the flag just controls whether it\'s active.'},
    {q:'Deployment and release always happen at the same time.', answer:false, exp:'Feature flags allow deployment and release to happen at DIFFERENT times — this is one of their key benefits.'},
    {q:'Experiment flags are used for A/B testing different feature versions.', answer:true, exp:'Correct — experiment flags compare multiple versions for controlled evaluation.'},
    {q:'A kill switch is a type of feature flag that disables functionality quickly.', answer:true, exp:'Correct — kill switches provide an emergency off switch for problematic features.'},
    {q:'Feature flags can be changed based on user, role, region, or runtime condition.', answer:true, exp:'Correct — this granular control is what makes feature flags so powerful.'},
  ],
  fillinblank:[
    {q:'A feature flag is a ___ that controls whether a feature is enabled.', a:'switch', hint:'On/off toggle'},
    {q:'___ means code is installed; ___ means users can access it.', a:'Deployment / Release', hint:'Two separate events'},
    {q:'Experiment flags are used for ___ testing (comparing two versions).', a:'A/B', hint:'A vs B'},
    {q:'A ___ switch is a flag that rapidly disables a problematic feature.', a:'kill', hint:'Emergency off'},
    {q:'___ flags hide new functionality until it is ready for users.', a:'Release', hint:'Not yet public'},
  ]
},
{
  id:'mvp', title:'MVP Evaluation & Code Freeze', icon:'🏁', color:'#aaff57',
  cards:[
    {q:'What does MVP stand for and what does it really mean?', a:'Minimum Viable Product. Minimum = only essential functionality. Viable = reliable, stable, demonstrable. Product = can be handed off, shown, or used. NOT a prototype.'},
    {q:'What is the "Late-Stage Trap" near the end of a project?', a:'Common behaviors: adding "just one more feature," neglecting documentation/polish, ignoring testing debt, over-optimizing things users will never see.'},
    {q:'What is a Code Freeze?', a:'A period when no new features are added — only fixes, tests, or documentation updates are allowed.'},
    {q:'What are the 3 questions to ask when deciding what to cut or postpone?', a:'1) Does this directly improve the user\'s core experience?\n2) Can we test it in time?\n3) Does it risk breaking something stable?\nIf no → move to "Future Enhancements."'},
    {q:'What are the priorities for the Final Sprint?', a:'All intended features working, all problematic features addressed (fixed/modified/workaround/removed), comprehensive regression testing, prepare demo platform, all team members familiar with all layers.'},
    {q:'Why is "Cutting is not quitting"?', a:'Cutting features during code freeze is about focusing — delivering a smaller but working product beats a large unfinished one.'},
  ],
  truefalse:[
    {q:'MVP means building as many features as possible before launch.', answer:false, exp:'MVP = MINIMUM viable — only essential functionality needed for the user stories.'},
    {q:'A Code Freeze allows new features to be added as long as they\'re small.', answer:false, exp:'Code Freeze means NO new features — only fixes, tests, and documentation updates.'},
    {q:'"Cutting is not quitting" — cutting features during code freeze is a form of focus.', answer:true, exp:'Correct — a smaller working product beats a large unfinished one.'},
    {q:'A viable MVP must be reliable, stable, and demonstrable.', answer:true, exp:'Correct — "Viable" means it can actually be shown or handed off.'},
    {q:'During the final sprint, only the lead developer needs to test all parts.', answer:false, exp:'ALL team members should test all parts and be familiar with all layers.'},
  ],
  fillinblank:[
    {q:'MVP stands for Minimum ___ Product.', a:'Viable', hint:'It must work'},
    {q:'A Code ___ means no new features — only fixes and documentation.', a:'Freeze', hint:'Stop adding'},
    {q:'The three questions to cut features: Does it improve user experience? Can we test it? Does it risk ___ something stable?', a:'breaking', hint:'Damaging'},
    {q:'A smaller ___ product beats a large unfinished one.', a:'working', hint:'Functional'},
    {q:'"___ is not quitting" — it means focusing on what matters.', a:'Cutting', hint:'Removing features'},
  ]
},
{
  id:'troubleshooting', title:'Troubleshooting Methods', icon:'🔍', color:'#ffa0ff',
  cards:[
    {q:'What percentage of engineering time is spent diagnosing issues according to the slides?', a:'70–80% of engineering time is spent diagnosing, not coding.'},
    {q:'What is the Troubleshooting Mindset?', a:'Be curious (not defensive), assume unknowns (not incompetence), verify assumptions with data (not anecdotes), treat symptoms as clues (not conclusions), keep notes.'},
    {q:'What are the 5 categories of software problems?', a:'Code logic bugs, Integration issues, Configuration/Environment issues, Performance issues, Process/Team issues.'},
    {q:'What tools are used for integration issues?', a:'Postman, Swagger, and mocks — to test API mismatches and version drift.'},
    {q:'What tools are used for performance issues?', a:'Profilers and traces — to identify slow queries and memory leaks.'},
    {q:'What is Root Cause Analysis (RCA)?', a:'A systematic method for identifying the underlying cause of a problem, not just the symptom. Used for both technical failures and human/process errors.'},
    {q:'What is the quote that opens the troubleshooting lecture?', a:'"Think of a bug as a story — your job is to trace its plot."'},
  ],
  truefalse:[
    {q:'According to the slides, 70–80% of engineering time is spent coding new features.', answer:false, exp:'70-80% is spent DIAGNOSING, not coding — this is why troubleshooting skills are so valuable.'},
    {q:'Postman and Swagger are tools for diagnosing integration issues.', answer:true, exp:'Correct — these tools help test API mismatches and version drift between services.'},
    {q:'A good troubleshooter treats symptoms as conclusions rather than clues.', answer:false, exp:'The mindset says "treat symptoms as CLUES, not conclusions" — investigate further.'},
    {q:'Profilers and traces are used to diagnose performance issues like slow queries.', answer:true, exp:'Correct — profilers and distributed traces help identify bottlenecks.'},
    {q:'RCA (Root Cause Analysis) only applies to technical issues, not team/process issues.', answer:false, exp:'RCA applies to both technical failures AND human/process errors — from the slides.'},
  ],
  fillinblank:[
    {q:'___ to 80% of engineering time is spent diagnosing, not coding.', a:'70', hint:'Majority of time'},
    {q:'"Think of a bug as a ___ — your job is to trace its plot."', a:'story', hint:'Narrative analogy'},
    {q:'Postman and Swagger are tools for diagnosing ___ issues.', a:'integration', hint:'API mismatch'},
    {q:'Profilers and traces help diagnose ___ issues like slow queries.', a:'performance', hint:'Speed and memory'},
    {q:'___ Root Cause Analysis identifies the underlying cause, not just the symptom.', a:'RCA', hint:'Acronym'},
  ]
},
{
  id:'versioning', title:'Versioning', icon:'🏷️', color:'#57d9ff',
  cards:[
    {q:'What is Semantic Versioning (SemVer) and what is its format?', a:'A versioning standard with format MAJOR.MINOR.PATCH (e.g., v2.4.6). MAJOR = breaking changes, MINOR = new compatible features, PATCH = bug fixes.'},
    {q:'What does each SemVer component mean?', a:'MAJOR: breaking changes (users must update code). MINOR: new features, still backward-compatible. PATCH: bug fixes, no behavior change.'},
    {q:'What are SemVer pre-release suffixes?', a:'-alpha, -beta, -rc.1 (release candidate). E.g., v2.0.0-beta.1 signals an unreleased, pre-production version.'},
    {q:'What are the four common versioning approaches?', a:'Sequential (1, 2, 3), Date-based (2025.11.11), Build-based (1.0.1342), Semantic/SemVer (1.2.3).'},
    {q:'Why does versioning exist?', a:'Every release should be traceable and reproducible. Teams, testers, and users need to know what changed. Version numbers connect code → commits → releases → issues.'},
    {q:'How does SemVer help with npm package management?', a:'^ notation (e.g., ^1.2.0) allows auto-updates for safe PATCH and MINOR versions while blocking MAJOR breaking changes.'},
    {q:'Which organizations typically use date-based versioning?', a:'Ubuntu and JetBrains — great for frequent releases where the date conveys freshness.'},
  ],
  truefalse:[
    {q:'In SemVer, a MAJOR version bump means backward-compatible new features were added.', answer:false, exp:'MINOR = new compatible features. MAJOR = breaking changes that require users to update their code.'},
    {q:'SemVer format is MAJOR.MINOR.PATCH.', answer:true, exp:'Correct — e.g., v2.4.6 where 2=major, 4=minor, 6=patch.'},
    {q:'A PATCH version bump in SemVer indicates a breaking API change.', answer:false, exp:'PATCH = bug fixes with no behavior change. Breaking changes require a MAJOR version bump.'},
    {q:'Date-based versioning is used by Ubuntu and JetBrains.', answer:true, exp:'Correct — e.g., Ubuntu 22.04 (April 2022). Great for frequent releases.'},
    {q:'Without versioning, you cannot meaningfully say "this bug was fixed in 1.2.3."', answer:true, exp:'Correct — this is from the slides as a key reason versioning exists.'},
  ],
  fillinblank:[
    {q:'SemVer format is ___.MINOR.PATCH.', a:'MAJOR', hint:'First number, breaking changes'},
    {q:'MAJOR = breaking changes, MINOR = new features, PATCH = ___ fixes.', a:'bug', hint:'Small corrections'},
    {q:'SemVer pre-release suffixes include -alpha, -beta, and ___.', a:'-rc.1', hint:'Release candidate'},
    {q:'Ubuntu uses ___ versioning (e.g., 22.04 = April 2022).', a:'date-based', hint:'Year.Month format'},
    {q:'The ^ notation in npm (e.g., ^1.2.0) allows auto-updates for safe ___ and MINOR versions.', a:'PATCH', hint:'Bug fixes are safe'},
  ]
}
];

/* ══════════════════════════════════════════════════════════════
   APP STATE & STORAGE
══════════════════════════════════════════════════════════════ */
const STORE_KEY = 'cmps3350_progress';
let state = {currentDeck:null, currentMode:null, cardIndex:0, quizItems:[], quizIndex:0, quizScore:0, answered:false, retryFn:null, studyCards:[], known:new Set()};
let progress = {};

function loadProgress(){try{progress=JSON.parse(localStorage.getItem(STORE_KEY))||{};}catch{progress={}}}
function saveProgress(){try{localStorage.setItem(STORE_KEY,JSON.stringify(progress));}catch{}}

function getDeckProgress(id){return progress[id]||{known:0,total:0,tfScore:0,tfTotal:0,fibScore:0,fibTotal:0}}
function saveDeckProgress(id,updates){progress[id]={...getDeckProgress(id),...updates};saveProgress()}

/* ══════════════════════════════════════════════════════════════
   HOME SCREEN
══════════════════════════════════════════════════════════════ */
let activeFilter='all', searchQuery='';
function setFilter(f,btn){activeFilter=f;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDecks()}
function filterDecks(){searchQuery=document.getElementById('search-input').value.toLowerCase();renderDecks()}

function renderDecks(){
  const grid=document.getElementById('decks-grid');
  const filtered=DECKS.filter(d=>{
    const matchSearch=!searchQuery||d.title.toLowerCase().includes(searchQuery);
    if(!matchSearch)return false;
    return true;
  });
  grid.innerHTML=filtered.map(d=>{
    const p=getDeckProgress(d.id);
    const pct=d.cards.length>0?Math.round((p.known/d.cards.length)*100):0;
    let modeButtons='';
    if(activeFilter==='all'||activeFilter==='flashcard') modeButtons+=`<button class="deck-btn primary" onclick="startFlashcards('${d.id}')">Flashcards (${d.cards.length})</button>`;
    if(activeFilter==='all'||activeFilter==='truefalse') modeButtons+=`<button class="deck-btn secondary" onclick="startQuiz('${d.id}','truefalse')">T/F (${d.truefalse.length})</button>`;
    if(activeFilter==='all'||activeFilter==='fillinblank') modeButtons+=`<button class="deck-btn tertiary" onclick="startQuiz('${d.id}','fib')">Fill Blank (${d.fillinblank.length})</button>`;
    return `<div class="deck-card" style="--accent-clr:${d.color}">
      <div class="deck-card-top">
        <div>
          <div class="deck-icon">${d.icon}</div>
        </div>
        <div style="text-align:right;font-size:11px;color:var(--text3)">${pct}% known</div>
      </div>
      <div class="deck-title">${d.title}</div>
      <div class="deck-sub">${d.cards.length} cards · ${d.truefalse.length} T/F · ${d.fillinblank.length} fill-in</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${d.color}"></div></div>
      <div class="deck-actions">${modeButtons}</div>
    </div>`;
  }).join('');

  // stats
  const totalCards=DECKS.reduce((a,d)=>a+d.cards.length,0);
  const totalTF=DECKS.reduce((a,d)=>a+d.truefalse.length,0);
  const totalFIB=DECKS.reduce((a,d)=>a+d.fillinblank.length,0);
  const totalKnown=Object.values(progress).reduce((a,p)=>a+(p.known||0),0);
  document.getElementById('stats-row').innerHTML=`
    <div class="stat-pill"><strong>${DECKS.length}</strong> topics</div>
    <div class="stat-pill"><strong>${totalCards}</strong> flashcards</div>
    <div class="stat-pill"><strong>${totalTF}</strong> true/false</div>
    <div class="stat-pill"><strong>${totalFIB}</strong> fill-in-blank</div>
    <div class="stat-pill"><strong>${totalKnown}</strong> cards known</div>`;
}

/* ══════════════════════════════════════════════════════════════
   FLASHCARD MODE
══════════════════════════════════════════════════════════════ */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a}

function startFlashcards(deckId){
  const deck=DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode='flashcard'; state.cardIndex=0;
  state.studyCards=shuffle(deck.cards); state.known=new Set();
  document.getElementById('study-title').textContent=deck.title;
  showScreen('study-screen');
  renderCard();
}

function renderCard(){
  const card=state.studyCards[state.cardIndex];
  const total=state.studyCards.length;
  document.getElementById('card-front-text').textContent=card.q;
  document.getElementById('card-back-text').textContent=card.a;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('study-progress').textContent=`${state.cardIndex+1} / ${total}`;
  document.getElementById('study-bar').style.width=`${((state.cardIndex+1)/total)*100}%`;
}

function flipCard(){document.getElementById('flashcard').classList.toggle('flipped')}

function markCard(knew){
  if(knew) state.known.add(state.cardIndex);
  if(state.cardIndex<state.studyCards.length-1){
    state.cardIndex++;renderCard();
  } else {
    const p=getDeckProgress(state.currentDeck.id);
    saveDeckProgress(state.currentDeck.id,{known:state.known.size,total:state.studyCards.length});
    showResults('Flashcards',state.known.size,state.studyCards.length-state.known.size,state.studyCards.length,()=>startFlashcards(state.currentDeck.id));
  }
}

/* ══════════════════════════════════════════════════════════════
   QUIZ MODE (T/F + Fill in Blank)
══════════════════════════════════════════════════════════════ */
function startQuiz(deckId, mode){
  const deck=DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode=mode;
  state.quizItems = mode==='truefalse'
    ? shuffle(deck.truefalse)
    : shuffle(deck.fillinblank);
  state.quizIndex=0; state.quizScore=0; state.answered=false;
  document.getElementById('quiz-title').textContent=`${deck.title} — ${mode==='truefalse'?'True / False':'Fill in Blank'}`;
  showScreen('quiz-screen');
  renderQuizQ();
}

function renderQuizQ(){
  const item=state.quizItems[state.quizIndex];
  const total=state.quizItems.length;
  state.answered=false;
  document.getElementById('quiz-progress').textContent=`${state.quizIndex+1}/${total}`;
  document.getElementById('quiz-bar').style.width=`${((state.quizIndex+1)/total)*100}%`;
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  document.getElementById('quiz-feedback').style.display='none';
  document.getElementById('quiz-next').style.display='none';
  document.getElementById('quiz-submit').style.display='none';
  document.getElementById('quiz-card').classList.add('anim');
  setTimeout(()=>document.getElementById('quiz-card').classList.remove('anim'),300);

  if(state.currentMode==='truefalse'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-tf';
    document.getElementById('quiz-type-badge').textContent='True or False';
    document.getElementById('quiz-question').textContent=item.q;
    document.getElementById('quiz-options').innerHTML=`
      <div class="tf-options">
        <button class="tf-btn" id="tf-true" onclick="answerTF(true)">TRUE</button>
        <button class="tf-btn" id="tf-false" onclick="answerTF(false)">FALSE</button>
      </div>`;
  } else {
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-fib';
    document.getElementById('quiz-type-badge').textContent='Fill in the Blank';
    document.getElementById('quiz-question').innerHTML=item.q.replace(/___/g,`<span class="fib-blank">___</span>`);
    document.getElementById('quiz-options').innerHTML=`
      <div class="fib-wrap">
        <input class="fib-input" id="fib-input" placeholder="Type your answer here…" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')submitAnswer()">
        <div style="font-size:12px;color:var(--text3);margin-top:6px">Hint: ${item.hint}</div>
      </div>`;
    document.getElementById('quiz-submit').style.display='block';
    setTimeout(()=>{const inp=document.getElementById('fib-input');if(inp)inp.focus()},100);
  }
}

function answerTF(userAnswer){
  if(state.answered)return;
  state.answered=true;
  const item=state.quizItems[state.quizIndex];
  const correct=userAnswer===item.answer;
  if(correct)state.quizScore++;
  const trueBtn=document.getElementById('tf-true');
  const falseBtn=document.getElementById('tf-false');
  if(item.answer===true) trueBtn.classList.add('correct');
  else falseBtn.classList.add('correct');
  if(!correct){
    if(userAnswer===true) trueBtn.classList.add('wrong');
    else falseBtn.classList.add('wrong');
  }
  showFeedback(correct,item.exp);
}

function submitAnswer(){
  if(state.answered)return;
  const inp=document.getElementById('fib-input');
  if(!inp)return;
  const userVal=inp.value.trim().toLowerCase();
  const item=state.quizItems[state.quizIndex];
  const correctAnswers=item.a.split('/').map(s=>s.trim().toLowerCase());
  const correct=correctAnswers.some(ans=>userVal===ans);
  state.answered=true;
  if(correct){state.quizScore++;inp.classList.add('correct');}
  else{inp.classList.add('wrong');}
  document.getElementById('quiz-submit').style.display='none';
  showFeedback(correct,`Correct answer: ${item.a}`);
}

function showFeedback(correct,explanation){
  const fb=document.getElementById('quiz-feedback');
  fb.className='quiz-feedback '+(correct?'feedback-correct':'feedback-wrong');
  fb.textContent=(correct?'✓ Correct! ':'✗ Incorrect. ')+explanation;
  fb.style.display='block';
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  const isLast=state.quizIndex>=state.quizItems.length-1;
  const nextBtn=document.getElementById('quiz-next');
  nextBtn.textContent=isLast?'See Results →':'Next Question →';
  nextBtn.style.display='block';
}

function nextQuizQ(){
  if(state.quizIndex>=state.quizItems.length-1){
    const correct=state.quizScore;
    const wrong=state.quizItems.length-state.quizScore;
    const total=state.quizItems.length;
    const deck=state.currentDeck;
    const mode=state.currentMode;
    if(mode==='truefalse') saveDeckProgress(deck.id,{tfScore:correct,tfTotal:total});
    else saveDeckProgress(deck.id,{fibScore:correct,fibTotal:total});
    showResults(mode==='truefalse'?'True/False':'Fill in Blank',correct,wrong,total,()=>startQuiz(deck.id,mode));
  } else {
    state.quizIndex++;
    renderQuizQ();
  }
}

/* ══════════════════════════════════════════════════════════════
   RESULTS SCREEN
══════════════════════════════════════════════════════════════ */
function showResults(modeName,correct,wrong,total,retryFn){
  const pct=Math.round((correct/total)*100);
  const isGreat=pct>=80, isOk=pct>=50;
  document.getElementById('results-emoji').textContent=isGreat?'🎉':isOk?'📚':'💪';
  document.getElementById('results-pct').textContent=pct+'%';
  document.getElementById('results-pct').className='results-score '+(isGreat?'great':isOk?'ok':'bad');
  document.getElementById('results-label').textContent=
    (isGreat?'Excellent work on ':'')+(isOk&&!isGreat?'Good effort on ':'')+((!isOk)?'Keep practicing ':'')
    +state.currentDeck.title+' — '+modeName;
  document.getElementById('res-correct').textContent=correct;
  document.getElementById('res-wrong').textContent=wrong;
  document.getElementById('res-total').textContent=total;
  document.getElementById('retry-btn').onclick=()=>{retryFn();};
  showScreen('results-screen');
}

/* ══════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════ */
function showScreen(id){
  ['home','study-screen','quiz-screen','results-screen'].forEach(s=>{
    const el=document.getElementById(s);
    if(el) el.style.display=s===id?(s==='home'?'block':'flex'):'none';
  });
}

function goHome(){
  if(state.currentMode==='flashcard'&&state.currentDeck&&state.studyCards.length>0){
    saveDeckProgress(state.currentDeck.id,{known:state.known.size,total:state.studyCards.length});
  }
  showScreen('home');
  loadProgress();
  renderDecks();
}

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
loadProgress();
renderDecks();
