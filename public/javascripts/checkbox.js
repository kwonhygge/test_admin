const selectAllBox =  document.querySelector(`#select-all`);;
const checkBoxes = document.querySelectorAll(`.checkbox`)
const numberOfChecked = document.querySelector(`.checked-info .number`);


const uncheckSelectAllBox = () => {
    selectAllBox.checked = false;
}

const updateCheckedNum = () => {


    
    let sum = 0;
    checkBoxes.forEach((checkbox, i) => {
        if (i !== 0 && checkbox.checked) {
            sum += 1;
        }
    })

    if(sum<checkBoxes.length-1) uncheckSelectAllBox();

    numberOfChecked.innerHTML = `${sum}`;
}

const handleSelectAll = () => {
    checkBoxes.forEach(checkbox => {
        checkbox.checked = selectAllBox.checked;
    })
    updateCheckedNum();
}


const checkBoxInit = () => {
    // checkbox 가 없는 tab에서는 return
    if (selectAllBox == null) return;



    selectAllBox.addEventListener("click", handleSelectAll);
    checkBoxes.forEach(
        checkbox => {
            checkbox.addEventListener("click", updateCheckedNum)
        }
    )
}

checkBoxInit();