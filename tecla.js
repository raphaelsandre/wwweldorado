const label = document.getElementById('#labelzita')
const labes = document.querySelector('.labels').innerText
console.log(label)
document.addEventListener('keydown', function (event) {
  console.log(event.key)
  label.innerText = event.key
  labes = event.key
  if (event.key === 'Escape') {
    console.log('Escape')
  }
})
