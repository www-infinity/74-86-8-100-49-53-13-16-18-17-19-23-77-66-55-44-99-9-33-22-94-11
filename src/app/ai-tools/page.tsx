'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  GitBranch,
  Cpu,
  Bot,
  Eye,
  Code2,
  Layers,
  Network,
  Sparkles,
  BrainCircuit,
  FileJson,
  Database,
} from 'lucide-react';

interface ToolCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  color: string;
}

const browserAutomation: ToolCard[] = [
  {
    icon: <Globe size={20} aria-hidden="true" />,
    title: 'Browser-Use',
    description:
      'Open-source Python library enabling LLMs to control web browsers autonomously. Powers the digital twin pipeline for scraping materials databases and experimental literature.',
    tag: 'Browser Automation',
    color: '#00d4ff',
  },
  {
    icon: <Eye size={20} aria-hidden="true" />,
    title: 'Firecrawl',
    description:
      'Structured web crawling and scraping API that converts any website into clean LLM-ready markdown. Used to harvest alloy composition data from materials science journals.',
    tag: 'Web Crawling',
    color: '#00d4ff',
  },
  {
    icon: <Bot size={20} aria-hidden="true" />,
    title: 'Skyvern',
    description:
      'Computer-vision-based browser automation that interacts with web UIs like a human. Automates form submissions to NIST alloy databases and CAD portals for rapid prototyping.',
    tag: 'Visual Automation',
    color: '#00d4ff',
  },
];

const codeManagement: ToolCard[] = [
  {
    icon: <GitBranch size={20} aria-hidden="true" />,
    title: 'GitHub Models / Copilot',
    description:
      'GitHub-hosted frontier models (GPT-4o, o1, Claude, Llama) accessed via a unified REST API. Copilot autocompletes CALPHAD scripts, MATLAB property simulations, and React components.',
    tag: 'Code Assistance',
    color: '#7c3aed',
  },
  {
    icon: <Code2 size={20} aria-hidden="true" />,
    title: 'Cline',
    description:
      'Autonomous coding agent for VS Code that can read, write, and execute code files. Used to automate generation of TypeScript component scaffolding and Next.js page templates.',
    tag: 'Autonomous Coding',
    color: '#7c3aed',
  },
  {
    icon: <Layers size={20} aria-hidden="true" />,
    title: 'Visual Copilot',
    description:
      'Figma-to-code AI plugin that converts design mockups directly into production React/Tailwind components. Accelerates the ElementLab UI from design concept to live component.',
    tag: 'Design-to-Code',
    color: '#7c3aed',
  },
];

const gemmaCapabilities: ToolCard[] = [
  {
    icon: <Cpu size={20} aria-hidden="true" />,
    title: 'Function Calling',
    description:
      'Gemma 3 natively supports structured function calling, allowing the model to invoke material property lookup tools, composition calculators, and database queries in a structured JSON format.',
    tag: 'Native Capability',
    color: '#f59e0b',
  },
  {
    icon: <Eye size={20} aria-hidden="true" />,
    title: 'Multimodal Vision',
    description:
      'Gemma 3\'s vision capabilities enable analysis of SEM micrographs, XRD diffraction patterns, and EDS composition maps — extracting quantitative data directly from experimental images.',
    tag: 'Native Capability',
    color: '#f59e0b',
  },
  {
    icon: <FileJson size={20} aria-hidden="true" />,
    title: 'Structured JSON Output',
    description:
      'Constrained decoding forces Gemma 3 to emit valid JSON schemas for alloy composition recommendations, ensuring interoperability with CALPHAD databases and downstream processing pipelines.',
    tag: 'Native Capability',
    color: '#f59e0b',
  },
];

const agentFrameworks: ToolCard[] = [
  {
    icon: <Network size={20} aria-hidden="true" />,
    title: 'Microsoft AutoGen',
    description:
      'Multi-agent conversation framework where specialized agents (Thermodynamics Expert, AM Process Engineer, ML Optimizer) collaborate asynchronously to design and evaluate HEA compositions.',
    tag: 'Agent Framework',
    color: '#00d4ff',
  },
  {
    icon: <BrainCircuit size={20} aria-hidden="true" />,
    title: 'CrewAI',
    description:
      'Role-based AI crew orchestration enabling parallel execution of materials characterization workflows: one agent queries literature, another runs CALPHAD simulations, a third synthesizes results.',
    tag: 'Agent Framework',
    color: '#00d4ff',
  },
];

