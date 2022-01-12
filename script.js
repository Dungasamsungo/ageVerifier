function verify(){
    
    var date = new Date()
    var ayear = date.getFullYear()
    var fage = window.document.getElementById('txtage')
    var res = window.document.getElementById('res') 
    if(fage.length == 0 || fage.value ==0 || Number(fage.value)> ayear){
        window.alert('[ERROR] Verify your data and try again')
    }else{
        var ysex = document.getElementsByName('radsex')
        var yage = ayear - Number(fage.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','photo')
        if(ysex[0].checked){
            gender = 'Male'
            if(yage >= 0 && yage < 8){
                //infant
                img.setAttribute('src' ,'photo_baby_m.png')
            }else if(yage < 12){
                //Child
                img.setAttribute('src' ,'photo_8yrs_m.png')
            }else if (yage < 20){
                 //teen
                 img.setAttribute('src' ,'photo_teen_png')
            }else if (yage < 50){
                //adult
                img.setAttribute('src' ,'photo_adult_m.png')
            }else{
                //elderly
                img.setAttribute('src' ,'photo_elderly_m.png')
            }
            
        }else if (ysex[1].checked){
            gender = 'Female'
            if(yage >= 0 && yage < 8){
                //infant
            }else if(yage < 12){
                //Child
            
            }else if (yage < 20){
                 //teen
            }else if (yage < 50){
                //adult
            }else{
                //elderly
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detected ${gender} aged ${yage}`
        res.appendChild(img)

    }

}