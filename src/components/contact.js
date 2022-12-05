import React from 'react'
import Card from './card'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const Contact = () => {
    return (
        <div>
            <h1> My Contacts </h1>
            <Card names="Anthony" url="www.anthony.com" contact="+2345454345" img="https://www.google.com" />
            <Card names="Allen" url="www.anthony.com" contact="+23433333333345" img="https://www.google.com" />
            <Card names="Guddy" url="www.anthony.com" contact="+23499999954345" img="https://www.google.com" />
            <h2>Another Section</h2>

            <div>
                <h3> {user.name} </h3>
                <img src={user.imageUrl} alt='' width={user.imageSize} />
            </div>
        </div>

    )
}

export default Contact

// export const GrandParent = () => {
//     return (
//         <div>G Parents </div>
//     )
// }

// export const Parent = () => {
//     return (
//         <div>My Parents </div>
//     )
// }

// export const Child = () => {
//     return (
//         <div> I am Child</div>
//     )
// }