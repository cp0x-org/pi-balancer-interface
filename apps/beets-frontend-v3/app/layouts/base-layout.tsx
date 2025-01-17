import NextTopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'
import { NavBarContainer } from '@/lib/components/navs/NavBarContainer'
import { GlobalAlerts } from '@repo/lib/shared/components/navs/GlobalAlerts'
import { LzBeetsMigrateModal } from '@/lib/components/modals/LzBeetsMigrateModal'
import { BeetsLogoType } from '@/lib/components/imgs/BeetsLogoType'
import { Footer } from '@repo/lib/shared/components/navs/Footer'

export function BaseLayout({
  children,
  renderLzBeetsModal = true,
}: PropsWithChildren & { renderLzBeetsModal?: boolean }) {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/misc/pattern-sml-7@2x.webp)',
        backgroundSize: '8%',
      }}
    >
      <NextTopLoader color="#7f6ae8" showSpinner={false} />
      <GlobalAlerts />
      <NavBarContainer />
      {children}
      {renderLzBeetsModal && <LzBeetsMigrateModal />}
      <Footer
        logoType={<BeetsLogoType />}
        subTitle="Beets is your ultimate destination for liquid-staked tokens, real yield, and AMM innovation."
        title="The Hub for LSTs"
      />
    </div>
  )
}
