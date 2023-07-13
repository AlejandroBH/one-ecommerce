import { headerLogo, searchIcon, searchInput, userButton, userButtonLogout } from "../script/app.js";

export const searchResponsive = () => {
  searchIcon.addEventListener("click", () => {
    if(userButton) {
      userButton.style.display = "none";
    }
    if(userButtonLogout) {
      userButtonLogout.style.display = "none";
    }
    searchIcon.style.display = "none";
    headerLogo.style.display = "none";
    searchInput.style = "display: flex; width: 100%;";
  });
}
