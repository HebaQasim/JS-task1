var languages = ['Java','Python','JavaScript']; 
var data = "";
for(var i = 0; i < languages.length; i++){
    data += `<li>${languages[i]}</li>`;
} 
document.querySelector(".programming-language ul").innerHTML = data;
