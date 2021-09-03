const input = document.querySelector('input');
const list = document.querySelector('.list');

const button = document.querySelector('#search-button');
button.addEventListener('click', handleClick);
function handleClick() {
  findBooks(input.value);
}

const API= 'http://openlibrary.org/search.json?q=';
async function findBooks(bookName) {
  try {
    let res = await axios.get(`${API}${bookName}`);
    console.log(res.data);
    let books = res.data.docs;
    // console.log(books);
    removeOldContent();
    showBooks(books);
  } catch (error) {
    console.log(error);
  }
}
// findBooks('romeo and juliet');

function showBooks(books) {
  books.forEach((book) => {
    let h3 = document.createElement('h3');
    h3.innerText = book.title;
    list.append(h3);

    let h4 = document.createElement('h4');
    h4.innerText = book.author_name;
    list.append(h4);

    let img = document.createElement('img');
    console.log(book.isbn[0]);
    img.src = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
    list.append(img);

    if (book.isbn[0] !== img.src) {
      let newImg = document.createElement('img');
      newImg.src = 'https://image.shutterstock.com/image-illustration/picture-icon-no-image-symbol-260nw-1572613234-S.jpg';
      list.append(newImg);
    } 
  });
}

function removeOldContent() {
  list.innerHTML = '';
}