const input = document.querySelector('.inputRev')
const button = document.querySelector('.btnRev')
const revBlocks = document.querySelector('.reversed')

const createReversed = () => {
    if (!input.value.trim()) return alert('Please enter a valid input')

    const div = document.createElement('div')
    const revText = document.createElement('h3')


    revText.innerHTML = input.value.split("").reverse().join("")
    input.value = ''
    revBlocks.prepend(div)
    div.append(revText)
}
input.onkeydown = (e) =>{
    if( e.key === 'Enter' ) createReversed()
}
button.onclick = () => createReversed()


const arr = []
const input2 = document.querySelector(".inputText")
const button2 = document.querySelector(".btnText")
const newArr = document.querySelector('.newArr')
const button3 = document.querySelector('.toText')


const addArr = () =>{
    if(!input2.value.trim())return alert('Please enter a valid input')

    const div = document.createElement('div')
    const text = document.createElement('h3')


    text.innerHTML = input2.value
    arr.push(text.innerHTML)
    input2.value = ''
    newArr.prepend(div)
    div.append(text)
}
input2.onkeydown = (e) =>{
    if( e.key === 'Enter' ) addArr()
}
button2.onclick = () => addArr()
console.log(arr)

let textP = document.createElement("p")
const text = document.querySelector('.text')
text.append(textP)

button3.onclick = () => {
    if(arr.length === 0) return alert('Please enter some sentences')
    arr.forEach((e) => {
        textP.innerText += e + ". "
    })
    console.log(text)

}