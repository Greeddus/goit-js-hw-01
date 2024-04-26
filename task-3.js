function getElementWidth(content, padding, border) {
    const widthContent = parseFloat(content); 
    const widthPadding = parseFloat(padding);
    const widthBorder = parseFloat(border);
    const widthTotal = widthContent + 2 * widthPadding + 2 * widthBorder;
    return widthTotal;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));
console.log(getElementWidth("192px", "43px", "6.5px"));