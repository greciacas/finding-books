# Finding Books

#### An app that helps find a book by title, author and more.

## API and Data Sample

https://openlibrary.org/search.json

{
"numFound": 0,
"start": 0,
"numFoundExact": true,
"docs": [ ],
"num_found": 0,
"q": " ",
"offset": null
}

## Wireframes

![](images/Screen%20Shot%202021-08-28%20at%206.50.29%20PM.png)

### MVP

- Allows users to search for a book by title or author
- Responsive design

### POST MVP

- Add second API
- Allows users to see the book reviews
- Lets users know if the book is accessible from a library near them or where can the book be purchased

## Project Schedule

| Day          | Deliverable                                            | Status     |
| ------------ | ------------------------------------------------------ | ---------- |
| August 27-29 | Prompt / Wireframes / Priority Matrix / Timeframes     | Complete   |
| August 30    | Project Approval                                       | Complete   |
| August 30-31 | Core Application Structure (HTML, CSS, etc.)           | Complete   |
| September 1  | Pseudocode / actual code/ MVP/ Initial Clickable Model | Complete   |
| September 2  | More CSS & MVP                                         | Complete   |
| September 3  | Presentations                                          | Incomplete |

## Priority Matrix

![](images/Screen%20Shot%202021-08-29%20at%208.03.41%20PM.png)

## Timeframes

| Component                              | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML structure                         |    H     |     1.5hrs     |     2hrs      |    2hrs     |
| Responsive API data                    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Retrieving data from API               |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS                                    |    H     |      4hrs      |     5hrs      |    5hrs     |
| Functional search bar                  |    H     |      2hrs      |      1hr      |     1hr     |
| Functional search button               |    H     |      2hrs      |      1hr      |     1hr     |
| Media query                            |    H     |      3hrs      |     2hrs      |    2hrs     |
| Display books, book title, author name |    H     |      3hrs      |     5hrs      |    5hrs     |
| Show book covers                       |    H     |      3hrs      |     6hrs      |    6hrs     |
| Responsive new book results            |    H     |     1.5hrs     |     3hrs      |    3hrs     |
| Total                                  |    H     |     26hrs      |     31hrs     |    31hrs    |

## Code Snippet

This if statement lets an image icon appear on the books that display no covers on the page

```
if (book.isbn[0] !== img.src) {
      let newImg = document.createElement('img');
      newImg.src = 'https://image.shutterstock.com/image-illustration/picture-icon-no-image-symbol-260nw-1572613234-S.jpg';
      list.append(newImg);
    }
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
