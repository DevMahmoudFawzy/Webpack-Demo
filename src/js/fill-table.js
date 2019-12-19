import { products, tableDiv } from './data';

let x = () => {
    console.log('working !!')
};

x();

var tblHTML = `
<table border='2'>
<thead>
<tr>
<th>ID</th>
<th>Product Name</th>
</tr>
</thead>
<tbody>
`;

for (let index = 0; index < products.length; index++) {
    tblHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${products[index]}</td>
    </tr>
    `;
}

tblHTML += `</tbody></table>`;

tableDiv.innerHTML = tblHTML;