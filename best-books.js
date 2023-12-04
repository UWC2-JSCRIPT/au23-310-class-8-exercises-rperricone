const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', async function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  
  // Fetch bestselling books for date and add top 5 to page
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response =  fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=xHN8R6xlxkVuGQAZ8rYLvmNhLDvhLOX0`, requestOptions)
  let res = await response
  let text = await res.json()
  //console.log(text.results.books.slice(0,5)) 
  $('#books-container').empty()
  for(let book of text.results.books.slice(0,5)){
    console.log(book.title, book.author, book.description, book.book_image)
    $('#books-container').append(`<div class="book"><b>Title</b>: ${book.title}<br/><b>Author</b>: ${book.author}<br/><b>Description</b>: ${book.description}<br/><img src="${book.book_image}" alt="${book.title}"><br/><br/></div>`)

   }
});
