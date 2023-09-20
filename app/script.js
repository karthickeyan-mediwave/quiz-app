const submitBtn = document.querySelector("#btnmenu1");
submitBtn.addEventListener("click", function () {
  window.open(
    document.getElementById("menu1").options[
      document.getElementById("menu1").selectedIndex
    ].value
  );
});
