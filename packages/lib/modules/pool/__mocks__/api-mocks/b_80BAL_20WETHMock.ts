// Do not edit this file. It was auto-generated by saveApiMocks.ts

import { Pool } from '../../pool.types'

export const b_80BAL_20WETHMock = {
  id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
  address: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56',
  name: 'Balancer 80 BAL 20 WETH',
  version: 1,
  owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  swapFeeManager: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  pauseManager: null,
  poolCreator: null,
  decimals: 18,
  factory: '0xa5bf2ddf098bb0ef6d120c98217dd6b141c74ee0',
  symbol: 'B-80BAL-20WETH',
  createTime: 1620153071,
  type: 'WEIGHTED',
  chain: 'MAINNET',
  protocolVersion: 2,
  tags: ['VE8020', 'INCENTIVIZED'],
  hasErc4626: false,
  hasNestedErc4626: false,
  hasAnyAllowedBuffer: false,
  liquidityManagement: {
    disableUnbalancedLiquidity: null,
  },
  hook: null,
  dynamicData: {
    poolId: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
    swapEnabled: true,
    totalLiquidity: '57230620.69',
    totalShares: '6654593.850371417996045272',
    fees24h: '4559.02',
    surplus24h: '0.00',
    swapFee: '0.01',
    volume24h: '455902.08',
    holdersCount: '2512',
    isInRecoveryMode: false,
    isPaused: false,
    aprItems: [
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-voting-apr',
        title: 'Voting APR',
        apr: 0.5339548947418007,
        type: 'VOTING',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-swap-apr-24h',
        title: 'Swap fees APR (24h)',
        apr: 0.01453804416235576,
        type: 'SWAP_FEE_24H',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-swap-apr',
        title: 'Swap fees APR',
        apr: 0.01453804416235576,
        type: 'SWAP_FEE',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-swap-apr-7d',
        title: 'Swap fees APR (7d)',
        apr: 2.910234842084854,
        type: 'SWAP_FEE_7D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-swap-apr-30d',
        title: 'Swap fees APR (30d)',
        apr: 0.675558260084398,
        type: 'SWAP_FEE_30D',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
      {
        id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-protocol-apr',
        title: 'Protocol APR',
        apr: 0.2070693553483915,
        type: 'LOCKING',
        rewardTokenSymbol: null,
        rewardTokenAddress: null,
      },
    ],
  },
  allTokens: [
    {
      id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-0xba100000625a3754423978a60c9317c58a424e3d',
      address: '0xba100000625a3754423978a60c9317c58a424e3d',
      name: 'Balancer',
      symbol: 'BAL',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
  ],
  staking: {
    id: '0xc128a9954e6c874ea3d62ce62b468ba073093f25',
    type: 'VEBAL',
    chain: 'MAINNET',
    address: '0xc128a9954e6c874ea3d62ce62b468ba073093f25',
    gauge: null,
    aura: null,
  },
  userBalance: {
    totalBalance: '0',
    totalBalanceUsd: 0,
    walletBalance: '0',
    walletBalanceUsd: 0,
    stakedBalances: [],
  },
  nestingType: 'NO_NESTING',
  poolTokens: [
    {
      id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-0xba100000625a3754423978a60c9317c58a424e3d',
      chain: 'MAINNET',
      chainId: 1,
      address: '0xba100000625a3754423978a60c9317c58a424e3d',
      decimals: 18,
      name: 'Balancer',
      symbol: 'BAL',
      priority: 0,
      tradable: true,
      isErc4626: false,
      index: 0,
      balance: '19088411.220894832',
      balanceUSD: '45812186.9301476',
      priceRate: '1.0',
      weight: '0.8',
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: null,
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
      priceRateProviderData: null,
      nestedPool: null,
      isBufferAllowed: true,
      underlyingToken: null,
      erc4626ReviewData: null,
    },
    {
      id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      chain: 'MAINNET',
      chainId: 1,
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      priority: 0,
      tradable: true,
      isErc4626: false,
      index: 1,
      balance: '3586.766021929199',
      balanceUSD: '11418433.76315138',
      priceRate: '1.0',
      weight: '0.2',
      hasNestedPool: false,
      isAllowed: true,
      priceRateProvider: null,
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
      priceRateProviderData: null,
      nestedPool: null,
      isBufferAllowed: true,
      underlyingToken: null,
      erc4626ReviewData: null,
    },
  ],
} as unknown as Pool
