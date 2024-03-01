import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById("main-container");
    if(mainContainer) mainContainer.innerHTML = ""; //clear already rendered
    for(const p of prods) {
        const pStr = generateProductHTML(p)
        let frag = document.createRange().createContextualFragment(pStr);
        mainContainer?.appendChild(frag);
    }
}

function getByCategory(category: string): void {
    const prods = products.filter((p) => p.category === category);
    renderProducts(prods);
    console.log("getByCategory");
}

function getByRating(minRating: number): void {
    const prods = products.filter((p) => p.rating > minRating);
    renderProducts(prods);
    console.log("getByRating");
}

export { renderProducts, getByCategory, getByRating };