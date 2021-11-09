animals = [
    {
      name: 'Bibi',
      age: 8,
      type: 'dog'
    },
    {
      name: 'Lia',
      age: 2,
      type: 'dog'
    },
    {
      name: 'Ri',
      age: 8,
      type: 'cat'
    },
    {
      name: 'Ca',
      age: 3,
      type: 'dog'
    },
  ];
  let procuracachorro = animals.filter((animal) => {
    return animal.age>7;
  })
  console.log(procuracachorro);