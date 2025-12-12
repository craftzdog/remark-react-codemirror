import js from '@eslint/js'
import eslintReact from 'eslint-plugin-react'
import globals from 'globals'

export default [
  { ignores: ['lib'] },
  js.configs.recommended,
  eslintReact.configs.flat.recommended,
  eslintReact.configs.flat['jsx-runtime'],
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-useless-escape': 0,
      'prefer-const': 2,
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    settings: {
      react: {
        version: '19'
      }
    }
  }
]
