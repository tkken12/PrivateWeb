import { APIInstance } from "components/APIController/AxiosInit"

const RequestType = {
    GET   : ( args ) => APIInstance.get   ( args["reqPath"], { params: args["query"] } ),
    POST  : ( args ) => APIInstance.post  ( args["reqPath"], { params: args["query"] } ),
    PUT   : ( args ) => APIInstance.put   ( args["reqPath"], { params: args["query"] } ),
    DELETE: ( args ) => APIInstance.delete( args["reqPath"], { params: args["query"] } ),
}

const APICaller = async( args ) => { 
    try{ 
        const res = await RequestType[args.Method](args)
        return res["data"]

    } catch (err) { 
        console.log("failed to get ", err)
        return []
    }
}

export default APICaller