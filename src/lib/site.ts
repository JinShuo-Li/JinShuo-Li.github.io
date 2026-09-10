export const site = {
  name: "Li Jinshuo",
  initials: "LJ",
  title: "Li Jinshuo",
  tagline: "Mathematics · Machine Learning · Systems",
  description:
    "Personal site of Li Jinshuo, an undergraduate in the IEEE Honor Class at Shanghai Jiao Tong University, interested in mathematics, machine learning, computer vision, and systems.",
  url: "https://JinShuo-Li.github.io",
  github: "https://github.com/JinShuo-Li",
  avatar: "https://github.com/JinShuo-Li.png",
  emailSchool: "ljs_2025@sjtu.edu.cn",
  emailPersonal: "Jinshuo_Li@hotmail.com",
  affiliation: "Shanghai Jiao Tong University",
  program: "IEEE Honor Class",
};

export type Project = {
  name: string;
  url: string;
  blurb: string;
  tags: string[];
};

export const featuredProjects: Project[] = [
  {
    name: "Mathematical-Note",
    url: "https://github.com/JinShuo-Li/Mathematical-Note",
    blurb:
      "A bilingual LaTeX book on mathematics and axiomatization, moving from logic and set theory through analysis, linear algebra, abstract algebra, topology, complex analysis, graph theory, and probability.",
    tags: ["LaTeX", "Mathematics", "Notes"],
  },
  {
    name: "simeco",
    url: "https://github.com/JinShuo-Li/simeco",
    blurb:
      "A spatial predator–prey simulation for studying emergent communication: individually learning animals, costly meaning-free signals, and a batched CPU/XPU execution backend.",
    tags: ["Python", "Multi-agent", "PyTorch", "XPU"],
  },
  {
    name: "heterotorch",
    url: "https://github.com/JinShuo-Li/heterotorch",
    blurb:
      "A PyTorch-style execution runtime for Intel CPU, XPU, and OpenVINO NPU devices, with explicit compilation, mixed-device execution, and reproducible benchmarks.",
    tags: ["Python", "Systems", "XPU", "NPU"],
  },
  {
    name: "ChessModel",
    url: "https://github.com/JinShuo-Li/ChessModel",
    blurb:
      "A neural chess engine that distills Stockfish analysis into a compact policy/WDL network and plays through batched PUCT search on Intel Arc XPU.",
    tags: ["Python", "Distillation", "PUCT", "XPU"],
  },
];

export const moreProjects: Project[] = [
  {
    name: "Matrix-Library",
    url: "https://github.com/JinShuo-Li/Matrix-Library",
    blurb:
      "A compact linear algebra toolkit in pure Python built around one unified Matrix class, with exact rational and floating-point modes, LU/Cholesky/QR, eigenpairs, SVD, and Jordan form.",
    tags: ["Python", "Linear Algebra"],
  },
  {
    name: "FACC",
    url: "https://github.com/JinShuo-Li/FACC",
    blurb:
      "A small FPGA-based computer written in Verilog: an 8-bit datapath, 16-bit instructions, memory-mapped I/O, and a UART bootloader that loads programs without re-synthesis.",
    tags: ["Verilog", "FPGA", "Computer Architecture"],
  },
  {
    name: "Super-Calculator",
    url: "https://github.com/JinShuo-Li/Super-Calculator",
    blurb:
      "A modular PyQt6 desktop workbench combining a calculator, a linear algebra workspace, an interactive graph algorithms lab, and a plotting panel.",
    tags: ["Python", "PyQt6", "NumPy"],
  },
  {
    name: "Courses",
    url: "https://github.com/JinShuo-Li/Courses",
    blurb:
      "Undergraduate course materials for the IEEE Honor Program at Shanghai Jiao Tong University, spanning mathematics, physics, and programming.",
    tags: ["SJTU", "Course Notes"],
  },
  {
    name: "MiniTorch",
    url: "https://github.com/JinShuo-Li/MiniTorch",
    blurb:
      "A small Python implementation of core Torch primitives, written to understand tensors, automatic differentiation, and training loops from first principles.",
    tags: ["Python", "Autodiff"],
  },
  {
    name: "VMANO",
    url: "https://github.com/JinShuo-Li/VMANO",
    blurb:
      "A visualization tool for the MANO hand model, used to inspect hand pose and mesh structure.",
    tags: ["Python", "Computer Vision"],
  },
  {
    name: "learning-rust",
    url: "https://github.com/JinShuo-Li/learning-rust",
    blurb:
      "A personal repository of Rust exercises and small programs collected while learning the language.",
    tags: ["Rust", "Learning"],
  },
  {
    name: "Elevator-Simulator",
    url: "https://github.com/JinShuo-Li/Elevator-Simulator",
    blurb:
      "A group control system simulation that explores scheduling and dispatching for multi-elevator environments.",
    tags: ["Python", "Simulation"],
  },
];

export const interests: { title: string; text: string }[] = [
  {
    title: "Mathematics",
    text: "Analysis, algebra, and topology, with an emphasis on clear definitions, proofs, and the structure that connects them.",
  },
  {
    title: "Machine learning & vision",
    text: "Learning systems and perception, from model design and training to the details of evaluation.",
  },
  {
    title: "Systems & heterogeneous computing",
    text: "Execution runtimes and hardware-aware software across CPU, XPU, and NPU targets.",
  },
  {
    title: "Technical writing",
    text: "Structured notes and explanations that keep theory close to implementation.",
  },
];

export const education: { period: string; school: string; detail: string }[] = [
  {
    period: "2025 — Present",
    school: "Shanghai Jiao Tong University",
    detail:
      "Undergraduate in the IEEE Honor Class, studying computer science, mathematics, physics, and engineering fundamentals.",
  },
  {
    period: "2021 — 2024",
    school: "Beijing No.4 High School",
    detail:
      "Built a foundation in rigorous problem solving and an early interest in mathematics and technology.",
  },
];

export const skills = {
  technical: ["Python", "C++", "Rust", "TeX", "Verilog", "PyTorch", "NumPy", "Git", "Linux"],
  academic: [
    "Mathematical Analysis",
    "Linear Algebra",
    "Abstract Algebra",
    "Topology",
    "Discrete Mathematics",
    "Machine Learning",
    "Computer Vision",
    "Computer Systems",
  ],
};
