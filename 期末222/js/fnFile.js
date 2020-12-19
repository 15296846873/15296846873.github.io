function isUsername(str) {
    var re =/\w{6,16}/;
    return re.test(str)
}
function isEmail(str){
    var re =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return re.test(str)
    
}
function isId_num(str){
    var re =/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return re.test(str)
    
}
function isPhone(str) {
    var re =/^1[3|4|5|7|8][0-9]{9}$/;
    return re.test(str)
}
function isPsd11(str) {
    var re =/\w{6,16}/;
    return re.test(str)
}
function isPsd22(str) {
    var re =/\w{6,16}/;
    return re.test(str)
}
function isPsd2(str1,str2) {
    return (str1==str2)
}