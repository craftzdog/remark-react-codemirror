import { remark } from 'remark'
import gfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import * as production from 'react/jsx-runtime'
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark'

import highlighter from '../../src'

const mdToReact = (markdown) => {
  return remark()
    .use(gfm)
    .use(remarkRehype)
    .use(rehypeReact, {
      ...production,
      components: {
        code: highlighter(oneDarkHighlightStyle)
      }
    })
    .processSync(markdown).result
}

export default mdToReact
