import type { SpringOptions } from 'motion-v'

export type DockItemData = {
  icon: string
  label: string
  to: string
  className?: string
}

export type DockProps = {
  className?: string
  distance?: number
  panelHeight?: number
  baseItemSize?: number
  dockHeight?: number
  magnification?: number
  spring?: SpringOptions
}
