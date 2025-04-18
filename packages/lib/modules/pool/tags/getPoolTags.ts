import { mins } from '@repo/lib/shared/utils/time'

const POOL_TAGS_URL =
  'https://raw.githubusercontent.com/balancer/metadata/main/pools/tags/index.json'

const POOL_TAGS_ICON_BASE_URL =
  'https://raw.githubusercontent.com/balancer/metadata/main/pools/tags/icons'

export type PoolTag = {
  id: string
  name: string
  description: string
  value?: string
  url?: string
  icon?: string
  iconUrl?: string
  pools?: string[]
}

export async function getPoolTags(): Promise<PoolTag[] | undefined> {
  try {
    const res = await fetch(POOL_TAGS_URL, {
      next: { revalidate: mins(5).toSecs() },
    })
    const tags = (await res.json()) as PoolTag[]

    return tags.map(tag => {
      return {
        ...tag,
        iconUrl: tag.icon ? `${POOL_TAGS_ICON_BASE_URL}/${tag.icon}` : undefined,
      }
    })
  } catch (error) {
    console.error('Unable to fetch pool tags', error)
    return undefined
  }
}
