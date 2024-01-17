
const Categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${Categories.length}`);

const categoriesArray = [...Categories].map(
    category => `Category: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}`
  ).join("\n");
console.log(categoriesArray);