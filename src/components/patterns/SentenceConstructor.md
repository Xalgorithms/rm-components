Used to construct input/output sentences.

You won't be able to modify the fields within this styleguide, because the fields depend on a parent component's state and functions to update.

```jsx
<SentenceConstructor
  content={{
    a: 'Param A',
    b: 'Param B',
    c: 'Param C',
    d: '>',
    e: 'formula E',
  }}
  updateContent={(n) => {
    console.log(n);
  }}
/>
```
