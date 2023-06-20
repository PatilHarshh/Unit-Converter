var feet = document.getElementById('feet')
var inches = document.getElementById('inches')
var dollor = document.getElementById('dollor')
var inr = document.getElementById('inr')
var meter = document.getElementById('meter')
var mile = document.getElementById('mile')
var kilometer = document.getElementById('kilo')
var meterr = document.getElementById('mit')

feet.addEventListener('input' , function(){
    let f = this.value;
    let i = f *12;
    inches.value = i;
});

inches.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f
    
})

dollor.addEventListener('input', function(){
    let d = this.value;
    let r = d * 81.58;
    inr.value = r;
});

inr.addEventListener('input' , function(){
    let r = this.value;
    let d = r/81.58;
    if(!Number.isInteger(d)){
        d = d.toFixed(2);
    };

    dollor.value = d;
});

meter.addEventListener('input', function(){
    let me = this.value;
    let ce = me / 1609.26;
    if(!Number.isInteger(ce)){
        ce = ce.toFixed(4);
    };
    mile.value = ce;

});

mile.addEventListener('input', function(){
    let ce = this.value;
    let me = ce * 1609.26;
    meter.value = me;

})
kilometer.addEventListener('input', function(){
    let kil = this.value;
    let metr = kil * 1000;
    meterr.value =metr;
})

meterr.addEventListener('input' , function(){
    let metr = this.value;
    let kil = metr/81.58;
    if(!Number.isInteger(kil)){
        kil = kil.toFixed(2);
    };

    kilometer.value = d;
});