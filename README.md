# TypeScript Bug: Type 'string | null' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning a value of type 'string | null' to a variable of type 'string'.  The error arises because the variable might hold a null value, which isn't compatible with a strict 'string' type.

## The Bug

The `greet` function takes a parameter `name` which can be either a string or null.  However, when attempting to concatenate it with another string, TypeScript throws an error because the compiler can't guarantee `name` isn't null.

## The Solution

The solution involves either using a type assertion (though this is generally discouraged unless you're completely sure the value will never be null), or using optional chaining or nullish coalescing to handle the potential null value gracefully.