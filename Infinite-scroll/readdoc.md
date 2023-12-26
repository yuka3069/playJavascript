loading svg comes from 'loading.io'

position: fixed;：将元素的定位方式设置为"fixed"，这意味着该元素将相对于浏览器窗口固定位置，而不是相对于其父元素。

top : 50% ;left:50%:将元素的顶部和左侧边缘分别定位到父元素（或浏览器窗口，因为是 fixed 定位）的垂直和水平中心。

transform 是 CSS 中的属性，用于对元素进行变换，包括平移、旋转、缩放等。

translate(-50%, -50%) 是一个平移变换。在这里，它的参数 -50% 表示将元素向左平移 50%自身宽度，以及向上平移 50%自身高度。(注意自身的 50%)

这个平移变换的效果是将元素的中心点（通常是元素的左上角点）移动到其父元素或容器的中心位置。这样，通过结合 position: fixed;，top: 50%; 和 left: 50%;，你可以在不知道元素尺寸的情况下将元素精确居中定位在父容器或浏览器窗口中，无论元素的尺寸如何变化，它都会始终保持居中。

https://unsplash.com/ 图片收集

.image-container {
margin: 10px 30%;
}
.image-container img {
width: 100%;
}
.image-container img：这是一个 CSS 选择器，用于选择 ".image-container" 元素内部的图像（<img>）元素。

width: 100%;：这行代码将选定的图像元素的宽度设置为父元素（即 ".image-container"）的宽度的 100%。这意味着图像将填充其容器的宽度，以适应容器的大小，而不会变形。
