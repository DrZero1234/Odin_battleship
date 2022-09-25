function clearDiv(div_elem) {
    while(div_elem.firstChild) {
        div_elem.removeChild(div_elem.firstChild)
    }
}

export {clearDiv}