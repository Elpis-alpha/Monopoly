// Storage Controller
const StorageCtrl = (function () {

  const setUser = function (data) {

    if (typeof data === 'object') {

      const dataX = JSON.stringify(data)

      localStorage.setItem('Monopoly Profile', dataX)

    }

  }

  const getUser = function () {

    const data = localStorage.getItem('Monopoly Profile')

    const dataX = JSON.parse(data)

    if (typeof dataX === 'object' && dataX !== null) {

      return dataX

    } else {

      const dataA = {
        name: 'Player 1',
        diceFavour: 0,
        newGame: [
          {
            name: 'Player 1',
            identity: 'human',
            color: '#1100ff',
            playing: true
          },
          {
            name: 'Player 2',
            identity: 'computer',
            color: '#1aec12',
            playing: true
          },
          {
            name: 'Player 3',
            identity: 'computer',
            color: '#ff0404',
            playing: true
          },
          {
            name: 'Player 4',
            identity: 'computer',
            color: '#f5ff04',
            playing: true
          },
          {
            name: 'Player 5',
            identity: 'computer',
            color: '#ea04ff',
            playing: true
          },
          {
            name: 'Player 6',
            identity: 'computer',
            color: '#04ffd7',
            playing: true
          }
        ]
      }

      setUser(dataA)

      return dataA

    }

  }

  const setSaveSlots = function (slotNumber, data) {

    const numb = parseInt(slotNumber) - 1

    if (typeof data === 'object') {

      let dataX = getSaveSlots('all')

      if (slotNumber === 'all') {

        dataX = data

      } else {

        dataX[numb] = data

      }

      const str = JSON.stringify(dataX)

      localStorage.setItem('Monopoly Saves', str)

    }

  }

  const getSaveSlots = function (slotNumber) {

    const numb = parseInt(slotNumber) - 1

    const data = localStorage.getItem('Monopoly Saves')

    let dataX = JSON.parse(data)

    if (typeof dataX === 'object' && dataX !== null) {

    } else {

      dataX = [
        { name: 'Empty Slot - 1', time: new Date().getTime(), board: {} },
        { name: 'Empty Slot - 2', time: new Date().getTime(), board: {} },
        { name: 'Empty Slot - 3', time: new Date().getTime(), board: {} }
      ]

      const str = JSON.stringify(dataX)

      localStorage.setItem('Monopoly Saves', str)

    }

    if (dataX.length !== 3) {

      dataX = [
        { name: 'Empty Slot - 1', time: new Date().getTime(), board: {} },
        { name: 'Empty Slot - 2', time: new Date().getTime(), board: {} },
        { name: 'Empty Slot - 3', time: new Date().getTime(), board: {} }
      ]

    }

    if (slotNumber === 'all') {

      return dataX

    } else {

      return dataX[numb]

    }

  }

  const getBoard = function () {

    const data = localStorage.getItem('Monopoly Board')

    const dataX = JSON.parse(data)

    if (typeof dataX === 'object' && dataX !== null) {

      return dataX

    } else {

      const dataA = {}

      setBoard(dataA)

      return dataA

    }

  }

  const setBoard = function (board) {

    if (typeof board === 'object') {

      const dataX = JSON.stringify(board)

      localStorage.setItem('Monopoly Board', dataX)

    }

  }

  return {

    setUser: (data) => setUser(data),

    getUser: () => getUser(),

    setBoard: (board) => setBoard(board),

    getBoard: () => getBoard(),

    getSaveSlots: (slotNumber) => getSaveSlots(slotNumber),

    setSaveSlots: (slotNumber, data) => setSaveSlots(slotNumber, data),

  }

})()


//  Controller
const UserCtrl = (function () {

  return {

  }
})()


// Global Controller
const GlobalCtrl = (function () {

  const changeParentColorUsingInput = function (input) {

    const val = input.value

    input.parentElement.style.backgroundColor = val

  }

  return {

    cpcui: (input) => changeParentColorUsingInput(input)

  }

})()


// API Controller
const APICtrl = (function () {

  const getRandomApi = async function (url) {

    const response = await fetch(url)

    const responseJson = await response.json()

    return responseJson
  }

  return {
    getRandomApi: (url) => getRandomApi(url),
  }
})();


