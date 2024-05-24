document.getElementById('homeBox').addEventListener('mouseenter', function() {
    this.classList.add('animated');
});

setTimeout(function() {
    document.getElementById('homeBox').addEventListener('mouseleave', function() {
        this.classList.remove('animated');
    });
}, 1000);

// Function to handle mouseleave event
function handleMouseLeave() {
    const messageHeading = document.createElement('h4');
    messageHeading.textContent = "I have something to say";

    // Append the heading to the body
    document.body.appendChild(messageHeading);

    // Move the button container from display none to block
    document.querySelector(".container").style.display = "block";

    // Add click event listener to the existing button
    document.getElementById('pickupLineBtn').addEventListener('click', fetchPickupLine);
}

// Function to fetch a random pickup line from the API
async function fetchPickupLine() {
    try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
       let p=document.querySelector("#para");
       p.innerText=data.quote; // Display the pickup line
    } catch (error) {
        console.error('Error fetching pickup line:', error);
        alert('Failed to fetch pickup line. Please try again later.');
    }
}

// Add event listener to the homeBox element
document.getElementById('homeBox').addEventListener('mouseleave', handleMouseLeave);
