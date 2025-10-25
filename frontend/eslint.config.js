import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  {
    ignores: ['node_modules/*', 'dist', 'vite.config.ts'],
  },
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      complexity: ['error', 20],
      'linebreak-style': ['error', 'windows | unix'],
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // Not needed with TypeScript
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_',
        },
      ],
      'jsx-a11y/anchor-is-valid': 'off',
      'import/no-default-export': 'error',
      'import/no-anonymous-default-export': ['error', { allowArray: false }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // unused-imports/no-unused-varsを使うのでOFF
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Interfaceではなくtypeを使用
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['strictCamelCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: [
            'strictCamelCase',
            'StrictPascalCase',
            'snake_case',
            'UPPER_CASE',
          ],
        },
        {
          selector: 'typeProperty',
          format: ['strictCamelCase', 'snake_case'],
        },
        {
          selector: 'function',
          format: ['strictCamelCase', 'StrictPascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'accessor',
          format: ['strictCamelCase'],
        },
        {
          selector: 'parameter',
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['StrictPascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['StrictPascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'interface',
          format: ['StrictPascalCase'],
        },
      ]
    },
  },
);
