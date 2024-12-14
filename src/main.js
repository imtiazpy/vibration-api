import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Vibration API Demo</h1>
    <div class="card">
      <button id="vibrateButton" type="button">Vibrate for 1 second</button>
    </div>
    <p class="note">Note: This only works on mobile devices that support vibration</p>

    <p>Created by imtiazpy for testing purpose</p>
  </div>
`

const vibrateButton = document.querySelector('#vibrateButton')

vibrateButton.addEventListener('click', () => {
  // Check if vibration API is supported
  if ('vibrate' in navigator) {
    // Vibrate for 1000ms (1 second)
    navigator.vibrate(1000)
    vibrateButton.classList.add('active')
    
    // Remove active class after vibration
    setTimeout(() => {
      vibrateButton.classList.remove('active')
    }, 1000)
  } else {
    alert('Vibration API is not supported in your device/browser')
  }
})
