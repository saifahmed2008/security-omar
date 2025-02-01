


let btnTop = document.getElementById("topBtn")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 700) {
        btnTop.style.display = "block";

    } else {
        btnTop.style.display = "none";
    }

}
btnTop.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// -----------------------------------

function valid(){
    let in1 = document.getElementById("in1").value ;
    let in2 = document.getElementById("in2").value ;
    let in3 = document.getElementById("in3").value ;
    if(in1===""||in2===""||in3===""){
        alert("Plz Complete All Inputs")
        return false
    }

    if(in2.indexOf("@")===-1||in2.indexOf(".")===-1){
        alert("Plz Write an Valid Email!!!")
        return false
    }
return true
}