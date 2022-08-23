import axios from "axios";

    const myList = [ ];
    const sortedList = []

    const getData = async () => {
        await axios.get('https://dummyjson.com/carts').
        then(resp => {
            resp.data.carts.forEach(item => {
                item.products.forEach(product => {
                    myList.push(product.title);
                    sortedList.push({
                        price: product.price,
                        title: product.title
                    })
                })
            });
            sortedList.sort((a, b) => a.price - b.price);
            console.log(sortedList);
            console.log(myList);
        }
        );
    }

getData();