const projects = [
  {
    id: "01",
    title: "RAG Document Platform",
    summary:
      "A full-stack Retrieval-Augmented Generation system for multimodal document intelligence — ingesting PDFs, images and text into a searchable, API-accessible knowledge base.",
    description:
      "Supports 6 file formats (PDF, DOCX, TXT, Markdown, PNG, JPG) with multimodal image captioning and semantic search. Exposes 4 REST API endpoints secured with API-key authentication for programmatic access beyond the chat UI. Uses dual LLM inference — Groq as primary, Ollama as a local fallback — containerized with Docker and Docker Compose, and validated by a 10-test automated suite wired into GitHub Actions CI/CD.",
    stack: ["Python", "FastAPI", "Chroma", "Groq", "Ollama", "Docker", "Docker Compose", "GitHub Actions"],
    metrics: [
      { value: "6", label: "File Formats" },
      { value: "4", label: "REST APIs" },
      { value: "1.3s", label: "Avg Latency" },
      { value: "100%", label: "CI Pass Rate" },
    ],
    github: "https://github.com/ayushic353/enterprise-rag-platform",
    demo: null,
    caseStudy: {
      flow: ["Ingestion", "Chunking", "Embedding & Search", "LLM Inference", "API Layer", "Docker / CI"],
      notes:
        "Documents are parsed and chunked on ingestion, embedded and indexed in Chroma for semantic search, then routed through a dual-inference layer (Groq primary, Ollama fallback) before being served through 4 authenticated REST endpoints. The whole stack ships as a Docker Compose bundle with a 10-test suite running on every push via GitHub Actions.",
    },
  },
  {
    id: "02",
    title: "Mental Health Classification using LLM Fine-Tuning",
    summary:
      "A 7-class NLP classification pipeline benchmarking classical ML against a QLoRA fine-tuned Gemma-3-1B — with a deliberate focus on data-leakage detection and class imbalance.",
    description:
      "Trained and evaluated on 52,681 labeled samples, benchmarking TF-IDF + Logistic Regression/SVM against QLoRA fine-tuned Gemma-3-1B, improving accuracy from 77.99% to 80.75% and reaching a Macro F1 of 0.762 on a 10,537-sample held-out test set. Identified and eliminated 207 overlapping train/validation samples through duplicate detection before final evaluation, then ran a controlled class-oversampling experiment to study minority-class recall. Fine-tuned only 4.96% of the model's 1.05B parameters, using gradient accumulation and checkpointing to fit training within 14GB of VRAM.",
    stack: ["Python", "PyTorch", "Hugging Face", "Unsloth", "scikit-learn", "QLoRA", "Gemma-3-1B"],
    metrics: [
      { value: "52,681", label: "Labeled Samples" },
      { value: "7", label: "Classes" },
      { value: "80.75%", label: "Accuracy" },
      { value: "0.762", label: "Macro F1" },
      { value: "4.96%", label: "Params Trained" },
      { value: "14GB", label: "VRAM Budget" },
    ],
    github: "https://github.com/ayushic353/fine-tuning-llms",
    demo: null,
    caseStudy: {
      flow: ["Dataset", "Baseline", "Leakage Detection", "QLoRA Fine-Tuning", "Class Imbalance Experiment", "Evaluation"],
      notes:
        "Started from a TF-IDF + SVM baseline, then fine-tuned Gemma-3-1B with QLoRA. Before trusting the eval numbers, 207 duplicate train/validation samples were found and removed. A second experiment applied moderate class oversampling to address a 15:1 class imbalance, measured against minority-class recall and Macro F1.",
    },
  },
  {
    id: "03",
    title: "NAAVI",
    summary:
      "A full-stack e-commerce website with a modern, editorial-style product experience.",
    description:
      "A React and Tailwind CSS storefront focused on clean component architecture and a responsive, editorial-style layout for browsing and presenting products.",
    stack: ["React", "Tailwind CSS"],
    metrics: [],
    github: "https://github.com/ayushic353/naavi-website",
    demo: null,
    caseStudy: null,
  },
];

export default projects;
