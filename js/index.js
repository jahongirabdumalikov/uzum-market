// Fetch products from the Fake Store API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productsGrid = document.getElementById('products-grid');
        
        // Loop through the products and display them on the page
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            // Create the product card structure
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 100)}...</p>
                    <div class="price">$${product.price}</div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            
            // Append the product card to the grid
            productsGrid.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));





