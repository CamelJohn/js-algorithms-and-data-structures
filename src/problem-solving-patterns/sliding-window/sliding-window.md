# sliding window

this pattern involves creating a `window` which can either be an array or number from one position to another.

depending on a certain condition, the window either increases or closes (and a new window is created).

this is very useful for keeping track of a subset of data in an array/string etc.

# Exercise

write a function called `max_sub_array_sum` which accepts an array of integers, and a number called `n`.
the function should calculate the max number of `n` consecutive elements in the array.

```typescript
max_sub_array_sum([1, 2, 5, 2, 8, 1, 5], 2); // 10
max_sub_array_sum([1, 2, 5, 2, 8, 1, 5], 4); // 17
max_sub_array_sum([4, 2, 1, 6], 1); // 6
max_sub_array_sum([4, 2, 1, 6], 4); // 13
max_sub_array_sum([], 4); // null
```
