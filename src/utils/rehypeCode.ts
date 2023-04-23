import 'server-only';

import type { Element } from 'hast';

const getPreNodes = (children: Element[], preNodes: Element[]) =>
  children.forEach((child) => {
    if (child.tagName === 'pre') {
      preNodes.push(child);
    }
    if (child.children) {
      getPreNodes(child.children as Element[], preNodes);
    }
  });

const processPreNode = async (node: Element) => {
  const button = {
    children: [{ type: 'text', value: '' }],
    properties: { className: 'copy' },
    tagName: 'button',
    type: 'element',
  } as Element;
  node.children.push(button);
};

export const rehypeCode =
  () =>
  async ({ children }: { children: Element[] }) => {
    const preNodes: Element[] = [];
    getPreNodes(children, preNodes);
    await Promise.all(preNodes.map(processPreNode));
  };
