import { products, productsDiv } from './data';

var productsHTML = `<ul>`;

for (let index = 0; index < products.length; index++) {
    productsHTML += `<li>${products[index]}</li>`;
}

productsHTML += `</ul>`;

productsDiv.innerHTML = productsHTML;