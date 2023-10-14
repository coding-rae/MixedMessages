// Function generates random # between 0 and num 
function generateRandomNum(num){
    return Math.floor(Math.random() * num)
}

//Variables containing lists of strings
const collectiveMessage = {
    affirmationInfo: ['amazing', 'kind', 'special', 'abundant', 'magical'],
    adviceInfo: ['go out and have some fun', 'stop being so hard on yourself', 'treat yourself', 'call a friend', 'clean your space'],
    numInfo: ['1','3','9','11','33' ]
}

//Variable for individual 
const personalMessage = []

//Iterate over object

for (let item in collectiveMessage) {
    let optionId = generateRandomNum(collectiveMessage[item].length)

 // use the object's properties to customize the message being added to personalWisdom  

 switch(item){

    case 'affirmationInfo':
    personalMessage.push(`You are so "${collectiveMessage[item][optionId]}".`)
    break

    case 'adviceInfo':
    personalMessage.push(`You should "${collectiveMessage[item][optionId]}".`)
    break

    case 'numInfo':
    personalMessage.push(`Your lucky number today is "${collectiveMessage[item][optionId]}".`)
    break

    default:
        personalMessage.push('Sorry, we need more info!')
 }
}

//format display of personal message
function formatMessage(message) {

    const formatted = personalMessage.join('/n')
    console.log(formatted)
}

formatMessage(personalMessage);