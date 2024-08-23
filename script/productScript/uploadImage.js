function uploadImage(file, productID) {
    const formData = new FormData();
    formData.append('image', file);
  
    fetch('/upload-image', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.imageUrl;
      localStorage.setItem(`uploadedImage-${productID}`, imageUrl);
    })
    .catch(error => console.error(error));
}