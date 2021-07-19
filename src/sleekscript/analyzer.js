// analyzes given tokens into a syntax tree
export default function analyze(tokens) {
  const tree = [];
  let statement = [];
  // for each token
  for (const token of tokens) {
    // if separator and statement, close statement
    if (token.type === 'separator') {
      if (statement.length) {
        tree.push(statement);
        statement = [];
      }
    }
    // if not separator, push token
    else statement.push(token);
  }
  // append trailing statement and return tree
  if (statement.length) tree.push(statement);
  return tree;
}
