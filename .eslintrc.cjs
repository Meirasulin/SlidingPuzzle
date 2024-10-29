module.exports = {
  env: {
    browser: true,
    es2024: true,
    jest: true,
    node: true,
    'shared-node-browser': true,
    worker: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:security/recommended-legacy',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:unicorn/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['vite.config.ts', '*.config.ts', '*.config.js'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'import',
    'promise',
    'sonarjs',
    'security',
    'simple-import-sort',
    'testing-library',
    'jest-dom',
    'unicorn',
    'optimize-regex',
    '@tanstack/query',
    'no-only-tests',
    'perfectionist',
    'unused-imports',
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': ['warn', {
      prefer: 'type-imports',
    }],
    // TypeScript specific rules
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        prefix: ['I'],
        selector: 'interface',
      },
      {
        format: ['PascalCase'],
        prefix: ['T'],
        selector: 'typeAlias',
      },
      {
        format: ['PascalCase'],
        prefix: ['E'],
        selector: 'enum',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all',
      varsIgnorePattern: '^_',
    }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'import/no-duplicates': 'error',
    // Import rules
    // 'simple-import-sort/imports': 'warn',
    // 'simple-import-sort/exports': 'warn',
    // 'import/no-cycle': 'error',
    // 'import/no-unresolved': 'error',
    // 'import/no-default-export': 'error',
    // 'import/no-named-as-default': 'error',
    // 'import/no-named-as-default-member': 'error',
    'import/order': ['warn', {
      'alphabetize': {
        'caseInsensitive': true,
        'order': 'asc',
      },
      'groups': [
        'builtin',     // Node.js built-in modules
        'external',    // npm packages
        'internal',    // paths marked as internal by config
        'parent',      // paths starting with ../
        'sibling',     // paths starting with ./
        'index',       // paths ending with /index
        'object',      // object imports
        'type',         // type imports
      ],
      'newlines-between': 'always',
      'pathGroups': [
        {
          'group': 'builtin',
          'pattern': 'react',
          'position': 'before',
        },
        {
          'group': 'internal',
          'pattern': '@/**',
          'position': 'after',
        },
      ],
      'pathGroupsExcludedImportTypes': ['react'],
    }],
    // code style and rules format
    'indent': ['error', 2, {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      FunctionDeclaration: { body: 1, parameters: 1 },
      FunctionExpression: { body: 1, parameters: 1 },
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      outerIIFEBody: 1,
      SwitchCase: 1,
      VariableDeclarator: 1,
    }],
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-in-document': 'error',
    'keyword-spacing': ['error', { after: true, before: true }],
    'linebreak-style': ['error', 'unix'],

    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      tabWidth: 2,
    }],
    'no-alert': 'error',
    // General rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-magic-numbers': ['warn', {
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
    }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-only-tests/no-only-tests': 'error',
    'no-param-reassign': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'any', next: 'directive', prev: 'directive' },
    ],
    'perfectionist/sort-named-imports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    // Perfectionist rules
    'perfectionist/sort-objects': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    // Promise rules
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',

    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-wrap': 'error',

    'promise/param-names': 'error',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-curly-brace-presence': ['error', {
      children: 'never',
      props: 'never',
    }],
    'react/jsx-curly-spacing': ['error', {
      children: true,
      when: 'never',
    }],
    'react/jsx-equals-spacing': ['error', 'never'],

    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': ['warn', {
      checkInlineFunction: true,
      checkLocalVariables: true,
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline',
    }],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-props-no-spreading': ['warn', {
      custom: 'enforce',
      explicitSpread: 'ignore',
      html: 'enforce',
    }],
    'react/jsx-tag-spacing': ['error', {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    }],
    'react/jsx-wrap-multilines': ['error', 'parens-new-line'],

    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/prop-types': 'off',

    // React specific rules
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',

    'security/detect-non-literal-regexp': 'warn',
    // Security rules
    'security/detect-object-injection': 'warn',
    'security/detect-unsafe-regex': 'error',
    'semi': ['error', 'always'],
    // SonarJS rules
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-duplicate-string': ['error', { 'threshold': 5 }],
    'sonarjs/no-nested-template-literals': 'error',

    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],
    'space-in-parens': ['error', 'never'],

    'spaced-comment': ['error', 'always'],
    // Testing rules
    'testing-library/await-async-queries': 'error',

    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'error',
    'testing-library/prefer-screen-queries': 'error',
    // Unicorn rules
    'unicorn/filename-case': ['error', {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    }],
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};