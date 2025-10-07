# multiple pointers

creating `pointers` or values that correspond to an index or positin and move towards the beggining, end or middle based on a certain condition.

very efficient for solving problems with minimal space complexity as well.

```typescript
const array: number[] = [-4, -3, -2, -1, 0, 1, 2, 4];
const string = 'alksjdalksjdlkasjdlks';
```

## Example

wite a function called `sumZero` which accepts a `sorted` array of integers.
the function should find the `first` pair where the sum is 0;
return an array that includes both values that sum to zero or `undefined` if a pair does not exist.

```typescript
sum_zero([-3, -2, 1, 0, 1, 2, 3]); // [-3,3];
sum_zero([-2, 1, 0, 3]); // undefined;
sum_zero([1, 2, 3]); // undefined;
```
