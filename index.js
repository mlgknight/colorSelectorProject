const colorForm = document.getElementById("color-form");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const hexColor = document.getElementById("hex-code");
const hexColor2 = document.getElementById("hex-code2");
const hexColor3 = document.getElementById("hex-code3");
const hexColor4 = document.getElementById("hex-code4");
const hexColor5 = document.getElementById("hex-code5");

colorForm.addEventListener("submit", function(event){
    colorLogicFunction();
    event.preventDefault();
});

function colorLogicFunction(){
    const colorPicker = document.getElementById("colorPicker").value.substring(1);
    const colorSelect = document.getElementById("colorDropdown").value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorSelect}`)
    .then(res => res.json())
        .then(data => {
        const colorarray = data.colors;
        const colorSection = [color, color2, color3, color4, color5];
        const textArray = [hexColor, hexColor2, hexColor3, hexColor4, hexColor5];

        textArray.forEach((text, index) => {
            if (index < colorarray.length) {
                text.textContent = colorarray[index].hex.value;
            }
        });

        colorarray.forEach((color, index) => {
            if (index < colorSection.length) {
                colorSection[index].style.backgroundColor = color.hex.value;
                colorSection[index].addEventListener("click", () => {
                    navigator.clipboard.writeText(color.hex.value)
                });
            }
        });
    });
}


