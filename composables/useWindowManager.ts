import { reactive, readonly } from 'vue'

export interface WindowState {
  id: string
  title: string
  component: string
  props?: Record<string, unknown>
  x: number
  y: number
  width: number
  height: number
  isMinimized: boolean
  isMaximized: boolean
  isActive: boolean
  zIndex: number
}

export interface WindowManagerState {
  windows: Map<string, WindowState>
  activeWindowId: string | null
  nextZIndex: number
}

// Global window manager state
const state = reactive<WindowManagerState>({
  windows: new Map(),
  activeWindowId: null,
  nextZIndex: 100
})

export const useWindowManager = () => {
  const openWindow = (config: {
    id: string
    title: string
    component: string
    props?: Record<string, unknown>
    x?: number
    y?: number
    width?: number
    height?: number
  }) => {
    // Calculate centered position with slight offset for multiple windows
    const windowWidth = config.width ?? 800
    const windowHeight = config.height ?? 600
    const screenWidth = globalThis.innerWidth || 1200
    const screenHeight = globalThis.innerHeight || 800

    // Center position with slight offset based on existing windows count (accounting for menu bar)
    const offsetMultiplier = state.windows.size * 30
    const centerX = Math.max(
      0,
      (screenWidth - windowWidth) / 2 + offsetMultiplier
    )
    const centerY = Math.max(
      28, // Menu bar height
      (screenHeight - windowHeight) / 2 + offsetMultiplier + 14 // 14px additional offset from menu bar
    )

    const windowState: WindowState = {
      id: config.id,
      title: config.title,
      component: config.component,
      props: config.props || {},
      x: config.x ?? centerX,
      y: config.y ?? centerY,
      width: windowWidth,
      height: windowHeight,
      isMinimized: false,
      isMaximized: false,
      isActive: true,
      zIndex: state.nextZIndex++
    }

    // Close existing window with same id if exists
    if (state.windows.has(config.id)) {
      closeWindow(config.id)
    }

    // Deactivate all other windows
    state.windows.forEach((window) => {
      window.isActive = false
    })

    state.windows.set(config.id, windowState)
    state.activeWindowId = config.id

    // Update URL
    updateURL()

    return windowState
  }

  const closeWindow = (id: string) => {
    state.windows.delete(id)

    if (state.activeWindowId === id) {
      // Find the window with the highest z-index to make active
      let highestZIndex = -1
      let newActiveId: string | null = null

      state.windows.forEach((window, windowId) => {
        if (window.zIndex > highestZIndex && !window.isMinimized) {
          highestZIndex = window.zIndex
          newActiveId = windowId
        }
      })

      state.activeWindowId = newActiveId
      if (newActiveId) {
        state.windows.get(newActiveId)!.isActive = true
      }
    }

    updateURL()
  }

  const focusWindow = (id: string) => {
    const window = state.windows.get(id)
    if (!window) return

    // Deactivate all windows
    state.windows.forEach((w) => {
      w.isActive = false
    })

    // Activate and bring to front
    window.isActive = true
    window.zIndex = state.nextZIndex++
    state.activeWindowId = id

    // Restore if minimized
    if (window.isMinimized) {
      window.isMinimized = false
    }
  }

  const minimizeWindow = (id: string) => {
    const window = state.windows.get(id)
    if (!window) return

    window.isMinimized = true
    window.isActive = false

    // Find next active window
    if (state.activeWindowId === id) {
      let highestZIndex = -1
      let newActiveId: string | null = null

      state.windows.forEach((w, windowId) => {
        if (windowId !== id && w.zIndex > highestZIndex && !w.isMinimized) {
          highestZIndex = w.zIndex
          newActiveId = windowId
        }
      })

      state.activeWindowId = newActiveId
      if (newActiveId) {
        state.windows.get(newActiveId)!.isActive = true
      }
    }
  }

  const maximizeWindow = (id: string) => {
    const window = state.windows.get(id)
    if (!window) return

    if (window.isMaximized) {
      // Restore
      window.isMaximized = false
      // Could restore previous size/position here
    } else {
      // Maximize
      window.isMaximized = true
      window.x = 0
      window.y = 0
      window.width = globalThis.innerWidth || 1200
      window.height = globalThis.innerHeight || 800
    }
  }

  const moveWindow = (id: string, x: number, y: number) => {
    const window = state.windows.get(id)
    if (!window) return

    window.x = x
    window.y = y
  }

  const updateURL = () => {
    if (typeof globalThis.window === 'undefined') return

    const openWindows = Array.from(state.windows.keys()).filter(
      (id) => !state.windows.get(id)?.isMinimized
    )

    if (openWindows.length === 0) {
      globalThis.history.replaceState({}, '', '/')
    } else if (openWindows.length === 1) {
      const windowId = openWindows[0]
      globalThis.history.replaceState({}, '', `/${windowId}`)
    } else {
      const windowsParam = openWindows.join(',')
      globalThis.history.replaceState({}, '', `/?windows=${windowsParam}`)
    }
  }

  const restoreFromURL = () => {
    if (typeof globalThis.window === 'undefined') return

    const url = new URL(globalThis.window.location.href)
    const path = url.pathname
    const windowsParam = url.searchParams.get('windows')

    if (windowsParam) {
      // Multiple windows - let them auto-center with offsets
      const windowIds = windowsParam.split(',')
      windowIds.forEach((id) => {
        openWindowById(id.trim())
      })
    } else if (path !== '/') {
      // Single window - let it auto-center
      const windowId = path.slice(1) // Remove leading slash
      openWindowById(windowId)
    }
  }

  const openWindowById = (id: string, x?: number, y?: number) => {
    const windowConfigs: Record<
      string,
      {
        title: string
        component: string
        width: number
        height: number
      }
    > = {
      blog: {
        title: 'Blog',
        component: 'BlogWindow',
        width: 900,
        height: 700
      },
      project: {
        title: 'Projects',
        component: 'ProjectWindow',
        width: 1000,
        height: 800
      },
      about: {
        title: 'About',
        component: 'AboutWindow',
        width: 600,
        height: 500
      }
    }

    const config = windowConfigs[id]
    if (config) {
      openWindow({
        id,
        ...config,
        x,
        y
      })
    }
  }

  return {
    state: readonly(state),
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    maximizeWindow,
    moveWindow,
    restoreFromURL,
    openWindowById
  }
}
