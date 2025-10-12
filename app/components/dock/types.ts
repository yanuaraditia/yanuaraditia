import type { SpringOptions } from 'motion-v'

export type DockItemData = {
  icon: string
  label: string
  to: string
  className?: string
  dockWindow?: DockWindow
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

export type DockWindow = {
  width?: number
  height?: number
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
}
