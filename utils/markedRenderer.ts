export const MarkedRenderer = async (string: string) => {
    const markdown = require('markdown-it')
    const shiki = require('shiki')
    const html = ref("")

    await shiki.getHighlighter({
        theme: 'nord'
    }).then((highlighter: any) => {
        const md = markdown({
            html: true,
            highlight: (code: string, lang: string) => {
                return highlighter.codeToHtml(code, {lang})
            }
        })
        html.value = md.render(string)
    })

    return html

}
