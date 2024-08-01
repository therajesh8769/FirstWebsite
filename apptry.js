document.getElementById('homeBox').addEventListener('mouseenter', function() {
    this.classList.add('animated');
    h2.innerText="I LOVE U Soooo much";
    h2.style.color='red';
   
});

let h2=document.querySelector("#h2");
    document.getElementById('homeBox').addEventListener('mouseleave', function() {
        this.classList.remove('animated');
        h2.innerText="Baby please don't leave my heart";
        h2.style.color='brown'
    });


// Function to handle mouseleave event

    
    // Append the heading to the body
    

    // Move the button container from display none to block
    document.querySelector(".container").style.display = "block";

    // Add click event listener to the existing button
    document.getElementById('pickupLineBtn').addEventListener('click', fetchPickupLine);


// Function to fetch a random pickup line from the API
async function fetchPickupLine() {
    try {
        const response = await fetch('https://pebble-pickup-api.herokuapp.com/lines/rando');
        const data = await response.json();
       let p=document.querySelector("#para");
       p.innerText=data.content; // Display the pickup line
    } catch (error) {
        console.error('Error fetching pickup line:', error);
        alert('Failed to fetch pickup line. Please try again later.');
    }
}

// Add event listener to the homeBox element
