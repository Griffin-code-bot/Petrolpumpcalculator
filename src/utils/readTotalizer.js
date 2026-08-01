import Tesseract from "tesseract.js";

async function preprocess(file) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Enlarge image 2×
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert to grayscale
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const gray =
          data[i] * 0.299 +
          data[i + 1] * 0.587 +
          data[i + 2] * 0.114;

        // Increase contrast
        const value = gray > 160 ? 255 : 0;

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
      }

      ctx.putImageData(imageData, 0, 0);

      resolve(canvas.toDataURL("image/png"));
    };

    img.src = URL.createObjectURL(file);
  });
}





export async function readTotalizer(image, onProgress = () => {}) {




  console.log(image);
  alert(image?.name || "No file");



  const processed = await preprocess(image);




const preview = window.open();
preview.document.write(`<img src="${processed}" style="width:100%">`);



  const result = await Tesseract.recognize(processed, "eng", {
    logger: (m) => {
      if (m.status === "recognizing text") {
        onProgress(Math.round(m.progress * 100));
      }
    },
  });

  return result.data.text;
}
