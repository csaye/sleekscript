// returns value for given string of tokens
function getValue(tokens) {
  // validate tokens
  for (const token of tokens) {
    if (token.type === 'assignment') return `// value error: unexpected ${token.value}`;
  }
  if (tokens[0].type === 'operator') return `// value error: unexpected ${tokens[0].value}`;
  if (tokens[tokens.length - 1].type === 'operator') return `// value error: unexpected ${tokens[tokens.length - 1].value}`;
  // format tokens
  let value = '';
  for (const token of tokens) {
    // parse whitespace
    if (
      value !== '' && token.value !== ')' && value[value.length - 1] !== '('
      && value[value.length - 1] !== '!'
    ) value += ' ';
    // parse keywords
    if (token.type === 'keyword') {
      switch (token.value) {
        case 'is': value += '==='; break;
        case 'isnt': value += '!=='; break;
        case 'and': value += '&&'; break;
        case 'or': value += '||'; break;
        case 'not': value += '!'; break;
        default: break;
      }
    } else value += token.value;
  }
  return value;
}

// returns type of given statement
function getStatementType(statement) {
  if (!statement.length) return 'empty';
  switch (statement[0].type) {
    case 'comment': return 'comment';
    case 'word': {
      if (statement.length < 3) return 'unfinished statement';
      if (statement[1].type !== 'assignment') return `unexpected ${statement[1].value}`;
      return 'assignment';
    }
    default: return `unexpected ${statement[0].value}`
  }
}

// returns code snippet for given statement
function getStatementCode(statement) {
  // get statement type
  const type = statement['type'];
  switch (type) {
    case 'empty': return '';
    case 'comment': return `//${statement[0].value.slice(1)}`;
    case 'assignment': return `${statement[0].value} ${statement[1].value} ${getValue(statement.slice(2))};`
    default: return `// statement error: ${type}`;
  }
}

// parses given syntax tree into javascript
export default function parse(tree) {
  let js = '';
  const vars = [];
  // retrieve statement types
  for (const statement of tree) {
    const type = getStatementType(statement);
    statement['type'] = type;
    if (type === 'assignment') {
      const name = statement[0].value;
      if (!vars.includes(name)) vars.push(name);
    }
  }
  // define variables
  if (vars.length) js += `var ${vars.join(', ')};\n\n`
  // append code for each statement
  for (const statement of tree) js += getStatementCode(statement) + '\n';
  return js;
}
