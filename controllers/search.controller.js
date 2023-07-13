import { headerLogo, searchIcon, searchInput, userButton, userButtonLogout } from "../script/app.js";

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
      searchInput.style = "display: flex; width: 100%;";
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
      searchInput.style.display = "none";
    }
  });
}
