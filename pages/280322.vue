<template>
  <section class="py-16 xl:py-20">
    <div class="container px-4 xl:w-9/12 mx-auto">
      <div class="font-bold mb-5 text-3xl xl:text-5xl xl:w-11/12 grid gap-y-7 xl:leading-tight">
        <p>
          <span>What an amazing year. </span>
          <span>Thanks for let me love you for: </span>
          <span class="text-blue-600" v-text="dateLeft"></span>
        </p>
        <p>
          <span>I have something you need to figured it out which is </span>
          <span>TLJR359UVFM64MFT</span>
        </p>
        <p>
          <span>That was amazing to be with you so far. ❤️</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "280322"
}
</script>
<script setup lang="ts">
const countDownDate = new Date("Mar 28, 2022 17:37:25").getTime();
const dateLeft = ref("")
const refreshCounter = () => {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  dateLeft.value = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s.";
}

refreshCounter()
onMounted(() => {
  setInterval(() => {
    refreshCounter()
  },100)
})

useHead({
  title: `${dateLeft.value}`,
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>
