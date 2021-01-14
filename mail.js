// console.log(`__________1__________`)
// let perso1 = {
//     nom : 'Renders',
//     prenom : 'Natchez',
//     age : 25,
//     taille : '177cm',
// }
// console.log(perso1)
// console.log(`__________2__________`)
// let perso2 = {
//     nom : 'Lecrit',
//     prenom : 'Lyse',
//     age : 25,
//     taille : '161cm',
// }
// console.log(perso2)
// console.log(`__________3__________`)
// let a = prompt('entrez votre taille')
// let perso3 = {
//     nom : perso1.nom,
//     prenom : 'Kiwy',
//     age : perso2.age,
//     taille : a,
// }
// console.log(perso3)
// console.log(`__________4__________`)
// let perso4 = {
//     nom : 'Renders',
//     prenom : 'Cash',
//     age : 30,
//     taille : '30cm',
//     saluer(){
//         console.log(`Coucou ${perso2.prenom}`)
//     }
// }
// console.log(perso4)
// perso4.saluer()
// console.log(`__________5__________`)
// let perso5 = {
//     nom : 'Doe',
//     prenom : 'Jhon',
//     age : 45,
//     taille : '190cm',
//     presenter(){
//         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
//     }
// }
// console.log(perso5)
// perso5.presenter()
// console.log(`__________6__________`)
// let perso6 = {
//     nom : 'Spencer',
//     prenom : 'Hastings',
//     age : 100,
//     changeAge(){
//         let a = parseInt(prompt('entrez votre age'))
//         this.age = a
//         alert(`${this.nom} ${this.prenom} a ${this.age} ans `)
//     }
// }
// console.log(perso6)
// perso6.changeAge()
// console.log(perso6)
// clet perso1 = {
//     prenom : 'Natchez',
//     age : 25,
// }
// console.log(perso1)

// let perso2 = {
//     prenom : 'Lyse',
//     age : 25,
// }
// console.log(perso2)

// let perso3 = {
//     prenom : 'Kiwy',
//     age : 5,
// }
// console.log(perso3)

// let voleur = {
//     prenom : null,
//     age : null,
//     usurpation(){
//         let a = null
//         this.prenom = perso1.prenom
//         this.age = perso1.age
//         perso1.prenom = a
//         perso1.age = a
//     }
// }
// console.log(voleur)
// voleur.usurpation()
// console.log("Le voleur passe a l'acte")
// console.log(perso1)
// console.log(voleur)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(`__________8__________`)
let francois = {
    panier : [`tomate`,`laitue`,`brocoli`,`choux`,`haricot`,],
    dérober(){
        a = getRandomInt(5)
        this.panier.push(sergio.panier[a])
        sergio.panier.splice(a,1)
        b = getRandomInt(4)
        this.panier.push(sergio.panier[b])
        sergio.panier.splice(b,1)
    }
}
console.log(francois)
let sergio = {
    panier : [`banane`,`pomme`,`fraise`,`cerise`,`poire`,],
}
console.log(sergio)
francois.dérober()
console.log(francois)
console.log(sergio)
