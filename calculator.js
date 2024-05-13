// q: 二つの数字を入力して、たし算、ひき算、かけ算、わり算を行うプログラムを作成してください
// たし算、ひき算、かけ算、わり算のどれを行うかは、ユーザーが選択できるようにしてください
// また、計算結果をコンソールに表示してください
// 例
// 1つ目の数字を入力してください
// > 10
// 2つ目の数字を入力してください
// > 5
// どの計算を行いますか？
// 1: たし算、2: ひき算、3: かけ算、4: わり算
// > 1
// 計算結果は15です
// また計算しますか？
// 1: はい、2: いいえ
// > 1
// 1つ目の数字を入力してください
// > 10
// 2つ目の数字を入力してください
// > 5
// どの計算を行いますか？
// 1: たし算、2: ひき算、3: かけ算、4: わり算
// > 2
// 計算結果は5です
// また計算しますか？
// 1: はい、2: いいえ
// > 2
// 終了します

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

let num1 = 0;
let num2 = 0;
let result = 0;

function calculator() {
    rl.question('1つ目の数字を入力してください\n', (answer) => {
        num1 = parseInt(answer);
        rl.question('2つ目の数字を入力してください\n', (answer) => {
            num2 = parseInt(answer);
            rl.question('どの計算を行いますか？\n1: たし算、2: ひき算、3: かけ算、4: わり算\n', (answer) => {
                switch (answer) {
                    case '1':
                        result = num1 + num2;
                        console.log(`計算結果は${result}です`);
                        break;
                    case '2':
                        result = num1 - num2;
                        console.log(`計算結果は${result}です`);
                        break;
                    case '3':
                        result = num1 * num2;
                        console.log(`計算結果は${result}です`);
                        break;
                    case '4':
                        result = num1 / num2;
                        console.log(`計算結果は${result}です`);
                        break;
                    default:
                        console.log('正しい値を入力してください');
                        break;
                }
                rl.question('また計算しますか？\n1: はい、2: いいえ\n', (answer) => {
                    if (answer === '1') {
                        calculator();
                    } else {
                        rl.close();
                    }
                });
            });
        });
    });
}

calculator();

rl.on('close', () => {
    console.log('終了します');
    process.exit();
});

// このプログラムは、計算結果をコンソールに表示するだけでなく、ユーザーが計算を続けるかどうかを選択できるようにしています。
// また、ユーザーが正しい値を入力しなかった場合には、エラーメッセージを表示しています。
// このように、ユーザーが正しい値を入力するように促すことで、プログラムの使いやすさを向上させることができます。
// このプログラムを実行すると、ユーザーが数字を入力し、計算方法を選択することができます。
// また、ユーザーが計算を続けるかどうかを選択することができます。
