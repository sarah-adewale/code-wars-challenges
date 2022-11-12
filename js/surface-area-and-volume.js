// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    // 2(h × W) + 2(h × L) + 2(W × L)
    let area = (2 * width * height) + (2* depth * height) + (2 * width * depth)
    let volume = width * height * depth
    return [area, volume]
}


console.log(getSize(4,2,6))