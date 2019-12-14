/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

function plural(n: number): number {
  if (n === 1) return 1;
  return 5;
}

export default [
  'kkj',
  [['AM', 'PM'], u, u],
  u,
  [
    ['so', 'lu', 'ma', 'mɛ', 'ye', 'va', 'ms'],
    ['sɔndi', 'lundi', 'mardi', 'mɛrkɛrɛdi', 'yedi', 'vaŋdɛrɛdi', 'mɔnɔ sɔndi'], u, u
  ],
  [
    ['so', 'lu', 'ma', 'mɛ', 'ye', 'va', 'ms'],
    ['sɔndi', 'lundi', 'mardi', 'mɛrkɛrɛdi', 'yedi', 'vaŋdɛrɛdi', 'mɔnɔ sɔndi'], u,
    ['so', 'lu', 'ma', 'mɛ', 'ye', 'va', 'ms']
  ],
  [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    [
      'pamba', 'wanja', 'mbiyɔ mɛndoŋgɔ', 'Nyɔlɔmbɔŋgɔ', 'Mɔnɔ ŋgbanja',
      'Nyaŋgwɛ ŋgbanja', 'kuŋgwɛ', 'fɛ', 'njapi', 'nyukul', '11', 'ɓulɓusɛ'
    ],
    u
  ],
  u,
  [['BCE', 'CE'], u, u],
  1,
  [6, 0],
  ['dd/MM y', 'd MMM y', 'd MMMM y', 'EEEE dd MMMM y'],
  ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
  ['{1} {0}', u, u, u],
  [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
  'XAF',
  'FCFA',
  'Franc CFA',
  {'JPY': ['JP¥', '¥'], 'USD': ['US$', '$']},
  plural
];
