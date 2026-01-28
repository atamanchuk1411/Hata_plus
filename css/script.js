burger.onclick = () => {
    menu.style.left = '0'
    black.style.display = 'block'
}

black.onclick = () => {
    menu.style.left = '-100%'
    black.style.display = 'none'
    submenu.style.display = 'none'
    subsubmenu.style.display = 'none'
}

cancel.onclick = (e) => {
    e.preventDefault()
    menu.style.left = '-100%'
    black.style.display = 'none'
}

function closeMenu(id) {
    id.style.display = 'none'
    id.style.position = 'static'
}

function openMenu(id) {
    id.style.display = 'block'
    id.style.position = 'fixed'
    id.style.top = '0'
    id.style.left = '0'
    id.style.width = '100%'
    id.style.zIndex = '2'
}

if(window.innerWidth < 930) {
    btn.onclick = (e) => {
        e.preventDefault()
        openMenu(submenu)
    }

    subbtn.onclick = (e) => {
        e.preventDefault()
        openMenu(subsubmenu)
    }

    cancelsub.onclick = (e) => {
        e.preventDefault()
        closeMenu(submenu)
    }

    cancelsubsub.onclick = (e) => {
        e.preventDefault()
        closeMenu(subsubmenu)
    }
}