'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { NavBar } from '@repo/lib/shared/components/navs/NavBar'
import { NavLogo } from './NavLogo'
import { MobileNav } from '@repo/lib/shared/components/navs/MobileNav'
import { useNav } from '@repo/lib/shared/components/navs/useNav'
import { BalancerLogoType } from '../imgs/BalancerLogoType'
import { PROJECT_CONFIG } from '@repo/lib/config/getProjectConfig'
import { isDev, isStaging } from '@repo/lib/config/app.config'

export function NavBarContainer() {
  const {
    options: { allowCreateWallet },
  } = PROJECT_CONFIG
  const { defaultAppLinks } = useNav()

  // TODO: move vebal link to config when live
  const appLinks = []
  if (isDev || isStaging) {
    appLinks.push({
      label: 'veBAL (wip)',
      href: '/vebal',
    })
    appLinks.push({
      label: 'LBP',
      href: '/lbp/create',
    })
  }

  const allAppLinks = [...defaultAppLinks, ...appLinks]

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <NavBar
          allowCreateWallet={allowCreateWallet}
          appLinks={allAppLinks}
          mobileNav={
            <MobileNav
              LogoType={BalancerLogoType}
              appLinks={allAppLinks}
              ecosystemLinks={[]}
              socialLinks={[]}
            />
          }
          navLogo={<NavLogo />}
        />
      </motion.div>
    </AnimatePresence>
  )
}
