let selectAllBox;
let checkBoxes;
let numberOfChecked;

const updateCheckedNum = () => {
    let sum = 0;

    checkBoxes.forEach((checkbox, i) => {
        if (i !== 0 && checkbox.checked) {
            sum += 1;
        }
    })
    numberOfChecked.innerHTML = `${sum}`;
}

const handleSelectAll = () => {
    checkBoxes.forEach(checkbox => {
        checkbox.checked = selectAllBox.checked;
    })
    updateCheckedNum();
}


const checkBoxInit = (tabName) => {
    selectAllBox = document.querySelector(`#${tabName} #select-all`);
    // checkbox 가 없는 tab에서는 return
    if (selectAllBox == null) return;

    checkBoxes = document.querySelectorAll(`#${tabName} .checkbox`)
    numberOfChecked = document.querySelector(`#${tabName} .checked-info .number`);


    selectAllBox.addEventListener("click", handleSelectAll);
    checkBoxes.forEach(
        checkbox => {
            checkbox.addEventListener("click", updateCheckedNum)
        }
    )
}

checkBoxInit("tab1");