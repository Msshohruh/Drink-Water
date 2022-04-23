const bottles = document.querySelectorAll('.bottle')
const water = document.querySelector('.water')
const empty = document.querySelector('.empty')
const emptyTitle = document.querySelector('.empty-title')


// Loop Version for pro
for(let i = 0; i < bottles.length; i++) {
    bottles[i].addEventListener('click', () => {
        remove()
        add(i + 1)
        addRemoveWater(bottles[i], 12.5 * (i+1))
    })
}

// Without Loop Version for undestending
/*
const bottle1 = document.querySelector('.bottle--1')
const bottle2 = document.querySelector('.bottle--2')
const bottle3 = document.querySelector('.bottle--3')
const bottle4 = document.querySelector('.bottle--4')
const bottle5 = document.querySelector('.bottle--5')
const bottle6 = document.querySelector('.bottle--6')
const bottle7 = document.querySelector('.bottle--7')
const bottle8 = document.querySelector('.bottle--8')

bottle1.addEventListener('click', () => {
    remove()
    bottle1.classList.toggle('select-bottle')
    if (bottle1.classList.contains('select-bottle')){
        addWater(12.5)
    } else{
        removeWater(0)
    }
    bottle1.addEventListener('click', () => {
        bottle1.classList.toggle('select-bottle')
        if (bottle1.classList.contains('select-bottle')){
            addWater(12.5)
        } else{
            removeWater(0)
            
        }
    
    })
})

bottle2.addEventListener('click', () => {
    remove()
    bottle1.classList.add('select-bottle')
    bottle2.classList.toggle('select-bottle')
    addRemoveWater(bottle2, 25)
})

bottle3.addEventListener('click', () => {
    remove()
    add(3)
    addRemoveWater(bottle3, 37.5)
})
bottle4.addEventListener('click', () => {
    remove()
    add(4)
    addRemoveWater(bottle4, 50)
})
bottle5.addEventListener('click', () => {
    remove()
    add(5)
    addRemoveWater(bottle5, 62.5)
})
bottle6.addEventListener('click', () => {
    remove()
    add(6)
    addRemoveWater(bottle6, 75)

})
bottle7.addEventListener('click', () => {
    remove()
    add(7)
    // bottle7.classList.toggle('select-bottle')
    addRemoveWater(bottle7, 87.5)

})
bottle8.addEventListener('click', () => {
    remove()
    add(8)
    // bottle8.classList.toggle('select-bottle')
    addRemoveWater(bottle8, 100)

}) */

// Functions
function add(j) {
    for(let i = 1; i < j + 1; i++) {
        document.querySelector(`.bottle--${i}`).classList.add('select-bottle')
    }
}

function remove() {
    for(let i = 1; i < 9; i++) {
        document.querySelector(`.bottle--${i}`).classList.remove('select-bottle')
    }
}

function addWater(i) {
    water.textContent = `${i}%`
    water.style.height = `${i}%`
    emptyTitle.textContent = `${2 - 2*i/100}L`
    empty.style.height = `${100 - i}%`
    if (100 - i == 0){
        empty.classList.add('hidden')
    } else {
        empty.classList.remove('hidden')
    }
}
function removeWater(i) {
    water.textContent = `${i == 0 ? '' : i +'%'}`
    water.style.height = `${i}%`
    emptyTitle.textContent = `${2 - 2*i/100}L`
    empty.style.height = `${100 - i}%`
    if (100 - i == 0){
        empty.classList.add('hidden')
    } else {
        empty.classList.remove('hidden')
    }
}

function addRemoveWater(bottle, i) {
    if (bottle.classList.contains('select-bottle')){
        addWater(i)
    } else{
        removeWater(i - 12.5)
    }
    bottle.addEventListener('click', () => {
        bottle.classList.toggle('select-bottle')
        if (bottle.classList.contains('select-bottle')){
            addWater(i)
        } else{
            removeWater(i - 12.5)
        }
    })
}


