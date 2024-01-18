//nav.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// clock
 function startTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    var time = h + ":" + m + ":" + s; 
    document.getElementById("Demo").innerHTML = time;
    setTimeout(startTime,1000)
  }
  startTime();

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  // stop watch
  function stopWatch() {
    var dateNew = new Date();
    var h = dateNew.getHours();
    var m = dateNew.getMinutes();
    var s = dateNew.getSeconds();
    var ms = dateNew.getMilliseconds();

    m = checkTime(m);
    s = checkTime(s);
    ms = checkTime(ms);
    var timeNew = h + ":" + m + ":" + s + ":" + ms; 
    document.getElementById("Demo1").innerHTML = timeNew;
    setTimeout(stopWatch,1000)
  }
  stopWatch();

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  
   