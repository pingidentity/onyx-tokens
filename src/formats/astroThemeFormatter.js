import _ from 'lodash';
import { usesReferences, getReferences } from 'style-dictionary/utils';

const resolveReferences = dictionary => inputValue => {
  let value = inputValue;

  if (usesReferences(inputValue, dictionary.tokens)) {
    // Note: make sure to use `token.original.value` because
    // `token.value` is already resolved at this point.
    const refs = getReferences(inputValue, dictionary.tokens);
    refs.forEach(ref => {
      value = value.replace(ref.value, function() {
        return `${ref.name}`;
      });
    });
  }

  return value;
}

function formatDesignTokens({dictionary}) {
  const tokenObj = {};
  dictionary.allTokens.forEach(token => {
    const refResolver = resolveReferences(dictionary);
  
    // let value = JSON.stringify(token.value);
    let value = `${token.value}`;
    const type = token.path[0];
    const path = token.path.slice(1);

    // the `dictionary` object now has `usesReference()` and
    // `getReferences()` methods. `usesReference()` will return true if
    // the value has a reference in it. `getReferences()` will return
    // an array of references to the whole tokens so that you can access their
    // names or any other attributes.
    value = refResolver(value);

    _.setWith(tokenObj, token.path, token.value, Object);
  });
  return JSON.stringify(tokenObj, null, 2);
}
  
export default formatDesignTokens;
  