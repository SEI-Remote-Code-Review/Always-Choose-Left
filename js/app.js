/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const textEl = document.getElementById('text')
const optBtn = document.getElementById('option-buttons')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  showGameScene(1)
}

function showGameScene(gameSceneIdx) {
  const gameScene = gameScenes.find(gameScene => gameScene.id === gameSceneIdx)
  textEl.innerText = gameScene.text
  while (optBtn.firstChild) {
    optBtn.removeChild(optBtn.firstChild)
  }
  gameScene.options.forEach(option => {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optBtn.appendChild(button)
  })
}

function selectOption(option) {
  const nextGameSceneId = option.nextText
  if (nextGameSceneId <= 0) {
    return init()
  }
  showGameScene(nextGameSceneId)
}