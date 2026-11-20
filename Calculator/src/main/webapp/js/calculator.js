
const currentNumber = document.getElementById("display");
const statusMessage = document.getElementById("status");

// 数字の入力
function inputNumber(number) {
    currentNumber.value += number;
}

// 演算子の入力
function inputOperator(operator) {
    const value = currentNumber.value;
    if (value === "") return;

    currentNumber.value += operator;
}

// 計算式を文字列でControllerに送る
async function calculate() {
    const calculateStr = currentNumber.value;
    if (calculateStr === "") return;
    
    try {
        const response = await fetch('calculator', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: "expression=" + encodeURIComponent(calculateStr)
        });

    } catch (error) {
        statusMessage.textContent = "サーバーとの通信に失敗しました。";
    }
}

// 入力値の削除
function clearDisplay() {

}