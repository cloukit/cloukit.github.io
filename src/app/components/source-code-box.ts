import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-source-code-box',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="code-box">
    <style>
    /* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript */
    code[class*="language-"],pre[class*="language-"]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,0.3);font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*="language-"]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre) > code[class*="language-"],pre[class*="language-"]{background:#272822}:not(pre) > code[class*="language-"]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#708090}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#a6e22e}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.regex,.token.important{color:#fd971f}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
    </style>
    <pre 
      [class]="getLanguage()"><code 
      [class]="getLanguage()"
      [innerHtml]="codePreview | safeHtml"></code></pre>
  </div>`,
  styles: [ '.code-box { font-size:14px; }' ],
})
export class SourceCodeBoxComponent implements OnChanges {
  @Input()
  language: string;

  @Input()
  code: string;

  codePreview: string;

  ngOnChanges() {
    this.codePreview = Prism.highlight(this.code, Prism.languages.javascript);
  }

  getLanguage() {
    return `language-${this.language}`;
  }

}
