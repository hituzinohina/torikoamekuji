document.getElementById('drawButton').addEventListener('click', function () {
  const rand = Math.random();
  let resultText = '';

  if (rand < 1 / 30) {
    resultText = '🎯 大当たり！スタッフにお尋ねください';
  } else if (rand < (1 / 30) + (1 / 10)) {
    resultText = '🎉 当たり！本日のトッピング無料！';
  } else {
    resultText = '😢 はずれ！またチャレンジしてね！';
  }

  document.getElementById('result').textContent = resultText;
});
