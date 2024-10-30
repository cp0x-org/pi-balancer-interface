/* eslint-disable max-len */
import { colors as baseColors } from '@repo/lib/shared/services/chakra/themes/base/colors'

export const colors = {
  ...baseColors,
  base: {
    light: 'background.level1',
    hslLight: '44,22%,90%',
    dark: 'blue',
    hslDark: '216,12%,25%',
  },
}

export const primaryTextColor = `linear-gradient(45deg, ${colors.gray['700']} 0%, ${colors.gray['500']} 100%)`
