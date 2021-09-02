import "./App.css";
import Table from "./Table";
import React, { Component } from "react";

class App extends Component {
    state = {
        characters: [
            {
                name: "Charlie",
                // the rest of the data
            },
        ],
    };
    removeCharacter = (index) => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((e, i) => {
                return i !== index;
            }),
        });
    };
    render() {
        const characters = [
            {
                name: "Charlie",
                job: "Janitor",
            },
            {
                name: "Mac",
                job: "Bouncer",
            },
            {
                name: "Dee",
                job: "Aspring actress",
            },
            {
                name: "Dennis",
                job: "Bartender",
            },
        ];

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;
