import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: process.env.REACT_APP_CLARIFAI,
});

export function getCasualAssessment(image) {
  return new Promise((resolve, reject) => {
    app.models.predict('corporate', { base64: image }).then(
      function(response) {
        resolve(response.outputs[0].data.concepts);
      },
      function(err) {
        reject(err);
      }
    );
  });
}