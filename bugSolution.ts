function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  } else {
    return `Hello, ${name}!`;
  }

//or

function greet(name: string | null): string {
  return `Hello, ${name ?? 'world'}!`;
}
//or
function greet(name: string | null): string {
  return `Hello, ${name || 'world'}!`;
}