
const weatherForm = document.getElementById("weather-form")
const cityInput = document.getElementById("city-input")
const weatherResults = document.getElementById("weather-results")

//ボタンクリックでgetWeather関数、引数にinputで入力したデータを渡す
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  getWeather(cityInput.value)
})

//天気を取得しHTMLに書き込む
const getWeather = (props) => {
  weatherResults.innerHTML = `<div class="loading">Loading</div>` //読み込み中のHTML書き換え
  fetch(`https://api.weatherapi.com/v1/current.json?key=87c9e4cfd1a74805ad4154920231308&q=${props}&aqi=no`)
    .then(response => response.json())
    .then(jsonData =>
      weatherResults.innerHTML = `
      <div class="results-counrty">${jsonData.location.country}</div>
      <div class="results-city">${jsonData.location.name}</div>
      <div class="results-temp">${jsonData.current.temp_c}<span>℃</span></div>
      <div class="results-condition">
        <img src="${"https:" + jsonData.current.condition.icon}" alt="icon">
        <span>${jsonData.current.condition.text}</span>
      </div>
      `
    ).catch(err => alert("error:エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
}

