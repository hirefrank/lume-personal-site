---
title: 'TypeScript Tips for Better Type Safety'
date: '2024-08-10'
description: 'Practical TypeScript patterns that catch bugs early and make your code more maintainable.'
---

TypeScript's type system is powerful, but it's easy to miss opportunities for better type safety. Here are some patterns I've found helpful.

## Use Discriminated Unions

Instead of optional properties, use discriminated unions to model states explicitly:

```typescript
// ❌ Unclear state management
type User = {
  isLoading: boolean;
  error?: string;
  data?: UserData;
}

// ✅ Explicit state with discriminated union
type User =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: UserData };
```

Now TypeScript ensures you handle all states correctly.

## Leverage `const` Assertions

Turn regular objects into strictly typed values:

```typescript
const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact'
} as const;

// Type: '/' | '/about' | '/contact'
type Route = typeof ROUTES[keyof typeof ROUTES];
```

## Avoid `any` with Unknown

When you don't know the type, use `unknown` instead of `any`. It forces you to validate before using:

```typescript
function processData(input: unknown) {
  // ❌ Won't compile - must validate first
  // return input.toUpperCase();

  // ✅ Type guard required
  if (typeof input === 'string') {
    return input.toUpperCase();
  }
}
```

## Use Branded Types for IDs

Prevent mixing up different ID types:

```typescript
type UserId = string & { __brand: 'UserId' };
type ProductId = string & { __brand: 'ProductId' };

function getUser(id: UserId) { /* ... */ }
function getProduct(id: ProductId) { /* ... */ }

// ❌ TypeScript error - can't mix branded types
// getUser(productId);
```

## Utility Types Are Your Friends

Don't rewrite types — compose them:

```typescript
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// Pick only safe fields for API responses
type PublicUser = Omit<User, 'password'>;

// Make all fields optional for updates
type UserUpdate = Partial<User>;
```

---

Good types make impossible states impossible. Invest time in your type definitions — they pay dividends in reduced bugs and improved developer experience.
