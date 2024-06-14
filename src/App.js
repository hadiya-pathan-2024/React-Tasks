import BgChange from './BgChange';
import BgChangeClass from './BgChangeClass';
import Count from './Count';
function App() {
  const username = "Hadiya";
  return (
    <>
    <h2>Hello {username}</h2>
    <BgChangeClass name="class counter" />
    <Count />
    </>
  );
}

export default App;
