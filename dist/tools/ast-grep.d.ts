import type { ToolDefinition } from '@opencode-ai/plugin';
interface AstGrepParams {
    path: string;
    pattern: string;
    filePattern?: string;
    lang?: string;
    useRegexp?: boolean;
}
export declare function ast_grep_search(params: AstGrepParams): Promise<{
    matches: Array<{
        file: string;
        line: number;
        text: string;
    }>;
}>;
export declare function ast_grep_replace(params: AstGrepParams & {
    rewrite: string;
    dryRun?: boolean;
}): Promise<{
    replacements: number;
    files: string[];
}>;
export declare const ast_grep_search_tool: ToolDefinition;
export declare const ast_grep_replace_tool: ToolDefinition;
export {};
//# sourceMappingURL=ast-grep.d.ts.map