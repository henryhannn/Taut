import React from "react";

const App = () => (
    <div>
        <header>
            <h1>Taut</h1>
            <GreetingContainer />
        </header>
    
        <Route path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;