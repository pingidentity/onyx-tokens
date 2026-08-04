import astroTokensDarkJson from './astro/tokens-dark.json';
import astroTokensJson from './astro/tokens.json';

/**
 * Tokens are re-exported as JSON module namespaces, so every top-level token
 * group is available both directly and under `default`.
 */
type TokenNamespace<T> = T & { default: T };

declare const astroTokens: TokenNamespace<typeof astroTokensJson>;
declare const astroTokensDark: TokenNamespace<typeof astroTokensDarkJson>;

export { astroTokensDark, astroTokens };
