// 手札定数
const GU    = 0;
const CHOKI = 1;
const PA    = 2;

// 結果定数
const WIN  = 0;
const LOSE = 1;
const DRAW = 2;


// 手札ボタンがクリックされた時に呼び出される
function didClickHandButton(handId) {
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
        case GU:    return "グー";
        case CHOKI: return "チョキ";
        case PA:    return "パー";
    }
}

// 結果定数を文字列に変換する
function resultToText(result) {
    switch(result) {
        case WIN:  return "あなたの勝ち";
        case LOSE: return "あなたの負けkkkkk";
        case DRAW: return "あなたの負けkkkkk";
    }
}

// 相手の手を生成する
function generateEnemyHand() {
    return Math.round( Math.random()*100 ) % 2;
}