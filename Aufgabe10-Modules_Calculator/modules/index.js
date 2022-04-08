// Your code goes here!
import {modulo,percentage,percentageOf,difference} from './percentage.js'
 
import  {calculateAspectRatio} from './aspect-ratio.js'
  

 


const moduloFormElem = document.querySelector('#modulo-form')
const modulo1Elem = document.querySelector('#modulo_1')
const modulo2Elem = document.querySelector('#modulo_2')
const moduloResultElem = document.querySelector('#modulo_result')



moduloFormElem.addEventListener('change', ()=> {
    moduloResultElem.value = modulo(Number(modulo1Elem.value), Number(modulo2Elem.value))

})



const percentageForm = document.getElementById('percentage-form')
const percentage1Elem = document.getElementById('percentage_1')
const percentage2Elem = document.getElementById('percentage_2')
const percentageResultElem = document.getElementById('percentage_result')


percentageForm.addEventListener('input', ()=>{
   percentageResultElem.value = percentage(Number(percentage1Elem.value), Number(percentage2Elem.value))
})


const percentageOfFormElem = document.querySelector('#percentageOf-form')
const percentageOf1Elem = document.querySelector('#percentageOf_1')
const percentageOf2Elem = document.querySelector('#percentageOf_2')
const percentageOfResultElem = document.querySelector('#percentageOf_result')



percentageOfFormElem.addEventListener('change', ()=> {
    percentageOfResultElem.value = percentageOf(Number(percentageOf1Elem.value), Number(percentageOf2Elem.value))

})



const differenceFormElem = document.querySelector('#difference-form')
const difference1Elem = document.querySelector('#difference_1')
const difference2Elem = document.querySelector('#difference_2')
const differenceResultElem = document.querySelector('#difference_result')



differenceFormElem.addEventListener('change', ()=> {
    differenceResultElem.value = difference(Number(difference1Elem.value), Number(difference2Elem.value))

})


const aspectForm = document.querySelector('#aspect-form')
const ratio1Elem = document.querySelector('#ratio_1')
const ratio2Elem = document.querySelector('#ratio_2')
const ratio1ResultWidth = document.querySelector('#ratio_result-width')
const ratio2ResultHeight = document.querySelector('#ratio_result-height')

/* ratio1Elem.addEventListener('change', ()=>{
    
    document.querySelector('#ratio_result-width').value = 0
    document.querySelector('#ratio_result-height').value = 0
     
})

ratio2Elem.addEventListener('change', ()=>{
    
    document.querySelector('#ratio_result-width').value = 0
    document.querySelector('#ratio_result-height').value = 0

})
 */
ratio1ResultWidth.addEventListener('change', ()=>{

    ratio2ResultHeight.value = calculateAspectRatio(ratio1Elem.value, ratio2Elem.value, ratio1ResultWidth.value, 'w')

})


ratio2ResultHeight.addEventListener('change', ()=>{

    ratio1ResultWidth.value = calculateAspectRatio(ratio1Elem.value, ratio2Elem.value, ratio2ResultHeight.value, 'h')

})




















