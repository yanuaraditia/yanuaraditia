import type { SpringOptions } from 'motion-v'

export type DockItemData = {
  icon: string // Image URL or path
  label: string
  to?: string // Navigation path for NuxtLink
  onClick?: () => void // Optional custom click handler
  className?: string
}

export type DockProps = {
  items: DockItemData[]
  className?: string
  distance?: number
  panelHeight?: number
  baseItemSize?: number
  dockHeight?: number
  magnification?: number
  spring?: SpringOptions
}