const toolSchema = `{
  "name": "analyze_element_composition",
  "description": "Predict material properties for a given multi-element composition using the CALPHAD surrogate model.",
  "parameters": {
    "type": "object",
    "properties": {
      "elements": {
        "type": "array",
        "items": { "type": "string" },
        "description": "Array of element symbols, e.g. ['Fe', 'Co', 'Ni', 'Cr', 'Mn']"
      },
      "fractions": {
        "type": "array",
        "items": { "type": "number", "minimum": 0, "maximum": 1 },
        "description": "Mole fractions corresponding to each element. Must sum to 1.0."
      },
      "temperature_celsius": {
        "type": "number",
        "description": "Target temperature for property evaluation in °C."
      },
      "properties": {
        "type": "array",
        "items": {
          "type": "string",
          "enum": ["hardness_vickers", "youngs_modulus_gpa", "thermal_conductivity_wmk",
                   "density_gcm3", "melting_point_celsius", "phase_fractions"]
        },
        "description": "List of material properties to predict."
      }
    },
    "required": ["elements", "fractions", "temperature_celsius", "properties"]
  }
}`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

function ToolCardComponent({ card, index }: { card: ToolCard; index: number }) {
  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-[#0d1426]/60 p-5 flex flex-col gap-3 hover:border-white/20 transition-colors"
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${card.color}20`, color: card.color }}
      >
        {card.icon}
      </div>
      <div>
        <h3 className="font-bold text-white mb-1">{card.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
      </div>
      <span
        className="mt-auto text-xs font-semibold px-2 py-0.5 rounded-full w-fit border"
        style={{ color: card.color, borderColor: `${card.color}40`, background: `${card.color}15` }}
      >
        {card.tag}
      </span>
    </motion.article>
  );
}

export default function AIToolsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#7c3aed]/15 border border-[#7c3aed]/30 flex items-center justify-center">
              <Sparkles className="text-[#7c3aed]" size={26} aria-hidden="true" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Powering the{' '}
            <span className="gradient-text">Digital Twin</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            The AI and agent tooling ecosystem that accelerates ElementLab&apos;s materials discovery
            pipeline — from browser automation to multi-agent alloy design crews.
          </p>
        </motion.div>

        {/* Browser Automation */}
        <section aria-labelledby="browser-heading" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-[#00d4ff]" size={20} aria-hidden="true" />
            <h2 id="browser-heading" className="text-lg font-bold text-[#00d4ff]">
              Browser Automation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {browserAutomation.map((card, i) => (
              <ToolCardComponent key={card.title} card={card} index={i} />
            ))}
          </div>
        </section>

        {/* Code Management */}
        <section aria-labelledby="code-heading" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-[#7c3aed]" size={20} aria-hidden="true" />
            <h2 id="code-heading" className="text-lg font-bold text-[#7c3aed]">
              Code Management
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codeManagement.map((card, i) => (
              <ToolCardComponent key={card.title} card={card} index={i} />
            ))}
          </div>
        </section>

        {/* Gemma 3 */}
        <section aria-labelledby="gemma-heading" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Database className="text-[#f59e0b]" size={20} aria-hidden="true" />
            <h2 id="gemma-heading" className="text-lg font-bold text-[#f59e0b]">
              Gemma 3 Native Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gemmaCapabilities.map((card, i) => (
              <ToolCardComponent key={card.title} card={card} index={i} />
            ))}
          </div>
        </section>

        {/* Agent Frameworks */}
        <section aria-labelledby="agents-heading" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Network className="text-[#00d4ff]" size={20} aria-hidden="true" />
            <h2 id="agents-heading" className="text-lg font-bold text-[#00d4ff]">
              Agent Frameworks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {agentFrameworks.map((card, i) => (
              <ToolCardComponent key={card.title} card={card} index={i} />
            ))}
          </div>
        </section>

        {/* Sample Tool Schema */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="schema-heading"
        >
          <div className="flex items-center gap-3 mb-5">
            <FileJson className="text-[#00d4ff]" size={20} aria-hidden="true" />
            <h2 id="schema-heading" className="text-lg font-bold">
              Sample Tool Schema — <code className="text-[#00d4ff] text-sm">analyze_element_composition</code>
            </h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            This is a purely educational JSON schema illustrating how a function-calling tool
            would be defined for Gemma 3 or GPT-4o to invoke a materials property prediction
            service. No API keys, credentials, or real endpoints are involved.
          </p>
          <div className="relative rounded-xl border border-white/10 bg-[#060a14] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/3">
              <span className="text-xs text-gray-500 font-mono">tool-schema.json</span>
              <span className="text-xs text-[#00d4ff]">JSON Schema</span>
            </div>
            <pre
              className="p-5 text-xs text-gray-300 overflow-x-auto leading-relaxed font-mono"
              role="region"
              aria-label="Sample tool schema JSON"
            >
              <code>{toolSchema}</code>
            </pre>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
