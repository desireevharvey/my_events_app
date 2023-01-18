const db = require('./')

const seed_event = [
    {
        image: 'https://i.postimg.cc/0Nb5rN5w/drake.jpg',
        performer: 'Drake',
        date: '03/11/2023',
        time: '7:00 pm',
        venue: 'Norva',
        user: '63c85418a2b440566067b527'
    },
    {
        image: 'https://i.postimg.cc/KYwGTy4s/wizkid.jpg',
        performer: 'Wizkid',
        date: '03/03/2023',
        time: '8:00 pm',
        venue: 'Norva',
        user: '63c85418a2b440566067b527'
    },
    {
        image: 'https://i.postimg.cc/rpBTmCYB/dojacat.jpg',
        performer: 'Doja Cat',
        date: '02/21/2023',
        time: '8:00 pm',
        venue: 'Norva',
        user: '63c85418a2b440566067b527'
    },
    {
        image: 'https://i.postimg.cc/V6X8brxd/rihanna.jpg',
        performer: 'Rihanna',
        date: '02/22/2023',
        time: '7:00 pm',
        venue: 'Norva',
        user: '63c85418a2b440566067b527'
    },
]


// const seed_user = [
//     {
//         username: "lildesicakes",
//         password: "123"
//     }
// ]


db.Event.deleteMany({}, (err, events) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all events')

        db.Event.insertMany(seed_event, (err, events) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', events.length, "events")
            }
        })
    }
})


// db.User.deleteMany({}, (err, Users) => {
//     if (err) {
//         console.log('Error occured in remove', err)
//     } else {
//         console.log('Removed all users')

//         db.User.insertMany(seed_user, (err, Users) => {
//             if (err) {
//                 console.log('Error occured in insertMany', err)
//             } else {
//                 console.log('Created', Users.length, "users")
//                 process.exit()
//             }
//         })
//     }
// })