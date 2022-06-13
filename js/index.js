const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.icon');

toggle.onclick = e => {
    toggle.classList.toggle('active');
    icon.forEach(i => {
      i.classList.toggle('active');
    })
    draggable.classList.toggle('active');
}
  
function openNav(){
    let x = document.getElementById("navi");
    if (x.className === "nav"){
        x.className += "open";
    }else{
        x.className = "nav";
    }
}