let hi = document.querySelector(".hi");
// let cargo = document.querySelectorAll(".cargo");
let change = document.querySelector(".change");
let cargo = document.querySelector(".cargo");
let sepet = document.querySelectorAll(".ekle");
let cardParent = document.querySelector(".card-parent");

let a = [1, 2, 3, 4, 5, 6];

a.map((i) => {
  const newChange = document.createElement("div");
  newChange.classList.add("p-0");
  newChange.innerHTML = `
    <div class="card px-0 overflow-hidden">
    <img
    src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113144-1-3_large.jpg"
    class="card-img-top"
    alt="device"
  />
  <div class="card-body text-center p-1">
    <div class="text-warning pb-2" style="font-size: 13px">
      <i class="fa-solid fa-star"></i>4.6<span class="text-dark">
        (122 Yorum)</span
      >
    </div>
    <div style="font-size: 11px">PA2N0006TR</div>
    <h6 class="card-title">iPhone 11 64 Gb Akıllı Telefon Beyaz</h6>

    <div class="card-text fs-4 fw-bold text-primary">₺ 15.999</div>
    </div>`;
  cardParent.appendChild(newChange);
});

let card = document.querySelectorAll(".card");
const newDiv = document.createElement("div");
newDiv.innerHTML = `<div class="text-center p-2">
      <div class="my-2">
      <span
class="cargo bg-body-secondary rounded-1 p-2 shadow-sm"
style="font-size: 12px"
>BUGÜN KARGODA</span
>
</div></div> `;
console.log(newDiv.innerHTML);

card.forEach((i) => {
  const newDiv = document.createElement("div");
  i.appendChild(newDiv);
  newDiv.innerHTML = `<div class="text-center p-1">
      <div class="mb-2">
      <span
class="cargo bg-body-secondary rounded-1 p-2 shadow-sm"
style="font-size: 12px"
>BUGÜN KARGODA</span
>
</div></div> `;

  i.addEventListener("mouseenter", (e) => {
    i.style.border = "1px solid blue";
    // if (!newDiv.innerHTML.length) {
    newDiv.innerHTML = `<div type="button" class="d-flex mx-auto bg-primary text-light ">
      <div class="bg-info p-2">
      <i class="fa-solid fa-arrow-right-arrow-left"></i>
      </div>
      <div class="sepet d-flex align-items-center justify-content-center flex-fill ">
      <div>SEPETE EKLE</div>
      </div>
      </div>  `;
    // }
    i.appendChild(newDiv);
  });

  i.addEventListener("mouseleave", () => {
    i.style.border = "";

    i.lastElementChild.innerHTML = `<div class="text-center p-1">
    <div class="mb-2">
    <span
class="cargo bg-body-secondary rounded-1 p-2 shadow-sm"
style="font-size: 12px"
>BUGÜN KARGODA</span
>
</div></div> `;

    i.appendChild(newDiv);
  });
});
