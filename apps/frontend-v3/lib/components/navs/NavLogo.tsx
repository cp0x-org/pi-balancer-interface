'use client'

import { fadeIn } from '@repo/lib/shared/utils/animations'
import { BalancerLogo } from '../imgs/BalancerLogo'
import { BalancerLogoType } from '../imgs/BalancerLogoType'
import { Cp0xLogo } from '../imgs/Cp0xLogo'
import { Box, Link } from '@chakra-ui/react'
import { motion } from 'motion/react'
import NextLink from 'next/link'

export function NavLogo() {
  return (
    <Box as={motion.div} variants={fadeIn}>
      <Link as={NextLink} href="/" prefetch variant="nav">
        <Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <Cp0xLogo fill="none" height="26" viewBox="0 0 63 26" width="63" />
          </Box>
        </Box>
        <Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <BalancerLogo width="26px" />
          </Box>
          <Box display={{ base: 'none', md: 'block' }}>
            <BalancerLogoType width="50px" />
          </Box>
        </Box>
      </Link>
    </Box>
  )
}
