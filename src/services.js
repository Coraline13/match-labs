const insertCat = (catUrl) => {
  // Don't pay attention this function, just call it and provide it a catUrl
  if (catUrl) {
    const img = document.createElement("img");
    img.src = catUrl;
    document.querySelector("body").appendChild(img);
  }
};

export default insertCat;
