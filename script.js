function updateClock() {
    const now = new Date();
    
    // Update Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    
    // Update Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initial Call
  