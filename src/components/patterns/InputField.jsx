import React, { useRef, useEffect } from 'react';
import { Box } from '..';

// style
const textareaStyle = {
  width: '100%',
  resize: 'none',
  outline: 'none',
  border: 'none',
  height: '80px',
  fontFamily: 'Public Sans, sans-serif',
  fontSize: '1rem',
  color: '#696969',
};

function InputField({ children, value, onChange }) {
  const [color, setColor] = React.useState('oline');

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setColor('oline');
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      <Box p={2} m={0} width={1} bg="bg" border="1px solid" borderColor={color} borderRadius="base">
        <textarea
          value={value}
          onChange={onChange}
          style={textareaStyle}
          onClick={() => setColor('primary')}
        />
        <div>{children}</div>
      </Box>
    </div>
  );
}

export default InputField;
