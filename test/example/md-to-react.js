import remark from 'remark'
import reactRenderer from 'remark-react'

import merge from 'deepmerge'
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json'

import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import highlighter from '../../lib'

const mdToReact = (markdown) => {
  const schema = merge(sanitizeGhSchema, { attributes: { code: ['className'] } })

  return remark().use(reactRenderer, {
    sanitize: schema,
    remarkReactComponents: {
      code: highlighter(CodeMirror)
    }
  }).processSync(markdown).contents
}

export default mdToReact
