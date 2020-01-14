//
//
// Some inspiration with photos on your next Zwift workout"
// Author: @greenido
// Date: Jan 2019
//
//
console.log("* Start the party 🚴");

// The auto refresh rate (1000 = 1 second)
var refreshRate = 10000; // 10 seconds

// Check if we already have a pre-set value
if (localStorage.getItem("refreshRate")) {
  refreshRate = localStorage.getItem("refreshRate");
} else {
  localStorage.setItem("refreshRate", refreshRate);
}
let refSelectVal = parseInt(refreshRate);
$("#refresh-select").val(refSelectVal);

//
// When the user change the refresh rate - store it and reload
//
$("#refresh-select").change(function() {
  refreshRate = $(this).val();
  localStorage.setItem("refreshRate", refreshRate);
  clearInterval(mainInterval);
  location.reload();
});

// Automatically reload the page with a new image every 'refreshRate' time
let mainInterval = setInterval(function() {
  location.reload();
}, refreshRate);

// Hide the images on load
$("#foot").hide();

// Get a random image from Unsplash and fade it in on load
$("#foot")
  .css({
    "background-image":
      "url(https://source.unsplash.com/1600x900/?nature,water,snowboard,surf,ironman,cycling,running,mountains)"
  })
  .fadeIn(1000);

// TODO: check if we wish to have this data on our BackEnd
// $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
//   console.log("🟣 We got: ");
//   console.log(data);
// });
