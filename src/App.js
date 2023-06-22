import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  // fetch('http://localhost:4000/main') // Замените '/api/endpoint' на ваш конечный путь на сервере Express
    const url = 'https://reqbin.com/echo/post/json'; // Замените на свой URL
    // const url = 'http://localhost:4000/main'; // Замените на свой URL

    const data = {
        "Id": 12345,
        "Customer": "John Smith",
        "Quantity": 1,
        "Price": 10.00
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Установите нужный заголовок Content-Type
        },
        body: JSON.stringify(data) // Преобразуйте данные в формат JSON
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Обработка ответа от сервера
            //////////////////////////CONSOLE//////////////////////////
            /// TODO: path: "src/App.js" line "29", time: "1:52:3:788"'
            if( process && process.env.MODE_ENV !== 'production' ){
                const clr1 = 'color: #747678';
                const clr = 'color: #72b8f5';
                console.group( '%c path: "src/App.js", line: "29", time: "1:52:3:788"', clr1);
                console.info('%c data: ', clr, data );
                //console.info('this: ', this );
                //console.table( this );
                console.groupEnd();
            }
            ////////////////////////END CONSOLE////////////////////////
        })
        .catch(error => {
            // Обработка ошибок
            //////////////////////////CONSOLE//////////////////////////
            /// TODO: path: "src/App.js" line "44", time: "1:52:21:442"'
            if( process && process.env.MODE_ENV !== 'production' ){
                const clr1 = 'color: #747678';
                const clr = 'color: #72b8f5';
                console.group( '%c path: "src/App.js", line: "44", time: "1:52:21:442"', clr1);
                console.info('%c error: ', clr, error );
                //console.info('this: ', this );
                //console.table( this );
                console.groupEnd();
            }
            ////////////////////////END CONSOLE////////////////////////
        });

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
