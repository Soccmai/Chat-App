import { ChatEngine } from 'react-chat-engine';
import './App.css'

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = "0e5871fe-dadb-4a7d-8b0f-37a36a505f47";

function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App
