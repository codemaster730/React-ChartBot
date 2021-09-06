class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
    
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
          this.actionProvider.greet()
        }
        if (lowerCaseMessage.includes("javascript")) {
          this.actionProvider.handleJavascriptList();
        }
    }
  }
  
export default MessageParser;