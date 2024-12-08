import { Card } from '@chakra-ui/react'
import { AnimateHeightChange } from '@repo/lib/shared/components/animations/AnimateHeightChange'
import { useBreakpoints } from '@repo/lib/shared/hooks/useBreakpoints'
import { MobileStepTracker } from '@repo/lib/modules/transactions/transaction-steps/step-tracker/MobileStepTracker'
import { useLst } from '../LstProvider'
import { LstStakeReceiptResult } from '@repo/lib/modules/transactions/transaction-steps/receipts/receipt.hooks'
import { SwapTokenRow } from '@repo/lib/modules/tokens/TokenRow/SwapTokenRow'
import { useGetStakedAmount } from '../hooks/useGetStakedAmount'
import { formatUnits, parseUnits } from 'viem'

export function LstStakeSummary({
  isLoading: isLoadingReceipt,
  receivedTokens,
  sentNativeAssetAmount,
}: LstStakeReceiptResult) {
  const { isMobile } = useBreakpoints()

  const { chain, stakeTransactionSteps, lstStakeTxHash, nativeAsset, stakedAsset, amount } =
    useLst()

  const { stakedAmount } = useGetStakedAmount(parseUnits(amount, 18), chain)

  const shouldShowReceipt =
    !!lstStakeTxHash && !isLoadingReceipt && !!receivedTokens && !!sentNativeAssetAmount

  return (
    <AnimateHeightChange spacing="sm" w="full">
      {isMobile && <MobileStepTracker chain={chain} transactionSteps={stakeTransactionSteps} />}
      <Card variant="modalSubSection">
        <SwapTokenRow
          chain={chain}
          label={shouldShowReceipt ? 'You staked' : 'You stake'}
          tokenAddress={nativeAsset}
          tokenAmount={amount}
        />
      </Card>
      <Card variant="modalSubSection">
        <SwapTokenRow
          chain={chain}
          label={shouldShowReceipt ? 'You received' : 'You receive'}
          tokenAddress={stakedAsset}
          tokenAmount={formatUnits(stakedAmount, 18)}
        />
      </Card>
    </AnimateHeightChange>
  )
}
