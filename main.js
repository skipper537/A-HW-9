
randomColor = () => (`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)

function generateBlocks() {
   for (let i = 0; i < 25; i++) {
      let square = document.createElement('div');
      square.classList.add('square')
      square.style.backgroundColor = randomColor();
      document.querySelector('.container').appendChild(square)
   }
}
function generateBlocksInterval() {
   generateBlocks()
   setInterval(() => {
      document.querySelectorAll('.square').forEach(function (node) {
         node.style.backgroundColor = randomColor();
      });
   }, 1000)
}
generateBlocksInterval();