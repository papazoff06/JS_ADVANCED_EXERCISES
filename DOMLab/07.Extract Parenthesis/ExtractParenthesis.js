function extract(content) {
    let text = document.getElementById('content').textContent;
    let match = text.matchAll(/(?<=\()[A-Za-z\s\.]+?(?=\))/g)
    let matches = Array.from(match);
    let result = ""
    for(let row of matches){
        result += `${row[0]+';' + ' '}`
    }
    return document.getElementById('content').textContent = result;
}