class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement("div");
        div.textContent = "Я - div, созданный с помощью класса Option:";
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}

let myDiv = new Option(400, 300, "red", 21, "right");
myDiv.createDiv();