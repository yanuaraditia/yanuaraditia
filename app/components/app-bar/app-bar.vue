<template>
  <div
    class="fixed flex justify-between top-0 items-center px-4 py-2 right-0 left-0 select-none"
  >
    <div class="flex items-center gap-7">
      <div class="flex items-center gap-3">
        <button class="cursor-pointer">
          <Icon name="ic:baseline-apple" size="20px" />
        </button>
        <span class="font-bold text-sm">{{ currentPageTitle }}</span>
      </div>
      <div class="flex items-center gap-5">
        <span class="font-normal text-sm">File</span>
        <span class="font-normal text-sm">View</span>
        <span class="font-normal text-sm">Refresh</span>
      </div>
    </div>
    <div class="font-medium text-sm">
      {{ formattedDateTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
// Use VueUse's useNow to get a reactive current time
const now = useNow()

// Get current route
const route = useRoute()

// Page title mapping
const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/project': 'Projects',
  '/blog': 'Writing',
  '/contact': 'Contact',
  '/playground': 'Playground'
}

// Get current page title based on route
const currentPageTitle = computed(() => {
  const path = route.path

  // Check for exact matches first
  if (pageTitles[path]) {
    return pageTitles[path]
  }

  // Check for partial matches (e.g., /project/slug, /blog/slug)
  for (const [routePath, title] of Object.entries(pageTitles)) {
    if (path.startsWith(routePath) && routePath !== '/') {
      return title
    }
  }

  // Default fallback
  return 'Finder'
})

// Format the date/time as "Tue Apr 1 9:41 AM"
const formattedDateTime = computed(() => {
  const date = new Date(
    now.value.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
  )

  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })

  return `${weekday} ${month} ${day} ${time}`
})
</script>
