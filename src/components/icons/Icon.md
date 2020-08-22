Still a little janky, need prop to pass color and a few size variations.

After we write an auto-sizing algorithm or swap the library you won't need to pass `viewbox_x` or `viewbox_y`

Use `name` and `fill` properties to pass what you want.

```jsx
<Icon name="additional" fill="black" size={64} viewbox_x={32} viewbox_y={32}/>
<Icon name="dash" fill="red" size={48}/>
<Icon name="download" fill="#696969" size={32}/>
<Icon name="edit" fill="orange" viewbox_x={20} viewbox_y={18}/>
<Icon name="expand" fill="purple"/>
<Icon name="filter" fill="limegreen"/>
<Icon name="link"/>
<Icon name="list"/>
<Icon name="logic"/>
<Icon name="pin" size={32}/>
<Icon name="search" size={128} viewbox_x={14} viewbox_y={14}/>
<Icon name="status"/>
<Icon name="trash"/>
<Icon name="user"/>
<Icon name="idropdown"/>
<Icon name="info"/>
<Icon name="ex"/>
```
