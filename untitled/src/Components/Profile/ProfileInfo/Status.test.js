import React from "react";
import {create} from "react-test-renderer";
import Status from "./Status";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<Status status={"Edward"}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("Edward")
    })
    test("after creation span should be displayed", () => {
        const component = create(<Status status={"Edward"}/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Edward")
    })
    test("input should be displayed instead of span", () => {
        const component = create(<Status status={"Edward"}/>)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Edward")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<Status status={"Edward"} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})



