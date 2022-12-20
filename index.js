let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById('homeScore-el')
let guestScoreEl = document.getElementById('guestScore-el')

function increment1home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increment2home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increment3home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increment1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increment2guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increment3guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}