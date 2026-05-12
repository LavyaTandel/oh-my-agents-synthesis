import type { ToolDefinition } from '@opencode-ai/plugin';
import type { PluginContext } from '../plugin/types';
interface CouncilParams {
    prompt: string;
    preset?: string;
}
export declare function council_session(params: CouncilParams): Promise<{
    response: string;
    councillors: Array<{
        name: string;
        response: string;
    }>;
    summary: string;
}>;
export declare const council_tool: ToolDefinition;
export declare function createCouncilTool(_ctx: PluginContext, _config: Record<string, any>, _depthTracker: any): Record<string, ToolDefinition>;
export {};
//# sourceMappingURL=council.d.ts.map