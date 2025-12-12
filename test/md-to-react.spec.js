// @vitest-environment jsdom
import React from 'react' // eslint-disable-line no-unused-vars
import { describe, expect, it } from 'vitest'
import { render, waitFor } from '@testing-library/react'

import mdToReact from './example/md-to-react'

describe('highlight', () => {
  it('render code block element using CodeMirror', async () => {
    const codeBlockText = 'function blah(arg1) {};'
    const inputMarkdown = `
\`\`\`js
${codeBlockText}
\`\`\`
`
    const actual = mdToReact(inputMarkdown)
    const { container } = render(actual)

    const codeEl = container.querySelector('code')
    expect(codeEl).toBeDefined()

    // Check that the code element has the language class
    expect(codeEl.classList.contains('language-js')).toBe(true)

    // Wait for the highlighter to process the code asynchronously
    await waitFor(
      () => {
        // Check that syntax highlighting has been applied (multiple spans with classes)
        const spans = codeEl.querySelectorAll('span')
        expect(spans.length).toBeGreaterThan(1)

        // Check the code content is fully rendered
        expect(codeEl.textContent).toContain('function')
      },
      { timeout: 2000 }
    )
  })
})
