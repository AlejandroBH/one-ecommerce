import { headerLogo, searchIcon, searchContainer, userButton, userButtonLogout, searchInput, searchDropdown } from "../script/app.js";

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
