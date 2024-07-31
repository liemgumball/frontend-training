interface Article {
  title: string;
  content: string;
}

function isArticle(object: any): object is Article {
  return "title" in object && "content" in object;
}

fetch("https://example.com")
  .then((response) => response.json())
  .then((body) => {
    if (isArticle(body)) {
      return body.title;
    } else {
      throw new Error("This is not an article");
    }
  });
