// analyzes given tokens into a syntax tree
export default function analyze(tokens) {
  const tree = [];
  let statement = [];
  for (const token of tokens) {
    // if separator, close statement
    if (token.type === 'separator') {
      if (statement.length) tree.push(statement);
      statement = [];
    // if comment, close statement
    } else if (token.type === 'comment') {
      if (statement.length) tree.push(statement);
      tree.push([token]);
      statement = [];
    }
    else statement.push(token);
  }
  if (statement.length) tree.push(statement);
  return tree;
}
