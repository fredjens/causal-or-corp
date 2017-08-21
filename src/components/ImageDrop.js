import React from 'react';
import Dropzone from 'react-dropzone'

const ImageDrop = (props) => {
  return (
    <section>
      <div className="dropzone">
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={(accepted) => { props.onDrop(accepted) }}
        >
          <p>Upload an image of yourself to see how causal you really are</p>
        </Dropzone>
      </div>
    </section>
  );
}

export default ImageDrop;
