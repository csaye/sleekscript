// analyzes given tokens into a syntax tree
export default function analyze(tokens) {
  const tree = [];
  let node = [];
  for (const token of tokens) {
    // if separator, close node
    if (token.type === 'separator') {
      tree.push(node);
      node = [];
    } else node.push(token);
  }
  if (node.length) tree.push(node);
  return tree;
}
