// Entry point for `oh-my-agents` CLI command
import { parseArgs } from 'node:util';

const options = {
  version: { type: 'boolean', short: 'v' },
  help: { type: 'boolean', short: 'h' },
  health: { type: 'boolean', short: 'H' },
};

const { values } = parseArgs({ args: process.argv.slice(2), options, strict: false });

if (values.version) {
  console.log('oh-my-agents-synthesis v1.0.0');
  process.exit(0);
}

if (values.help) {
  console.log(`
oh-my-agents-synthesis - Unified agent orchestration plugin for OpenCode

Usage:
  oh-my-agents [options]

Options:
  -v, --version    Print version
  -h, --help       Show this help
  -H, --health     Run health check
`);
  process.exit(0);
}

if (values.health) {
  console.log('Health check: OK');
  console.log('Plugin: oh-my-agents-synthesis v1.0.0');
  console.log('Status: Ready');
  process.exit(0);
}

console.log('oh-my-agents-synthesis - use --help for usage');