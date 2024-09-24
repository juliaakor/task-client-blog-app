import type { UserConfig } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'test', 'build', 'ci']],
  },
} as UserConfig;
