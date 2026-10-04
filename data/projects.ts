export type BuildInsight = {
  number: string;
  title: string;
  body: string;
  icon: "tool" | "branch" | "warning" | "arrow";
};

export type Project = {
  number: string;
  slug: "tracelens" | "pathforge" | "jevon" | "limitx" | "daypilot" | "leetvis";
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl: string | null;
  accent: string;
  media: {
    src: string;
    alt: string;
    position?: string;
    videoSrc?: string;
    fit?: "contain";
    width?: number;
    height?: number;
  };
  behindTheBuild: BuildInsight[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "tracelens",
    title: "TraceLens",
    category: "Agentic incident investigation",
    description:
      "Evidence-driven incident investigation that correlates runtime telemetry with operational knowledge through a bounded LangGraph workflow, hypothesis verification, and citation-grounded root-cause reports.",
    technologies: ["LangGraph", "LangChain", "FastAPI", "RAG", "Next.js"],
    repositoryUrl: "https://github.com/dumpydon/TraceLens",
    liveUrl: "https://tracelens-seven.vercel.app",
    accent: "#60c8f5",
    media: {
      src: "/projects/tracelens/demo.webp",
      alt: "TraceLens running a staged incident investigation",
      position: "left center",
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Keeping an LLM-led refinement loop grounded across logs, deployments, health signals, runbooks, and postmortems without allowing investigation to run unbounded.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "Evidence collection stays deterministic; model reasoning is a separate graph stage, and every cited reference is resolved before a report is accepted.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "Free-form model references could sound convincing without being auditable. Citation validation became a hard boundary rather than another prompt instruction.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Add human approval with LangGraph interrupts, corrective-RAG experiments, stronger retrieval benchmarks, and real observability integrations.",
      },
    ],
  },
  {
    number: "02",
    slug: "pathforge",
    title: "PathForge",
    category: "Graph search laboratory",
    description:
      "Interactive graph-search laboratory for comparing BFS, DFS, Dijkstra, and A* across weighted grids with deterministic playback, editable terrain, algorithm metrics, and large-grid benchmark execution.",
    technologies: ["TypeScript", "React", "Dijkstra", "A*", "Algorithms"],
    repositoryUrl: "https://github.com/dumpydon/PathForge",
    liveUrl: "https://pathforge.dumpydon.workers.dev",
    accent: "#f3b75d",
    media: {
      src: "/projects/pathforge/astar.webp",
      alt: "PathForge visualizing A star on a weighted grid",
      position: "center",
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Making search execution deterministic while keeping algorithm correctness independent from React, animation timing, and the playback interface.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "Pure algorithms emit a typed event log; a separate reducer consumes those events so visualization can pause, replay, or batch work without changing a result.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "Operation-level histories and one DOM button per cell became the real cost on large grids, so benchmark mode skips events and renders a canvas result.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Move worst-case searches to a Web Worker and add previous-expansion stepping with periodic checkpoints plus deterministic board import and export.",
      },
    ],
  },
  {
    number: "03",
    slug: "jevon",
    title: "Jevon",
    category: "TypeSafe · Jev Decision Engine",
    description:
      "Customer-feedback decision engine built on TypeSafe's Jev API, turning unstructured reviews into typed decisions with calibrated confidence, then applying deterministic gates and rules to surface actionable signals.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "TypeSafe · Jev API"],
    repositoryUrl: "https://github.com/dumpydon/jevon",
    liveUrl: null, // JEVON_LIVE_URL_PLACEHOLDER: replace null with the real production URL.
    // TypeSafe's live desktop-panel/label token: rgb(243, 134, 161), typesafe.ai.
    accent: "#F386A1",
    media: {
      src: "/projects/jevon/jevon-overview.webp",
      alt: "Jevon Decision Lab analyzing a mixed customer review, with customer-risk signals, mention-gated aspect ratings, and an inspectable decision pipeline",
      position: "center",
      fit: "contain",
      width: 1440,
      height: 1222,
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Separating absent aspects from negative feedback: mention probabilities gate satisfaction scores while the underlying answers remain available in the Decision Inspector.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "TypeSafe's Jev System One Model evaluates 19 typed questions over shared semantic state; conventional code gates, composes, and inspects its probabilistic decisions.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "Python and JavaScript round half-steps differently. Explicit half-up label mapping and captured response contracts protect the backend migration from subtle output changes.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Expand Jevon's labeled evaluation corpus and validate thresholds. TypeSafe reports 193.6× faster and 444.6× cheaper in its published System One workflow evaluations; these are provider results, not Jevon measurements or universal gains.",
      },
    ],
  },
  {
    number: "04",
    slug: "limitx",
    title: "LimitX",
    category: "Exchange matching & microstructure",
    description:
      "Deterministic exchange matching engine and market microstructure lab with price-time priority, fixed-point prices, journal replay, and live order-book depth. Fully simulated, with no real-money trading or order routing.",
    technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "WebSockets"],
    repositoryUrl: "https://github.com/dumpydon/limitx",
    liveUrl: "https://limitx.dumpydon.workers.dev/",
    accent: "#de6868",
    media: {
      src: "/projects/limitx/market-lab-poster.webp",
      videoSrc: "/projects/limitx/market-lab-loop.mp4",
      alt: "LimitX simulated market with updating order-book depth, market depth, and recent trades",
      position: "center",
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Preserving price-time priority through partial fills, cancellations, and modifications while ensuring replay reconstructs the same events and final book state.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "One writer owns each symbol’s book. The pure matcher uses integer tick prices and FIFO queues, while the browser consumes sequence-checked market-data projections.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "An evidence payload scanned available liquidity for every order. Profiling exposed the extra work; restricting that preflight to FOK orders preserved matching semantics.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Bound retained event history after the million-operation memory stress test, and explore a Rust or C++ hot path while keeping Python for simulation and verification.",
      },
    ],
  },
  {
    number: "05",
    slug: "daypilot",
    title: "DayPilot",
    category: "Human-approved operations",
    description:
      "Personal operations agent that grounds plans in connected context, pauses for human approval, supports revision, and verifies approved MCP actions through a resumable LangGraph workflow.",
    technologies: ["Python", "FastAPI", "LangGraph", "MCP", "Next.js"],
    repositoryUrl: "https://github.com/dumpydon/daypilot",
    liveUrl: "https://daypilot.dumpydon.workers.dev/",
    accent: "#1E90FF",
    media: {
      src: "/projects/daypilot/workflow-poster.webp",
      videoSrc: "/projects/daypilot/workflow-loop.mp4",
      alt: "DayPilot completing a grounded mail request with its result, executed actions, and MCP activity timeline",
      position: "center",
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Keeping plans grounded across connected services while binding approval to the exact action payloads and preserving that boundary through revisions and workflow resumes.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "LangGraph sees stable semantic MCP tools rather than provider APIs. A code-enforced gateway checks persisted approval before any external write can execute.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "Provider timeouts can leave a write’s outcome unknown. The execution ledger records attempts before invocation so a resumed workflow does not blindly repeat a mutation.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Expand provider read-back coverage and recovery tooling so more actions can be matched to stable resources instead of being reported as created but unverified.",
      },
    ],
  },
  {
    number: "06",
    slug: "leetvis",
    title: "LeetVis",
    category: "Practice intelligence",
    description:
      "LeetCode practice intelligence combining profile sync with Zerotrac ratings to surface coverage, activity, skill progression, recommendations, and a searchable problem explorer.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Recharts"],
    repositoryUrl: "https://github.com/dumpydon/LeetVis",
    liveUrl: "https://leetvis.vercel.app",
    accent: "#7edb9c",
    media: {
      src: "/projects/leetvis/dashboard.webp",
      alt: "LeetVis personal LeetCode analytics dashboard",
      position: "left top",
    },
    behindTheBuild: [
      {
        number: "01",
        icon: "tool",
        title: "Hardest technical problem",
        body: "Combining LeetCode profile signals with Zerotrac ratings into coherent coverage, skill, activity, and recommendation analytics.",
      },
      {
        number: "02",
        icon: "branch",
        title: "Important engineering decision",
        body: "Public profile sync and authenticated exact solved-set sync are explicit modes instead of implying anonymous GraphQL returns complete history.",
      },
      {
        number: "03",
        icon: "warning",
        title: "What went wrong",
        body: "LeetCode’s public GraphQL surface does not expose the full solved list, so username-only coverage cannot truthfully label every problem solved or unsolved.",
      },
      {
        number: "04",
        icon: "arrow",
        title: "What you would improve next",
        body: "Strengthen recommendation ranking and background sync reliability while keeping public and exact-data confidence visible throughout the dashboard.",
      },
    ],
  },
];
