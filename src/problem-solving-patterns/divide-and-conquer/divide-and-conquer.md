# divide and conquer

this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

this pattern can tremendously `decrease time complexity`

# Exercise

given a sorted array of integres, write a function called `search` that accepts a value and returns the index where the value passed to the fuinction is located. if the values is not founud, return -1;

```typescript
search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1
```
