import React from 'react' // eslint-disable-line no-unused-vars
import { mount } from 'enzyme'
import assert from 'assert'

import mdToReact from './example/md-to-react'

describe('highlight', () => {
  it('render code block element using CodeMirror', () => {
    const codeBlockText = 'function blah(arg1) {};'
    const inputMarkdown = `
\`\`\`javascript
${codeBlockText}
\`\`\`
`
    const actual = mdToReact(inputMarkdown)
    const wrapper = mount(actual)
    assert.ok(wrapper.find('code').hasClass('cm-s-default'))
    assert.equal(wrapper.find('code > span').length, 8)
    assert.ok(wrapper.find('code > span').first().hasClass('cm-keyword'))
  })
})
