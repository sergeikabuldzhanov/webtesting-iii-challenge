// Test away!
//Import tested component
import Dashboard from './Dashboard';
//Import dependencies
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//Set up cleanup in afterEach
afterEach(rtl.cleanup);

//Set up repetitive stuff in beforeEach
let wrapper;
let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
}
let Open = () =>{
    return wrapper.queryByText('Open');
}
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}

beforeEach(()=>{
    wrapper = rtl.render(<Dashboard/>);
});

describe('Dashboard component on initial render', ()=>{

    it('Matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
      });
    
    it('renders "Unlocked" text node', ()=>{
        expect(Unlocked()).toBeInTheDocument();
        expect(Unlocked()).toBeVisible();
    })
    
    it('renders "LockGate" text node', ()=>{
        expect(LockGate()).toBeInTheDocument();
        expect(LockGate()).toBeVisible();
        expect(LockGate()).toBeDisabled();
    })
    
    it('renders "CloseGate" text node', ()=>{
        expect(CloseGate()).toBeInTheDocument();
        expect(CloseGate()).toBeVisible();
    })
    
    it('renders "Open" text node', ()=>{
        expect(Open()).toBeInTheDocument();
        expect(Open()).toBeVisible();
    })

})    

describe('Dashboard component after clicking on close gate', ()=>{
    it('Matches snapshot after closing the gate', ()=>{
        rtl.fireEvent.click(CloseGate());
        expect(wrapper.container).toMatchSnapshot;
    })
    it('Clicking close makes it disappear', ()=>{
        expect(CloseGate()).toBeVisible();
        rtl.fireEvent.click(CloseGate());
        expect(CloseGate()).toBeNull();
    })
    it('renders "Closed" text node', ()=>{
        rtl.fireEvent.click(CloseGate());
        expect(Closed()).toBeInTheDocument();
        expect(Closed()).toBeVisible();
    })
})