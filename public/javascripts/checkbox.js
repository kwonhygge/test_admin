const selectAllBox = document.getElementById("select-all");
const checkBoxes = document.querySelectorAll(".checkbox")
const numberOfChecked = document.querySelector(".checked-info .number");

const updateCheckedNum = () => {
    let sum = 0;
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            sum += 1;
        }
    })
    numberOfChecked.innerHTML = `${sum}`;
}

const handleSelectAll = () => {
    checkBoxes.forEach(checkbox => {
        checkbox.checked = selectAllBox.checked;
    })
    updateCheckedNum;
}


selectAllBox.addEventListener("click", handleSelectAll);
checkBoxes.forEach(
    checkbox => {
        checkbox.addEventListener("click", updateCheckedNum)
    }
)