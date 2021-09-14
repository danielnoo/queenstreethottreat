const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};


// Our code goes here:

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);

  const type = document.querySelector('input[name=beverage]:checked').value
  console.log(type);

  const price = document.querySelector('input[name=price]:checked').value
  console.log(price);

  const choice = drinks[type]
  console.log(choice);
  let options = [];
  for(let i = 0; i < choice.length; i++) {
    const store = choice[i];

    if(store.price === price) {
      options.push(store);
    }
  }

  let randSelection = Math.floor(Math.random() * options.length);

  console.log(options[randSelection].title);
})
