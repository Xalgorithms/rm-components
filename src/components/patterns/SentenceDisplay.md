Displays the functional content of an input sentence. Passing functions for `openSentenceEditor`
and `removeSentence` will bind those functions to the attached buttons. An `index` prop must be
provided, indicating the position in the array of input sentences.

```jsx
<SentenceDisplay
  participle="invoiced"
  attribute="order.subtotal"
  subject="input.order"
  operation=">="
  value="20 USD"
  index={3}
  openSentenceEditor={(i) => {
    alert(`Opening editor for sentence ${i}...`);
  }}
  removeSentence={(i) => {
    alert(`Removing sentence ${i}`);
  }}
/>
```
