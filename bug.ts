function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, "+ name + "!`;
}