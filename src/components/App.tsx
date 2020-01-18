import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import QuestPage from '../pages/quest-page/quest-page';
import ResultPage from '../pages/result/result.page';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={QuestPage} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </Router>
  );
};

export default App;
