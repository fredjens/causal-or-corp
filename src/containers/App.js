import React, { Component } from 'react';
import autoBind from 'auto-bind';

import { getCasualAssessment } from '../services/clarifai';
import { getBase64 } from '../utils/get-base-64';

import ImageDrop from '../components/ImageDrop';
import Image from '../components/Image';
import Bar from '../components/Bar';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      loading: false,
      images: [],
      assessment: [],
    }
  }

  reset() {
    this.setState({
      loading: false,
      images: [],
      assessment: [],
    })
  }

  async uploadImage(images) {
    const image = await getBase64(images[0]);
    const assessment = await getCasualAssessment(image);

    this.setState({ images, assessment });
  }

  render() {
    const {
      images: [image],
      assessment,
    } = this.state;

    return (
      <div>
        <h1>Casual or corporate?</h1>
        {assessment.length > 0 &&
          <div style={{ marginBottom: '40px'}}>
            <p style={{ fontSize: '5rem', margin: '0'}}>You are {assessment[0].name}!</p>
            (about {assessment[0].value * 100}% sure...)
          </div>
        }
        {image &&
          <div>
            <div>
              <Image src={image.preview} />
            </div>
            <button onClick={this.reset}>Try another one</button>
          </div>
        }
        {!image &&
          <ImageDrop onDrop={this.uploadImage} />
        }
      </div>
    );
  }
}

export default App;
