const heading= React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [
    React.createElement("h1",{id:"heading"},"Welcome To ReactJs"),
     React.createElement("h2",{id:"heading"},"Welcome To Learning")
    ]
    )],
    [React.createElement("div",{id:"child2"},
        [
        React.createElement("h1",{id:"heading"},"Welcome To ReactJs"),
         React.createElement("h2",{id:"heading"},"Welcome To Learning")
        ]
        )]

);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);