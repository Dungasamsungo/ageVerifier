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
                img.setAttribute('src' ,'baby.m.png')
            }else if(yage < 12){
                //Child
                img.setAttribute('src' ,'8yrs.m.png')
            }else if (yage < 20){
                 //teen
                 img.setAttribute('src' ,'teen.m.png')
            }else if (yage < 50){
                //adult
                img.setAttribute('src' ,'adult.m.png')
            }else{
                //elderly
                img.setAttribute('src' ,'elderly.m.png')
            }
            
        }else if (ysex[1].checked){
            gender = 'Female'
            if(yage >= 0 && yage < 8){
                //infant
                img.setAttribute('src', 'baby.f.png')
            }else if(yage < 12){
                //Child
                img.setAttribute('src', '8yrs.f.png')
            }else if (yage < 20){
                 //teen
                 img.setAttribute('src', 'teen.f.png')
            }else if (yage < 50){
                //adult
                img.setAttribute('src', 'adult.f.png')
            }else{
                //elderly
                img.setAttribute('src', 'elderly.f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Dictected ${gender} aged ${yage}`
        res.appendChild(img)

    }

}