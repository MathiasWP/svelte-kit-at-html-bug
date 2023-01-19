/**
 * I tried reproducing the bug in a Svelte repl but it was not possible.
 * Setting ssr to true will fix the issue, so it feels like a hydration issue.
 */
export const ssr = true