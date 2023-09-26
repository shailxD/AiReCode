import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/code-input.css';
import '../styles/components/about.css';
import '../styles/components/howitwork.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import { customCursor } from './utils/custom-cursor';
import darkMode from './utils/dark-mode'; 
import mobileNav from './utils/mobile-nav';
import { setupAutoResizeTextarea } from './utils/auto-resize';
import lazyLoading from './utils/lazy-loading';

customCursor(); // add a custom cursor
darkMode(); // theme toggling function
mobileNav(); // mobile menu toggle
setupAutoResizeTextarea(); // call the auto-resize setup function
lazyLoading(); //lazy laoding for optimisations

// main api logic

// Import necessary functions and modules responsible for making API requests
import { generateCodeWithAI } from './api';

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const codeInput = document.getElementById('code-input');
    const chatContainer = document.getElementById('chat-container');

    // Event listener for the "Generate" button click
    generateButton.addEventListener('click', async () => {
        try {
            const inputCode = codeInput.value;
            const generatedCode = await generateCodeWithAI(inputCode);

            // Explicitly set the height to 50px to reset it
            codeInput.style.height = '100px';

            // Create a new chat bubble element
            const chatBubble = document.createElement('div');
            chatBubble.classList.add('chat-bubble');

            // Create a paragraph element for the input code
            const inputCodePara = document.createElement('p');
            inputCodePara.innerHTML = `<strong>Input:</strong> ${escapeHtml(inputCode)}`;
            
            // Create a paragraph element for the generated code
            const generatedCodePara = document.createElement('p');
            generatedCodePara.innerHTML = `<strong>Generated Code:</strong>`;
            
            // Create a <code> element for the generated code text
            const codeElement = document.createElement('code');
            codeElement.textContent = generatedCode;
            
            // Append the code element to the generated code paragraph
            generatedCodePara.appendChild(codeElement);
            
            // Append both paragraphs to the chat bubble
            chatBubble.appendChild(inputCodePara);
            chatBubble.appendChild(generatedCodePara);

            // Insert the chat bubble at the beginning of the chat container
            chatContainer.insertBefore(chatBubble, chatContainer.firstChild);

            // Clear the input field
            codeInput.value = '';
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

// Function to escape HTML special characters
function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>"']/g, function (match) {
        switch (match) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&#039;';
            default:
                return match;
        }
    });
}
