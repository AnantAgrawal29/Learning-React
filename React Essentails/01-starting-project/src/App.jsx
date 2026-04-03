import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Core Concept/Core Concept.jsx";
import TabButton from "./components/Tab Button/Tab Button.jsx";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedState, setSeletedState] = useState(undefined);
  function handleClick(content) {
    setSeletedState(content);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedState === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedState === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedState === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
            <TabButton
              isSelected={selectedState === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
          </menu>
          {!selectedState ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedState]?.title}</h3>
              <p>{EXAMPLES[selectedState]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedState]?.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
