// 手札ボタンがクリックされた時に呼び出される
function didClickHandButton(handId) {
    // 結果定数
    const WIN  = 0;
    const LOSE = 1;
    const DRAW = 2;

    // 結果判定テーブル
    const JUDGE_TABLE = [
        [DRAW, LOSE, WIN],
        [WIN, DRAW, LOSE],
        [LOSE, WIN, DRAW]
    ];

    const enemyHand = generateEnemyHand();
    const result = JUDGE_TABLE[enemyHand][handId];

    alert("相手: " + handIdToText(enemyHand) + "\n" + resultToText(result));
}

// 手札定数を絵文字に変換する
function handIdToText(handId) {
    switch(handId) {
        case 0: return "グー";
        case 1: return "チョキ";
        case 2: return "パー";
    }
}

// 結果定数を文字列に変換する
function resultToText(result) {
    switch(result) {
        case 0: return "あなたの勝ち";
        case 1: return "あなたの負け";
        case 2: return "あなたの負け";
    }
}

// 相手の手を生成する
function generateEnemyHand() {
    return Math.round( Math.random()*100 ) % 2;
}