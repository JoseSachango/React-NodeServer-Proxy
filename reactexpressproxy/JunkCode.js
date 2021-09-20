
//React form for App.js
/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));

  }
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Enter your name: </label>
                <input
                  id="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
              </form>
              <p>{this.state.greeting}</p>
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

  }*/

//User selection experiment section
     /*
    if(isAuthenticated){
        API.postUserInfo("/api/user/post",{googleId:user.sub,name:user.name,userType:"jjj"}).then(resultPost=>{
                console.log("Succefully posted user data. This is what was returned: ",resultPost)
            }).catch(errPost=>{
                console.log("There was an error with the posting of a new user: ",errPost)
            })

        API.getUserInfo("/marketplace/api/user/"+user.sub).then(result=>{
            console.log("This is the result of the query for a specific user: ",result)
        }).catch(err=>{
            console.log("There was an error encountered trying to query for a specific user: ",err)
            
        })
        console.log("Conditional worked. Querying user with the following id",user.sub)
    } */
    //JSON.stringify(user,null,2)

     /*axiosinstance.post("/api/user/post",{googleId:user.sub,name:user.name,userType:"jjj"}).then(resultPost=>{
            console.log("Succefully posted user data. This is what was returned: ",resultPost)
          }).catch(errPost=>{
            console.log("There was an error with the posting of a new user: ",errPost)
          }) */
    
        //You most create and axios instance with a base url when using react and axios together
    /*const axios = require("axios")
    const axiosinstance = axios.create({
        baseURL: 'http://localhost:3000'
    }); */
    /*
    
     <Link to="/producer" role="button" className="btn btn-link">
                                    Producer
                                </Link>
    
    */


//API folder

    // Export an object with a "search" method that searches the Giphy API for the passed query
/*export default {
  getUserInfo: function(query) {
    return axios.get(query)
  },
  postUserInfo: function(query,data){
      console.log("This is the data for post user info: ",data)
      return axios.post(query,data)
    
  }
}; */