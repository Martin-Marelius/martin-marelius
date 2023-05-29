import React, { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const TerminalWindow: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const command = inputValue.trim();
    const newMessage: Message = {
      text: `$ ${command}`,
      isUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (command !== '') {
      executeCommand(command);
    }

    setInputValue('');
  };

  const executeCommand = (command: string) => {
    // Command execution logic
    const outputMessage: Message = {
      text: `Command not found: ${command}`,
      isUser: false,
    };

    // Example commands
    if (command === 'help') {
      outputMessage.text = 'Available commands: command1, command2, command3';
    } else if (command === 'command1') {
      outputMessage.text = 'Executing command 1...';
    } else if (command === 'command2') {
      outputMessage.text = 'Executing command 2...';
    } else if (command === 'command3') {
      outputMessage.text = 'Executing command 3...';
    }

    setMessages((prevMessages) => [...prevMessages, outputMessage]);
  };

  return (
    <div className="bg-black text-white p-4 rounded-lg h-64 overflow-auto">
      <div className="mb-2">
        {messages.map((message, index) => (
          <pre
            key={index}
            className={message.isUser ? 'text-green-400' : 'text-white'}
          >
            {message.text}
          </pre>
        ))}
      </div>
      <div>
        <pre className="text-green-500">$&gt;
        <input
          className="bg-transparent text-white outline-none w-full"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
        />
        </pre>
        
      </div>
    </div>
  );
};

export default TerminalWindow;