// This is where your JS goes!

fetch('https://cs571.org/api/s24/ice/chili', {
    headers: {
        'X-CS571-ID':
            'bid_fa_bb0bba617230837b1191c58d3ef68928dc448afd429cc0000459a20d5988fff7', // You may hardcode your Badger ID instead.
    },
})
.then((res) => {
    console.log(res.status, res.statusText);
    if (res.status === 200) {
        return res.json();
    } else {
        throw new Error();
    }
})
.then((data) => {
    console.log(data);
    console.log('This is 5* review');
    let review = data.reviews;
    let filter_review = review.filter((t) =>t.rating === 5).map((t)=>t.txt);
    let recipe = data.recipe
    let inst = recipe.map((i)=>i.split(":")[0])
    console.log(inst)
    const ing = data.ingredients;
    console.log(Object.keys(ing).map((t)=>ing[t].amount + (ing[t].unit ?? "") + " " + ing[t]))
    console.log(filter_review);
})
.catch((err) => {
    alert(
        'Uh oh! Something went wrong. Are you logged in with your Badger ID?'
    );
});
