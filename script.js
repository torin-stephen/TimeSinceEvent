(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Feb 12, 2022 22:50:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = now - countDown; // Flipped now and countDown to make it count up from date

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
      //seconds
    }, 0);
})();

var totalCount = 7;
var images = {
  1: "https://upload.wikimedia.org/wikipedia/commons/6/6c/REPIN_Ivan_Terrible%26Ivan.jpg",
  2: "https://upload.wikimedia.org/wikipedia/commons/5/50/John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg",
  3: "https://upload.wikimedia.org/wikipedia/commons/8/80/John_Martin_-_The_Last_Judgement_-_Google_Art_Project.jpg",
  4: "https://upload.wikimedia.org/wikipedia/commons/7/79/John_Martin_-_The_Plains_of_Heaven_-_Google_Art_Project.jpg",
  5: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Destruction_of_Pompeii_and_Herculaneum.jpg",
  6: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Destruction_of_Pompeii_and_Herculaneum.jpg",
  7: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg"
};
function ChangeIt() {
  var num = Math.ceil(Math.random() * totalCount);
  document.body.background = "bgimages/" + num + ".jpg";
  document.body.style.backgroundRepeat = "no-repeat"; // Background repeat
  document.body.style.backgroundSize = "cover";
  document.getElementById("imgname").innerHTML = `<a href=${images[parseInt(num)]} target="_blank">Background</a>`
}

ChangeIt();