// Special Functions
const SpecialCtrl = (function () {

  const randomAmong = (num1, num2) => {

    return (Math.floor(Math.random() * (num2 - num1 + 1))) + num1

  }

  const chooseFrom = (arr) => {

    return arr[randomAmong(0, (arr.length - 1))]

  }

  function shuffle(arr) {

    let array = arr.slice()

    for (let i = array.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];

    }

    return array

  }

  function heightAspect(element, ratio) {

    window.addEventListener('resize', () => {

      element.style.height = (element.offsetWidth * ratio) + 'px'

    })

  }

  function OHeightAspect(element, ratio) {

    element.style.height = (element.offsetWidth * ratio) + 'px'

  }

  function addNumbers(from, to, element, interval) {

    element.innerHTML = from

    const add = from < to

    let inx = setInterval(() => {

      let newNumb

      if (parseInt(element.innerHTML) === to) { clearInterval(inx); newNumb = '`.-x-`.' }

      if (newNumb === '`.-x-`.') {

      } else if (add === true) {

        newNumb = parseInt(element.innerHTML) + 1

        element.innerHTML = newNumb

      } else {

        newNumb = parseInt(element.innerHTML) - 1

        element.innerHTML = newNumb

      }

    }, interval);

  }

  function addLetters(phrase, element, interval, toNfro, end) {

    element.innerHTML = ''

    let theText = element.innerHTML

    end = end === undefined ? '' : end

    let full = false

    const nphrase = phrase

    let number = 0

    let inx = setInterval(() => {

      let newPhrase

      if (element.innerHTML == (phrase + end)) { newPhrase = '`.-x-`.' }


      // Checks if the phrase has once been completed
      if (full === true) {

        full = true

      } else {

        if (newPhrase === '`.-x-`.') { full = true }

      }



      // Checks if another same operation is running and terminates older one
      let otherText = element.innerHTML; let over = false;

      if (full === false) {

        if (theText !== element.innerHTML) { clearInterval(inx); over = true; }

      }


      // Checks if dev wants it to go to and fro and if completed
      if (full === true && toNfro === 0) {

        clearInterval(inx);

      } else {

        // Check if first stage has completed
        if (full === false) {

          element.innerHTML = nphrase.slice(0, number) + end;

          number++

        } else {

          if (number > 0) {

            // Set timeout for second stage based on toNfro
            setTimeout(() => {

              number--

              if (number >= 0) {

                if (theText !== element.innerHTML) { clearInterval(inx); over = true; }

                otherText = element.innerHTML

                element.innerHTML = nphrase.slice(0, number) + end

                if (over === true) { element.innerHTML = otherText; }

                theText = element.innerHTML;

              }


            }, toNfro);

          } else {

            clearInterval(inx)

          }

        }

      }

      if (full === false) {

        if (over === true) { element.innerHTML = otherText; }

        theText = element.innerHTML;

      }

    }, interval);

  }


  return {
    randomAmong: (num1, num2) => randomAmong(num1, num2),

    chooseFrom: (arr) => chooseFrom(arr),

    shuffle: (arr) => shuffle(arr),

    heightAspect: (element, ratio) => heightAspect(element, ratio),

    OHeightAspect: (element, ratio) => OHeightAspect(element, ratio),

    addNumbers: (from, to, element, interval) => addNumbers(from, to, element, interval),

    addLetters: (phrase, element, interval, toNfro, end) => addLetters(phrase, element, interval, toNfro, end),
  }

})()


