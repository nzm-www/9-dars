// let isExsitBook = true;

// let promis = new Promise(function (resolve, rejact) {
//   setTimeout(function () {
//     if (isExsitBook) {
//       resolve("Kitob bor");
//     } else {
//       rejact("kitob yoq");
//     }
//   }, 2000);
// });

// promis
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("tugatildi");
//   });

// async function fetchData() {
//   return "FOCUSACADEMY";
// }
// fetchData().then((data) => console.log(data));

const wrapper = document.getElementById("wrapper");
const loader = document.getElementById("loadere");

function creatCard(user) {
  return `
          <div id="card">
                 <img class="img" width="350" src="${user.flag}" alt="" />
              <h2>${user.country}</h2>
              <h3>${user.code}</h3>
              <p >${user.id}</p>
          </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries")
    .then(function (resp) {
      if (resp.status == 200) {
        return resp.json();
      }
    })
    .then(function (data) {
      wrapper.style.display = "block";
      data.length > 0 &&
        data.forEach((user) => {
          const card = creatCard(user);
          wrapper.innerHTML += card;
        });
    })

    .catch(function (err) {
      wrapper.style.display = "block";

      console.log(err);
    })
    .finally(function () {
      loader.style.display = "none";
    });
});
