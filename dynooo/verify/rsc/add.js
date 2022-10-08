(function() {
    /*
     *   Add Discord verification button
     */
    // Only add Discord verification button if not already on verification page
    //if (!window.location.pathname.includes("verify")) {
        // Applicable insertion points of Discord Verification button
        applButtons = [0, 2];
        buttons = document.getElementsByClassName("buttons");
        console.log(applButtons);

        for (x of applButtons) {
            buttons[x].style = "flex-direction: row; flex-wrap: nowrap; align-items:baseline;";
        }

        verifyAElem = document.createElement("a");
        verifyAElem.className = "level-item button is-info touch-login-button add-discord-verification-button";
        verifyAElem.innerText = "Discord Verification";
        verifyAElem.href = "verify";

        verifyButton = document.createElement("div");
        verifyButton.className = "buttons";

        verifyNavbarItem = document.createElement("div");
        verifyNavbarItem.className = "navbar-item";

        verifyIsHiddenDesktopItem = document.createElement("div");
        verifyIsHiddenDesktopItem.className = "is-hidden-desktop";

        // Build elem struct
        verifyButton.appendChild(verifyAElem);
        verifyNavbarItem.appendChild(verifyButton);
        verifyIsHiddenDesktopItem.appendChild(verifyButton);

        console.log(verifyNavbarItem);

        for (x of applButtons) {
            buttons[x].append(verifyAElem.cloneNode(true));
        }
    //}


    /*
     *   Change "Login with Discord" to 'Login'
     */

    for (x of buttons) {
        aElems = x.children;
        for (x1 of aElems) {
            console.log(x1);
            if (x1.innerText == "Login with Discord") {
                x1.innerText = "Login";
            }
        }
    }

    /*
     *   Change address of some buttons to dyno.gg
     */
    (async function() {
        while (true) {
            await new Promise(r => setTimeout(r, 50));
            // For all server joins
            serverJoinRegulars = document.getElementsByClassName("server-join-regular");
            for (x of serverJoinRegulars) {
                if (!x.getAttribute("href").includes("dyno.gg")) {
                    x.setAttribute("href", "http://dyno.gg" + x.getAttribute("href"));
                }
            }
        }
    })();

    // For all navbar items
    navbarItems = document.getElementsByClassName("navbar-item");

    applNavbarItems = [2, 8];
    for (i of applNavbarItems) {
        if (!navbarItems[i].getAttribute("href").includes("dyno.gg")) {
            navbarItems[i].setAttribute("href", "http://dyno.gg" + navbarItems[i].getAttribute("href"));
        }
    }
    applNavbarItemsButton = [9, 10];
    applButtons = [
        [0],
        [0, 1]
    ];
    for (i = 0; i < applNavbarItemsButton.length; i++) {
        for (x of applButtons[i]) {
            console.log(x);
            console.log(navbarItems[applNavbarItemsButton[i]].children[0].children[x]);
            if (!navbarItems[applNavbarItemsButton[i]].children[0].children[x].getAttribute("href").includes("dyno.gg")) {
                navbarItems[applNavbarItemsButton[i]].children[0].children[x].setAttribute("href", "http://dyno.gg" + navbarItems[applNavbarItemsButton[i]].children[0].children[x].getAttribute("href"));
            }
        }
    }

    // For all footer links
    footerLinks = document.getElementsByClassName("footer-link");

    applFooterLinks = [4, 6];
    for (i of applFooterLinks) {
        if (!footerLinks[i].getAttribute("href").includes("dyno.gg")) {
            footerLinks[i].setAttribute("href", "http://dyno.gg/" + footerLinks[i].getAttribute("href"));
        }
    }
})();