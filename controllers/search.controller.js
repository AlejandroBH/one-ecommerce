import { headerLogo, searchIcon, searchContainer, userButton, userButtonLogout, searchDropdown, searchInput, searchResult } from "../script/app.js";
import { getProducts } from "../services/product.service.js";
import { createSearchProduct, emptySearchProduct } from "./create-template.controller.js";

export const searchResponsive = () => {
  searchIcon.addEventListener("click", () => {
    if (searchIcon.textContent === "search") {
      if(userButton) {
        userButton.style.display = "none";
      }
      if(userButtonLogout) {
        userButtonLogout.style.display = "none";
      }
      searchIcon.textContent = "close";
      headerLogo.style.display = "none";
      searchContainer.style = "display: flex; width: 100%;";
    }
    else {
      if(userButton) {
        userButton.style.display = "flex";
      }
      if(userButtonLogout) {
        userButtonLogout.style.display = "flex";
      }
      searchIcon.textContent = "search";
      headerLogo.style.display = "block";
      searchContainer.style.display = "none";
      searchDropdown.style.display = "none";
    }
  });
}

export const searchProductInput = (fixpage) => {
  searchInput.addEventListener("input", async () => {
    searchDropdown.style.display = "block";
    searchResult.innerHTML = "";
  
    const products = await getProducts();
    const searchProduct = searchInput.value.toLowerCase();
  
    const matchingProducts = products.filter((item) => 
      item.name.toLowerCase().includes(searchProduct) && searchProduct !== ""
    );
  
    if (matchingProducts.length > 0) {
      searchResult.innerHTML = matchingProducts.map((item) => createSearchProduct(item, fixpage)).join("");
    } else {
      searchResult.innerHTML = emptySearchProduct();
    }
  });
}
