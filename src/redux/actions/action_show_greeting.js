export const SHOW_GREETING = 'SHOW_GREETING';

export function showGreeting() {
  const greeting = "Hello React w Redux! I am a stateful message from the redux store.";
  return {
    type: SHOW_GREETING,
    payload: greeting
  }
}
