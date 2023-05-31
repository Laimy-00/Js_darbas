export class Data {
    constructor() {
        this.loopFunction = this.loopFunction.bind(this);
    }

    loopFunction() {
        this.getData();
    }

    getData() {
        fetch('http://127.0.0.1:8021/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            })
            .then(data => {
                const divTags = document.querySelectorAll('div');
                divTags.forEach(a => a.remove());
                const price = document.createElement("div");
                price.textContent = 'Price - ' + data['price'];
                const mainDoc = document.querySelector('main');
                mainDoc.appendChild(price);
                const hour = document.createElement("div");
                hour.textContent = 'Hour - ' + data['hour'];
                mainDoc.appendChild(hour);
                const priceRating = document.createElement("div");
                if (data['priceRating'] > 15) {
                    priceRating.style.color = 'red';
                }
                else if (data['priceRating'] < 6) {
                    priceRating.style.color = 'green';
                }
                priceRating.textContent = 'Price Rating - ' + data['priceRating'];
                mainDoc.appendChild(priceRating);
            })
            .catch(error => {
                return 0;
            });
    }
}