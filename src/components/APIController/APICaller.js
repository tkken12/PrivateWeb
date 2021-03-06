import { APIInstance } from "components/APIController/AxiosInit"

const baseURL = process.env.REACT_APP_NODE_ADDRESS_V1
const RequestType = {
    GET   : ( args ) => APIInstance.get   ( baseURL + args["reqPath"], { params: args["query"] } ),
    POST  : ( args ) => APIInstance.post  ( baseURL + args["reqPath"], { params: args["query"] } ),
    PUT   : ( args ) => APIInstance.put   ( baseURL + args["reqPath"], { params: args["query"] } ),
    DELETE: ( args ) => APIInstance.delete( baseURL + args["reqPath"], { params: args["query"] } ),
}

const APICaller = async( args ) => { 
    try{ return await RequestType[args.method](args) }
    catch (err) { 
        console.log("failed to get ", err)
        return []
    }
}

export default APICaller