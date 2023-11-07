const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const predefinedResponses = {
  'hello': 'How can I help you?',
  'what is swe363': 'it is Web Engineering & Development',
  'who teaches swe363 in term 231': 'OMAR HAMMAD	',
  'exit': 'Goodbye! Have a great day!'
};

function chat() {
  rl.question('You: ', (userInput) => {
    const userMessage = userInput.toLowerCase().trim();
    
    if (userMessage === 'exit' || userMessage === 'quit') {
      console.log('Chatbot: Goodbye! Have a great day!');
      rl.close();
      return;
    }

    if (predefinedResponses[userMessage]) {
      console.log(`Chatbot: ${predefinedResponses[userMessage]}`);
    } else {
      console.log("Chatbot: I'm sorry, I don't understand that.");
    }

    chat(); 
  });
}

console.log('Simple Chatbot - Type "exit" or "quit" to end the conversation.');
chat(); 