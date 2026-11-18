function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);

    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');

    const sections = document.querySelectorAll('section');

    function onSubmit(ev) {
        ev.preventDefault();
        let task = taskRef.value.trim();
        let description = descriptionRef.value.trim();
        let date = dateRef.value.trim();
        let openSection = sections[1].getElementsByTagName('div')[1];

        if (task && description && date) {
            let article = createArticle(task, description, date);
            let divWraper = createButtonWraper();
            let startButt = createButton();
            let dellButt = createButton();
            startButt.addEventListener('click', moveTask);
            dellButt.addEventListener('click', dellTask);
            startButt.className = 'green';
            startButt.textContent = 'Start'
            dellButt.className = 'red';
            dellButt.textContent = 'Delete'
            divWraper.appendChild(startButt);
            divWraper.appendChild(dellButt);
            article.appendChild(divWraper);
            openSection.appendChild(article);

            taskRef.value = '';
            descriptionRef.value = '';
            dateRef.value = '';

            function dellTask(ev) {
                let removeSection = ev.target.parentNode.parentNode;
                removeSection.remove();
            }

            function moveTask(ev) {
                ev.target.removeEventListener('click', moveTask);
                let inProgres = document.getElementById('in-progress')
                ev.target.className = 'red';
                ev.target.textContent = 'Delete';
                ev.target.addEventListener('click', dellTask)

                let finBtn = ev.target.parentNode.children[1];
                finBtn.addEventListener('click', finish)
                finBtn.className = 'orange';
                finBtn.textContent = 'Finish';

                inProgres.appendChild(article)
            }

            function finish() {
                let complete = sections[3].getElementsByTagName('div')[1];
                article.getElementsByTagName('div')[0].remove();
                console.log(article)
                complete.appendChild(article)
            }

            function createButtonWraper() {
                let divButWrap = document.createElement('div');
                divButWrap.className = 'flex';
                return divButWrap;
            }

            function createButton() {
                let button = document.createElement('button');
                return button
            }

            function createArticle(task, descrip, date) {
                let article = document.createElement('article');
                let h3 = document.createElement('h3');
                h3.textContent = task;
                let p1 = document.createElement('p');
                p1.textContent = `Description: ${descrip}`;
                let p2 = document.createElement('p');
                p2.textContent = `Due Date: ${date}`;
                article.appendChild(h3);
                article.appendChild(p1);
                article.appendChild(p2);
                return article;
            }
        }
    }
}