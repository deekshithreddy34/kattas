
import {it,describe,expect} from "vitest"
import {add} from "../index.js"
describe("string kattas",()=>{

    
    it("should return 0 if the string is empty",()=>{
        expect(add("")).toBe(0)
    })
})