import { ReactWidget } from '@jupyterlab/apputils';
import React from 'react';
// Side Panel containing search form
export class SidePanel extends ReactWidget {
    constructor() {
        super();
        this.state = {
            isA1Visible: true,
            isA2Visible: false,
            isA3Visible: false,
            isA4Visible: false,
            isEntriesVisible: false,
            isSummaryVisible: false,
            isEntry1Selcted: false,
            isEntry2Selcted: false,
            isReplicating: false,
            isInjected: false
        };
        this.id = "sidepanel:id";
        this.title.label = "Rucio Web App";
    }
    render() {
        return (React.createElement("div", { className: "side-panel-content-wrapper" },
            React.createElement("div", { className: (this.state.isA1Visible) ? 'Accordion active' : 'Accordion' },
                React.createElement("div", { className: 'AccordionTab' }, "1. Select Data Identifiers (DIDs)"),
                (this.state.isA1Visible)
                    ? (React.createElement("div", { className: 'AccordionPanel' },
                        React.createElement("p", null, "Please start by entering a DID or DID wildcard and search for either containers or datasets. Then select the requested DIDs. Please so not use a trailing '/' for containers."),
                        React.createElement("form", null,
                            React.createElement("label", null, "Data Pattern: "),
                            " ",
                            React.createElement("input", { type: "text", placeholder: 'scope:name...' }),
                            " ",
                            React.createElement("br", null),
                            React.createElement("input", { type: 'radio', name: 'data-radio', id: 'container' }),
                            " ",
                            React.createElement("label", null, "Container"),
                            React.createElement("input", { type: 'radio', name: 'data-radio', id: 'dataset' }),
                            " ",
                            React.createElement("label", null, "Dataset"),
                            " ",
                            React.createElement("br", null),
                            React.createElement("button", { onClick: (e) => { e.preventDefault(); this.state.isEntriesVisible = true; this.update(); } }, "Search")),
                        (this.state.isEntriesVisible)
                            ? (React.createElement("div", { className: 'EntriesWrapper' },
                                React.createElement("h3", null, "Entries"),
                                React.createElement("table", { cellPadding: '0', cellSpacing: '0' },
                                    React.createElement("thead", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", null, "Name"))),
                                    React.createElement("tbody", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", { style: (this.state.isEntry1Selcted) ? { background: '#ADD8E6' } : {}, onClick: () => { this.state.isEntry1Selcted = !this.state.isEntry1Selcted; this.update(); } }, "Entry-1 goes here...")),
                                        React.createElement("tr", null,
                                            React.createElement("td", { style: (this.state.isEntry2Selcted) ? { background: '#ADD8E6' } : {}, onClick: () => { this.state.isEntry2Selcted = !this.state.isEntry2Selcted; this.update(); } }, "Entry-2 goes here...")))),
                                React.createElement("button", { onClick: (e) => { e.preventDefault(); this.state.isA2Visible = true; this.state.isA1Visible = false; this.update(); } }, "Continue")))
                            : ''))
                    : ''),
            React.createElement("div", { className: (this.state.isA2Visible) ? 'Accordion active' : 'Accordion' },
                React.createElement("div", { className: 'AccordionTab' }, "2. Select Rucio Storage Elements (RSEs)"),
                (this.state.isA2Visible)
                    ? (React.createElement("div", { className: 'AccordionPanel' },
                        React.createElement("p", null, "Please enter an RSE or an RSE expression."),
                        React.createElement("form", null,
                            React.createElement("label", null, "RSE (expression)"),
                            React.createElement("select", null,
                                React.createElement("option", { selected: true, disabled: true }, "RSE"),
                                React.createElement("option", null, "LOCALGROUPDISK")),
                            React.createElement("button", { onClick: (e) => { e.preventDefault(); this.state.isA3Visible = true; this.state.isA2Visible = false; this.update(); } }, "Check Quota"))))
                    : ''),
            React.createElement("div", { className: (this.state.isA3Visible) ? 'Accordion active' : 'Accordion' },
                React.createElement("div", { className: 'AccordionTab' }, "3. Options"),
                (this.state.isA3Visible)
                    ? (React.createElement("div", { className: 'AccordionPanel' },
                        React.createElement("p", null, "Please select/enteryour wanted options then submit your rule request."),
                        React.createElement("form", null,
                            React.createElement("label", null, "Grouping: "),
                            React.createElement("input", { type: 'radio', name: 'group', id: 'all' }),
                            " ",
                            React.createElement("label", null, "All"),
                            React.createElement("input", { type: 'radio', name: 'group', id: 'dataset' }),
                            " ",
                            React.createElement("label", null, "Dataset"),
                            React.createElement("input", { type: 'radio', name: 'group', id: 'none' }),
                            " ",
                            React.createElement("label", null, "None"),
                            React.createElement("br", null),
                            React.createElement("label", null, "Lifetime (in days). Leave empty for infinite lifetime"),
                            React.createElement("input", { type: 'text' }),
                            React.createElement("br", null),
                            React.createElement("label", null, "Copies"),
                            React.createElement("input", { type: 'text', defaultValue: '1' }),
                            React.createElement("br", null),
                            React.createElement("button", { onClick: (e) => { e.preventDefault(); this.state.isA4Visible = true; this.state.isA3Visible = false; this.update(); } }, "Continue"))))
                    : ''),
            React.createElement("div", { className: (this.state.isA4Visible) ? 'Accordion active' : 'Accordion' },
                React.createElement("div", { className: 'AccordionTab' }, "4. Summary"),
                (this.state.isA4Visible)
                    ? (React.createElement("div", { className: 'AccordionPanel' },
                        React.createElement("p", null, "This request will create rules for the following DIDs:"),
                        React.createElement("table", { cellPadding: '0', cellSpacing: '0' },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "DID"),
                                    React.createElement("td", null, "Copies"),
                                    React.createElement("td", null, "Files"),
                                    React.createElement("td", null, "Size"),
                                    React.createElement("td", null, "Requested Size"),
                                    React.createElement("td", null, "State"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "Entry-1 goes here..."),
                                    React.createElement("td", null, "1"),
                                    React.createElement("td", null, "40"),
                                    React.createElement("td", null, "27.32 GB"),
                                    React.createElement("td", null, "27.32 GB"),
                                    React.createElement("td", { style: { fontWeight: 'bold' } }, (this.state.isReplicating) ? React.createElement("span", { style: { color: 'orange' } }, "Replicating")
                                        : (this.state.isInjected) ? React.createElement("span", { style: { color: 'green' } }, "Inject") : '')),
                                React.createElement("tr", null,
                                    React.createElement("td", null, "Entry-2 goes here..."),
                                    React.createElement("td", null, "1"),
                                    React.createElement("td", null, "14"),
                                    React.createElement("td", null, "5.14 GB"),
                                    React.createElement("td", null, "5.14 GB"),
                                    React.createElement("td", { style: { fontWeight: 'bold' } }, (this.state.isReplicating) ? React.createElement("span", { style: { color: 'orange' } }, "Replicating")
                                        : (this.state.isInjected) ? React.createElement("span", { style: { color: 'green' } }, "Inject") : ''))),
                            React.createElement("tfoot", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "Total"),
                                    React.createElement("td", null, "2"),
                                    React.createElement("td", null, "54"),
                                    React.createElement("td", null, "30.23 GB"),
                                    React.createElement("td", null, "30.23 GB"),
                                    React.createElement("td", { style: { fontWeight: 'bold' } }, (this.state.isReplicating) ? React.createElement("span", { style: { color: 'orange' } }, "Replicating")
                                        : (this.state.isInjected) ? React.createElement("span", { style: { color: 'green' } }, "Inject") : '')))),
                        React.createElement("br", null),
                        React.createElement("p", null, "The rules will replicate to one of the following RSEs:"),
                        React.createElement("table", { cellPadding: '0', cellSpacing: '0' },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "RSE"),
                                    React.createElement("td", null, "Remaining Quota"),
                                    React.createElement("td", null, "Total Quota"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null, "LOCALGROUPDISK"),
                                    React.createElement("td", null, "117.22 TB"),
                                    React.createElement("td", null, "125.34 TB")))),
                        React.createElement("button", { onClick: (e) => {
                                e.preventDefault();
                                this.state.isReplicating = true;
                                setTimeout(() => {
                                    this.state.isReplicating = false;
                                    this.state.isInjected = true;
                                    this.state.isSummaryVisible = true;
                                    this.update();
                                }, 2500);
                                this.update();
                            } }, "Submit Request")))
                    : ''),
            (this.state.isSummaryVisible)
                ? (React.createElement("div", { className: 'Summary' },
                    React.createElement("p", null, "Your rule(s) have been created."),
                    React.createElement("table", { cellPadding: '0', cellSpacing: '0' },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "ID"),
                                React.createElement("td", null, "DID"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "id_1"),
                                React.createElement("td", null, "Entry-1 goes here...")),
                            React.createElement("tr", null,
                                React.createElement("td", null, "id_2"),
                                React.createElement("td", null, "Entry-2 goes here..."))))))
                : ''));
    }
}
