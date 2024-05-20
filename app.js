var text = document.getElementById('text');
var btns = document.getElementsByClassName('action_btn');
var fontOptions = document.getElementById('font-family');
var heading = document.getElementById('heading');
var fontColor = document.getElementById('fontColor');
var backColor = document.getElementById('backColor');


heading.addEventListener('change', function(){
    if(this.value === 'h1'){
        text.style.fontSize = '36px';
    }
    if(this.value ==='h2'){
        text.style.fontSize = '24px';
    }
    if(this.value ==='h3'){
        text.style.fontSize = '20.8px';
    }
    if(this.value ==='h4'){
        text.style.fontSize = '16px';
    }
    if(this.value ==='h5'){
        text.style.fontSize = '12.8px';
    }
    if(this.value ==='h6'){
        text.style.fontSize = '11.2px';
    }
})

fontColor.addEventListener('change' , function () {
    text.style.color = this.value;
})

backColor.addEventListener('change' , function () {
    text.style.backgroundColor = this.value;
})


fontOptions.addEventListener('change', function () {
    text.style.fontFamily = this.value;
})

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){

        switch (this.innerText) {
            case 'Bold':
                if (text.style.fontWeight == 'bold') {
                    text.style.fontWeight = 'normal';
                } else {
                    text.style.fontWeight = "bold";
                }
            break;
            case 'Italic':
                if (text.style.fontStyle == 'italic') {
                    text.style.fontStyle = 'normal';
                    } else {
                 text.style.fontStyle = "italic";
                    }
            break;
            case 'Underline':
                if (text.style.textDecorationLine == 'underline') {
                    text.style.textDecorationLine = 'none';
                    } else {
                text.style.textDecorationLine = 'underline';
                }
                break;
            case 'Left':
                    text.style.textAlign = "left";
                    break;
            case 'Justify':
                text.style.textAlign = "justify";
                break;
            case 'Center':
                text.style.textAlign = "center";
                break;
            case 'Right':
                text.style.textAlign = "right";
                break;
            default:
                break;
        }
})
}



