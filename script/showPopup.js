// 显示弹窗
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.classList.remove("hide");

    // 鼠标点击事件处理函数
    function handleClick() {
        hidePopup();
        document.removeEventListener("click", handleClick);
    }

    document.addEventListener("click", handleClick);
}

// 隐藏弹窗
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("hide");
    setTimeout(function() {
        popup.style.display = "none";
    }, 500); // 0.5秒后完全隐藏弹窗
}

// 调用显示弹窗函数
showPopup();
