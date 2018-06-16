$(document).ready(function(){
    $('.counter').countUp();
    
});

var options = {  
    useEasing: false,
      useGrouping: false,
      separator: ',',
      decimal: '.',
};
var demo = new CountUp('czesne', 0, 360, 0, 2.5, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
}

var demo = new CountUp('osoby', 0, 8960, 0, 3.5, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
}

var demo = new CountUp('metro', 0, 5, 0, 4.5, options);
if (!demo.error) {  
    demo.start();
} else {  
    console.error(demo.error);
}


