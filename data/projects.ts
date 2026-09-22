export type BuildInsight = {
  number: string;
  title: string;
  body: string;
  icon: "tool" | "branch" | "warning" | "arrow";
};

export type Project = {
  number: string;
  slug: "tracelens" | "pathforge" | "limitx" | "leetvis";
  title: string;
  category: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl: string;
  accent: string;
  media: {
    src: string;
    alt: string;
    position?: string;
    videoSrc?: string;
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
    number: "04",
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
