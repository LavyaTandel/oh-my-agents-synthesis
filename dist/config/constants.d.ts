export declare const ORCHESTRATOR_NAME: "orchestrator";
export declare const SUBAGENT_NAMES: readonly ["explorer", "librarian", "oracle", "designer", "fixer", "observer", "council", "councillor"];
export declare const ALL_AGENT_NAMES: readonly ["orchestrator", "explorer", "librarian", "oracle", "designer", "fixer", "observer", "council", "councillor"];
export declare const AGENT_ALIASES: Record<string, string>;
export declare const ORCHESTRATABLE_AGENTS: readonly ["explorer", "librarian", "oracle", "designer", "fixer", "observer", "council"];
export declare const PROTECTED_AGENTS: Set<string>;
export declare const SUBAGENT_DELEGATION_RULES: Record<string, readonly string[]>;
export declare const LOOM_MODEL_IDS: readonly ["opencode/ring-2.6-1t-free", "opencode/nemotron-3-super-free", "opencode/deepseek-v4-flash-free", "opencode/minimax-m2.5-free", "opencode/big-pickle"];
export declare const LOOM_PRESET: Record<string, any>;
export declare const DEFAULT_MODELS: Record<string, string | undefined>;
export declare const POLL_INTERVAL_MS = 500;
export declare const POLL_INTERVAL_SLOW_MS = 1000;
//# sourceMappingURL=constants.d.ts.map