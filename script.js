function getDateTime() {
        var now     = new Date();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds();    
        if(hour > 12) {
             switch (hour) {
                     case 13:
                                hour = 1;
                                break;
                     case 14:
                                hour = 2;
                                break;
                     case 15:
                                hour = 3;
                                break;
                     case 16:
                                hour = 4;
                                break
                     case 17:
                                hour = 5;
                                break;
                     case 18:
                                hour = 6;
                                break;
                     case 19:
                                hour = 7;
                                break;
                     case 20:
                                hour = 8;
                                break;
                     case 21:
                                hour = 9;
                                break;
                     case 22:
                                hour = 10;
                                break;
                     case 23:
                                hour = 11;
                                break;
                     case 24:
                                hour = 12;
                                break;
        }
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }
        var dateTime = hour+':'+minute+':'+second+'s';   
        return dateTime;
    }

    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("time").innerHTML = currentTime;
        document.querySelector("title").innerHTML = currentTime;
    }, 1000);
