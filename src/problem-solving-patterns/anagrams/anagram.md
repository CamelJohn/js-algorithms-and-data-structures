## Anagrams

given two strings, write a function to determine if the 2nd string is an anagram of the 1st.
an anagram is a word/phrase/name formed by rearanging the letters of another, like cinema & iceman

```typescript
valid_anagram('', ''); // true;
valid_anagram('aaz', 'zza'); // false;
valid_anagram('anagram', 'nagaram'); // true;
valid_anagram('rat', 'car'); // false;
valid_anagram('awesome', 'awesom'); // flase;
valid_anagram('querty', 'qeywrt'); // true;
valid_anagram('texttwisttime', 'timetwisttext'); // true;
```
