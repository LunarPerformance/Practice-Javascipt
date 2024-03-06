function soNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
if(soNguyenTo(4)){
    console.log("Là số nguyên tố")
}
else{
    console.log("Không phải số nguyên tố");
}