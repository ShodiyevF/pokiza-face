const text = document.querySelector('.text')
const file = document.querySelector('.file')
const btn = document.querySelector('.button')
const imgform = document.querySelector('.test')

// imgform.addEventListener('submit', (e) => {
//     // e.preventDefault()
// })

btn.onclick = (e) => {
    (async () => {
        const res = await fetch('http://localhost:4000/worker/post', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                fish: text.value
            })
        })
        const data = await res.json()
        if(data.status == 200){
            // alert(`Qo'shildi`)
        }
    })()

    // text.value = ''
    // file.value = ''
}