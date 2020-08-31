import React from 'react';
import { Badge, Icon, Modal } from '..';

const heightMatch ={
    height: '22px',
}

function ColumnLabel({ rowLabel }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Modal isOpen={!isOpen}>
        <Badge variant="blank"><div style={heightMatch}>{rowLabel}</div></Badge>
      </Modal>
      <Modal isOpen={isOpen}>
      <Badge variant="blank"><Icon name="trash" size={18}/></Badge>
      </Modal>
    </div>
  );
}

export default ColumnLabel;
