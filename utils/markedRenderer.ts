import {marked} from "marked";

export const MarkedRenderer = (string: string) => {
    let renderer = new marked.Renderer()
    let tableOfContents = [] as any[]

    renderer.heading = function (text, level, raw, slugger) {
        // @ts-ignore
        let anchor = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        tableOfContents.push({
            anchor: anchor,
            level: level,
            text: text
        });
        return `<h${level} id="${anchor}">${text}</h${level}>`
    }

    marked.setOptions({
        renderer: renderer,
        highlight: function (code, lang) {
            const hljs = require('highlight.js');
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language}).value;
        },
        langPrefix: 'language-', // highlight.js css expects a top-level 'hljs' class.
    })
    return {
        rendered: marked(string),
        toc: tableOfContents
    }
}
