function addBook() {
    bookname = bookname1.value
    authername = authername1.value
    coverimage = coverimg.value

    if (bookname in localStorage) {
        alert("book already present")
    }
    else {
        book = { bookname,authername,coverimage }
        localStorage.setItem(bookname,JSON.stringify(book))
        location = "./index.html"
        alert("book added successfully")
    }

                }

function searchPage() {
    sbookname = srchinpt.value
    if (sbookname in localStorage) {
        bookDetails = JSON.parse(localStorage.getItem(sbookname))

        result.innerHTML =

            `<div class="card" style="width: 25%;">
    <img src=${bookDetails.coverimage} class="card-img-top" alt="..."
      <div class="card-body">
        <h5 class="card-title">Book Name ${bookDetails.bookname}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class=list-group-item">Author Name ${bookDetails.authername}</li>
        </ul>
    </div>`


    }

    else {
        `<h1 class="text-danger">Book is Not Found</h1>`
    }
            }