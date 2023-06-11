import {marked} from "marked";
import hljs from "highlight.js";

import 'highlight.js/styles/atom-one-light.css'

interface LazyInterface {
    name: string,
    level: string,
    renderer: any,
    parser: {
        renderer: {
            image: any
        }
    }
}

export const loadingLazy = {
  name: 'image',
  level: 'inline',
  renderer(token: any): any {
    const html = this.parser.renderer.image(token.href, token.title, token.text);
		return html.replace(/^<img /, '<img loading="lazy" ');
  },
} as LazyInterface;

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
        return `<h${level} class="font-display" id="${anchor}">${text}</h${level}>`
    }

    marked.setOptions({
        renderer: renderer,
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language}).value;
        },
        langPrefix: 'language-', // highlight.js css expects a top-level 'hljs' class.
    })

    marked.use({
        extensions: [loadingLazy]
    })

    return marked(string)
}
