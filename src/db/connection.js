import { connect } from "mongoose";

export default function conn(){
    connect(process.env.URL_DB)
    .then(_ => {console.log("connect")} )
    .catch(err =>{console.log("error:" + err)} )
}