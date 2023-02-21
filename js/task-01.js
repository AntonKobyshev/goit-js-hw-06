// Визначаємо загальну кількість категорій(айтемів)
// 1) 
const allItems = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${allItems} `);

// 2)
// const allCategories = document.getElementById('categories').children.length;
// console.log(`Number of categories: ${allCategories}`);

// Перебираємо та визначаємо кількість елементів на кожній ітерації

// Спосіб 1

// const itemsArray = [...allItems]
//   .map(
//     (categories) => `Category: ${categories.firstElementChild.textContent}
// Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n \n");
// console.log(itemsArray);

// Спосіб 2

// Array.prototype.forEach.call(allItems, (element) => {
//   const itemTitle = element.querySelector("h2").textContent;
//   const itemLength = element.querySelectorAll("li").length;

//   console.log(`Category: ${itemTitle} \nElements: ${itemLength} \n `);
// });


// спосіб 3


const titlesOfCatEl = document.querySelectorAll('h2');
titlesOfCatEl.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});

// спосіб 4


const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((item) => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});



