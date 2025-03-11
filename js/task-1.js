const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((obj) => {
  const title = obj.querySelector("h2").textContent;
  const elementCount = obj.querySelectorAll("ul li").length;
  console.log(title);
  console.log(elementCount);
});
