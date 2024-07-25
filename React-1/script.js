//this is React Type which is easy 

const container = (
  <div className="container" id="container">
    <section>
      <p>The library for web and native user interfaces</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>
    <section>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
      </form>
    </section>
  </div>
)

console.log(container);

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)
  
      


 //This is Js type 

/*const h2=document.createElement('h2')

h2.innerText='Hello Js'

document.querySelector('#root').append(h2)

console.dir(h2)*/



//JSX----->JavaScript XML

//const h2=<h2>Hello JSX</h2>

//const root=ReactDOM.createRoot(document.querySelector('#root'))

//root.render(h2)

//console.log(h2);


/*const user ='Shahnawaz'

const h2=<h2>Hello {user}</h2>

const root=ReactDOM.createRoot(document.querySelector('#root'))

root.render(h2)*/



