import React from 'react';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Popup from "./components/Popup";

function App() {

    const [lists, setList] = React.useState(['FirstTodoList', 'SecondTodoList'])
    const [listPopup, setListPopup] = React.useState(false)

    const inputList = React.useRef()

    const createNewList = () => {
        if(inputList.current.value === ''){
            throw new Error('input is empty')
        } else {
            setList([...lists, inputList.current.value])
            inputList.current.value = ''
        }
    }

    const deleteList = (idx) => {
        setList(prev => prev.filter(str => str !== prev[idx]))
    }

    const closePopup = () => {
        setListPopup(!listPopup)
    }


  return (
    <div className="App">
      <Header/>
        {
                listPopup
                ?
                <div>
                    <Popup closePop={closePopup}/>
                    <div style={{
                        zIndex: '1000', position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)', display: 'flex',
                        flexDirection: 'column', backgroundColor: 'white',
                        padding: '30px'
                    }}>
                        <h1 style={{fontSize: '24px', color: 'black', textAlign: 'center', marginBottom: '12px'}}>New List Creator</h1>
                        <input type="text" placeholder={'todolistname'} className='popupInput' ref={inputList}/>
                        <button style={{backgroundColor: 'black', padding: '10px', color: 'white'}} onClick={createNewList}>Create</button>
                    </div>
                </div>
                : null
        }
        <div className="container">
            {
                lists.map((list, index) =>
                     <TodoList createNewList={createNewList} deleteList={deleteList} title={list} key={index} idx={index}/>
                )
            }
        </div>
        <button style={{position: 'absolute', top: '72px'}} onClick={() => setListPopup(!listPopup)}>Add new list</button>
    </div>
  );
}

export default App;
