const tabs = document.querySelectorAll("tabs.sub li");
const tabContents = document.querySelectorAll(".tab-contents");

const removeCurrentFromEveryTab = () => {
    tabs.forEach(tab => {
        tab.classList.remove("current");
    })
    tabContents.forEach(tabContent => {
        tabContent.classList.remove("current");
    })
}

const handleClick = (e) => {
    const activeTabName = e.target.getAttribute("data-tab");
    console.log("clicked");
    // 모든 탭으로부터 current 클래스를 제거하며 리셋
    removeCurrentFromEveryTab();

    // active 된 tab에 current 클래스 추가
    e.target.classList.add("current");

    // active 된 tab의 컨텐츠에 current 클래스 추가
    const activeTab = document.getElementById(activeTabName);
    activeTab.classList.add("current");
}

const tabInit = () => {
    tabs.forEach(tab => {
        tab.addEventListener("click", handleClick);
    })
}