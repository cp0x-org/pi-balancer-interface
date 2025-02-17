import { Address } from 'viem'
import { fetchPoolMock } from './fetchPoolMock'
import { GqlChain } from '@repo/lib/shared/services/api/generated/graphql'
import { Pool } from '../pool.types'
import fs from 'fs'
import path from 'path'
import { lowerFirst } from 'lodash'

type Params = {
  poolId: Address
  chain: GqlChain
  fileName?: string
  isFrozen?: boolean
}
/**
 * Fetches a pool from the API and saves it as a mock file in the api-mocks directory.
 */
export async function savePoolMock({
  poolId,
  chain,
  fileName,
  isFrozen = false,
}: Params): Promise<string> {
  const pool = (await fetchPoolMock(poolId, chain)) as Pool
  const poolJson = JSON.stringify(pool, null, 2)

  const poolVarName = fileName || createPoolVarName(pool) + 'Mock'
  const apiMocksDir = path.join(__dirname, 'api-mocks')
  const filePath = path.join(apiMocksDir, `${poolVarName}.ts`)

  if (!isFrozen) {
    fs.writeFileSync(filePath, createPoolMockFromTemplate(poolVarName, poolJson), 'utf-8')
  }

  // Uncomment to debug
  // console.log(`${poolVarName} pool mock saved to ${filePath}`)

  return poolVarName
}

function createPoolMockFromTemplate(poolVarName: string, poolJson: string) {
  return `
  // Do not edit this file. It was auto-generated by saveApiMocks.ts

  import { Pool } from '../../pool.types'

  export const ${poolVarName} =
${poolJson} as unknown as Pool
`
}

export function createPoolVarName(pool: Pool) {
  return lowerFirst(pool.symbol.replace(/[^a-zA-Z0-9]/g, '_'))
}

/**
 * Creates a file to export a list of all the generated API pool mocks.
 */
export async function saveAllPoolApiMocksFile(mockFileNames: string[]) {
  const importsContent =
    '// Do not edit this file. It was auto-generated by saveApiMocks.ts\n' +
    mockFileNames.map(fileName => `import { ${fileName} } from './${fileName}'`).join('\n')

  const allMocksFileContent = importsContent + createExportListFromTemplate(mockFileNames)

  const apiMocksDir = path.join(__dirname, 'api-mocks')
  const filePath = path.join(apiMocksDir, `allApiMocks.ts`)

  fs.writeFileSync(filePath, allMocksFileContent, 'utf-8')
}

function createExportListFromTemplate(mockFileNames: string[]) {
  return `
import { Pool } from '../../pool.types'

export const allApiMocks: Pool[] = [
  ${mockFileNames.join(',\n  ')},
]
 `
}
