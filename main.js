// 當前輪播圖的編號，從零開始
var index = 0;
// 下一張按鈕
var nextBtn = document.querySelector("#slider-next");
// 取得所有的輪播項目
var items = document.getElementsByClassName("slider-item");
// 輸出輪播項目的數量
console.log("輪播項目的數量：" + items.length);

// 下一張按鈕的功能
function next() {
    index++;
    // 如果編號是 項目的數量 就將編號改為 零
    if (index == items.length) {
        index = 0;
    }
    
    console.log("編號：" + index);

    showItem();
    showDot();
}

function prev() {
    index--;

    if (index == -1) index = 0;
    showItem();
    showDot();
}

//下一張按鈕.點擊 = 下一張按鈕的功能
nextBtn.onclick = next;
prevBtn.onclick = prev;

// 顯示項目
function showItem() {
    // 迴圈執行每一張項目
    for (let i = 0; i < items.length; i++) {
        // 刪除每一個項目的 啟動樣式
        items[i].classList.remove("slider-active");
    }

    // 指定目前要顯示的項目 添加 啟動樣式
    items[index].classList.add("slider-active");
}

