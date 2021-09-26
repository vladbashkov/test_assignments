const buttonContainer = document.querySelector(`.menu_button-container`)
menuBtn = document.createElement(`button`);
menuBtn.className = `menuBtn`;
buttonContainer.append(menuBtn);

buttonContainer.addEventListener(`click`, e=>{
	sidebarMenu = document.querySelector(`.sidebar_menu`)
	menuOpen = document.querySelector(`open_menu`)

	sidebarMenu.classList.toggle(`open_menu`)
	menuBtn.classList.toggle(`btn_open`)
})