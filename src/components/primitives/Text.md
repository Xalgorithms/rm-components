By default, it renders `<p>` element with the default text styles.

```jsx
<Text>
  Lithe and leggy, Salukis are the supermodels of the canine world.
  Their looks are legendary: this ancient breed can be traced back to
  the pyramids. Archaeologists have even found these dogs entombed
  with Egyptian royalty!
</Text>
```


However, we encourage you to use the `variant` prop as much as possible to ensure consistent look of text in the app:

```jsx
<Text variant="heading">Heading</Text>
<Text variant="body">Body text</Text>
<Text color="primary">Instruction text</Text>
<Text variant="error">Error text</Text>
```
