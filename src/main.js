const addToBoard = (element) => {
  const board = document.getElementById('board');
  board.append(element);
}

const onCardClick = () => {
  // this is undefined, because I am attaching it to the window which apparently has no context
  /* alert(`clicked a card: ${this}`); */
}

window.onCardClick = onCardClick;

const getCard = async () => {
  const request = await fetch('/card');
  const response = await request.text();
  const parser = new DOMParser();
  const document = parser.parseFromString(response, 'text/html');
  const { body } = document;
  const card = body.querySelector('.card');
  // => true here as well as below; card DOM node was not created, only fetched
  /* console.warn('IS CARD ATTACHED TO DOM (BEFORE)?', card.isConnected); */
  /* card.addEventListener('click', onCardClick); */
  addToBoard(card);
  // => true
  /* console.warn('IS CARD ATTACHED TO DOM (AFTER)?', card.isConnected); */
}

const makeFunction = (body) => typeof body === 'string'
  ? new Function(`return (${body})(...arguments)`)
  : () => body;

const getFunction = async (path) => {
  const request = await fetch(path);
  const response = await request.text();
  return makeFunction(response);
}

const numberFn = async () => {
  const numberFn = await getFunction('number.js');
  console.warn(numberFn(10));
}

document.getElementById('card').addEventListener('click', getCard);
document.getElementById('numberFn').addEventListener('click', numberFn);
