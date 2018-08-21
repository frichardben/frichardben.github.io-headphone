function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
  }
  
  // Proper browser alert
  function isIE() {
    ua = navigator.userAgent;
    // MSIE used to detect old browsers and Trident used to newer ones
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }
  
  if (isIE()){
      alert('Please use a proper browser');
  }