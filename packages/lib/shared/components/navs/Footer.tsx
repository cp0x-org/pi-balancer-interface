'use client'

import NextLink from 'next/link'
import { Stack, Divider, Text, Box, VStack, HStack, Link } from '@chakra-ui/react'
import { staggeredFadeIn } from '@repo/lib/shared/utils/animations'
import { motion } from 'framer-motion'
import { DefaultPageContainer } from '../containers/DefaultPageContainer'
import { ArrowUpRight } from 'react-feather'

import { LinkSection } from './footer.types'
import { ReactNode } from 'react'
import { PROJECT_CONFIG } from '@repo/lib/config/getProjectConfig'

type CardContentProps = {
  linkSections: LinkSection[]
  logoType: ReactNode
  title: string
  subTitle: string
  piTitle?: string | null
}

function CardContent({linkSections, logoType, title, subTitle, piTitle}: CardContentProps) {
    return (
        <Stack
            direction={{base: 'column', lg: 'row'}}
            justify="space-between"
            py={{base: 'sm', lg: 'md'}}
            spacing={{base: 'xl', lg: 'md'}}
            w="full"
        >
            <VStack align="start" color="font.primary" spacing="lg" width={{base: 'auto', md: '70%'}}>
                <Box w="120px">{logoType}</Box>
                <VStack align="start" spacing="sm">
                    <Text fontSize="4xl" fontWeight="500" letterSpacing="-0.4px" variant="secondary">
                        {title}
                    </Text>
                    <Text sx={{textWrap: 'balance'}} variant="secondary">
                        {subTitle}
                    </Text>
                    <Text sx={{textWrap: 'balance'}} variant="secondary">
                        {piTitle}
                    </Text>
                </VStack>
            </VStack>
        </Stack>
    )
}

type FooterProps = {
    logoType: ReactNode
    title: string
    subTitle: string
    piTitle?: string | null
}

export function Footer({logoType, title, subTitle, piTitle}: FooterProps) {
    const {
        footer: {linkSections},
        // links: { socialLinks, legalLinks },
    } = PROJECT_CONFIG

    return (
        <Box as="footer" background="background.level0" shadow="innerLg">
            <DefaultPageContainer py="xl">
                <VStack align="start" spacing="lg">
                    <CardContent
                        linkSections={linkSections}
                        logoType={logoType}
                        subTitle={subTitle}
                        piTitle={piTitle}
                        title={title}
                    />
                    <Divider/>
                    <Stack
                        align="start"
                        alignItems={{base: 'none', lg: 'center'}}
                        animate="show"
                        as={motion.div}
                        direction={{base: 'column', lg: 'row'}}
                        gap="md"
                        initial="hidden"
                        justify="space-between"
                        variants={staggeredFadeIn}
                        w="full"
                    />
                </VStack>
            </DefaultPageContainer>
        </Box>
    )
}
