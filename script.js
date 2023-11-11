let input = document.getElementById('sms')
let MainSms = document.getElementById('MainSms')
const AddSMS = ()=>{
    let div = document.createElement('div')
        let UserSms = document.createElement('span')
         UserSms.innerHTML = input.value
         div.className = 'SMSDIV'
         div.append(UserSms)
         MainSms.append(div)
         input.value=''
         UserSms.className = 'SMS'
         
         if(UserSms == "Привет"){
            // let div = document.createElement('div')
            // let textBot = document.createElement('span')
            // textBot.innerHTML = "Здраствуйте чем могу помочь"
            
            //  MainSms.append(div)
            //  div.append(textBot)
            alert('csds')
        }
}
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        AddSMS()
    }
  });

//   switch(UserSms.value){
//       case "Привет":
//         let div = document.createElement('div')
//         let textBot = document.createElement('span')
//         textBot.innerHTML = "Здраствуйте чем могу помочь"
//         div.append(textBot)
//          MainSms.append(div)
//   }

