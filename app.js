let change = document.querySelector(".change");
let cargo = document.querySelector(".cargo");
let cardParentSales = document.querySelector(".card-parent-sales");
let cardParentMost = document.querySelector(".card-parent-most");
let cartNumber = document.querySelector(".cart-number");

const oneCikanlar = [
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113144-1-3_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "iPhone 11 64 Gb Akıllı Telefon Beyaz",
    price: 15.999,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/137026-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "Asus X515JA 10.Nesil Core i5 1035G1",
    price: 11.499,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/grundig/thumb/132302-1-4_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "GRUNDIG 4K UHD Android Smart TV",
    price: 11.499,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/136979-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "Philips DST7510/80 Azur 7500 Buharlı Ütü",
    price: 1.849,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/132720-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "Samsung Galaxy S22 Ultra Akıllı Telefon",
    price: 33.999,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114754-1-2_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "MacBook Air MGN63TU M1 8Gb-256Gb",
    price: 17.999,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/137070-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "LG 65inc 164 cm 4K webOS Smart TV",
    price: 20.999,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129951-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "iPad 9.Nesil 64GB Wi-Fi 10.2'' iPadOS Tablet",
    price: 8.499,
  },
];

const cokSatanlar = [
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/onvo/thumb/137586-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "ONVO 42inc 106 cm FHD Android Smart TV",
    price: 3.899,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/axen/thumb/axen-ax43dil13-tnr-gorseli-106621_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "AXEN 43inc 109 cm FHD Android Smart TV",
    price: 4.799,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/sapphire/thumb/136815-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "SAPPHIRE RADEON RX 6700 10GB Ekran Kartı",
    price: 7.652,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lenovo/thumb/135141-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "Lenovo Tab M10 Plus 2Ghz 4Gb 128Gb",
    price: 5.999,
  },
  {
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/acer/thumb/136445-1-1_large.jpg",
    star: 4.6,
    comment: 122,
    code: "PA2N0006TR",
    title: "Acer Aspire 7 10.Nesil Core i5 10300H",
    price: 14.999,
  },
];

oneCikanlar.map((i) => {
  const { img, star, comment, code, title, price } = i;
  const newChange = document.createElement("div");
  newChange.classList.add("p-0");
  newChange.innerHTML = `
    <div class="card px-0 overflow-hidden">
    <img
    src= ${img}
    class="card-img-top"
    alt="device"
  />
  <div class="card-body text-center p-1">
    <div class="text-warning pb-2" style="font-size: 13px">
      <i class="fa-solid fa-star"></i>${star}<span class="text-dark">
        (${comment} Yorum)</span
      >
    </div>
    <div style="font-size: 11px">${code}</div>
    <h6 class="card-title">${title}</h6>

    <div class="card-text fs-4 fw-bold text-primary price">${price} ₺</div>
    </div>`;
  cardParentSales.appendChild(newChange);
});

cokSatanlar.map((i) => {
  const { img, star, comment, code, title, price } = i;
  const newChange = document.createElement("div");
  newChange.classList.add("p-0");
  newChange.innerHTML = `
    <div class="card px-0 overflow-hidden">
    <img
    src= ${img}
    class="card-img-top"
    alt="device"
  />
  <div class="card-body text-center p-1">
    <div class="text-warning pb-2" style="font-size: 13px">
      <i class="fa-solid fa-star"></i>${star}<span class="text-dark">
        (${comment} Yorum)</span
      >
    </div>
    <div style="font-size: 11px">${code}</div>
    <h6 class="card-title">${title}</h6>

    <div class="card-text fs-4 fw-bold text-primary price">${price} ₺</div>
    </div>`;
  cardParentMost.appendChild(newChange);
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
      </div>
      </div> `;

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
    const changes = document.querySelectorAll(".change");

    newDiv.classList.add("change");
    newDiv.innerHTML = `<div type="button" class="out end d-flex mx-auto bg-primary text-light ">
      <div class="bg-info p-2">
      <i class="fa-solid fa-arrow-right-arrow-left"></i>
      </div>
      <div class="sepet d-flex align-items-center justify-content-center flex-fill ">
      <div class="sepet">SEPETE EKLE</div>
      </div>
      </div>  `;
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
  });
});

const end = document.querySelectorAll(".end");
end.forEach((i) => {
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

cardParentSales.addEventListener("click", (e) => {
  if (e.target.classList.contains("sepet")) {
    sepetCount += 1;
    newNumber.innerHTML = `
<span
                  class="position-absolute top-0 md-start-100 translate-middle badge rounded-pill bg-danger"
                >
                  ${sepetCount}
                </span>
`;
  }
});

cardParentMost.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.classList.contains("sepet")) {
    sepetCount += 1;
    // console.log("clicked sepet");
    newNumber.innerHTML = `
<span
                  class="position-absolute top-0 md-start-100 translate-middle badge rounded-pill bg-danger"
                >
                  ${sepetCount}
                </span>
`;
  }
});

const newNumber = document.createElement("span");
let sepetCount = 0;
newNumber.innerHTML = `
<span
                  class="position-absolute top-0 md-start-100 translate-middle badge rounded-pill bg-danger"
                >
                  ${sepetCount}
                </span>
`;
cartNumber.appendChild(newNumber);
