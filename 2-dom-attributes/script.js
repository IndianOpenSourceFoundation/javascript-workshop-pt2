var bulb_img = document.getElementById("bulb-img");
var caption = document.getElementById("caption");
var bulb_switch = document.getElementById("bulb-switch");

bulb_switch.addEventListener("click", function() {
  // do something with the bulb

  var switch_text = bulb_switch.textContent;

  // bulb_img.src = "./img/bulb-on.png";
  // caption.textContent = "The bulb is currently on. But you can turn it off!";
  // bulb_switch.textContent = "Turn off";

  if (switch_text == "Turn On") {
    bulb_img.src = "./img/bulb-on.png";
    caption.textContent = "The bulb is currently on. But you can turn it off!";
    bulb_switch.textContent = "Turn off";
  } else {
    bulb_img.src = "./img/bulb-off.png";
    caption.textContent = "The bulb is currently off. But you can turn it on!";
    bulb_switch.textContent = "Turn On";
  }
});
