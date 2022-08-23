const animals = [{
        name: 'Mujair',
        type: 'fish'
    },
    {
        name: 'Loki',
        type: 'cat'
    },
    {
        name: 'Nemo',
        type: 'fish'
    },
    {
        name: 'Jerry',
        type: 'cat'
    },
    {
        name: 'Tom',
        type: 'dog'
    },
    {
        name: 'Spike',
        type: 'dog'
    },
    {
        name: 'Tanuki',
        type: 'musang'
    }
]


// expected return 
// data = {
//   fish: [
//     {
//       name: 'Mujair',
//       type: 'fish'
//     },
//     {
//       name: 'Nemo',
//       type: 'fish'
//     },
//   ],
//   cat: [
//     {
//       name: 'Jerry',
//       type: 'cat'
//     },
//     {
//       name: 'Loki',
//       type: 'cat'
//     },
//   ],
//   dog: [
//     {
//       name: 'Tom',
//       type: 'dog'
//     },
//     {
//       name: 'Spike',
//       type: 'dog'
//     }
//   ]
// }

const getObjectBeingCategorized = (animals) => {
    // put logic here
    const data = {};
    for (const animal of animals) {
        if (!data.hasOwnProperty(animal.type))
            data[animal.type] = [animal]
        else data[animal.type].push(animal);
    }
    return data;
}

console.log(getObjectBeingCategorized(animals))
