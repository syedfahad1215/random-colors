// Defining the varibles



let randomCode1 ;

let randomCode2 ;

let randomCode3 ;

let randomCode4 ;

let randomCode5 ;

let randomCode6 ;

let randomCode7 ;

let randomCode8 ;

let randomCode9 ;

let randomCode10 ;


//Define the function for generating the hexa code and assigning it to randomCodes


const getColors =()=>{
    // Generate the hexa code 
 
    // Generating a ramdom number with in the maximum hexa color code 

    
        randomCode1  = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode2 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode3 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode4 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode5 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode6 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode7 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode8 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode9 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);

        randomCode10 = "#" + Math.floor(Math.random() * 16777215 ).toString(16).padStart(0, 6);




//Adding the colorcodes & styling the backgroundColor to the HTML page  


document.getElementById("color-code1").innerText = randomCode1;
document.querySelectorAll(".buttom")[0].style.backgroundColor = randomCode1


document.getElementById("color-code2").innerText = randomCode2;
document.querySelectorAll(".buttom")[1].style.backgroundColor = randomCode2;


document.getElementById("color-code3").innerText = randomCode3;
document.querySelectorAll(".buttom")[2].style.backgroundColor = randomCode3 ;


document.getElementById("color-code4").innerText = randomCode4;
document.querySelectorAll(".buttom")[3].style.backgroundColor = randomCode4;


document.getElementById("color-code5").innerText = randomCode5;
document.querySelectorAll(".buttom")[4].style.backgroundColor = randomCode5;


document.getElementById("color-code6").innerText = randomCode6;
document.querySelectorAll(".buttom")[5].style.backgroundColor = randomCode6;


document.getElementById("color-code7").innerText = randomCode7;
document.querySelectorAll(".buttom")[6].style.backgroundColor = randomCode7;


document.getElementById("color-code8").innerText = randomCode8;
document.querySelectorAll(".buttom")[7].style.backgroundColor = randomCode8;


document.getElementById("color-code9").innerText = randomCode9;
document.querySelectorAll(".buttom")[8].style.backgroundColor = randomCode9;


document.getElementById("color-code10").innerText = randomCode10;
document.querySelectorAll(".buttom")[9].style.backgroundColor = randomCode10;

}


//event call

document.getElementById("click-btn").addEventListener("click", getColors)

getColors()







