
import {it,describe,expect} from "vitest"
import {add} from "../index.js"
describe("string kattas",()=>{

    
    it("should return 0 if the string is empty",()=>{
        expect(add("")).toBe(0)
    })

    it("should return the number if only a single number is passed",()=>{
        expect(add("1")).toBe(1)
    })

    it("must add the values seperated by a comma",()=>{
        expect(add("1,2")).toBe(3)
    })
    it("add values of multiple comma seperated values",()=>{
        expect(add("1,2,3")).toBe(6)
    })
})