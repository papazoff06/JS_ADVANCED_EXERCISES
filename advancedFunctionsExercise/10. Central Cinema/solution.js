function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    document.getElementById('archive').children[2].addEventListener('click', clearAll);
    
    
    let nameRef = document.getElementById('container').children[0];
    let hallRef = document.getElementById('container').children[1];
    let ticketPriceRef = document.getElementById('container').children[2];

    function clearAll() {
            let archSection = document.getElementById('archive').children[1].getElementsByTagName('li');
            let arraySections = Array.from(archSection);
            for (let li of arraySections) {
                li.remove();
            }
        }

    function onSubmit(ev) {
        ev.preventDefault();
        let name = nameRef.value.trim();
        let hall = hallRef.value.trim();
        let priceStr = ticketPriceRef.value.trim();
        let ticketPrice = Number(priceStr);

        if (name !== '' && hall !== '' && priceStr !== '' && !isNaN(ticketPrice)) {
            let moviesList = document.getElementById('movies').children[1];
            let liSection = createLi(name, hall);

            let div = document.createElement('div');
            let strong = document.createElement('strong');
            strong.textContent = ticketPrice.toFixed(2);
            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold'
            let archBtn = document.createElement('button');
            archBtn.addEventListener('click', archive);
            archBtn.textContent = 'Archive'
            div.appendChild(strong);
            div.appendChild(input);
            div.appendChild(archBtn);
            liSection.appendChild(div);

            moviesList.appendChild(liSection);
            document.getElementById('container').children[0].value = '';
            document.getElementById('container').children[1].value = '';
            document.getElementById('container').children[2].value = '';
        }

        function createLi(name, hall) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = name;
            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall}`;
            li.appendChild(span);
            li.appendChild(strong);
            return li;
        }

        function archive(ev) {
            let movieSection = ev.target.parentElement.parentElement;
            let ticetsPrice = Number(ev.target.parentNode.children[0].textContent);
            let ticetsSold = ev.target.parentNode.children[1].value.trim();
            let movieName = ev.target.parentElement.parentElement.children[0].textContent.trim();
            let archSection = document.getElementById('archive').children[1];
            let soldStr = Number(ticetsSold);
            


            if (ticetsSold !== '' && !isNaN(soldStr)) {

                let li = document.createElement('li');
                let span = document.createElement('span');
                span.textContent = movieName;
                let strong = document.createElement('strong');
                strong.textContent = `Total amount: ${(ticetsPrice * soldStr).toFixed(2)}`;
                let dellBtn = document.createElement('button');
                dellBtn.addEventListener('click', dellEl)
                dellBtn.textContent = 'Delete';

                li.appendChild(span);
                li.appendChild(strong);
                li.appendChild(dellBtn);

                archSection.appendChild(li);
                movieSection.remove();
            }

        }

        function dellEl(ev) {
            let liSection = ev.target.parentElement;
            liSection.remove();
        }

        
    }
}

