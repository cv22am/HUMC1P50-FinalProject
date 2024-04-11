function myFunction() {
    document.getElementById('backgroundMusic').pause();
    
    
  }
  


  window.onload = function() {
    // Play the background music
    document.getElementById('backgroundMusic').play();
  };
  
  


// Check if the background music is playing
if (!document.getElementById('backgroundMusic').paused) {
  // Music is playing
} else {
  // Music is paused or stopped
}




document.addEventListener("DOMContentLoaded", function() {
    var notification = document.getElementById("notification");
    notification.onclick = function() {
      // Handle click event here
      window.location.href = "/HUMC1P50-FinalProject/Portfolio/portfolio.html";
    };
  });
  

  function showNotification() {
    var notification = document.getElementById("notification");
    gsap.to(notification, { duration: 0.5, top: 0, opacity: 1, ease: "power2.out" });
  }
  

  