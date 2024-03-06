//24/11/2023
//Hiển thị ma trận hai chiều 
let ma_tran = [[1, 1, 0],[1, 0, 1],[0, 1, 1],[0, 0, 0]];

for (let i = 0; i < ma_tran.length; i++) {
    let display = " ";
    for (let j = 0; j < ma_tran[i].length; j++) {
        display += ma_tran[i][j] + " ";
    }
    console.log(display);
}