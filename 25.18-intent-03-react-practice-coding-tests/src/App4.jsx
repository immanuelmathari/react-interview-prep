/* Build an accordion component that displays a list of vertically stacked sections that each contains a title and a content snippet. Some HTML is provided for you as example contents along with a chevron icon.
Requirements
- By default, all sections are collapsed and hidden from the view. 
- Clicking on a section title toggles the contents. 
    - if the section is collapsed, the section will be expanded and the contents displayed
    - if the section is expanded, the section will be collapsed and the contents be hidden. 
- the sections are independent from each other
Notes
- focus of this question is on functionality, not the styling. Dont spend too much time on writing custom CSS.
- You may modify the markup (eg adding IDs, data attributes, replacing some tags etc) and use client-side rendering instead.
- you may want to think of ways to improve user experience of the application and implement them (you get bonus credit for doing that during interviews).
*/

import { ChevronDown } from "lucide-react";
import { useState } from "react";

/*
export default function App4() {
    return (
        <div>
            <div>
                <div>
                    HTML {' '}
                    <span aria-hidden={true} />
                    <ChevronDown />
                </div>
                <div>
                    The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.
                </div>
            </div>
            <div>
                <div>
                    CSS {' '}
                    <span aria-hidden={true} className="accordion-icon" />
                    <ChevronDown />
                </div>
                <div>
                    Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.
                </div>
            </div>
            <div>
                <div>
                    JavaScript{' '}
                    <span aria-hidden={true} className="accordion-icon" />
                    <ChevronDown />
                </div>
                <div>
                    JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.
                </div>
            </div>
        </div>
    );
}
    */

const sections = [
    {
        title : "HTML",
        content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        title: "CSS",
        content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML"
    },
    {
        title: "JavaScript",
        content: "JavaScript, often described as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS"
    },
];

export default function App4()
{
    // an object whose key is the index of the mapping and value the boolean value 0 or 1 to show if closed or open
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        // remember that openSections is an object so the body setOpenSections returns an object directly. else without the () before the {} its interprated as a function body not an object
        // the second part is called 
        // my-learning | NOTE
        // computed property names
        // [1] : !prev[1]
        // what was the previous value of key one, if it was true, now false
        setOpenSections((prev) => ({
            ...prev,
            [index] : !prev[index],
        }));
    };

    return (
        <div className="max-w-md mx-auto mt-8 space-y-2">
            {/* time to map sections */}
            {sections.map((section, index) => {
                // what is the value of the openSection object at key of index is it 0 (isClosed) or 1 (isOpen)?
                const isOpen = openSections[index];
                return (
                    <div key={index} className="border rounded-lg p-3 transition-all duration-300">
                        <button onClick={() => toggleSection(index)}
                                aria-expanded={isOpen}
                            >
                                <span className="fon-medium">{section.title}</span>
                                <ChevronDown className={`w-5 h-5 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                                />
                        </button>
                        {/* Content */}
                        {isOpen && (
                            <div className="mt-2 text-gray-600 text-sm transition-opacity duration-600">
                                {section.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
