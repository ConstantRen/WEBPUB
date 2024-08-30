// Define the Product class
class Product {
    constructor(name, image, description, price, link) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.link = link;
    }

    // Method to render a product item as HTML
    render() {
        return `
            <div class="col-md-4 product-item">
                <img src="${this.image}" alt="${this.name}">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
                <div class="price">${this.price}</div>
                <a href="${this.link}" class="buy-now-btn">Buy Now</a>
            </div>
        `;
    }
}

// Product data (can be replaced with data from a database or API)
const products = [
    new Product("Tarpaulins", "images/img1.png", "This is a great product.", "$25.00", "#"),
    new Product("Custom Shirts", "images/img3.jpg", "This is another great product.", "$30.00", "#"),
    new Product("Brand Signage", "images/img5.jpg", "This product is awesome.", "$35.00", "#")
];

// Function to render products to the DOM
function renderProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        productList.innerHTML += product.render();
    });
}

// Event listener for search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
});

// Initially render all products
renderProducts(products);
