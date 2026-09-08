
export function add(n:string):number{

    if(n==""){
        return 0; 
    }

   return n.split(",").reduce((sum,number)=>
    sum + Number(number)
   ,0)

}