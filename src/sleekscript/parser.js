// returns code snippet for given token
function getCode(token) {
  // add content based on type and value
  switch (token.type) {
    case 'comment': return `//${token.value}`;
    case 'keyword':
      switch (token.value) {
        case 'and': return '&&';
        case 'or': return '||';
        case 'not': return '!';
        default: return token.value;
      }
    default: return token.value;
  }
}

// parses given tokens into javascript
export default function parse(tokens) {
  let js = '';
  // append code for each token
  for (const token of tokens) js += getCode(token);
  return js;
}