// UI Controller
const UICtrl = (function () {

  const findElement = function (tag) {
    return document.querySelector(tag)
  }

  const findBy = function (element, tag) {
    return element.querySelector(tag)
  }

  const findElements = function (tag) {
    return document.querySelectorAll(tag)
  }

  const addClass = function (element, clas) {
    element.classList.add(clas)
  }

  const toggleClass = function (element, clas) {

    if (element.classList.contains(clas)) {
      removeClass(element, clas)
    } else {
      addClass(element, clas)
    }

  }

  const toggleWithDocument = function (clicker, element, clas) {

    clicker.addEventListener('click', (e) => {

      const theFunc = function () {

        removeClass(element, clas)

        document.removeEventListener('click', theFunc)

      }

      if (element.classList.contains(clas)) {

        theFunc()

      } else {

        addClass(element, clas)

        setTimeout(() => {

          document.addEventListener('click', theFunc)

        }, 10);

      }

    })

  }

  const removeClass = function (element, clas) {
    element.classList.remove(clas)
  }

  const transitionSroll = function (item, clicker, seconds) {

    clicker.addEventListener('click', () => {

      const normHeight = item.scrollHeight

      const actualHeight = item.clientHeight

      item.style.overflow = `hidden`

      if (actualHeight === 0) {

        item.style.transition = `height ${seconds}s`

        item.style.height = `${normHeight}px`

        setTimeout(() => {

          item.style.height = `auto`

        }, seconds * 1000);

      } else {

        item.style.height = `${normHeight}px`

        setTimeout(() => {

          item.style.transition = `height ${seconds}s`

          item.style.height = `0px`

        }, 10);

      }

    })

  }

  const tabilize = function (tabHolder, elemHolder, tabName, elemName) {

    const tabChildren = tabHolder.children

    const elementChildren = elemHolder.children

    tabHolder.addEventListener('click', (e) => {

      if (e.target.classList.contains(tabName)) {

        const caughtNum = `${elemName}-${e.target.id.split('-')[1]}`

        for (let i = 0; i < tabChildren.length; i++) {
          const element = tabChildren[i];

          removeClass(element, 'active')

        }

        addClass(e.target, 'active')

        for (let i = 0; i < elementChildren.length; i++) {
          const element = elementChildren[i];

          removeClass(element, 'show')

          if (element.id === caughtNum) {
            addClass(element, 'show')
          }
        }
      }

    })

  }

  const insertSVG = function (element) {

    if (element === undefined) {

      return [
        findElements('.js-circle-check'),

        findElements('.js-question'),

        findElements('.js-arrow-left'),

        findElements('.js-elipses'),

        findElements('.js-arrow-right'),

        findElements('.js-calender'),

        findElements('.js-circle-check'),

        findElements('.js-dark-message'),

        findElements('.js-whatsapp'),

        findElements('.js-linkedin'),

        findElements('.js-twitter'),

        findElements('.js-instagram'),

        findElements('.js-phone'),
      ]

    } else {

      if (element.classList.contains('js-question')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-arrow-left')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path xmlns="http://www.w3.org/2000/svg" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
      </svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-elipses')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
      <path
        d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
      </svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-arrow-right')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path xmlns="http://www.w3.org/2000/svg" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
      </svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-calender')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
      </svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-circle-check')) {
        const elementa = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-dark-message')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-whatsapp')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-linkedin')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-twitter')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-instagram')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
      `;
        element.innerHTML = elementa
      }
      else if (element.classList.contains('js-phone')) {
        const elementa = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
      `;
        element.innerHTML = elementa
      }

    }

  }


  const UIVars = {

    // Rest Elements
    body: findElement('body'),
    html: findElement('html'),
    main: findElement('main'),

    // Home Elements
    monopolyHome: findElement('.monopoly-home'),
    newGameClicker: findElement('.play-new'),
    continueGame: findElement('.play-continue'),
    loadGameClicker: findElement('.play-load'),
    settingsClicker: findElement('.settings'),

    // Settings Element
    settingsBack: findElement('#sett-back'),
    settDisplayName: findElement('#dis-name'),
    settDiceFavour: findElement('#dice-fav'),

    // Load Game Elements
    loadGBack: findElement('#load-game-back'),
    loadSlot1: findElement('#saved-game-1'),
    loadSlot2: findElement('#saved-game-2'),
    loadSlot3: findElement('#saved-game-3'),

    // New Game Elements
    newGBack: findElement('#new-game-back'),
    newGPlayersHolder: findElement('#home-players-holder'),
    newGStartNewGame: findElement('#start-new-game'),
    newGSlot: findElement('#new-game-slot'),
    newGError: findElement('#new-game-error'),

    // Board Elements
    monopolyBoard: findElement('.monopoly-board'),
    theBoard: findElement('.the-board'),

    // Dice Elements
    dice: findElement('.the-dice'),
    dice1: findElement('.first-die'),
    dice2: findElement('.second-die'),

    // Monopoly Small Nav Elements
    msnavMenu: findElement('#snav-menu'),
    msnavBuild: findElement('#snav-build'),
    msnavSell: findElement('#snav-sell'),
    msnavMortgage: findElement('#snav-mortgage'),
    msnavRedeem: findElement('#snav-redeem'),
    msnavTrade: findElement('#snav-trade'),

    // Monolpoly Details Elements
    playersHolder1: findElement('#player-cards-hol1'),
    playersHolder2: findElement('#player-cards-hol2'),
    boardButton: findElement('#board-button'),
    boardText: findElement('#biText'),

    // Monopoly Log Elements
    boardLog: findElement('#board-log'),
    boardWholeLog: findElement('.the-monopoly-log'),
    boardALog: findElement('.im-log'),

    // Monopoly Holder Card Elements
    allCardsHolder: findElement('.the-details'),
    allCardsHolderCover: findElement('#under-cover'),

    // Monopoly Property Card Elements
    mCard: findElement('.m-card'),
    mCardColor: findElement('.m-card .card-color'),
    mCardPrice: findElement('.m-card .card-price'),
    mCardRent: findElement('.m-card .card-rent'),
    mCardPrices: findElements('.m-card .price'),
    mCardConstruct: findElement('.m-card .construction-price'),
    mCardMortgage: findElement('.m-card .card-mortgage'),

    // Monopoly Railway Card Elements
    sCard: findElement('.s-card'),
    sCardName: findElement('.s-card .card-name'),
    sCardPrice: findElement('.s-card .card-price'),
    sCardPrices: findElements('.s-card .price'),
    sCardMortgage: findElement('.s-card .card-mortgage'),

    // Monopoly Utility Card Elements
    uCard: findElement('.u-card'),
    uCardName: findElement('.u-card .card-name'),
    uCardPrice: findElement('.u-card .card-price'),
    uCardMortgage: findElement('.u-card .card-mortgage'),
    uCardSVG: findElement('.u-card .card-cover'),

    // Monopoly Other Card Elements
    xCard: findElement('.x-card'),
    xCardName: findElement('.x-card .card-name'),
    xCardinfo: findElement('.x-card .card-info'),
    xCardSVG: findElement('.x-card .background'),

    // Monopoly Player Card Elements
    pCard: findElement('.p-card'),
    pCardColor: findElement('.p-card .player-color'),
    pCardName: findElement('.p-card .player-name'),
    pCardMoney: findElement('.p-card .player-money'),
    pCardStatus: findElement('.p-card .player-status'),
    pCardHotels: findElement('.p-card .player-hotels'),
    pCardHouse: findElement('.p-card .player-homes'),
    pCardProperty: findElement('.p-card .player-property'),
    pCardProperties: findElement('.p-card .properties'),
    pCardJail: findElement('.p-card .player-jail-cards'),

    // Monopoly Build Card Elements
    bCard: findElement('.b-card'),
    bCardClose: findElement('.b-card .close-b'),

    // Monopoly Sell Card Elements
    slCard: findElement('.l-card'),
    slCardClose: findElement('.l-card .close-l'),

    // Monopoly Mortgage Card Elements
    mtCard: findElement('.mt-card'),
    mtCardClose: findElement('.mt-card .close-mt'),

    // Monopoly Redeem Card Elements
    rCard: findElement('.r-card'),
    rCardClose: findElement('.r-card .close-r'),

    // Monopoly Trade Card Elements
    tCard: findElement('.t-card'),
    tCardLabel1: findElement('.t-card .labe-1'),
    tCardRange: findElement('.t-card .range-t'),
    tCardTrSend1: findElement('#trade-send-1'),
    tCardTrSend2: findElement('#trade-send-2'),
    tCardTrSendM: findElement('#trade-send-m'),
    tCardTrReceM: findElement('#trade-receive-m'),
    tCardSend: findElement('.t-card .send-t'),
    tCardVBoard: findElement('.t-card .vboard-t'),
    tCardClose: findElement('.t-card .close-t'),

    // Monopoly Trade Receive Card Elements
    aCard: findElement('.a-card'),
    aCardLabel2: findElement('.a-card .labe-2'),
    aCardSendCard: findElement('#a-recive-c-1'),
    aCardReceiveCard: findElement('#a-recive-c-2'),
    aCardMoney: findElement('#a-recive-m'),
    aCardDecline: findElement('.a-card .decline-a'),
    aCardVBoard: findElement('.a-card .vboard-a'),
    aCardAccept: findElement('.a-card .accept-a'),

    // Footer Elements
    contactButton: findElement('#foot-contact'),
    footerSVGS: findElement('.footer-svgs'),
  }

  return {

    UIVars: UIVars,

    findElement: (tag) => findElement(tag),

    findBy: (element, tag) => findBy(element, tag),

    findElements: (tag) => findElements(tag),

    insertSVG: (element) => insertSVG(element),

    addClass: (element, clas) => addClass(element, clas),

    toggleClass: (element, clas) => toggleClass(element, clas),

    removeClass: (element, clas) => removeClass(element, clas),

    toggleWithDocument: (clicker, element, clas) =>
      toggleWithDocument(clicker, element, clas),

    tabilize: (tabHolder, elemHolder, tabName, elemName) =>
      tabilize(tabHolder, elemHolder, tabName, elemName),

    transitionSroll: (item, clicker, seconds) =>
      transitionSroll(item, clicker, seconds)

  }
})()
