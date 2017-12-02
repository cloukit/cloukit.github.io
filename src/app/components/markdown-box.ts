/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import * as showdown from 'showdown';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-typescript';

const showdownPrism = () => {
  return {
    type: 'html',
    filter: (text: any, converter: any, options: any) => {
      const isCodeBoxRegex = /<pre><code class="([a-zA-Z0-9]+) language\-(.*?)">([\s\S]*?)<\/code><\/pre>/g;
      let html = text;
      const isCodeBoxResults = text.match(isCodeBoxRegex);
      const isCodeBoxRegex2 = new RegExp(/<pre><code class="([a-zA-Z0-9]+) language\-(.*?)">([\s\S]*?)<\/code><\/pre>/g, 'i');
      if (isCodeBoxResults && isCodeBoxResults.length > 0) {
        for (let i = 0; i < isCodeBoxResults.length; i++) {
          const result = isCodeBoxRegex2.exec(isCodeBoxResults[i]);
          let language: any = result[1];
          language = language.toLowerCase();
          let code: any = result[3];
          code = code
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
          const grammar: any = Prism.languages[language];
          const highlightedCode = Prism.highlight(code, grammar, language);
          const highlightedHtml = `<pre class="language-${language}"><code class="language-${language}">${highlightedCode}</code></pre>`;
          html = html.replace(result.input, highlightedHtml);
        }
      }
      return html;
    }
  };
};

const svgsAsObjectShowDownExtension = () => {
  return {
    type: 'lang',
    regex: /cloukitSvg:([-.:_/a-zA-Z0-9]+)/g,
    replace: '<object data="$1" type="image/svg+xml"></object>'
  };
};

@Component({
  selector: 'app-markdown-box',
  template: `
  <app-prism-css-wrapper>
    <div
      class="markdown-box"
      [innerHtml]="markdownHtml | safeHtml"
    ></div>
  </app-prism-css-wrapper>`,
  encapsulation: ViewEncapsulation.None,
  styles: [
    '.markdown-box { font-family: \'Source Sans Pro\', sans-serif;  }',
    '.markdown-box pre { background-color:#555; padding:5px 10px 5px 10px; }',
    '.markdown-box p { line-height:1.6rem; }',
    '.markdown-box h3 { color:#710ECC; font-weight:400; }',
    '.markdown-box code { padding:4px 2px 4px 2px; color:#7a2af3; }',
    '.markdown-box table { border-collapse: collapse; }',
    '.markdown-box table tbody tr td { border-bottom: 1px solid #e9ecef; padding:10px;  }',
    '.markdown-box table thead th { border-bottom: 1px solid #e9ecef; padding:10px; text-align:left; }',
  ],
})
export class MarkdownBoxComponent implements OnChanges {

  @Input()
  markdown: string;

  markdownHtml: string;
  converter: any;

  constructor() {
    showdown.extension('showdown-prism', showdownPrism);
    showdown.extension('showdown-svg-object', svgsAsObjectShowDownExtension);
    this.converter = new showdown.Converter({extensions: ['showdown-prism', 'showdown-svg-object']});
    this.converter.setFlavor('github');
  }

  ngOnChanges() {
    this.markdownHtml = this.converter.makeHtml(this.markdown);
  }

}
