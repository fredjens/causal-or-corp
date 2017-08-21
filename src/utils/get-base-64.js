
export function getBase64(image) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onabort = () => console.warn('file reading was aborted');
    reader.onerror = () => console.warn('file reading has failed');

    reader.onload = () => {
       resolve(reader.result.split(',')[1]);
    };

    reader.readAsDataURL(image);
  });
}