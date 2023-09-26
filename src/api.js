// api.js holds api logic and configuration
import axios from 'axios';

// OpenAI API key
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
console.log(apiKey);


// Function to generate code using the GPT API
export async function generateCodeWithAI(inputCode) {
    const prompt = `Generate code to complete the following:\n\n${inputCode}\n\nCode:\n`;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-003/completions',
            {
                prompt,
                max_tokens: 300, // Increase max tokens as needed
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );

        const generatedCode = response.data.choices[0].text.trim();
        return generatedCode;
    } catch (error) {
        console.error('Error generating code with AI:', error.message);
        return 'An error occurred while generating code.';
    }
}
