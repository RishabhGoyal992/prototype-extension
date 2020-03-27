import {
    ReactWidget
} from '@jupyterlab/apputils'

import React from 'react';


// Side Panel containing search form
export class SidePanel extends ReactWidget {
    private state = {
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
    }

    constructor() {
        super();
        this.id = "sidepanel:id";
        this.title.label = "Rucio Web App";
        
    }
 
    render() {        
        return (
            <div className="side-panel-content-wrapper">
                <div className={(this.state.isA1Visible) ? 'Accordion active' : 'Accordion'}>
                    <div className='AccordionTab'>
                        1. Select Data Identifiers (DIDs)
                    </div>
                    {
                        (this.state.isA1Visible)
                        ? (<div className='AccordionPanel'>
                            <p>
                                Please start by entering a DID or DID wildcard and search for either containers or datasets. Then select the requested DIDs. Please so not use a trailing '/' for containers.
                            </p>
                            <form>
                                <label>Data Pattern: </label> <input type="text" placeholder='scope:name...' /> <br />
                                <input type='radio' name='data-radio' id='container' /> <label>Container</label>
                                <input type='radio' name='data-radio' id='dataset' /> <label>Dataset</label> <br />
                                <button onClick={(e) => {e.preventDefault(); this.state.isEntriesVisible = true; this.update();}}>Search</button>
                            </form>
                            {
                                (this.state.isEntriesVisible)
                                ? (<div className='EntriesWrapper'>
                                    <h3>Entries</h3>
                                    <table cellPadding='0' cellSpacing='0'>
                                        <thead>
                                            <tr>
                                                <td>Name</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={(this.state.isEntry1Selcted) ? {background: '#ADD8E6'} : {}} onClick={() => {this.state.isEntry1Selcted=!this.state.isEntry1Selcted; this.update();}}>Entry-1 goes here...</td>
                                            </tr>
                                            <tr>
                                                <td style={(this.state.isEntry2Selcted) ? {background: '#ADD8E6'} : {}} onClick={() => {this.state.isEntry2Selcted=!this.state.isEntry2Selcted; this.update();}}>Entry-2 goes here...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button onClick={(e) => {e.preventDefault(); this.state.isA2Visible = true; this.state.isA1Visible = false; this.update();}}>Continue</button>
                                </div>)
                                : ''
                            }
                        </div>)
                        : ''
                    }
                </div>
                <div className={(this.state.isA2Visible) ? 'Accordion active' : 'Accordion'}>
                    <div className='AccordionTab'>
                        2. Select Rucio Storage Elements (RSEs)
                    </div>
                    {
                        (this.state.isA2Visible)
                        ? (<div className='AccordionPanel'>
                            <p>Please enter an RSE or an RSE expression.</p>
                            <form>
                                <label>RSE (expression)</label> 
                                <select>
                                    <option selected disabled>RSE</option>
                                    <option>LOCALGROUPDISK</option>
                                </select>
                                <button onClick={(e) => {e.preventDefault(); this.state.isA3Visible = true; this.state.isA2Visible = false; this.update();}}>Check Quota</button>
                            </form>
                        </div>)
                        : ''
                    }
                </div>
                <div className={(this.state.isA3Visible) ? 'Accordion active' : 'Accordion'}>
                    <div className='AccordionTab'>
                        3. Options
                    </div>
                    {
                        (this.state.isA3Visible)
                        ? (<div className='AccordionPanel'>
                            <p>Please select/enteryour wanted options then submit your rule request.</p>
                            <form>
                                <label>Grouping: </label>
                                <input type='radio' name='group' id='all' /> <label>All</label>
                                <input type='radio' name='group' id='dataset' /> <label>Dataset</label>
                                <input type='radio' name='group' id='none' /> <label>None</label>
                                <br />
                                <label>Lifetime (in days). Leave empty for infinite lifetime</label>
                                <input type='text' />
                                <br />
                                <label>Copies</label>
                                <input type='text' defaultValue='1' />
                                <br />
                                <button onClick={(e) => {e.preventDefault(); this.state.isA4Visible = true; this.state.isA3Visible = false; this.update();}}>Continue</button>
                            </form>
                        </div>)
                        : ''
                    }
                </div>
                <div className={(this.state.isA4Visible) ? 'Accordion active' : 'Accordion'}>
                    <div className='AccordionTab'>
                        4. Summary
                    </div>
                    {
                        (this.state.isA4Visible)
                        ? (<div className='AccordionPanel'>
                            <p>This request will create rules for the following DIDs:</p>
                            <table cellPadding='0' cellSpacing='0'>
                                <thead>
                                    <tr>
                                        <td>DID</td>
                                        <td>Copies</td>
                                        <td>Files</td>
                                        <td>Size</td>
                                        <td>Requested Size</td>
                                        <td>State</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Entry-1 goes here...</td>
                                        <td>1</td>
                                        <td>40</td>
                                        <td>27.32 GB</td>
                                        <td>27.32 GB</td>
                                        <td style={{fontWeight: 'bold'}}>
                                            {
                                                (this.state.isReplicating) ? <span style={{color: 'orange'}}>Replicating</span>
                                                : (this.state.isInjected) ? <span style={{color: 'green'}}>Inject</span> : ''
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Entry-2 goes here...</td>
                                        <td>1</td>
                                        <td>14</td>
                                        <td>5.14 GB</td>
                                        <td>5.14 GB</td>
                                        <td style={{fontWeight: 'bold'}}>
                                            {
                                                (this.state.isReplicating) ? <span style={{color: 'orange'}}>Replicating</span>
                                                : (this.state.isInjected) ? <span style={{color: 'green'}}>Inject</span> : ''
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Total</td>
                                        <td>2</td>
                                        <td>54</td>
                                        <td>30.23 GB</td>
                                        <td>30.23 GB</td>
                                        <td style={{fontWeight: 'bold'}}>
                                            {
                                                (this.state.isReplicating) ? <span style={{color: 'orange'}}>Replicating</span>
                                                : (this.state.isInjected) ? <span style={{color: 'green'}}>Inject</span> : ''
                                            }
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <br />
                            <p>The rules will replicate to one of the following RSEs:</p>
                            <table cellPadding='0' cellSpacing='0'>
                                <thead>
                                    <tr>
                                        <td>RSE</td>
                                        <td>Remaining Quota</td>
                                        <td>Total Quota</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LOCALGROUPDISK</td>
                                        <td>117.22 TB</td>
                                        <td>125.34 TB</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.state.isReplicating = true;
                                setTimeout(() => {
                                    this.state.isReplicating = false;
                                    this.state.isInjected = true;
                                    this.state.isSummaryVisible = true;
                                    this.update();
                                }, 2500);
                                this.update();
                                }}>
                                Submit Request
                            </button>
                        </div>)
                        : ''
                    }
                </div>
                {
                    (this.state.isSummaryVisible)
                    ? (<div className='Summary'>
                        <p>Your rule(s) have been created.</p>
                        <table cellPadding='0' cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>DID</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id_1</td>
                                    <td>Entry-1 goes here...</td>
                                </tr>
                                <tr>
                                    <td>id_2</td>
                                    <td>Entry-2 goes here...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                    : ''
                }
            </div>
        )
    }

}