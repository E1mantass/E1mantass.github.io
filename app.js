const convertForm = document.querySelector('form')
const yearInput = document.querySelector('input')
const result = document.querySelector('#result')

convertForm.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault();
    document.getElementById('output').textContent = `${calculateYear(yearInput.value)}`
    convertForm.classList.add('hide')
    result.classList.remove('hide')
})
document.querySelector('#resubmit').addEventListener('click', (e) =>{
    convertForm.classList.remove('hide')
    result.classList.add('hide')
})

function calculateYear(year){
    const century = Math.ceil(year/100)

    if(century > 0){
        if(century % 10 == 1){
            return century + 'st Century'
        }
        else if(century % 10 == 2){
            return century + 'nd Century'
        }
        else if(century % 10 == 3){
            return century + 'rd Century'
        }
        else{
            return century + 'th Century'
        }
    }
    else{
        return 'Wrong input'
    }
}