'use client'

import { Button, Divider, HStack, ModalFooter, VStack } from '@chakra-ui/react'
import { useStepWithTxBatch } from '@repo/lib/modules/web3/safe.hooks'
import { useAppzi } from '@repo/lib/shared/hooks/useAppzi'
import { AnimatePresence, motion } from 'framer-motion'

import { PropsWithChildren } from 'react'
import { CornerDownLeft } from 'react-feather'
import { TransactionStep } from '../../../modules/transactions/transaction-steps/lib'

export function SuccessActions({
  returnLabel,
  returnAction,
}: {
  returnLabel?: string
  returnAction?: () => void
}) {
  return (
    <VStack w="full">
      <Divider />
      <HStack justify="space-between" w="full">
        <Button
          leftIcon={<CornerDownLeft size="14" />}
          onClick={returnAction}
          size="xs"
          variant="ghost"
        >
          {returnLabel}
        </Button>
      </HStack>
    </VStack>
  )
}

type Props = {
  isSuccess: boolean
  currentStep: TransactionStep
  returnLabel: string
  returnAction: () => void
  urlTxHash?: string
}

export function ActionModalFooter({
  isSuccess,
  currentStep,
  returnLabel,
  returnAction,
  urlTxHash,
}: Props) {
  // Avoid animations when displaying a historic receipt
  if (urlTxHash) {
    return (
      <ModalFooter>
        <SuccessActions returnAction={returnAction} returnLabel={returnLabel} />
      </ModalFooter>
    )
  }
  return (
    <ModalFooter>
      <AnimatePresence initial={false} mode="wait">
        {isSuccess ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            key="footer"
            style={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <SuccessActions returnAction={returnAction} returnLabel={returnLabel} />
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            key="action"
            style={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <VStack w="full">
              {currentStep && <RenderActionButton currentStep={currentStep} key={currentStep.id} />}
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalFooter>
  )
}

function RenderActionButton({ currentStep }: PropsWithChildren<{ currentStep: TransactionStep }>) {
  const { isStepWithTxBatch } = useStepWithTxBatch(currentStep)

  if (isStepWithTxBatch) return currentStep?.renderBatchAction?.(currentStep)

  return currentStep?.renderAction()
}
