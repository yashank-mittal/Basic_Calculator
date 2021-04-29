const buttons = document.querySelectorAll('button')
const screen = document.getElementById('screen')
for (let btn of buttons){
    btn.addEventListener('click',(e) => {
        const buttontext = e.target.innerText;
        if (buttontext === 'c'.toUpperCase()) {
            screen.value = "";
        }
        else if(buttontext == 'x'){
            screen.value+='*';
        }
        else if(buttontext == '='){
            try{
                screen.value=eval(screen.value)
            }
            catch(e){
                screen.value = 'Invalid Operation'
                // console.log(e.message);
            }
        }
        else if(screen.value == 'Invalid Operation'){
            screen.value = buttontext;
        }
        else{
            screen.value += buttontext;

        }

    })
}