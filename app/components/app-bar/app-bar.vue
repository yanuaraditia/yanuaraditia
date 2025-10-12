<template>
  <div
    class="fixed flex justify-between top-0 items-center px-4 py-2 right-0 left-0 select-none"
  >
    <div class="flex items-center gap-7">
      <div class="flex items-center gap-3">
        <button class="cursor-pointer">
          <Icon name="ic:baseline-apple" size="20px" />
        </button>
        <span class="font-semibold">Finder</span>
      </div>
      <div class="flex items-center gap-5">
        <span class="font-normal text-sm">File</span>
        <span class="font-normal text-sm">View</span>
        <span class="font-normal text-sm">Refresh</span>
      </div>
    </div>
    <div class="font-medium text-sm">
      {{
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      }}
    </div>
  </div>
</template>
