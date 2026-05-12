import type { McpName, McpConfig } from './types';
export declare function createBuiltinMcps(disabledMcps?: readonly McpName[], websearchConfig?: {
    provider: 'exa' | 'tavily';
    apiKey?: string;
}): Record<string, McpConfig>;
//# sourceMappingURL=index.d.ts.map