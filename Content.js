let rohit_image = [
    "https://user-images.githubusercontent.com/56231634/156936995-1dc89adc-2906-4df8-83f8-51f5d4964f97.png",
];


const simg = document.getElementsByTagName("img")

    for (let i = 0; i < simg.length; i++) {
        const randomimg = Math.floor(Math.random() * rohit_image.length);
        simg[i].src = rohit_image[0];
    }
window.addEventListener("scroll", function () {
    const img = document.getElementsByTagName("img")

    for (let i = 0; i < img.length; i++) {
        const randomimg = Math.floor(Math.random() * rohit_image.length);
        img[i].src = rohit_image[0];
    }

})
