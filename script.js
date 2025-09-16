const layeredTextList = document.getElementsByClassName("layeredText")
const LAYERS_COUNT = 24;
const LAYER_OFFSET = 3;

for (let i = 0; i < layeredTextList.length; i++) {
  const element = layeredTextList[i];
  const textSpan = element.querySelector("span.text");
  const layersDiv = element.querySelector("div.layers");

  for (let j = 0; j < LAYERS_COUNT; j++) {
    const layer = document.createElement("div");
    layer.classList.add("layer");
    layer.style.setProperty("--i", j + 1);
    layer.textContent = textSpan.textContent;
    layersDiv.appendChild(layer);
  }
}

console.log("hola", layeredTextList)