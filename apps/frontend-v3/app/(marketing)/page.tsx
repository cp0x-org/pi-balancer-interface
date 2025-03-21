'use client'
// import { getApolloServerClient } from '@repo/lib/shared/services/api/apollo-server.client'
// import { LandingV3Layout } from './_lib/landing-v3/LandingV3Layout'
// import { GetProtocolStatsDocument } from '@repo/lib/shared/services/api/generated/graphql'
// import { mins } from '@repo/lib/shared/utils/time'
// import { PROJECT_CONFIG } from '@repo/lib/config/getProjectConfig'

// import { redirect } from 'next/navigation'

// export default function Home() {
//   redirect('/swap')
// }

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Используем replace, чтобы не сохранять страницу в истории браузера
    router.replace('/swap')
  }, [router])

  return null
}

// export default async function Home() {
//   const client = getApolloServerClient()
//
//   const variables = {
//     chains: PROJECT_CONFIG.supportedNetworks,
//   }
//
//   const { data: protocolData } = await client.query({
//     query: GetProtocolStatsDocument,
//     variables,
//     context: {
//       fetchOptions: {
//         next: { revalidate: mins(10).toSecs() },
//       },
//     },
//   })
//
//   return <LandingV3Layout protocolData={protocolData} />
// }
