import type { PluginConfig } from '../config/schema';
import { type AgentDefinition } from './orchestrator';
export type { AgentDefinition } from './orchestrator';
export declare function createAgents(config: PluginConfig | undefined): AgentDefinition[];
export declare function getAgentConfigs(config: PluginConfig | undefined): Record<string, any>;
export declare function getDisabledAgents(config: PluginConfig | undefined): Set<string>;
//# sourceMappingURL=index.d.ts.map