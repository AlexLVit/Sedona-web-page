
    let button = document.querySelector(".burger__icon");
    let menu = document.querySelector(".nav__list");

    button.addEventListener("click", function (event) {
             event.preventDefault();
            if (button.classList.contains("icon__close")) {
                button.classList.remove("icon__close");
                menu.classList.remove("menu__closed");
            } else {
                button.classList.add("icon__close");
                menu.classList.add("menu__closed");
            }
        }

    );
