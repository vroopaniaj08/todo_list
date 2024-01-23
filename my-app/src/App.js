import logo from './logo.svg';
import './App.css';

function btnclick(){
  let task = document.querySelector("#task").value;
  let todo = document.querySelector("#todo");
  let list = document.createElement("div");
  list.innerHTML = task;
  todo.appendChild(list);
}
function App() {
  return (
    <div>
      <input type = "text" id = "task" placeholder = "Enter your task"/>
      <br/>
      <button onClick = {btnclick}>click me</button>
      <br/>
      <div id = "todo" ></div>
    </div>

  );
}

export default App;
