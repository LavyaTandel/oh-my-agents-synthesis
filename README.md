# Oh My Agents Synthesis

Unified AI agent orchestration plugin for OpenCode — synthesizes the best architecture from `oh-my-opencode-slim` (no-delegation reliability) and `oh-my-openagent` (hook/manager composition) with 5-model LOOM routing across 8 agent roles.

## Features

- **No background agent delegation** — all agents run directly in the OpenCode main loop for maximum reliability
- **5-model LOOM routing** with explicit model assignment per agent role
- **8 specialized agent factories**: orchestrator, explorer, librarian, oracle, designer, fixer, observer, council
- **Hook composition system** inspired by oh-my-openagent's manager pattern
- **Runtime preset switching** via `/preset` slash command or `OH_MY_AGENTS_PRESET` env var
- **Built-in MCPs**: websearch, context7, grep_app
- **Council tool** for multi-model consensus
- **Subtask management** with persistent state
- **WebFetch tool** with jsdom-based HTML extraction
- **AST-grep tools** for code search and replace

## 5-Model Routing (LOOM Preset)

| Agent | Model | Variant |
|-------|-------|---------|
| orchestrator | opencode/ring-2.6-1t-free | max |
| oracle | opencode/nemotron-3-super-free | max |
| council | opencode/nemotron-3-super-free | max |
| librarian | opencode/minimax-m2.5-free | medium |
| designer | opencode/minimax-m2.5-free | medium |
| observer | opencode/minimax-m2.5-free | — |
| fixer | opencode/deepseek-v4-flash-free | max |
| explorer | opencode/big-pickle | — |

## Installation

### Option 1: Symlink into OpenCode plugins directory

```bash
# Clone or copy the plugin
mkdir -p ~/.config/opencode/plugins/oh-my-agents-synthesis
ln -sf /path/to/oh-my-agents-synthesis/dist/index.js ~/.config/opencode/plugins/oh-my-agents-synthesis/index.js
ln -sf /path/to/oh-my-agents-synthesis/dist/tui.js ~/.config/opencode/plugins/oh-my-agents-synthesis/tui.js
ln -sf /path/to/oh-my-agents-synthesis/dist/cli ~/.config/opencode/plugins/oh-my-agents-synthesis/cli
```

### Option 2: Use as a local file:// plugin

In `~/.config/opencode/opencode.json`:

```json
{
  "plugin": [
    "context-mode",
    "file:///path/to/oh-my-agents-synthesis/dist/index.js"
  ]
}
```

### Option 3: npm install (once published)

```bash
npm install -g oh-my-agents-synthesis
```

## Configuration

Copy `oh-my-agents-synthesis.json` to `~/.config/opencode/oh-my-agents-synthesis.json` and customize.

## Slash Commands

- `/preset` — List available presets or switch preset
- `/council` — Run a multi-model council query
- `/subtask` — Manage subtasks
- `/ast_grep_search` — Search code with AST-grep
- `/ast_grep_replace` — Replace code patterns with AST-grep

## Build

```bash
bun run build
```

## License

MIT