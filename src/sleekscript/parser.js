// returns type of given statement
function getStatementType(statement) {
  if (!statement.length) return 'empty';
  switch (statement[0].type) {
    default: return 'unknown';
  }
}

// returns code snippet for given statement
function getStatementCode(statement) {
  // get node type
  const type = getStatementType(statement);
  switch (type) {
    default: return `// error: ${type}`;
  }
}

// parses given syntax tree into javascript
export default function parse(tree) {
  let js = '';
  // append code for each statement
  for (const statement of tree) {
    js += getStatementCode(statement) + '\n';
  }
  return js;
}
