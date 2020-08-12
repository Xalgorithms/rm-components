Modal is a helper component used in patterns when an element needs to be toggled between visible and hidden.
It can be utilized in the following way:
<br>
```function componentName() { const [isOpen, setIsOpen] = React.useState(false); return (<Modal isOpen={isOpen}><content /></Modal>)}```

```jsx
<Modal><Text>Hello World</Text></Modal>

<Modal isOpen><Text>Hello World</Text></Modal>
```
