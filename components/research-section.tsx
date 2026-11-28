import { Card, CardContent } from "@/components/ui/card"
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Eye,
  Gauge,
  Github,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react"

const themes = [
  {
    icon: HeartHandshake,
    title: "Human-centred AI",
    body: "Designing and assessing AI systems around human needs, agency, accessibility, context and the consequences of deployment.",
    focus: "People, institutions and lived context",
  },
  {
    icon: Eye,
    title: "Explainable AI (XAI)",
    body: "Exploring methods that make model outputs and behaviour more understandable to users, practitioners and decision-makers.",
    focus: "Explanations, transparency and accountability",
  },
  {
    icon: BrainCircuit,
    title: "Mechanistic interpretability",
    body: "Investigating internal model representations, features and circuits to better understand how neural networks implement learned behaviours.",
    focus: "Inside the model: features and circuits",
  },
  {
    icon: Gauge,
    title: "AI evaluation & benchmarking",
    body: "Building reproducible evaluations that measure model behaviour, task performance, efficiency and failure modes under defined conditions.",
    focus: "Evidence, measurement and reproducibility",
  },
  {
    icon: ShieldCheck,
    title: "AI safety, security & robustness",
    body: "Studying model reliability under distribution shifts, adversarial pressure and misuse, alongside the security of AI-enabled systems.",
    focus: "Resilience, threat models and assurance",
  },
  {
    icon: Microscope,
    title: "Applied research for African contexts",
    body: "Connecting technical research to African languages, infrastructure realities, public-interest needs and locally relevant governance questions.",
    focus: "Local relevance with global research standards",
  },
]

const benchmarkRows = [
  { model: "Phi-4 Mini", latency: "10.47 s", tps: "12.55" },
  { model: "Qwen 2.5 7B Instruct", latency: "13.85 s", tps: "7.88" },
  { model: "Qwen 3 8B", latency: "47.16 s", tps: "5.66" },
  { model: "DeepSeek R1 8B", latency: "48.45 s", tps: "5.80" },
]

export function ResearchSection() {
  return (
    <section id="research" className="border-y border-border bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">Research, evaluation & innovation</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Understand AI. Evaluate it rigorously. Build it around people.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our research direction spans the human, behavioural and mechanistic dimensions of artificial intelligence. We are interested not only in what models can do, but how they behave, how their outputs can be understood, and how reliably they operate in the environments where people depend on them.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We approach this work with African contexts in view: local needs, languages, infrastructure constraints and institutional realities matter when designing and evaluating useful technology.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {themes.map(({ icon: Icon, title, body, focus }) => (
            <Card key={title} className="h-full border-border bg-card">
              <CardContent className="p-6 md:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">{focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="benchmarks" className="mt-20 scroll-mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">Featured research artefact</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Local LLM Benchmark Framework</h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A reproducible Python and Ollama pipeline for comparing open-weight language models across extraction, mathematics, retrieval-augmented generation, reasoning and summarisation tasks.
              </p>
            </div>
            <a href="https://github.com/eOluwumi/llm-benchmarks" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400">
              View GitHub repository <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <Card className="mt-8 overflow-hidden border-border bg-card">
            <CardContent className="p-0">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    <Activity className="h-4 w-4" /> Recorded benchmark run · 27 June 2026
                  </div>
                  <h4 className="mt-4 text-2xl font-bold">A first comparative baseline</h4>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    The repository records four Ollama-served models, each evaluated on ten benchmark prompts. The published leaderboard reports average latency, time-to-first-token and token throughput.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-muted p-4"><p className="text-2xl font-bold">4</p><p className="mt-1 text-xs text-muted-foreground">Models</p></div>
                    <div className="rounded-xl bg-muted p-4"><p className="text-2xl font-bold">10</p><p className="mt-1 text-xs text-muted-foreground">Prompts per model</p></div>
                    <div className="rounded-xl bg-muted p-4"><p className="text-2xl font-bold">5</p><p className="mt-1 text-xs text-muted-foreground">Task categories</p></div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    Recorded environment: Azure VM, AMD EPYC 7763 CPU, 4 cores and 16 GB RAM; no GPU is configured in the repository's hardware profile.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a href="https://github.com/eOluwumi/llm-benchmarks/tree/main/00-model-benchmark" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400">
                      <Github className="h-4 w-4" /> Code & methodology
                    </a>
                    <a href="https://github.com/eOluwumi/llm-benchmarks/blob/main/00-model-benchmark/results/leaderboard.csv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400">
                      View raw leaderboard <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="border-t border-border bg-muted/30 p-7 md:p-9 lg:border-l lg:border-t-0">
                  <h4 className="text-lg font-semibold">Recorded model performance</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Average values from the repository leaderboard</p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                          <th className="pb-3 pr-3 font-medium">Model</th>
                          <th className="pb-3 pr-3 text-right font-medium">Latency</th>
                          <th className="pb-3 text-right font-medium">Tokens/s</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benchmarkRows.map((row) => (
                          <tr key={row.model} className="border-b border-border/70 last:border-0">
                            <td className="py-4 pr-3 font-medium">{row.model}</td>
                            <td className="py-4 pr-3 text-right tabular-nums">{row.latency}</td>
                            <td className="py-4 text-right tabular-nums">{row.tps}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 rounded-xl border border-border bg-background p-4">
                    <p className="text-sm font-semibold">Interpret the results in context</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      These are measurements from one recorded CPU environment, not universal model rankings or a comprehensive measure of answer quality. The framework's response scoring is an early baseline and needs further validation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-10 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          These themes describe B9TECH's research interests and active development direction. We distinguish research questions, working prototypes and validated results; publications, affiliations and completed capabilities are presented only when substantiated.
        </p>
      </div>
    </section>
  )
}
