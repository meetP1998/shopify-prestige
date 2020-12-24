if(typeof Spurit === 'undefined') var Spurit = {};
if(typeof Spurit.Discountmanager === 'undefined') Spurit.Discountmanager = {};
Spurit.Discountmanager.settings = {
    enabled: true,
    badge: {"type":"svg","svg":"<svg width=\"60px\" height=\"60px\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n    <path data-color2=\"\" d=\"M402.6,184.3L295,98.2c1.2-3.8,1.8-7.8,1.8-12c0-22.5-18.2-40.8-40.8-40.8s-40.8,18.2-40.8,40.8 c0,4.2,0.6,8.2,1.8,12l-107.7,86.1H0v282.3h512V184.3H402.6z M235.8,121.6c6,3.4,12.8,5.3,20.2,5.3c7.3,0,14.2-2,20.2-5.3 l78.4,62.7H157.4L235.8,121.6z\"\/>\n    <polygon data-color1=\"\" points=\"375.8,356.6 375.8,341 411.6,341 411.6,319 375.8,319 375.8,305.1 417.7,305.1 417.7,281.5 348.6,281.5 348.6,380.2 419,380.2 419,356.6 \"\/>\n    <polygon data-color1=\"\" points=\"294.4,356.6 294.4,281.5 267.3,281.5 267.3,380.2 339.2,380.2 339.2,356.6 \"\/>\n    <path data-color1=\"\" d=\"M224.9,281.5h-24.7l-34.3,98.7h27.7l5.8-19.3h26.3l6,19.3h27.5L224.9,281.5z M203.4,342.8l9.2-30.6l8.8,30.6 H203.4L203.4,342.8z\"\/>\n    <path data-color1=\"\" d=\"M163.1,338.2c-1.4-3.2-3.4-6-6-8.3s-5.7-4.2-9.4-5.9c-3.7-1.7-7.8-3.2-12.3-4.6c-2.9-0.9-5.4-1.7-7.7-2.4 c-2.3-0.6-4.2-1.3-5.8-2c-1.6-0.7-2.8-1.5-3.6-2.3s-1.3-1.9-1.3-3.2c0-1.8,0.7-3,2.2-3.8c1.4-0.7,3.4-1.1,5.8-1.1 c3,0,6,0.5,9.1,1.5s5.9,2,8.4,3.1c3,1.3,5.8,2.8,8.6,4.4l11.7-22.4c-2.2-1.1-4.7-2.3-7.5-3.5c-2.8-1.3-5.8-2.4-9-3.5 s-6.5-1.9-9.9-2.6s-7-1-10.6-1c-4.9,0-9.6,0.7-14,2.2c-4.4,1.4-8.3,3.5-11.7,6.3c-3.4,2.8-6.1,6.3-8.1,10.4c-2,4.2-3,9-3,14.5 c0,3.6,0.5,6.8,1.5,9.6c1,2.8,2.5,5.3,4.5,7.4c2,2.2,4.6,4.1,7.8,5.8c3.1,1.7,6.9,3.3,11.3,4.8c3,1,5.8,1.9,8.4,2.6s5,1.5,7,2.2 c2,0.7,3.6,1.6,4.8,2.6s1.7,2.2,1.7,3.5s-0.6,2.3-1.7,3.1c-1.2,0.8-3.2,1.2-6.2,1.2c-3.9,0-7.7-0.6-11.5-1.7s-7.1-2.4-10.1-3.8 c-3.5-1.6-6.9-3.4-10.1-5.4l-11.7,23.8c3,1.8,6.2,3.3,9.7,4.7c3.5,1.4,7.1,2.6,10.8,3.6c3.8,1,7.5,1.8,11.3,2.4s7.5,0.8,11.1,0.8 c4.5,0,9.1-0.5,13.6-1.6s8.5-2.8,12.1-5.2c3.6-2.4,6.4-5.6,8.6-9.7c2.2-4,3.3-9,3.3-14.9C165.1,345.4,164.4,341.5,163.1,338.2z\"\/>\n<\/svg>","color1":"#FFFFFF","color2":"#d80000","right":0,"top":0},
    enabledCollection: true,
    collectionPageSelector: "div[class=\"ProductList ProductList--grid  Grid\"] > div[class=\"Grid__Cell 1\/2--phone 1\/2--tablet-and-up 1\/3--lap-and-up\"] > div[class=\"ProductItem \"] > div[class=\"ProductItem__Wrapper\"]",
    productPageSelector: "div[class=\"Product__Slideshow Product__Slideshow--zoomable Carousel flickity-enabled\"] > div[class=\"flickity-viewport\"] > div[class=\"flickity-slider\"] > div:nth-of-type(1) > div[class=\"AspectRatio AspectRatio--withFallback\"] > img[class=\"Image--fadeIn lazyautosizes Image--lazyLoaded\"]",
    productIds: [4451935387696,4488427569200,4492380307504,4492621578288,4492867469360,4492887392304,4492946407472,4498994004016,4498995511344,4498996592688,4498997870640,4498997968944,4498998100016,4504484380720,4701570793520,4701570924592],
    variantIds: [31857038557232,31857033969712,31857024139312,31857036558384,31856973807664,31857021812784,31857027645488,31865837617200,31857050124336,31857050157104,31857050189872,31855998599216,31856005447728,31856007348272,31856008462384,31883487150128,31883487182896,31883487215664,31883487248432,32498104303664,32498108039216]
};