const messages = [
    "Hi there! How's your day going?",
    "Hey! It's going pretty well, thanks for asking.",
    "That's great to hear! What do you enjoy doing in your free time?",
    "I love hiking and trying out new recipes. How about you?",
    "I enjoy painting and playing guitar.",
    "Painting sounds fun! What type of art do you usually create?",
    "I mostly do landscapes and abstract art.",
    "That sounds beautiful! I'd love to see some of your work sometime.",
    "Sure, I can share some photos with you later.",
    "That would be great! By the way, do you have any pets?",
    "Yes, I have a dog named Max. He's a golden retriever.",
    "Golden retrievers are so cute! I have a cat named Luna.",
    "Cats are awesome too! How old is Luna?",
    "She's about 3 years old. Still very playful.",
    "That's adorable! Pets really bring so much joy into our lives.",
    "Do you have any favorite movies or TV shows?",
    "I'm a big fan of sci-fi movies and mystery series.",
    "Nice! Have you watched the latest season of Stranger Things?",
    "Not yet, but it's on my list. What about you?",
    "I've seen it, and it's fantastic!",
    "I'll definitely check it out soon. Thanks for the recommendation!",
    "You're welcome! Let me know what you think after watching it.",
    "I'll be sure to do that. So, what's your favorite food?",
    "I'm a fan of Italian cuisine. Pizza and pasta are my go-to dishes.",
    "Italian food is delicious! I enjoy cooking it too.",
    "That's great! Do you have any favorite recipes?",
    "I make a mean spaghetti carbonara. It's my specialty.",
    "Sounds delicious! Maybe you can cook it for me sometime.",
    "I'd love to! We'll have a pasta night at my place.",
    "Count me in! I'm looking forward to it.",
    "Me too. It'll be fun!",
    // Add more unique messages here
    "What's your favorite place you've traveled to?",
    "I loved my trip to Japan. The culture and food were amazing!",
    "Japan is on my bucket list. What did you enjoy most about it?",
    "I enjoyed exploring Tokyo and Kyoto, especially the temples and gardens.",
    "That sounds incredible! I hope to visit Japan someday.",
    "You should definitely go if you get the chance. It's an unforgettable experience.",
    "I'll keep that in mind! Have you ever tried skydiving?",
    "Yes, I went skydiving last year. It was exhilarating!",
    "Wow, that must have been an adrenaline rush! How was the feeling of freefalling?",
    "It was both terrifying and thrilling at the same time. I felt alive!",
    "I admire your bravery. Skydiving is definitely on my bucket list.",
    "You should try it at least once. It's an experience like no other.",
    "I'll gather up the courage and do it someday. Maybe we can go together!",
    "That sounds like a plan! We'll conquer our fears together.",
    "I'm looking forward to it! So, do you have any siblings?",
    "Yes, I have a younger sister. She's currently studying abroad.",
    "That's nice! Do you two get along well?",
    "Most of the time, yes. We have our occasional disagreements, but we're close.",
    "Having siblings can be a blessing. It's good to have someone to share life with.",
    "Absolutely! Family is important to me.",
    "Do you have any plans for the upcoming weekend?",
    "I'm thinking of going on a hiking trip with some friends. How about you?",
    "I'm planning to visit a new art exhibition in town. I'm excited to see some inspiring works.",
    "That sounds like a wonderful way to spend the weekend. Enjoy the exhibition!",
    "Thank you! I hope you have a great time hiking with your friends.",
    "Thanks! I'm sure it'll be a refreshing adventure.",
    "Let's catch up next week and share our weekend experiences!",
    "That sounds like a plan. Looking forward to it!",
     "Hey, you should try out this investment thing? www.investmentrise.com/freindurl",
     "Hi there! How's your day going?",
    "Hey! It's going pretty well, thanks for asking.",
    "That's great to hear! What do you enjoy doing in your free time?",
    "I love hiking and trying out new recipes. How about you?",
    "I enjoy painting and playing guitar.",
    "Painting sounds fun! What type of art do you usually create?",
    "I mostly do landscapes and abstract art.",
    "That sounds beautiful! I'd love to see some of your work sometime.",
    "Sure, I can share some photos with you later.",
    "That would be great! By the way, do you have any pets?",
    "Yes, I have a dog named Max. He's a golden retriever.",
    "Golden retrievers are so cute! I have a cat named Luna.",
    "Cats are awesome too! How old is Luna?",
    "She's about 3 years old. Still very playful.",
    "That's adorable! Pets really bring so much joy into our lives.",
    "Do you have any favorite movies or TV shows?",
    "I'm a big fan of sci-fi movies and mystery series.",
    "Nice! Have you watched the latest season of Stranger Things?",
    "Not yet, but it's on my list. What about you?",
    "I've seen it, and it's fantastic!",
    "I'll definitely check it out soon. Thanks for the recommendation!",
    "You're welcome! Let me know what you think after watching it.",
    "I'll be sure to do that. So, what's your favorite food?",
    "I'm a fan of Italian cuisine. Pizza and pasta are my go-to dishes.",
    "Italian food is delicious! I enjoy cooking it too.",
    "That's great! Do you have any favorite recipes?",
    "I make a mean spaghetti carbonara. It's my specialty.",
    "Sounds delicious! Maybe you can cook it for me sometime.",
    "I'd love to! We'll have a pasta night at my place.",
    "Count me in! I'm looking forward to it.",
    "Me too. It'll be fun!",
    // Add more unique messages here
    "What's your favorite place you've traveled to?",
    "I loved my trip to Japan. The culture and food were amazing!",
    "Japan is on my bucket list. What did you enjoy most about it?",
    "I enjoyed exploring Tokyo and Kyoto, especially the temples and gardens.",
    "That sounds incredible! I hope to visit Japan someday.",
    "You should definitely go if you get the chance. It's an unforgettable experience.",
    "I'll keep that in mind! Have you ever tried skydiving?",
    "Yes, I went skydiving last year. It was exhilarating!",
    "Wow, that must have been an adrenaline rush! How was the feeling of freefalling?",
    "It was both terrifying and thrilling at the same time. I felt alive!",
    "I admire your bravery. Skydiving is definitely on my bucket list.",
    "You should try it at least once. It's an experience like no other.",
    "I'll gather up the courage and do it someday. Maybe we can go together!",
    "That sounds like a plan! We'll conquer our fears together.",
    "I'm looking forward to it! So, do you have any siblings?",
    "Yes, I have a younger sister. She's currently studying abroad.",
    "That's nice! Do you two get along well?",
    "Most of the time, yes. We have our occasional disagreements, but we're close.",
    "Having siblings can be a blessing. It's good to have someone to share life with.",
    "Absolutely! Family is important to me.",
    "Do you have any plans for the upcoming weekend?",
    "I'm thinking of going on a hiking trip with some friends. How about you?",
    "I'm planning to visit a new art exhibition in town. I'm excited to see some inspiring works.",
    "That sounds like a wonderful way to spend the weekend. Enjoy the exhibition!",
    "Thank you! I hope you have a great time hiking with your friends.",
    "Thanks! I'm sure it'll be a refreshing adventure.",
    "Let's catch up next week and share our weekend experiences!",
    "That sounds like a plan. Looking forward to it!",
     "Hey, you should try out this investment thing? www.investmentrise.com/freindurl"
    // Add more unique messages here
];
  
function addMessage(message, className) {
    const chatMessages = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(className);
    messageElement.innerHTML = `
        <div class="message-text">
            ${message}
        </div>
    `;
    chatMessages.appendChild(messageElement);
    // Smoothly scroll to the bottom of the chat container
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function animateMessages() {
    let delay = 0;
    messages.forEach((message, index) => {
        const className = index % 2 === 0 ? "other" : "self";
        setTimeout(() => {
            addMessage(message, className);
            gsap.fromTo('.message:last-child', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            
            // Check if this is the last message
            if (index === messages.length - 1) {
                // Cut to black without fading
                document.body.style.backgroundColor = "#000";
                // Hide the chat container
                const chatContainer = document.querySelector('.chat-container');
                chatContainer.style.display = 'none';
                // Start second animation after chat animation completes
                animateTimePassing();
            }
        }, delay);
        delay += 3000 * Math.exp(-index / 10); // Adjust timing here
    });
}



window.onload = animateMessages;