const endDate = "31 Dec/2024/12:00 AM"

var date = document.getElementById("end-date").innerText = endDate;
let inputs=document.querySelectorAll("input")

const clock=()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    inputs[0].value = (Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=(Math.floor(diff)%60);
}

setInterval(
    ()=>{
        clock();
    },1000
)