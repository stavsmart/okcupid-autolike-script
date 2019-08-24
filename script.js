setTimeout(function(){
    $disabled = false;
    if (!$disabled) {
        var r = confirm("Like PPL on this Page");

        if (r == true) {
            var counter = 0;
            setInterval(function(){
                   txt = "You pressed OK!";
                    elems = document.getElementsByClassName("likes-pill-button-inner")
                    for(var i = 0; i< elems.length; i++) {
                        if ( !elems[i].classList.contains("liked") ){
                          counter++;
                          elems[i].click();
                          console.log('liked:' + counter)
                        }
                    }
            }, 100);
        }
    }
},1000);
