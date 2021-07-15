// returns type of given statement
function getStatementType(statement) {
  if (!statement.length) return 'empty';
  switch (statement[0].type) {
    case 'assignment': return `unexpected ${statement[0].value}`
    case 'word': {
      if (statement.length < 3) return 'unfinished statement';
      if (statement[1].type !== 'assignment') return `unexpected ${statement[1].value}`;
      return 'assignment';
    }
    default: return 'unknown';
  }
}

// returns code snippet for given statement
function getStatementCode(statement) {
  // get node type
  const type = getStatementType(statement);
  switch (type) {
    case 'empty': return '';
    case 'assignment': return `${statement.map(token => token.value).join(' ')};`
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
