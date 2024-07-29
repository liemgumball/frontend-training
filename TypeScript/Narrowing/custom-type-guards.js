function isArticle(object) {
    return "title" in object && "content" in object;
}
fetch("https://example.com")
    .then(function (response) { return response.json(); })
    .then(function (body) {
    if (isArticle(body)) {
        return body.title;
    }
    else {
        throw new Error("This is not an article");
    }
});
