import type { Plugin } from '@opencode-ai/plugin';
/**
 * TUI (Text User Interface) module for the Oh My Agents plugin.
 * Provides a terminal-based interface for monitoring and interacting with agents.
 */
export interface TuiState {
    agents: Record<string, {
        model: string;
        displayName?: string;
        status?: string;
    }>;
    activeAgent?: string;
    messages: Array<{
        role: string;
        content: string;
        agent?: string;
    }>;
}
export declare function getTuiState(): TuiState;
export declare function updateAgentModel(agentName: string, model: string, displayName?: string): void;
export declare function setActiveAgent(agentName: string): void;
export declare function addMessage(role: string, content: string, agent?: string): void;
export declare const TuiPlugin: Plugin;
//# sourceMappingURL=tui.d.ts.map