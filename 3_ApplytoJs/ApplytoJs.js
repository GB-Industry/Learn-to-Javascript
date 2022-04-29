function outerDate(){
    window.alert("외부에서 가져온 스크립트가 실행되었습니다.");
    document.getElementById("date2").innerHTML = Date();
}