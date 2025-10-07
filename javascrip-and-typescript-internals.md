# JavaScript & TypeScript Internals Interview Prep

Interviewers love probing **deep understanding** of how JavaScript and TypeScript actually work under the hood — especially for Node.js and frontend engineers. This section focuses on the **concepts, patterns, and internals** you should master.

---

## **Core JavaScript Topics**

### **Execution Model**

- Event loop, microtasks vs macrotasks, concurrency model
- Call stack, message queue, and how async/await works under the hood
- `process.nextTick` vs `Promise.resolve().then()` in Node.js

### **Functions & Scopes**

- `this` binding and function context
- Closures and **lexical scoping**
- Function expressions vs declarations
- Arrow functions (and their lack of `this`)
- **Currying** & higher-order functions
- Immediately Invoked Function Expressions (IIFEs)

### **Objects & Prototypes**

- Prototype chain and inheritance
- `Object.create()`, `__proto__`, and `prototype`
- Class syntax sugar and how it maps to prototypes
- Method overriding, polymorphism, and composition

### **Memory & Performance**

- Garbage collection, reference cycles, and memory leaks
- Shallow vs deep cloning (and performance implications)
- Object and array mutations, immutability strategies

### **Advanced Language Features**

- Hoisting and the temporal dead zone
- Destructuring, rest/spread, and default parameters
- Iterators, generators, and async generators
- Symbols, Maps, Sets, WeakMap, WeakSet
- Tagged template literals

### **Asynchronous Programming**

- Callbacks, Promises, async/await
- Error handling in async code
- Promise combinators (`all`, `race`, `any`, `allSettled`)
- Event emitters and pub/sub patterns
- Concurrency control (pools, throttling, debouncing)

---

## **Node.js Internals**

- Streams and buffers
- EventEmitter pattern and backpressure
- The libuv thread pool and async I/O
- Cluster module and worker threads
- Process model, IPC, and scaling Node apps
- Common performance pitfalls (blocking the event loop)

---

## **TypeScript Mastery**

### **Type System Fundamentals**

- Structural typing vs nominal typing
- Type inference and contextual typing
- Union, intersection, and literal types
- Optional, readonly, and indexed properties

### **Advanced Types**

- Generics and generic constraints
- Conditional types and distributive conditional types
- Utility types (`Partial`, `Pick`, `Omit`, `Record`, etc.)
- Type guards and type narrowing
- Template literal types
- Mapped and recursive types

### **Practical TypeScript Patterns**

- Inferring return types (`ReturnType`, `Parameters`)
- Enforcing immutability and deep readonly
- Using `keyof`, `typeof`, and `in` operators effectively
- Handling complex API response types
- Designing reusable type-safe utility functions

### **TS + Node.js**

- Module systems (ESM vs CommonJS)
- tsconfig configuration deep-dive (module resolution, strict mode)
- Decorators and metadata reflection (NestJS-style)
- Using `zod` or `io-ts` for runtime validation with types

---

## **Practice Approach**

- Pick one concept per day and **implement a demo** in TypeScript (e.g., implement currying, prototype inheritance manually, or a small event emitter).
- Write **explanations in your own words** — e.g., “What’s the difference between `call`, `apply`, and `bind`?”
- Review TS utility types by creating small **typed challenges**.
- Use the Node REPL or browser console to **experiment interactively**.

---

## **Bonus: Common Interview Challenges**

- Implement `debounce` and `throttle`
- Deep clone an object without `JSON.parse(JSON.stringify)`
- Implement your own `bind`/`call`/`apply`
- Write a simple Promise implementation
- Implement a memoization function
- Write a function that supports currying and partial application
- Type a function that takes a variable number of arguments and infers the return type

---

This section alone can easily form 4–6 weeks of focused daily prep if you want to master both the language fundamentals and internals.
