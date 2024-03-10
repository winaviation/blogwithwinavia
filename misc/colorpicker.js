function showColorHex() {
  const colorInput = document.getElementById('colorpicker');
  const colorValue = colorInput.value;
  const hexValue = rgbToHex(colorValue);
  
  const hexValueElement = document.getElementById('hexValue');
  hexValueElement.innerHTML = `Hex: ${hexValue}`;
}

function rgbToHex(rgb) {
  const red = parseInt(rgb.slice(1, 3), 16);
  const green = parseInt(rgb.slice(3, 5), 16);
  const blue = parseInt(rgb.slice(5, 7), 16);
  const hexValue = '#' + ((1 << 24) | (red << 16) | (green << 8) | blue).toString(16).slice(1);
  return hexValue;
}
