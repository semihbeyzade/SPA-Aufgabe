const bodyElem = document.querySelector('body')
// #1: Arbeite mit diesem  Promise 

let meinVersprechen = new Promise((resolve, reject) => {
  // um die verschiedene Zustande auszulösen, musst du den wert von istWahr ändern zwischen true und false. 
    let istWahr = true
    setTimeout(function () {
        if (istWahr) {
            resolve('Du hast dein Versprechen gehalten!')
        } else {
            reject("Das lief daneben!")
        }
    }, 1000)
})


// 1. Mit dem Promise arbeiten:

meinVersprechen.then(result => {
    bodyElem.innerHTML = `${result}`
    console.log('Promise :',result)
  })
  .catch(error => console.log(error))


// 2. mit async/await arbeiten 

const asyncAwaitData = async () => {
    try {
      const data = await meinVersprechen
      bodyElem.innerHTML = `${data}`
      console.log('Async/await :', data)
    } catch (err) {
      console.error(err)
    }
  }
  
  asyncAwaitData()
