function collapseMenu (item) {
    let selectorItem = document.querySelector("#nav-" + item)
    selectorItem.onclick = function() {
        let nav = document.querySelector(".navbar-collapse");
        if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          }
    }
}

function scrollFunction() {
    var btn = document.querySelector("#btnBack");
    console.log(btn)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

collapseMenu("brunom")
collapseMenu("expertise")
collapseMenu("formations")
collapseMenu("experiences")
collapseMenu("interets")



