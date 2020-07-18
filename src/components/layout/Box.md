Box is the simplest _layout primitive_. By default it renders a `div` element but you can specify the HTML tag using `as` prop.

Box allows controlling its whitespace, layout, colors, etc. using design tokens.

Following example should render a `div` that has `width: 25%`, `padding`, `margin`, `background-color`, and `color` values set.

```jsx
<Box p={2} m={2} bg="draftb" color="drafta">
    Draft
</Box>
```
