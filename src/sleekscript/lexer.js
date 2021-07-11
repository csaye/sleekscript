// recursively retrieves tokens from given code
function getTokens(code, tokens) {
  const matches = [];
  // for each possible token
  for (const token of possibleTokens) {
    // if code matches token
    const match = code.match(token.regex);
    if (match) {
      // push match
      matches.push({
        match: match,
        type: token.type
      });
    }
  }
  // if no more matches, return tokens
  if (!matches.length) return tokens;
  // get match with earliest index
  const first = matches.reduce((acc, match) =>
  (!acc || match.match['index'] < acc.match['index']) ? match : acc);
  // push token
  tokens.push({
    type: first.type,
    value: first.match[0]
  });
  // slice code from end of match and recurse
  code = code.slice(first.match['index'] + first.match[0].length);
  return getTokens(code, tokens);
}

// lexes given sleekscript into tokens
export default function lex(code) {
  const tokens = [];
  getTokens(code, tokens); // recursively retrieve tokens
  return tokens;
}
