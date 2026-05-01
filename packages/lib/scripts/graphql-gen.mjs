import { spawnSync } from 'node:child_process'

const result = spawnSync(
  'graphql-codegen',
  ['-c', './shared/services/api/codegen.ts'],
  {
    stdio: 'inherit',
    shell: true,
    env: process.env,
  }
)

if (result.error) {
  console.error(result.error.message)
  process.exit(1)
}

process.exit(result.status ?? 1)
