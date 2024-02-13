var now = new Date();
document.write(now.toLocaleString());
document.write("<br>")
var nowh = now.getHours();
if (nowh >= 20){
    document.write("很晚了，注意休息噢");
}
else {
    document.write("记得看时间噢")
}
document.write("<br><br>")
document.write("点击任意位置关闭弹窗")