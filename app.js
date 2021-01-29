// App Controller
const App = (function (UICtrl, APICtrl,
  StorageCtrl, GlobalCtrl, UserCtrl) {

  const loadEventListeners = function () {

    UICtrl.UIVars.settingsClicker.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-sett')

        setTimeout(() => {

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    UICtrl.UIVars.settingsBack.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-sett')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        }, 500);

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-sett')

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-sett')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    UICtrl.UIVars.loadGameClicker.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-load')

        setTimeout(() => {

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    UICtrl.UIVars.loadGBack.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-load')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        }, 500);

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-load')

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-load')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    UICtrl.UIVars.newGameClicker.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-new')

        setTimeout(() => {

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    UICtrl.UIVars.newGBack.addEventListener('click', () => {

      if (UICtrl.UIVars.monopolyHome.classList.contains('ready')) {

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'ready')

        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'hide-new')

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-2-X')

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-main')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2-Y')

        }, 500);

        setTimeout(() => {

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-new')

          UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'hide-new')

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2000);

      }

    })

    SpecialCtrl.heightAspect(UICtrl.UIVars.dice1, 1)

    SpecialCtrl.heightAspect(UICtrl.UIVars.dice2, 1)
    
    SpecialCtrl.heightAspect(UICtrl.UIVars.theBoard, 1)

  }

  const firstInit = function () {

  }

  const loadInit = function () {

    // Insert all SVG
    UICtrl.insertSVG().forEach((nodlist) => {

      nodlist.forEach((elemen) => {

        UICtrl.insertSVG(elemen)

      })

    })

    // Set Footer Display
    UICtrl.toggleWithDocument(UICtrl.UIVars.contactButton,
      UICtrl.UIVars.footerSVGS, 'show')

    // Manage Entry Animations
    entryAnimations()

    // Manage Settings Page
    manageHomeSettings()

    // Manage Load Page
    manageHomeLoad()

    // Manage New Game Page
    manageHomeNew()

    // Manage Continue Game
    manageContinueGame()
  }


  // Other Functions

  // Entry Animations
  const entryAnimations = function () {

    UICtrl.addClass(UICtrl.UIVars.main, 'show-home')

    setTimeout(() => {

      UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-1')

      setTimeout(() => {

        UICtrl.removeClass(UICtrl.UIVars.monopolyHome, 'show-1')


        UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'show-2')

        setTimeout(() => {

          UICtrl.addClass(UICtrl.UIVars.monopolyHome, 'ready')

        }, 2500);

      }, 2000);

    }, 100);

  }

  // Home Settings
  const manageHomeSettings = function () {

    const user = StorageCtrl.getUser()

    // Display the Value
    UICtrl.UIVars.settDisplayName.value = user.name

    UICtrl.UIVars.settDiceFavour.value = user.diceFavour

    // Listens for change and sets the value
    UICtrl.UIVars.settDiceFavour.addEventListener('input', (e) => {

      const user = StorageCtrl.getUser()

      user.diceFavour = e.target.value

      StorageCtrl.setUser(user)

    })

    UICtrl.UIVars.settDisplayName.addEventListener('input', (e) => {

      const user = StorageCtrl.getUser()

      user.name = e.target.value

      user.newGame[0].name = e.target.value

      StorageCtrl.setUser(user)

    })

  }

  // Load Manager
  const manageHomeLoad = function () {

    const allSaves = (() => StorageCtrl.getSaveSlots('all'))

    const fillFields = () => {

      if (Object.keys(allSaves()[0].board).length !== 0) {

        UICtrl.UIVars.loadSlot1.innerHTML = `
          ${allSaves()[0].name}
          <span class="clear-slot">X</span>
        `
        UICtrl.UIVars.loadSlot1.setAttribute('data-saveslot', allSaves()[0].name)

      } else {

        UICtrl.UIVars.loadSlot1.innerHTML = `
          ${allSaves()[0].name}
        `

      }

      if (Object.keys(allSaves()[1].board).length !== 0) {

        UICtrl.UIVars.loadSlot2.innerHTML = `
          ${allSaves()[1].name}
          <span class="clear-slot">X</span>
        `

        UICtrl.UIVars.loadSlot2.setAttribute('data-saveslot', allSaves()[1].name)

      } else {

        UICtrl.UIVars.loadSlot2.innerHTML = `
          ${allSaves()[1].name}
        `

      }

      if (Object.keys(allSaves()[2].board).length !== 0) {

        UICtrl.UIVars.loadSlot3.innerHTML = `
          ${allSaves()[2].name}
          <span class="clear-slot">X</span>
        `

        UICtrl.UIVars.loadSlot3.setAttribute('data-saveslot', allSaves()[2].name)

      } else {

        UICtrl.UIVars.loadSlot3.innerHTML = `
          ${allSaves()[2].name}
        `

      }

    }

    const elem = [
      UICtrl.UIVars.loadSlot1,
      UICtrl.UIVars.loadSlot2,
      UICtrl.UIVars.loadSlot3
    ]

    fillFields()

    elem.forEach((item, index) => {

      item.addEventListener('click', e => {

        const saveslot = item.getAttribute('data-saveslot')

        if (e.target.classList.contains('clear-slot')) {

          let data = {
            name: `Empty Slot - ${index + 1}`, time: new Date().getTime(), board: {}
          }

          StorageCtrl.setSaveSlots(index + 1, data)

          fillFields()

        }

        else if (/^Slot /.test(saveslot)) {

          const item = saveslot

          const savesDB = StorageCtrl.getSaveSlots('all')

          for (let i = 0; i < savesDB.length; i++) {

            const saveItem = savesDB[i];

            if (saveItem.name === item) {

              BoardCtrl.continueBoard(StorageCtrl.getSaveSlots(i + 1).board)

              break
            }

          }

        }
      })

    })

  }

  // New Game Manager
  const manageHomeNew = function () {

    const fillFields = () => {

      const allPlayers = Array.from(UICtrl.UIVars.newGPlayersHolder.children)

      allPlayers.forEach((item, index) => {

        const database = StorageCtrl.getUser().newGame


        const nameField = item.querySelector(`#player-${index + 1}-name`)

        nameField.value = database[index].name


        const identityField = item.querySelector(`#player-${index + 1}-ide`)

        if (database[index].identity === 'human') {

          identityField.checked = true

          identityField.parentElement.firstElementChild.lastElementChild
            .innerHTML = 'Human:'

        } else {

          identityField.checked = false

          identityField.parentElement.firstElementChild.lastElementChild
            .innerHTML = 'Computer:'

        }


        const colorField = item.querySelector(`#player-${index + 1}-color`)

        colorField.parentElement.style.backgroundColor = database[index].color

        colorField.value = database[index].color


        const playingField = item.querySelector(`#player-${index + 1}-status`)

        playingField.checked = database[index].playing

        if (database[index].playing == true) {

          UICtrl.removeClass(item, 'remove')

        } else {

          UICtrl.addClass(item, 'remove')

        }

      })

    }

    const inputEvents = () => {

      const allPlayers = Array.from(UICtrl.UIVars.newGPlayersHolder.children)

      allPlayers.forEach((item, index) => {

        const nameField = item.querySelector(`#player-${index + 1}-name`)

        nameField.addEventListener('input', e => {

          const database = StorageCtrl.getUser()

          database.newGame[index].name = e.target.value

          StorageCtrl.setUser(database)

          fillFields()
        })


        const identityField = item.querySelector(`#player-${index + 1}-ide`)

        identityField.addEventListener('input', e => {

          const database = StorageCtrl.getUser()


          if (identityField.checked === true) {

            database.newGame[index].identity = 'human'

          } else {

            database.newGame[index].identity = 'computer'

          }

          StorageCtrl.setUser(database)

          fillFields()
        })


        const colorField = item.querySelector(`#player-${index + 1}-color`)

        colorField.addEventListener('input', e => {

          const database = StorageCtrl.getUser()

          database.newGame[index].color = e.target.value

          StorageCtrl.setUser(database)

          fillFields()
        })


        const playingField = item.querySelector(`#player-${index + 1}-status`)

        playingField.addEventListener('input', e => {

          const database = StorageCtrl.getUser()

          database.newGame[index].playing = e.target.checked

          StorageCtrl.setUser(database)

          fillFields()
        })

      })

    }

    const startGame = () => {

      UICtrl.UIVars.newGStartNewGame.addEventListener('click', () => {

        const database = StorageCtrl.getUser().newGame

        let k = 0;

        database.forEach((item) => {

          if (item.playing === true) { k++ }

        })

        if (k >= 2 && UICtrl.UIVars.newGSlot.value !== 'empty') {

          const slots = StorageCtrl.getSaveSlots('all')

          const value = parseInt(UICtrl.UIVars.newGSlot.value)

          const slotName = `Slot ${value + 1}`

          slots[value] = {
            name: slotName,
            time: new Date().getTime(),
            board: {},
          }

          StorageCtrl.setSaveSlots('all', slots)

          const newGame = StorageCtrl.getUser().newGame

          newGame.push(slotName)

          BoardCtrl.startBoard(newGame)
        } else if (k < 2) {

          UICtrl.UIVars.newGError.innerText = 'At Least Two Players are required to play'

          setTimeout(() => {

            UICtrl.UIVars.newGError.innerText = ''

          }, 2000);

        } else if (UICtrl.UIVars.newGSlot.value === 'empty') {

          UICtrl.UIVars.newGError.innerText = 'Choose a save slot'

          UICtrl.addClass(UICtrl.UIVars.newGSlot, 'attract')

          setTimeout(() => {

            UICtrl.UIVars.newGError.innerText = ''

            UICtrl.removeClass(UICtrl.UIVars.newGSlot, 'attract')

          }, 2000);

        }

      })

    }

    fillFields()

    inputEvents()

    startGame()

  }

  // Continue Game Manager
  const manageContinueGame = function () {

    const board = StorageCtrl.getBoard()

    if (board.name === undefined) {

      UICtrl.addClass(UICtrl.UIVars.continueGame, 'hidden')

    } else {

      UICtrl.removeClass(UICtrl.UIVars.continueGame, 'hidden')

      UICtrl.UIVars.continueGame.addEventListener('click', () => {

        BoardCtrl.continueBoard(board)

      })
    }

  }


  return {
    init: () => {

      loadEventListeners()

      firstInit()

      loadInit()

      console.log('Application is successfully running...')

    }
  }
})
  (UICtrl, APICtrl, StorageCtrl, GlobalCtrl, UserCtrl)


// Initialize Application
document.addEventListener('DOMContentLoaded', App.init)
