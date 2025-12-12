import React from 'react'
import PropTypes from 'prop-types'
import { Highlighter } from 'react-codemirror-runmode'

export default function (theme, opts = {}) {
  const { fallbackLanguage, languages } = opts

  class Code extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      lang: PropTypes.string,
      children: PropTypes.node
    }

    render() {
      const { className, children, lang } = this.props
      const language =
        lang || (className && className.match(/language-([^ ]*).*$/)?.[1]) || ''

      // Handle children - can be a string or an array
      let value = ''
      if (typeof children === 'string') {
        value = children
      } else if (Array.isArray(children)) {
        value = children[0] || ''
      }

      return (
        <code className={className}>
          <Highlighter
            lang={language}
            theme={theme}
            fallbackLanguage={fallbackLanguage}
            languages={languages}
          >
            {value}
          </Highlighter>
        </code>
      )
    }
  }

  return Code
}
