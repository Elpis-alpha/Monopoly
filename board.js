// Board Controller
const BoardCtrl = (function () {

  const plainBoard = function () {

    const untamperedBoard = [
      {
        name: 'Go',
        type: 'go',
        corner: true
      },
      {
        name: 'Mediterranean Avenue',
        type: 'property',
        cost: 60,
        color: '#955438',
        rent: [2, 10, 30, 90, 160, 250],
        group: [1, 1, 2],
        house: 50
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Baltic Avenue',
        type: 'property',
        cost: 60,
        color: '#955438',
        rent: [4, 20, 60, 180, 320, 450],
        group: [1, 2, 2],
        house: 50
      },
      {
        name: 'Income Tax',
        type: 'tax',
        cost: 200
      },
      {
        name: 'Reading Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [9, 1, 4]
      },
      {
        name: 'Oriental Avenue',
        type: 'property',
        cost: 100,
        color: '#aae0fa',
        rent: [6, 30, 90, 270, 400, 550],
        group: [2, 1, 3],
        house: 50
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Vermont Avenue',
        type: 'property',
        cost: 100,
        color: '#aae0fa',
        rent: [6, 30, 90, 270, 400, 550],
        group: [2, 2, 3],
        house: 50
      },
      {
        name: 'Connecticut Avenue',
        type: 'property',
        cost: 120,
        color: '#aae0fa',
        rent: [8, 40, 100, 300, 450, 600],
        group: [2, 3, 3],
        house: 50
      },
      {
        name: 'Jail',
        type: 'jail',
        corner: true
      },
      {
        name: 'St. Charles Place',
        type: 'property',
        cost: 140,
        color: '#d93a96',
        rent: [10, 50, 150, 450, 625, 750],
        group: [3, 1, 3],
        house: 100
      },
      {
        name: 'Electric Company',
        type: 'utility',
        cost: 150,
        group: [10, 1, 2]
      },
      {
        name: 'States Avenue',
        type: 'property',
        cost: 140,
        color: '#d93a96',
        rent: [10, 50, 150, 450, 625, 750],
        group: [3, 2, 3],
        house: 100
      },
      {
        name: 'Virginia Avenue',
        type: 'property',
        cost: 160,
        color: '#d93a96',
        rent: [12, 60, 180, 500, 700, 900],
        group: [3, 3, 3],
        house: 100
      },
      {
        name: 'Pennsylvania Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [9, 2, 4]
      },
      {
        name: 'St. James Place',
        type: 'property',
        cost: 180,
        color: '#f7941d',
        rent: [14, 70, 200, 550, 750, 950],
        group: [4, 1, 3],
        house: 100
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Tennessee Avenue',
        type: 'property',
        cost: 180,
        color: '#f7941d',
        rent: [14, 70, 200, 550, 750, 950],
        group: [4, 2, 3],
        house: 100
      },
      {
        name: 'New York Avenue',
        type: 'property',
        cost: 200,
        color: '#f7941d',
        rent: [16, 80, 220, 600, 800, 1000],
        group: [4, 3, 3],
        house: 100
      },
      {
        name: 'Free Parking',
        type: 'free-parking',
        corner: true
      },
      {
        name: 'Kentucky Avenue',
        type: 'property',
        cost: 220,
        color: '#ed1b24',
        rent: [18, 90, 250, 700, 875, 1050],
        group: [5, 1, 3],
        house: 150
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Indiana Avenue',
        type: 'property',
        cost: 220,
        color: '#ed1b24',
        rent: [18, 90, 250, 700, 875, 1050],
        group: [5, 2, 3],
        house: 150
      },
      {
        name: 'Illnois Avenue',
        type: 'property',
        cost: 240,
        color: '#ed1b24',
        rent: [20, 100, 300, 750, 925, 1100],
        group: [5, 3, 3],
        house: 150
      },
      {
        name: 'B. & O. Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [9, 3, 4]
      },
      {
        name: 'Atlatic Avenue',
        type: 'property',
        cost: 260,
        color: '#fef200',
        rent: [22, 110, 330, 800, 975, 1150],
        group: [6, 1, 3],
        house: 150
      },
      {
        name: 'Ventura Avenue',
        type: 'property',
        cost: 260,
        color: '#fef200',
        rent: [22, 110, 330, 800, 975, 1150],
        group: [6, 2, 3],
        house: 150
      },
      {
        name: 'Water Works',
        type: 'utility',
        cost: 150,
        group: [10, 2, 2]
      },
      {
        name: 'Marvin Gardens',
        type: 'property',
        cost: 280,
        color: '#fef200',
        rent: [24, 120, 360, 850, 1025, 1200],
        group: [6, 3, 3],
        house: 150
      },
      {
        name: 'Go To Jail',
        type: 'go-to-jail',
        corner: true
      },
      {
        name: 'Pacific Avenue',
        type: 'property',
        cost: 300,
        color: '#1fb25a',
        rent: [26, 130, 390, 900, 1100, 1275],
        group: [7, 1, 3],
        house: 200
      },
      {
        name: 'North Carolina Avenue',
        type: 'property',
        cost: 300,
        color: '#1fb25a',
        rent: [26, 130, 390, 900, 1100, 1275],
        group: [7, 2, 3],
        house: 200
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Pennsylvania Avenue',
        type: 'property',
        cost: 320,
        color: '#1fb25a',
        rent: [28, 150, 450, 1000, 1200, 1400],
        group: [7, 3, 3],
        house: 200
      },
      {
        name: 'Shortline',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [9, 4, 4]
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Park Place',
        type: 'property',
        cost: 350,
        color: '#0072bb',
        rent: [35, 175, 500, 1100, 1300, 1500],
        group: [8, 1, 2],
        house: 200
      },
      {
        name: 'Luxury Tax',
        type: 'tax',
        cost: 100
      },
      {
        name: 'Boardwalk',
        type: 'property',
        cost: 400,
        color: '#0072bb',
        rent: [50, 200, 600, 1400, 1700, 2000],
        group: [8, 2, 2],
        house: 200
      },
    ]

    const board = [
      {
        name: 'Go',
        type: 'go',
        corner: true
      },
      {
        name: 'Mediterranean Avenue',
        type: 'property',
        cost: 60,
        color: '#955438',
        rent: [2, 10, 30, 90, 160, 250],
        group: [1, 3],
        house: 50
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Baltic Avenue',
        type: 'property',
        cost: 60,
        color: '#955438',
        rent: [4, 20, 60, 180, 320, 450],
        group: [1, 3],
        house: 50
      },
      {
        name: 'Income Tax',
        type: 'tax',
        cost: 200
      },
      {
        name: 'Reading Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [5, 15, 25, 35]
      },
      {
        name: 'Oriental Avenue',
        type: 'property',
        cost: 100,
        color: '#aae0fa',
        rent: [6, 30, 90, 270, 400, 550],
        group: [6, 8, 9],
        house: 50
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Vermont Avenue',
        type: 'property',
        cost: 100,
        color: '#aae0fa',
        rent: [6, 30, 90, 270, 400, 550],
        group: [6, 8, 9],
        house: 50
      },
      {
        name: 'Connecticut Avenue',
        type: 'property',
        cost: 120,
        color: '#aae0fa',
        rent: [8, 40, 100, 300, 450, 600],
        group: [6, 8, 9],
        house: 50
      },
      {
        name: 'Jail',
        type: 'jail',
        corner: true
      },
      {
        name: 'St. Charles Place',
        type: 'property',
        cost: 140,
        color: '#d93a96',
        rent: [10, 50, 150, 450, 625, 750],
        group: [11, 13, 14],
        house: 100
      },
      {
        name: 'Electric Company',
        type: 'utility',
        cost: 150,
        group: [12, 28]
      },
      {
        name: 'States Avenue',
        type: 'property',
        cost: 140,
        color: '#d93a96',
        rent: [10, 50, 150, 450, 625, 750],
        group: [11, 13, 14],
        house: 100
      },
      {
        name: 'Virginia Avenue',
        type: 'property',
        cost: 160,
        color: '#d93a96',
        rent: [12, 60, 180, 500, 700, 900],
        group: [11, 13, 14],
        house: 100
      },
      {
        name: 'Pennsylvania Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [5, 15, 25, 35]
      },
      {
        name: 'St. James Place',
        type: 'property',
        cost: 180,
        color: '#f7941d',
        rent: [14, 70, 200, 550, 750, 950],
        group: [16, 18, 19],
        house: 100
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Tennessee Avenue',
        type: 'property',
        cost: 180,
        color: '#f7941d',
        rent: [14, 70, 200, 550, 750, 950],
        group: [16, 18, 19],
        house: 100
      },
      {
        name: 'New York Avenue',
        type: 'property',
        cost: 200,
        color: '#f7941d',
        rent: [16, 80, 220, 600, 800, 1000],
        group: [16, 18, 19],
        house: 100
      },
      {
        name: 'Free Parking',
        type: 'free-parking',
        corner: true
      },
      {
        name: 'Kentucky Avenue',
        type: 'property',
        cost: 220,
        color: '#ed1b24',
        rent: [18, 90, 250, 700, 875, 1050],
        group: [21, 23, 24],
        house: 150
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Indiana Avenue',
        type: 'property',
        cost: 220,
        color: '#ed1b24',
        rent: [18, 90, 250, 700, 875, 1050],
        group: [21, 23, 24],
        house: 150
      },
      {
        name: 'Illnois Avenue',
        type: 'property',
        cost: 240,
        color: '#ed1b24',
        rent: [20, 100, 300, 750, 925, 1100],
        group: [21, 23, 24],
        house: 150
      },
      {
        name: 'B. & O. Railroad',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [5, 15, 25, 35]
      },
      {
        name: 'Atlatic Avenue',
        type: 'property',
        cost: 260,
        color: '#fef200',
        rent: [22, 110, 330, 800, 975, 1150],
        group: [26, 27, 29],
        house: 150
      },
      {
        name: 'Ventura Avenue',
        type: 'property',
        cost: 260,
        color: '#fef200',
        rent: [22, 110, 330, 800, 975, 1150],
        group: [26, 27, 29],
        house: 150
      },
      {
        name: 'Water Works',
        type: 'utility',
        cost: 150,
        group: [12, 28]
      },
      {
        name: 'Marvin Gardens',
        type: 'property',
        cost: 280,
        color: '#fef200',
        rent: [24, 120, 360, 850, 1025, 1200],
        group: [26, 27, 29],
        house: 150
      },
      {
        name: 'Go To Jail',
        type: 'go-to-jail',
        corner: true
      },
      {
        name: 'Pacific Avenue',
        type: 'property',
        cost: 300,
        color: '#1fb25a',
        rent: [26, 130, 390, 900, 1100, 1275],
        group: [31, 32, 34],
        house: 200
      },
      {
        name: 'North Carolina Avenue',
        type: 'property',
        cost: 300,
        color: '#1fb25a',
        rent: [26, 130, 390, 900, 1100, 1275],
        group: [31, 32, 34],
        house: 200
      },
      {
        name: 'Community Chest',
        type: 'community-chest'
      },
      {
        name: 'Pennsylvania Avenue',
        type: 'property',
        cost: 320,
        color: '#1fb25a',
        rent: [28, 150, 450, 1000, 1200, 1400],
        group: [31, 32, 34],
        house: 200
      },
      {
        name: 'Shortline',
        type: 'railroad',
        cost: 200,
        rent: [25, 50, 100, 200],
        group: [5, 15, 25, 35]
      },
      {
        name: 'Chance',
        type: 'chance'
      },
      {
        name: 'Park Place',
        type: 'property',
        cost: 350,
        color: '#0072bb',
        rent: [35, 175, 500, 1100, 1300, 1500],
        group: [37, 39],
        house: 200
      },
      {
        name: 'Luxury Tax',
        type: 'tax',
        cost: 100
      },
      {
        name: 'Boardwalk',
        type: 'property',
        cost: 400,
        color: '#0072bb',
        rent: [50, 200, 600, 1400, 1700, 2000],
        group: [37, 39],
        house: 200
      },
    ]

    return board

  }

  const getCurrentPlayer = function () {

    const board = StorageCtrl.getBoard()

    let returnValue

    board.players.forEach(item => {

      if (item.name === board.turn) {

        returnValue = item

      }

    })

    return returnValue
  }

  const getPlayer = function (playerName) {

    const board = StorageCtrl.getBoard()

    let returnValue

    board.players.forEach(item => {

      if (item.name === playerName) {

        returnValue = item

      }

    })

    return returnValue
  }

  const setPlayer = function (playerName, data) {

    const board = StorageCtrl.getBoard()

    board.players.forEach((item, index) => {

      if (item.name === playerName) {

        board.players[index] = data

        saveBoard(board)

      }

    })

  }

  const getSVG = function (SVGname) {

    let returnValue = ''

    switch (SVGname) {

      case 'util-1':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" style="fill: #28e8a7;">
          <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
        </svg>
        `

        break;

      case 'util-2':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" style="fill: rgb(153, 153, 9);">
          <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
        </svg>
        `

        break;

      case 'rail-0':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96zM200 232V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm200 0V120c0-13.255-10.745-24-24-24H272c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24zm-48 56c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm-256 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z">
          </path>
        </svg>
        `

        break;

      case 'tax-0':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" style="fill: rgb(235, 59, 59);">
          <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
        </svg>
        `

        break;

      case 'home':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
        </svg>
        `

        break;

      case 'hotel':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M560 64c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h15.98v384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h240v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-16V64h16zm-304 44.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm0 96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zm-128-96c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4zM179.2 256h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4c0 6.4-6.4 12.8-12.8 12.8zM192 384c0-53.02 42.98-96 96-96s96 42.98 96 96H192zm256-140.8c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-96c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4z"></path>
        </svg>
        `

        break;

      case 'chance':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="fill: rgb(59, 191, 235);">
          <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
        </svg>
        `

        break;

      case 'community':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="fill: rgb(59, 191, 235);">
          <path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
          </path>
        </svg>
        `

        break;

      case 'free-parking':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="fill: royalblue;">
          <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
        </svg>
        `

        break;

      case 'go-to-jail':

        returnValue = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="fill: red;">
          <path d="M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z"></path>
        </svg>
        `

        break;

      default:
        break;
    }

    return returnValue

  }

  const getCardData = function (cardName, withIndex) {

    const fullBoardData = plainBoard()

    const andIndex = undefined === withIndex ? false : (withIndex === true ? true : false)

    let returnValue

    fullBoardData.forEach((item, index) => {

      if (item.name === cardName) {

        returnValue = andIndex === true ? [item, index] : item

      }

    })

    return returnValue

  }

  const createCard = function (data) {

    const facts = data

    // Create Card Body Hiulder
    const newElement = document.createElement('div')

    addClass(newElement, 'card-s-deck')


    // Create Card Name
    const cardName = document.createElement('div')

    addClass(cardName, 'card-name')


    // Create Card Price
    const cardPrice = document.createElement('div')

    addClass(cardPrice, 'card-price')


    // Create Card Rent
    const cardRent = document.createElement('div')

    addClass(cardRent, 'card-rent')


    // Create Card House Info
    const cardHinfo = document.createElement('div')

    addClass(cardHinfo, 'card-house-info')


    // Create Card Mortgage
    const cardMortgage = document.createElement('div')

    addClass(cardMortgage, 'card-mortgage')




    const anewDiv = document.createElement('div')

    // Adding House Info
    if (facts.type !== 'utility') {

      anewDiv.appendChild(document.createTextNode(facts.type === 'property' ? 'Houses' : 'Stations'))

      const span = document.createElement('span')

      nrent = facts.rent.map((item) => ` $${item}`)

      span.appendChild(document.createTextNode(nrent.splice(1)))

      anewDiv.appendChild(span)

      cardHinfo.appendChild(anewDiv)

      cardRent.appendChild(document.createTextNode(`Rent $${facts.rent[0]}`))

    }



    // Insert Details into Elements
    cardName.appendChild(document.createTextNode(facts.name))

    cardPrice.appendChild(document.createTextNode(`Price $${facts.cost}`))

    cardMortgage.appendChild(document.createTextNode(`Mortgage $${facts.cost / 2}`))




    // Append Main Children
    newElement.appendChild(cardName)

    newElement.appendChild(cardPrice)

    newElement.appendChild(cardRent)

    newElement.appendChild(cardHinfo)

    newElement.appendChild(cardMortgage)



    // Setting of colors and cross card compatibility
    if (facts.type === 'property') {

      newElement.style.backgroundColor = facts.color

      addClass(newElement, 'norm-prop')

      cardName.style.backgroundColor = facts.color

      anewDiv.style.backgroundColor = facts.color

    }

    else if (facts.type === 'railroad') {

      newElement.style.backgroundColor = 'black'

      addClass(newElement, 'sta-prop')

      cardName.style.backgroundColor = 'white'

      anewDiv.style.backgroundColor = 'black'

    }

    else if (facts.type === 'utility') {

      newElement.style.backgroundColor = 'black'

      addClass(newElement, 'util-prop')

      cardRent.appendChild(document.createTextNode('For One Utility, rent is 4 times the die. For Two Utilities, rent is 10 times the die'))

      cardName.style.backgroundColor = 'white'

      cardHinfo.remove()

    }

    return newElement

  }

  const saveBoard = function (board) {

    StorageCtrl.setBoard(board)

    saveBoardSlot(board)

  }

  const saveBoardSlot = function (board) {

    const data = {
      name: board.name,
      time: new Date().getTime(),
      board: board
    }

    const slot = parseInt(board.name[board.name.length - 1])


    StorageCtrl.setSaveSlots(slot, data)

  }

  const startBoard = function (board) {

    const theBoard = board.slice()

    if (theBoard.length === 7) {

      for (let index = 0; index < theBoard.length; index++) {
        const item = theBoard[index];

        // Check if its the last element in the list
        if (index !== (theBoard.length - 1)) {

          // Check if the item is playing
          if (item.playing === false) {

            // Removes the item and set the loop back by 1 (index--)
            theBoard.splice(index, 1)

            index--

          } else {

            // Assigns the neccessary items

            item.money = 1000

            item.position = 0

            item.maxPosition = 0

            // Use 0 for Computer dice favour and User for Human
            item.diceFavour = item.identity === 'computer' ? 0 :
              StorageCtrl.getUser().diceFavour

            item.inJail = false

            item.outOfJailCards = 0

            item.bankrupted = 0

            item.property = []

          }

        } else {

          // Remove the Save Slot
          theBoard.splice(index, 1)

        }

      }

      const newBoard = {
        name: board[6],
        players: theBoard,
        turn: theBoard[0].name,
        turnStatus: 'play',
        log: [],
        saveSlot: board[6],
      }

      saveBoardSlot(newBoard)

      continueBoard(newBoard)
    }

  }

  const beginBoardAnimations = function () {

    const boardBody = Array.from(UICtrl.UIVars.theBoard.children)

    const visualize = () => {

      addClass(UIVars.main, 'hide-home')

      setTimeout(() => {

        removeClass(UIVars.main, 'show-home')

        removeClass(UIVars.main, 'hide-board')

        addClass(UIVars.main, 'show-board')

        UIVars.theBoard.style.height = UIVars.theBoard.offsetWidth + 'px'

      }, 1000);

    }

    visualize()

    // console.log(plainBoard())

  }

  const fillCardBoard = function (opStat) {

    // Get Data
    const boardBody = (Array.from(UICtrl.UIVars.theBoard.children))

    const board = StorageCtrl.getBoard()

    const boardValues = plainBoard()


    // Data Manipulation
    boardBody.splice(0, 2)

    boardBody.sort((a, b) => {

      const x = parseInt(a.getAttribute('data-position'))

      const y = parseInt(b.getAttribute('data-position'))

      return (x - y)
    })

    const boardOverlays = boardBody.map(item => {
      return item.getElementsByClassName('overlay-top')[0]
    })


    // Clear all Cards
    boardOverlays.forEach((item) => {

      item.innerHTML = ''

    })


    // Fill all Cards
    board.players.forEach((item) => {

      const pos = opStat === 'start' ? item.maxPosition : item.position

      const color = item.color

      if (item.bankrupted === 0) {

        const element = document.createElement('span')

        UICtrl.addClass(element, 'player-icon')

        element.style.backgroundColor = color

        element.setAttribute('data-playername', item.name)

        boardOverlays[pos].appendChild(element)

      }

      item.property.forEach(xitem => {

        let x = getCardData(xitem.name, true)[1]

        let y = ''

        for (let i = 0; i < xitem.house; i++) {

          y += getSVG('home')

        }

        UICtrl.findBy(boardBody[x], '.overlay-oth').innerHTML = `
          <span class="im-on-top"></span>
          <span class="owner" style="background-color: ${item.color}"></span>
        `

        if (xitem.type === 'property') {
          UICtrl.findBy(boardBody[x], '.overlay-oth').innerHTML += `
          <span class="house" style="fill: ${item.color}">${xitem.house < 5 ? y : getSVG('hotel')}</span>`
        }

        if (xitem.mortgaged === true) {

          UICtrl.findBy(boardBody[x], '.overlay-oth').style.backgroundColor = '#ff000087'

          UICtrl.findBy(boardBody[x], '.overlay-oth').innerHTML = `
          <span class="im-on-top"></span>
          <span class="owner" style="background-color: ${item.color}"></span>
          `

        } else {

          UICtrl.findBy(boardBody[x], '.overlay-oth').style.backgroundColor = 'transparent'

        }

      })

    })

  }

  const getUIBoard = function (overlays) {

    // Get Data
    const boardBody = (Array.from(UICtrl.UIVars.theBoard.children))

    // Data Manipulation
    boardBody.splice(0, 2)

    boardBody.sort((a, b) => {

      const x = parseInt(a.getAttribute('data-position'))

      const y = parseInt(b.getAttribute('data-position'))

      return (x - y)
    })

    const boardOverlays = boardBody.map(item => {

      return item.getElementsByClassName('overlay-top')[0]

    })

    if (overlays === true) {

      return boardOverlays

    } else {

      return boardBody

    }

  }

  const fillPlayerBoard = function () {

    const board = StorageCtrl.getBoard()

    const turn = board.turn

    const players = board.players

    let left = ''; let right = ''; let formerCash = []

    players.forEach((item, index) => {

      if (index % 2 === 0) {

        left += `
          <div class="player-card">

          <div class="inside">

            ${item.name === turn ? '<div class="turn-me"></div>' : ''}

            <div class="color" style="background-color: ${item.color}"></div>

            <div class="text-inside">

              <div class="player-name">${item.name}</div>

              <div class="player-money">
                $<span id="parnme-3yx-forcounting-${index}">${item.money}</span>
              </div>

            </div>

          </div>

        </div>
        `

      } else {

        right += `
          <div class="player-card">

          <div class="inside">

            ${item.name === turn ? '<div class="turn-me"></div>' : ''}

            <div class="color" style="background-color: ${item.color}"></div>

            <div class="text-inside">

              <div class="player-name">${item.name}</div>

              <div class="player-money">
                $<span id="parnme-3yx-forcounting-${index}">${item.money}</span>
              </div>

            </div>

          </div>

        </div>
        `

      }

    })

    players.forEach((item, index) => {

      const ele = parseInt(UICtrl.findElement('#parnme-3yx-forcounting-' + index).innerText)

      formerCash.push(ele === NaN ? 0 : ele)

    })

    UIVars.playersHolder1.innerHTML = left

    UIVars.playersHolder2.innerHTML = right

    players.forEach((item, index) => {

      const newEle = UICtrl.findElement('#parnme-3yx-forcounting-' + index)

      if (Math.abs(formerCash[index] - item.money) < 399) {

        SpecialCtrl.addNumbers(formerCash[index], item.money, newEle, 1)

      } else {

        newEle.innerText = item.money

      }

    })

  }

  const fillBoard = function () {

    fillCardBoard()

    fillPlayerBoard()

  }

  const sendMessage = function (message) {

    const texter = UIVars.boardText

    SpecialCtrl.addLetters(message, texter, 80, 0, "|")

  }

  const addToLog = function (message) {

    const board = StorageCtrl.getBoard()

    board.log.push(message)

    saveBoard(board)

  }

  const landOnCard = function (playerName, callBackFunc) {

    const player = getPlayer(playerName)

    const cardData = plainBoard[player.position]

    console.log(cardData)

    callBackFunc()

  }

  const switchTurn = function () {

    const board = StorageCtrl.getBoard()

    let gottenPlayer = 0; let i = -1;

    while (true) {

      i++

      // Recycle the value of i 
      i = i >= board.players.length ? 0 : i

      const item = board.players[i];

      if (board.turn === item.name) {

        // adds 1 if player has been found
        gottenPlayer++

      } else {

        if (gottenPlayer > 0) {

          if (item.playing === true && item.bankrupted === 0) {

            // Change turn based on conditions
            board.turn = item.name

            break

          }

        }

      }

      if (gottenPlayer > 5) {

        break

      }

    }

    sendMessage(board.turn + ' turn')

    saveBoard(board)

    fillBoard()

    const player = getCurrentPlayer()

    if (player.identity === 'human') {

      UIVars.boardButton.setAttribute('data-boardstate', 'play')

    } else {

      ComputerResponse.computerTurn()

    }

  }

  const rollDice = function (callBackFunc) {

    // Empty Dice
    UIVars.dice1.firstElementChild.innerHTML = ''

    UIVars.dice2.firstElementChild.innerHTML = ''


    // Show Die
    UICtrl.addClass(UIVars.dice, 'show')


    // Create Choices List
    const choices = [1, 2, 3, 4, 5, 6]

    const player = getCurrentPlayer()

    if (player.diceFavour !== 0) {

      if (player.diceFavour > 0) {
        choices.push(player.diceFavour);
        choices.push(player.diceFavour);
      } else {
        choices.forEach((item, index) => {
          if (item === player.diceFavour) { choices.splice(index, 1) }
        })
      }

    }

    // Get random numbers
    const figures = [
      SpecialCtrl.chooseFrom(choices),
      SpecialCtrl.chooseFrom(choices)
    ]

    // Set height of .circle container
    SpecialCtrl.OHeightAspect(UIVars.dice1, 1)

    SpecialCtrl.OHeightAspect(UIVars.dice2, 1)


    // Create Line Element
    let line = `<div class="line"></line>`


    // Append Line Element to Circle
    UIVars.dice1.firstElementChild.innerHTML = line

    UIVars.dice2.firstElementChild.innerHTML = line


    // Get Degrees through calculation
    const degrees = [
      (((figures[0] / 6) * 360) + 1440),
      (((figures[1] / 6) * 360) + 1440)
    ]

    // Start Rolling Animation 
    setTimeout(() => {

      UIVars.dice1.firstElementChild.firstElementChild.style
        .transform = `rotate(${degrees[0]}deg)`

      UIVars.dice2.firstElementChild.firstElementChild.style
        .transform = `rotate(${degrees[1]}deg)`

    }, 100);


    // Remove Line Element after Animations
    setTimeout(() => {

      UIVars.dice1.firstElementChild.firstElementChild.remove()

      UIVars.dice2.firstElementChild.firstElementChild.remove()

      // Put Numbers after animation
      UIVars.dice1.firstElementChild.innerHTML =
        `<span>${figures[0]}</span>`

      UIVars.dice2.firstElementChild.innerHTML =
        `<span>${figures[1]}</span>`


      // Remove Die
      setTimeout(() => {

        UICtrl.removeClass(UIVars.dice, 'show')

        callBackFunc(figures)

      }, 1000);

    }, 3000)


    // Send message and add to log
    if (figures[0] === figures[1]) {

      addToLog(`${player.name} rolled a double ${figures[0]}`)
      sendMessage(`${player.name} rolled a double ${figures[0]}`)

    } else {

      addToLog(`${player.name} rolled a ${figures[0]} and a ${figures[1]}`)
      sendMessage(`${player.name} rolled a ${figures[0]} and a ${figures[1]}`)

    }

    return figures
  }

  const moveCell = function (player, to, reverse, callBackFunc) {

    const board = StorageCtrl.getBoard()

    const thePlayer = getPlayer(player)

    to = to > 39 ? to - 40 : to

    thePlayer.maxPosition = to

    setPlayer(thePlayer.name, thePlayer)

    let inter = setInterval(() => {

      if ((thePlayer.position + 1) >= 40) { thePlayer.position = -1 }

      if ((thePlayer.position + 1) === to) { clearInterval(inter); callBackFunc() }

      if (thePlayer.position >= 40) { thePlayer.position = 0 }

      thePlayer.position = thePlayer.position + 1

      if (reverse) { if (reverse === true) { thePlayer.position = thePlayer.position - 2 } }


      setPlayer(thePlayer.name, thePlayer)

      fillCardBoard()

      if (reverse) { if (reverse === true) { if (thePlayer.position === to) { clearInterval(inter); } } }

      if (reverse) { if (reverse === true) { if (thePlayer.position === to) { callBackFunc(); } } }

    }, 300);

  }

  const boardEvents = function () {

    // Show Log
    UIVars.boardLog.addEventListener('click', () => {

      const log = StorageCtrl.getBoard().log

      let logStr = '<div class="log-head">Log</div>'

      log.forEach(item => {

        logStr += `<div class="log-message">${item}</div>`

      })

      UIVars.boardALog.innerHTML = logStr

      UICtrl.addClass(UIVars.boardWholeLog, 'show')

    })

    // Remove Log
    UIVars.boardWholeLog.addEventListener('click', (e) => {

      if (e.target.classList.contains('the-monopoly-log')) {

        UICtrl.removeClass(UIVars.boardWholeLog, 'show')

      } else if (e.target.id === 'remove-log') {

        UICtrl.removeClass(UIVars.boardWholeLog, 'show')

      }

    })

    // Remove Overlay Card
    UIVars.allCardsHolderCover.addEventListener('click', (e) => {

      const permit = UIVars.allCardsHolder.classList.contains('show-mcard') ||
        UIVars.allCardsHolder.classList.contains('show-ucard') ||
        UIVars.allCardsHolder.classList.contains('show-scard') ||
        UIVars.allCardsHolder.classList.contains('show-pcard') ||
        UIVars.allCardsHolder.classList.contains('show-xcard')

      if (permit === true) {

        const player = getCurrentPlayer()

        const allow = player.identity === 'human'

        const boardState = UIVars.boardButton.getAttribute('data-boardstate')

        if (allow === true && boardState !== 'nothing') {

          const ulAllow = UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false'

          if (ulAllow) {

            UIVars.allCardsHolder.className = 'the-details show-no-card'

          }


        }

      }

    })

    // Most Board Events
    UIVars.theBoard.addEventListener('click', (e) => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const tar = e.target

        // Check if target is a basic card
        if (tar.className == 'overlay-top' && tar.parentElement.classList.contains('bc-x')) {

          // Get Data
          const boardBody = (Array.from(UICtrl.UIVars.theBoard.children))

          const board = StorageCtrl.getBoard()

          const boardValues = plainBoard()


          // Data Manipulation
          boardBody.splice(0, 2)

          boardBody.sort((a, b) => {

            const x = parseInt(a.getAttribute('data-position'))

            const y = parseInt(b.getAttribute('data-position'))

            return (x - y)
          })

          const pos = parseInt(tar.parentElement.getAttribute('data-position')) - 1;

          let item = boardValues[pos]

          // Create Display Card
          if (item.type == 'property') {

            UIVars.allCardsHolder.className = 'the-details show-mcard'

            UIVars.mCard.style.borderColor = item.color

            UIVars.mCardColor.style.backgroundColor = item.color

            UIVars.mCardColor.innerText = item.name

            UIVars.mCardPrice.innerText = `Price - $${item.cost}`

            UIVars.mCardRent.innerText = `Rent - $${item.rent[0]}`

            UIVars.mCardConstruct.innerText = `Construction at $${item.house} each`

            UIVars.mCardMortgage.innerText = `Mortgage $${item.cost / 2}`

            UIVars.mCardPrices[0].innerText = `$${item.rent[1]}`

            UIVars.mCardPrices[1].innerText = `$${item.rent[2]}`

            UIVars.mCardPrices[2].innerText = `$${item.rent[3]}`

            UIVars.mCardPrices[3].innerText = `$${item.rent[4]}`

            UIVars.mCardPrices[4].innerText = `$${item.rent[5]}`

          }

          else if (item.type == 'railroad') {

            UIVars.allCardsHolder.className = 'the-details show-scard'

            UIVars.sCardName.innerText = item.name

            UIVars.sCardPrice.innerHTML = `Price - $${item.cost} <br> Rent - $${item.rent[0]}`

            UIVars.sCardMortgage.innerText = `Mortgage $${item.cost / 2}`

            UIVars.sCardPrices[0].innerText = `$${item.rent[1]}`

            UIVars.sCardPrices[1].innerText = `$${item.rent[2]}`

            UIVars.sCardPrices[2].innerText = `$${item.rent[3]}`

          }

          else if (item.type == 'utility') {

            UIVars.allCardsHolder.className = 'the-details show-ucard'

            UIVars.uCardName.innerText = item.name

            UIVars.uCardPrice.innerText = `Price - $${item.cost}`

            UIVars.uCardMortgage.innerText = `Mortgage $${item.cost / 2}`

            UIVars.uCardSVG.innerHTML = item.name === "Electric Company" ? getSVG('util-2') : getSVG('util-1')

          }

          else if (item.type == 'tax') {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Pay $${item.cost}</span>`

            UIVars.xCardSVG.innerHTML = getSVG('tax-0')

          }

          else if (item.type == 'chance') {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Pick a card from the chance deck</span>`

            UIVars.xCardSVG.innerHTML = getSVG('chance')

          }

          else if (item.type == "community-chest") {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Pick a card from the Community Chest deck</span>`

            UIVars.xCardSVG.innerHTML = getSVG('community')

          }

          else if (item.type == "free-parking") {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Rest easy, parking is free here</span>`

            UIVars.xCardSVG.innerHTML = getSVG('free-parking')

          }

          else if (item.type == "go-to-jail") {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Send the player to jail!</span>`

            UIVars.xCardSVG.innerHTML = getSVG('go-to-jail')

          }

          else if (item.type == "go") {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Collect $200 and proceed</span>`

            UIVars.xCardSVG.innerHTML = ``

          }

          else if (item.type == "jail") {

            UIVars.allCardsHolder.className = 'the-details show-xcard'

            UIVars.xCardName.innerText = item.name

            UIVars.xCardinfo.innerHTML = `<span>Just Visiting</span>`

            UIVars.xCardSVG.innerHTML = ``

          }

        }

        // Check if target is a player icon
        else if (tar.classList.contains('player-icon')) {

          const player = getPlayer(tar.getAttribute('data-playername'))

          UIVars.allCardsHolder.className = 'the-details show-pcard'

          UIVars.pCard.style.backgroundImage = `radial-gradient(white, ${player.color})`

          UIVars.pCardName.innerText = player.name

          UIVars.pCardColor.style.backgroundColor = player.color

          UIVars.pCardMoney.innerText = `Funds: $${player.money}`

          if (player.inJail === true) { UIVars.pCardStatus.innerText = `Status: in Jaim` }

          else if (player.bankrupted > 0) { UIVars.pCardStatus.innerText = `Status: Bankrupted` }

          else { UIVars.pCardStatus.innerText = `Status: Playing` }

          UIVars.pCardProperty.innerText = `Properties: ${player.property.length}`

          UIVars.pCardJail.innerText = `Out of Jail Cards: ${player.outOfJailCards}`

          UIVars.pCardProperties.innerHTML = ''

          let homes = 0; let hotels = 0;

          // Placing Cards
          player.property.forEach(item => {

            const prop = document.createElement('div')

            addClass(prop, 'prop-card')

            prop.appendChild(createCard(getCardData(item.name)))

            UIVars.pCardProperties.appendChild(prop)

            if (parseInt(item.house) === 5) { hotels++ } else { homes += parseInt(item.house) }

          })

          if (UIVars.pCardProperties.innerHTML === '') {

            UIVars.pCardProperties.innerHTML = `<span class="f-c-a-b">${player.name} has no properties<span>`

          }

          UIVars.pCardHotels.innerText = `Hotels: ${hotels}`

          UIVars.pCardHouse.innerText = `Houses: ${homes}`

        }

      }

    })

    // Build Button Event
    UIVars.msnavBuild.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const addHouse = (e) => {

          const player = getCurrentPlayer()

          const cardName = e.target.parentElement.getAttribute('data-cardname')

          player.property.forEach((item, index) => {

            if (item.name === cardName) {

              const cardData = getCardData(item.name)

              if (player.money >= cardData.house) {

                player.money = player.money - cardData.house

                player.property[index].house++

                addToLog(`${player.name} bought one house to land ${item.name}`)

                sendMessage(`${player.name} bought one house to land ${item.name}`)

              } else {

                sendMessage(`${player.name} does not have enough money to make the purchase`)

              }

            }

            // player.property[index].house = 0; player.money = 1000; // Strictly for debugging

          })

          setPlayer(player.name, player)

          everything()

        }

        const removeDisplay = () => {

          const UIboard = getUIBoard()

          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', addHouse)

          })

          UIVars.bCardClose.removeEventListener('click', removeDisplay)

          UIVars.allCardsHolder.className = 'the-details show-no-card'

          UIVars.msnavBuild.parentElement.setAttribute('data-disabled', 'false')

        }

        const everything = () => {

          const player = getCurrentPlayer()

          const dataBoard = plainBoard()

          const UIboard = getUIBoard()

          const namesPlayerCards = player.property.map(item => item.name)

          const housesPlayerCards = player.property.map(item => item.house)

          const validCards = []

          // Bring out the right cards
          dataBoard.forEach((item, index) => {

            player.property.forEach((xitem) => {

              // Checks for the card from the database
              if (xitem.name === item.name) {

                let correct = true

                // checks if player has all cards in the group
                item.group.forEach(gitem => {

                  if (!namesPlayerCards.includes(dataBoard[gitem].name)) {

                    correct = false

                  }

                  // Checks if house number are equal
                  if (correct === true) {

                    const otherItemHouse = housesPlayerCards[namesPlayerCards.indexOf(dataBoard[gitem].name)]

                    if (xitem.house > otherItemHouse) {

                      correct = false

                    }

                    // Checks if house number is greater than 4
                    if (xitem.house > 4) {

                      correct = false

                    }

                  }

                })


                // checks if card is a property card
                if (item.type !== 'property') { correct = false }

                if (xitem.mortgaged === true) { correct = false }


                if (correct === true) {

                  validCards.push([item, index])

                }

              }

            })

          })


          // Remove all defaults
          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', '')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', addHouse)

          })


          // Make cards visible
          validCards.forEach(item => {

            UIboard.forEach((xitem, index) => {

              if (item[1] === index) {

                addClass(xitem, 'raise-up')

                UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', item[0].name)

                UICtrl.findBy(xitem, '.overlay-oth').addEventListener('click', addHouse)

              }

            })

          })

          fillCardBoard()

          fillPlayerBoard()
        }

        if (UIVars.msnavBuild.parentElement.getAttribute('data-disabled') === 'false') {

          UIVars.msnavBuild.parentElement.setAttribute('data-disabled', 'true')

          UIVars.allCardsHolder.className = 'the-details show-bcard'

          everything()

          UIVars.bCardClose.addEventListener('click', removeDisplay)

        }

      }

    })

    // Sell Button Event
    UIVars.msnavSell.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const removeHouse = (e) => {

          const player = getCurrentPlayer()

          const cardName = e.target.parentElement.getAttribute('data-cardname')

          player.property.forEach((item, index) => {

            if (item.name === cardName) {

              const cardData = getCardData(item.name)

              player.money = player.money + cardData.house

              player.property[index].house--

              addToLog(`${player.name} sold one house from land ${item.name}`)

              sendMessage(`${player.name} sold one house from land ${item.name}`)

            }

            // player.property[index].house = 0; player.money = 1000; // Strictly for debugging

          })

          setPlayer(player.name, player)

          everything()

        }

        const removeDisplay = () => {

          const UIboard = getUIBoard()

          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', removeHouse)

          })

          UIVars.slCardClose.removeEventListener('click', removeDisplay)

          UIVars.allCardsHolder.className = 'the-details show-no-card'

          UIVars.msnavSell.parentElement.setAttribute('data-disabled', 'false')

        }

        const everything = () => {

          const player = getCurrentPlayer()

          const dataBoard = plainBoard()

          const UIboard = getUIBoard()

          const namesPlayerCards = player.property.map(item => item.name)

          const housesPlayerCards = player.property.map(item => item.house)

          const validCards = []

          // Bring out the right cards
          dataBoard.forEach((item, index) => {

            player.property.forEach((xitem) => {

              // Checks for the card from the database
              if (xitem.name === item.name) {

                let correct = true

                // Checks if house number is greater than 1
                if (xitem.house < 1) {

                  correct = false

                }


                // checks if player has all cards in the group
                item.group.forEach(gitem => {

                  // Checks if house number are equal
                  if (correct === true) {

                    const otherItemHouse = housesPlayerCards[namesPlayerCards.indexOf(dataBoard[gitem].name)]

                    if (xitem.house < otherItemHouse) {

                      correct = false

                    }

                  }

                })



                // checks if card is a property card
                if (item.type !== 'property') { correct = false }

                if (xitem.mortgaged === true) { correct = false }


                if (correct === true) {

                  validCards.push([item, index])

                }

              }

            })

          })


          // Remove all defaults
          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', '')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', removeHouse)

          })


          // Make cards visible
          validCards.forEach(item => {

            UIboard.forEach((xitem, index) => {

              if (item[1] === index) {

                addClass(xitem, 'raise-up')

                UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', item[0].name)

                UICtrl.findBy(xitem, '.overlay-oth').addEventListener('click', removeHouse)

              }

            })

          })

          fillCardBoard()

          fillPlayerBoard()
        }

        if (UIVars.msnavSell.parentElement.getAttribute('data-disabled') === 'false') {

          UIVars.msnavSell.parentElement.setAttribute('data-disabled', 'true')

          UIVars.allCardsHolder.className = 'the-details show-lcard'

          everything()

          UIVars.slCardClose.addEventListener('click', removeDisplay)

        }

      }

    })

    // Mortgage Button Event
    UIVars.msnavMortgage.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const mortgageProp = (e) => {

          const player = getCurrentPlayer()

          const cardName = e.target.parentElement.getAttribute('data-cardname')

          player.property.forEach((item, index) => {

            if (item.name === cardName) {

              const cardData = getCardData(item.name)

              player.money = player.money + (cardData.cost / 2)

              player.property[index].mortgaged = true

              addToLog(`${player.name} mortgaged ${item.name}`)

              sendMessage(`${player.name} mortgaged ${item.name}`)

            }

            // player.property[index].house = 0; player.money = 1000; // Strictly for debugging

          })

          setPlayer(player.name, player)

          everything()

        }

        const removeDisplay = () => {

          const UIboard = getUIBoard()

          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', mortgageProp)

          })

          UIVars.mtCardClose.removeEventListener('click', removeDisplay)

          UIVars.allCardsHolder.className = 'the-details show-no-card'

          UIVars.msnavMortgage.parentElement.setAttribute('data-disabled', 'false')

        }

        const everything = () => {

          const player = getCurrentPlayer()

          const dataBoard = plainBoard()

          const UIboard = getUIBoard()

          const namesPlayerCards = player.property.map(item => item.name)

          const housesPlayerCards = player.property.map(item => item.house)

          const validCards = []

          // Bring out the right cards
          dataBoard.forEach((item, index) => {

            player.property.forEach((xitem) => {

              // Checks for the card from the database
              if (xitem.name === item.name) {

                let correct = true

                // Checks if house number is greater than 0
                if (xitem.house > 0) {

                  correct = false

                }

                // checks if card is mortgaged
                if (xitem.mortgaged === true) { correct = false }

                if (correct === true) {

                  validCards.push([item, index])

                }

              }

            })

          })


          // Remove all defaults
          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', '')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', mortgageProp)

          })


          // Make cards visible
          validCards.forEach(item => {

            UIboard.forEach((xitem, index) => {

              if (item[1] === index) {

                addClass(xitem, 'raise-up')

                UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', item[0].name)

                UICtrl.findBy(xitem, '.overlay-oth').addEventListener('click', mortgageProp)

              }

            })

          })

          fillCardBoard()

          fillPlayerBoard()
        }

        if (UIVars.msnavMortgage.parentElement.getAttribute('data-disabled') === 'false') {

          UIVars.msnavMortgage.parentElement.setAttribute('data-disabled', 'true')

          UIVars.allCardsHolder.className = 'the-details show-mtcard'

          everything()

          UIVars.mtCardClose.addEventListener('click', removeDisplay)

        }

      }

    })

    // Mortgage Redeem Event
    UIVars.msnavRedeem.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const redeemProp = (e) => {

          const player = getCurrentPlayer()

          const cardName = e.target.parentElement.getAttribute('data-cardname')

          player.property.forEach((item, index) => {

            if (item.name === cardName) {

              const cardData = getCardData(item.name)

              if (player.money >= ((cardData.cost / 2) + 5)) {

                player.money = player.money - ((cardData.cost / 2) + 5)

                player.property[index].mortgaged = false

                addToLog(`${player.name} redeemed ${item.name}`)

                sendMessage(`${player.name} redeemed ${item.name}`)

              } else {

                sendMessage(`${player.name} does not have enough money to complete the transaction`)

              }

            }

            // player.property[index].house = 0; player.money = 1000; // Strictly for debugging

          })

          setPlayer(player.name, player)

          everything()

        }

        const removeDisplay = () => {

          const UIboard = getUIBoard()

          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', redeemProp)

          })

          UIVars.rCardClose.removeEventListener('click', removeDisplay)

          UIVars.allCardsHolder.className = 'the-details show-no-card'

          UIVars.msnavRedeem.parentElement.setAttribute('data-disabled', 'false')

        }

        const everything = () => {

          const player = getCurrentPlayer()

          const dataBoard = plainBoard()

          const UIboard = getUIBoard()

          const namesPlayerCards = player.property.map(item => item.name)

          const housesPlayerCards = player.property.map(item => item.house)

          const validCards = []

          // Bring out the right cards
          dataBoard.forEach((item, index) => {

            player.property.forEach((xitem) => {

              // Checks for the card from the database
              if (xitem.name === item.name) {

                let correct = true

                // checks if card is not mortgaged
                if (xitem.mortgaged === false) { correct = false }

                if (correct === true) {

                  validCards.push([item, index])

                }

              }

            })

          })


          // Remove all defaults
          UIboard.forEach(xitem => {

            removeClass(xitem, 'raise-up')

            UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', '')

            UICtrl.findBy(xitem, '.overlay-oth').removeEventListener('click', redeemProp)

          })


          // Make cards visible
          validCards.forEach(item => {

            UIboard.forEach((xitem, index) => {

              if (item[1] === index) {

                addClass(xitem, 'raise-up')

                UICtrl.findBy(xitem, '.overlay-oth').setAttribute('data-cardname', item[0].name)

                UICtrl.findBy(xitem, '.overlay-oth').addEventListener('click', redeemProp)

              }

            })

          })

          fillCardBoard()

          fillPlayerBoard()
        }

        if (UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false') {

          UIVars.msnavRedeem.parentElement.setAttribute('data-disabled', 'true')

          UIVars.allCardsHolder.className = 'the-details show-rcard'

          everything()

          UIVars.rCardClose.addEventListener('click', removeDisplay)

        }

      }

    })

    // Trade Button Event
    UIVars.msnavTrade.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human' &&
        UICtrl.UIVars.msnavRedeem.parentElement.getAttribute('data-disabled') === 'false' &&
        UICtrl.UIVars.boardButton.getAttribute('data-boardstate') !== 'nothing'

      if (allow === true) {

        const togglePlayer = () => {

          const player = getCurrentPlayer()

          let playerList = StorageCtrl.getBoard().players.map(item => item.name)

          playerList = playerList.filter(item => item !== player.name)

          const otherPlayer = getPlayer(playerList[UIVars.tCardRange.value])

          UIVars.tCardTrSend2.innerHTML = ''

          otherPlayer.property.forEach(item => {

            const itemData = getCardData(item.name)

            const oplayerCard = document.createElement('div')

            const overElement = document.createElement('div')

            overElement.setAttribute('data-cardname', item.name)

            addClass(oplayerCard, 'prop-card')

            addClass(overElement, 'over-card')

            oplayerCard.appendChild(createCard(itemData))

            oplayerCard.appendChild(overElement)

            UIVars.tCardTrSend2.appendChild(oplayerCard)

          })

          if (otherPlayer.property.length === 0) {

            UIVars.tCardTrSend2.innerHTML = `${otherPlayer.name} has no cards to trade`

          }

          UIVars.tCardTrReceM.min = 0

          UIVars.tCardTrReceM.max = otherPlayer.money

          UIVars.tCardLabel1.innerText = `${player.name} offers to ${otherPlayer.name}`

        }

        const setTheClass = (e) => {

          if (e.target.classList.contains('over-card')) {

            if (e.target.classList.contains('active')) {

              removeClass(e.target, 'active')

            } else {

              addClass(e.target, 'active')

            }

          }

        }

        const regulateMoneyInput = () => {

          const player = getCurrentPlayer()

          let playerList = StorageCtrl.getBoard().players.map(item => item.name)

          playerList = playerList.filter(item => item !== player.name)

          const otherPlayer = getPlayer(playerList[UIVars.tCardRange.value])

          if (UIVars.tCardTrSendM.value > player.money) {

            UIVars.tCardTrSendM.value = player.money

          } else if (UIVars.tCardTrSendM.value < 0) {

            UIVars.tCardTrSendM.value = 0

          } else if (isNaN(parseInt(UIVars.tCardTrSendM.value))) {

            UIVars.tCardTrSendM.value = 0

          }

          if (UIVars.tCardTrReceM.value > otherPlayer.money) {

            UIVars.tCardTrReceM.value = otherPlayer.money

          } else if (UIVars.tCardTrReceM.value < 0) {

            UIVars.tCardTrReceM.value = 0

          } else if (isNaN(parseInt(UIVars.tCardTrReceM.value))) {

            UIVars.tCardTrReceM.value = 0

          }

        }

        const removeDisplay = () => {

          UIVars.tCardRange.removeEventListener('input', togglePlayer)

          UIVars.tCardTrSendM.removeEventListener('input', regulateMoneyInput)

          UIVars.tCardTrReceM.removeEventListener('input', regulateMoneyInput)

          UIVars.tCardClose.removeEventListener('click', removeDisplay)

          UIVars.aCardDecline.removeEventListener('click', declineOffer)

          UIVars.tCardVBoard.removeEventListener('mousedown', showBoard)

          UIVars.tCardVBoard.removeEventListener('mouseup', hideBoard)

          UIVars.tCardVBoard.removeEventListener('mouseout', hideBoard)

          UIVars.aCardVBoard.removeEventListener('mousedown', showBoard)

          UIVars.aCardVBoard.removeEventListener('mouseup', hideBoard)

          UIVars.aCardVBoard.removeEventListener('mouseout', hideBoard)

          UIVars.tCardSend.removeEventListener('click', sendOffer)

          UIVars.aCardAccept.removeEventListener('click', acceptOffer)

          UIVars.tCard.removeEventListener('click', setTheClass)

          UIVars.allCardsHolder.className = 'the-details show-no-card'

          UIVars.msnavTrade.parentElement.setAttribute('data-disabled', 'false')

        }

        const declineOffer = () => {

          removeDisplay()

        }

        const showBoard = () => {

          UICtrl.UIVars.tCard.parentElement.style.opacity = 0

        }

        const hideBoard = () => {

          UICtrl.UIVars.tCard.parentElement.style.opacity = 1

        }

        const sendOffer = () => {

          const player = getCurrentPlayer()

          let playerList = StorageCtrl.getBoard().players.map(item => item.name)

          playerList = playerList.filter(item => item !== player.name)

          const otherPlayer = getPlayer(playerList[UIVars.tCardRange.value])


          let sendItems = Array.from(UICtrl.UIVars.tCardTrSend1.children)

          sendItems = sendItems.map(item => item.children[1])

          sendItems = sendItems.filter(item => item.classList.contains('over-card'))

          sendItems = sendItems.filter(item => item.classList.contains('active'))

          sendItems = sendItems.map(item => item.getAttribute('data-cardname'))

          sendItems = sendItems.map(item => getCardData(item))

          let receiveItems = Array.from(UICtrl.UIVars.tCardTrSend2.children)

          receiveItems = receiveItems.map(item => item.children[1])

          receiveItems = receiveItems.filter(item => item.classList.contains('over-card'))

          receiveItems = receiveItems.filter(item => item.classList.contains('active'))

          receiveItems = receiveItems.map(item => item.getAttribute('data-cardname'))

          receiveItems = receiveItems.map(item => getCardData(item))

          const moneyDiff = UIVars.tCardTrSendM.value - UIVars.tCardTrReceM.value


          const humanReply = () => {

            UIVars.allCardsHolder.className = 'the-details show-acard'

            UIVars.aCardLabel2.innerText = `${otherPlayer.name} from ${player.name}`

            UIVars.aCardSendCard.innerHTML = ''
            UIVars.aCardReceiveCard.innerHTML = ''

            sendItems.forEach(item => {

              const itemData = item

              const oplayerCard = document.createElement('div')

              addClass(oplayerCard, 'prop-card')

              oplayerCard.appendChild(createCard(itemData))

              UIVars.aCardSendCard.appendChild(oplayerCard)

            })

            if (sendItems.length === 0) {

              UIVars.aCardSendCard.innerHTML = `${player.name} is sending no cards`

            }

            receiveItems.forEach(item => {

              const itemData = item

              const oplayerCard = document.createElement('div')

              addClass(oplayerCard, 'prop-card')

              oplayerCard.appendChild(createCard(itemData))

              UIVars.aCardReceiveCard.appendChild(oplayerCard)

            })

            if (receiveItems.length === 0) {

              UIVars.aCardReceiveCard.innerHTML = `${player.name} is requesting for no cards`

            }

            regulateMoneyInput()

            if (moneyDiff >= 0) {

              UIVars.aCardMoney.innerText = `Receive $${moneyDiff}`

            } else {

              UIVars.aCardMoney.innerText = `Send $${Math.abs(moneyDiff)}`

            }

          }

          if (otherPlayer.identity === 'human') {

            humanReply()

          } else {

            const accepted = ComputerResponse.processTradeDeal()

            if (accepted === true) { acceptOffer() } else { declineOffer() }

          }

        }

        const acceptOffer = () => {

          const player = getCurrentPlayer()

          let playerList = StorageCtrl.getBoard().players.map(item => item.name)

          playerList = playerList.filter(item => item !== player.name)

          const otherPlayer = getPlayer(playerList[UIVars.tCardRange.value])


          let sendItems = Array.from(UICtrl.UIVars.tCardTrSend1.children)

          sendItems = sendItems.map(item => item.children[1])

          sendItems = sendItems.filter(item => item.classList.contains('over-card'))

          sendItems = sendItems.filter(item => item.classList.contains('active'))

          sendItems = sendItems.map(item => item.getAttribute('data-cardname'))

          sendItems = sendItems.map(item => getCardData(item))

          let receiveItems = Array.from(UICtrl.UIVars.tCardTrSend2.children)

          receiveItems = receiveItems.map(item => item.children[1])

          receiveItems = receiveItems.filter(item => item.classList.contains('over-card'))

          receiveItems = receiveItems.filter(item => item.classList.contains('active'))

          receiveItems = receiveItems.map(item => item.getAttribute('data-cardname'))

          receiveItems = receiveItems.map(item => getCardData(item))

          const moneyDiff = UIVars.tCardTrSendM.value - UIVars.tCardTrReceM.value

          sendItems.forEach(item => {

            player.property.forEach((xitem, xindex) => {

              if (item.name === xitem.name) {

                const nMortg = xitem.mortgaged

                otherPlayer.property.push({ name: item.name, house: 0, mortgaged: nMortg })

                player.property.splice(xindex, 1)

              }

            })

          })

          receiveItems.forEach(item => {

            otherPlayer.property.forEach((xitem, xindex) => {

              if (item.name === xitem.name) {

                const nMortg = xitem.mortgaged

                player.property.push({ name: item.name, house: 0, mortgaged: nMortg })

                otherPlayer.property.splice(xindex, 1)

              }

            })

          })

          player.money = player.money - moneyDiff

          otherPlayer.money = otherPlayer.money - moneyDiff


          setPlayer(player.name, player)

          setPlayer(otherPlayer.name, otherPlayer)


          fillPlayerBoard()

          fillCardBoard()

          removeDisplay()

        }


        const everything = () => {

          const player = getCurrentPlayer()

          UIVars.tCardTrSend1.innerHTML = ''

          player.property.forEach(item => {

            const itemData = getCardData(item.name)

            const playerCard = document.createElement('div')

            const overElement = document.createElement('div')

            overElement.setAttribute('data-cardname', item.name)

            addClass(playerCard, 'prop-card')

            addClass(overElement, 'over-card')

            playerCard.appendChild(createCard(itemData))

            playerCard.appendChild(overElement)

            UIVars.tCardTrSend1.appendChild(playerCard)

          })

          if (player.property.length === 0) {

            UIVars.tCardTrSend1.innerHTML = `${player.name} (you) has no cards to trade`

          }

          let playerList = StorageCtrl.getBoard().players.map(item => item.name)

          playerList = playerList.filter(item => item !== player.name)

          UIVars.tCardRange.min = 0

          UIVars.tCardRange.max = playerList.length - 1

          UIVars.tCardTrSendM.min = 0

          UIVars.tCardTrSendM.max = player.money

          UIVars.tCardRange.addEventListener('input', togglePlayer)

          UIVars.tCardTrSendM.addEventListener('input', regulateMoneyInput)

          UIVars.tCardTrReceM.addEventListener('input', regulateMoneyInput)

          UIVars.tCardClose.addEventListener('click', removeDisplay)

          UIVars.aCardDecline.addEventListener('click', declineOffer)

          UIVars.tCardVBoard.addEventListener('mousedown', showBoard)

          UIVars.tCardVBoard.addEventListener('mouseup', hideBoard)

          UIVars.tCardVBoard.addEventListener('mouseout', hideBoard)

          UIVars.aCardVBoard.addEventListener('mousedown', showBoard)

          UIVars.aCardVBoard.addEventListener('mouseup', hideBoard)

          UIVars.aCardVBoard.addEventListener('mouseout', hideBoard)

          UIVars.tCardSend.addEventListener('click', sendOffer)

          UIVars.aCardAccept.addEventListener('click', acceptOffer)

          UIVars.tCard.addEventListener('click', setTheClass)

          togglePlayer()
        }

        if (UIVars.msnavTrade.parentElement.getAttribute('data-disabled') === 'false') {

          UIVars.msnavTrade.parentElement.setAttribute('data-disabled', 'true')

          UIVars.allCardsHolder.className = 'the-details show-tcard'

          everything()

        }

      }

    })

    // Play Button Events
    UIVars.boardButton.addEventListener('click', () => {

      const player = getCurrentPlayer()

      const allow = player.identity === 'human'

      const boardState = UIVars.boardButton.getAttribute('data-boardstate')

      if (allow === true && boardState !== 'nothing') {

        if (boardState === 'play') {

          UIVars.boardButton.setAttribute('data-boardstate', 'nothing')

          setBoardStatus('playing')

          rollDice((figures) => {

            moveCell(player.name, (player.position + figures[0] + figures[1]), false, () => {

              landOnCard(player.name, () => {

                UIVars.boardButton.setAttribute('data-boardstate', 'endturn')

                UIVars.boardButton.innerText = 'End Turn'

                sendMessage(`${player.name} end your turn`)

                setBoardStatus('played')

              })

            })

          })

        } else if (boardState === 'endturn') {

          UIVars.boardButton.setAttribute('data-boardstate', 'nothing')

          UIVars.boardButton.innerText = 'Spin'

                setBoardStatus('end')

          switchTurn()

        }

      }

    })

  }


  const ComputerResponse = (function () {

    const computerTurn = () => {

      setBoardStatus('play')
      
      const player = getCurrentPlayer()

      rollDice((figures) => {

        setBoardStatus('playing')

        moveCell(player.name, (player.position + figures[0] + figures[1]), false, () => {

          landOnCard(player.name, () => {

            endTurn()

          })

        })

      })

    }

    const processTradeDeal = () => {

      return true

    }

    const endTurn = () => {

      setBoardStatus('played')

      switchTurn()

    }


    return {

      computerTurn: () => computerTurn(),

      endTurn: () => endTurn(),

      processTradeDeal: () => processTradeDeal(),

    }

  })()

  const setBoardStatus = function (status) {

    const board = StorageCtrl.getBoard()

    board.turnStatus === status

    saveBoard(board)

  }


  const continueBoard = function (board) {

    saveBoard(board)

    beginBoardAnimations()

    if (board.turnStatus === 'play') {

      if (player.identity === 'human') {

        UIVars.boardButton.setAttribute('data-boardstate', 'play')

        fillCardBoard()

        sendMessage(`${board.turn} turn`)

      } else {

        ComputerResponse.computerTurn()

      }

    } else if (board.turnStatus === 'playing') {

      const player = getCurrentPlayer()

      moveCell(player, player.maxPosition, false, () => {

        if (player.identity === 'human') {

          landOnCard(player.name, () => {

            UIVars.boardButton.setAttribute('data-boardstate', 'endturn')

            UIVars.boardButton.innerText = 'End Turn'

            sendMessage(`${player.name} end your turn`)

          })

        } else {

          landOnCard(player.name, () => {

            ComputerResponse.endTurn()

          })

        }

      })

    } else if (board.turnStatus === 'played') {

      if (player.identity === 'human') {

        UIVars.boardButton.setAttribute('data-boardstate', 'endturn')

        UIVars.boardButton.innerText = 'End Turn'

        sendMessage(`${player.name} end your turn`)

      } else {

        ComputerResponse.endTurn()

      }
    }


    fillPlayerBoard()

    boardEvents()




  }


  const UIVars = UICtrl.UIVars

  const addClass = (element, clas) => UICtrl.addClass(element, clas)

  const removeClass = (element, clas) => UICtrl.removeClass(element, clas)


  return {

    startBoard: (board) => startBoard(board),

    continueBoard: (board) => continueBoard(board),

  }
})()

document.addEventListener('DOMContentLoaded', () => {
  // BoardCtrl.continueBoard(StorageCtrl.getBoard())
})
