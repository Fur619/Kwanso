import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import ListTask from "./Component/listTask";
import CreateTask from "./Component/createTask";
import BulkDelete from "./Component/bulkDelete";
import NotFound from "./Component/notFound";
import { StateProvider } from "./Component/stateProvider";

class App extends React.Component {
  // componentDidMount() {
  //   localStorage.setItem(
  //     "data",
  //     JSON.stringify([
  //       { id: 1, task: "My first Task" },
  //       {
  //         id: 2,
  //         task: "My Second Task  ",
  //       },
  //       { id: 3, task: "My Third Task" },
  //       { id: 4, task: "My Fourth Task" },
  //       { id: 5, task: "My Fifth Task" },
  //     ])
  //   );
  // }

  render() {
    return (
      <Switch>
        {/* <StateProvider> */}
        <Route path="/list-tasks" component={ListTask}></Route>
        <Route path="/create-task" component={CreateTask}></Route>
        <Route path="/bulk-delete" component={BulkDelete}></Route>
        {/* </StateProvider> */}
        <Redirect from="/" exact to="/list-tasks"></Redirect>
        <Route path="/notFound" component={NotFound}></Route>
        <Redirect to="/notFound"></Redirect>
      </Switch>
    );
  }
}

export default App;
