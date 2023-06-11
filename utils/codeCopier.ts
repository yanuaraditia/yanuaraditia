const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
   <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
</svg>`
const COPIED_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
   <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
   <path d="M9 14l2 2l4 -4"></path>
</svg>`

const handleCopyClick = async (evt: Event, returnElem: Element) => {
    // @ts-ignore
    const {children} = evt?.target?.parentElement
    if (children) {
        // @ts-ignore
        const {innerText} = Array.from(children)[0]
        await copyToClipboard(innerText)
        returnElem.innerHTML = COPIED_ICON
        setTimeout(() => {
            returnElem.innerHTML = COPY_ICON
        }, 500)
    }
}

const copyToClipboard = async (str: string) => {
    await navigator.clipboard.writeText(str)
}

export const codeCopier = () => {
    const highlights = document.querySelectorAll(".prose pre")
    highlights.forEach(div => {
        div.classList.add("relative", "group", "rounded-xl")
        // create the copy button
        const copy = document.createElement("button")
        copy.classList.add(
            "bg-neutral-200",
            "dark:bg-neutral-700",
            "p-2",
            "text-xs",
            "rounded-md",
            "opacity-0",
            "group-hover:opacity-100",
            "transition-all",
            "absolute",
            "right-2",
            "top-2"
        )
        copy.innerHTML = COPY_ICON
        // add the event listener to each click
        copy.addEventListener("click", async (event: Event) => {
            await handleCopyClick(event, copy)
        })
        // append the copy button to each code block
        div.append(copy)
    })
}
