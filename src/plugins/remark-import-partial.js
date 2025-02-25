/**
 * Modified from https://github.com/dotansimha/remark-import-partial due to
 * issues with Docusaurus v3 (changed regex to not conflict with math rendering)
 */
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
//const visit = require('unist-util-visit');
import { visit } from 'unist-util-visit';
const RGX = /%import (.*?)%/;

export default function() {
  const unified = this;

  return function transformer(tree, file) {
    visit(tree, 'paragraph', node => {
      if (
        node.children &&
        node.children[0] &&
        node.children[0].type === 'text'
      ) {
        const matches = (node.children[0].value || '').match(RGX);

        if (matches && matches[1]) {
          const filePath = matches[1];
          const fileAbsPath = resolve(file.dirname, filePath);

          if (existsSync(fileAbsPath)) {
            const rawMd = readFileSync(fileAbsPath, 'utf-8');
            const parsed = unified.parse(rawMd);
            node.children = parsed.children;
          } else {
            throw new Error(
              `Unable to locate @import file in path: ${fileAbsPath}!`
            );
          }
        }
      }
    });
  };
};
