/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let inventory = {}

/*------------------------ Cached Element References ------------------------*/
const text = document.getElementById('text')
const optionBtn = document.getElementById('option-button')

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  inventory = {}
  showGameScene()
}

function showGameScene(gameSceneIdx){
  const gameScene = gameScenes.find(gameScene => gameScene.id === gameSceneIdx)
  text.innerText = gameScene.text
  while(optionBtn.firstChild){
    optionBtn.removeChild(optionBtn.firstChild)
  }
}

function showOption(option){
  return option.requiredInventory === null || option.requiredInventory(inventory)
}