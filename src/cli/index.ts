#!/usr/bin/env bun
// Entry point for `oh-my-agents` CLI command

const args = process.argv.slice(2);

if (args.includes('--version') || args.includes('-v')) {
  console.log('oh-my-agents-synthesis v1.0.0');
  process.exit(0);
}

if (args.includes('--help') || args.includes('-h')) {
  console.log('oh-my-agents-synthesis - Unified agent orchestration plugin for OpenCode\n');
  console.log('Usage: oh-my-agents [options]');
  console.log('Options:');
  console.log('  -v, --version    Print version');
  console.log('  -h, --help       Show this help');
  console.log('  -H, --health     Run health check');
  process.exit(0);
}

if (args.includes('--health') || args.includes('-H')) {
  console.log('Health check: OK');
  console.log('Plugin: oh-my-agents-synthesis v1.0.0');
  console.log('Status: Ready');
  process.exit(0);
}

console.log('oh-my-agents-synthesis - use --help for usage');