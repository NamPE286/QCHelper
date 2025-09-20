document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.getElementById('test');
    
    if (testButton) {
        testButton.addEventListener('click', function() {
            // Add your click handler logic here
            console.log('Test button clicked');
        });
    }
});