// Визначаємо загальну кількість категорій(айтемів)

const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length} `);

// Перебираємо та визначаємо кількість елементів на кожній ітерації

// Спосіб 1

const itemsArray = [...allItems]
  .map(
    (categories) => `Category: ${categories.firstElementChild.textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n \n");
console.log(itemsArray);

// Спосіб 2

Array.prototype.forEach.call(allItems, (element) => {
  const itemTitle = element.querySelector("h2").textContent;
  const itemLength = element.querySelectorAll("li").length;

  console.log(`Category: ${itemTitle} \nElements: ${itemLength} \n `);
});
