import { Button, Divider, HStack, VStack } from '@chakra-ui/react'
import { CornerDownLeft } from 'react-feather'

export function ActionCompleteModalFooter() {
  return (
    <VStack w="full">
      <Divider />
      <HStack justify="space-between" w="full">
        <Button leftIcon={<CornerDownLeft size="14" />} size="xs" variant="ghost">
          Return to pool
        </Button>
      </HStack>
    </VStack>
  )
}
