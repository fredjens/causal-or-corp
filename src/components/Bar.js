import React from 'react';

const Bar = ({ value = 0, name}) => {
  console.log(value);

  return (
    <div style={{ width: '400px', margin: '0 auto'}}>
      {name}
      <div style={{
        width: '100%',
        height: '30px',
        background: '#eee',
        position: 'relative',
      }}>
        <div style={{
          width: `${value}%`,
          background: 'black',
          height: '30px',
          position: 'absolute',
          transition: 'width 2s',
        }} />
      </div>
    </div>
  );
}

export default Bar;
