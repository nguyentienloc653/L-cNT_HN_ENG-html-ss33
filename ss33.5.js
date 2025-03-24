const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://anphat.com.vn/media/lib/01-10-2022/laptop-dell-xps-15-9520-70295790--6.jpg",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 33990000,
    image:
      "https://genk.mediacdn.vn/zoom/700_438/139269124445442048/2024/11/11/70708264152136645631-17312450477951143716490-165-0-1065-1440-crop-173124507437540501606-1731289475236-1731289477372329670182-0-0-477-764-crop-17312895335171791184342.jpeg",
    description:
      "Dòng điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 31990000,
    image:
      "https://s3v2.interdata.vn:9000/s3-586-15343-storage/dienthoaigiakho/wp-content/uploads/2024/01/10153156/galaxy-s24-va-galaxy-s24-Ultra-4.jpg",
    description:
      "Điện thoại Android mạnh mẽ nhất với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image:
      "https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg",
    description: "Tai nghe chống ồn cao cấp với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://down-vn.img.susercontent.com/file/c6b02ab9ae6cac644b4577ac9760940f",
    description: "Loa Bluetooth chống nước với âm bass mạnh và pin 28 giờ.",
  },
];

document.querySelector(".btn-search").addEventListener("click", searchProducts);

function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  list.forEach((product) => {
    const productCard = `
              <div class="col-md-4 col-lg-3 mb-4">
                  <div class="card product-card">
                      <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">${product.description}</p>
                          <p class="fw-bold text-danger">${product.price.toLocaleString()} VNĐ</p>
                          <a href="#" class="btn btn-primary">Buy</a>
                      </div>
                  </div>
              </div>
          `;
    productList.innerHTML += productCard;
  });
}

function searchProducts() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );
  displayProducts(filteredProducts);
}

displayProducts(products);
