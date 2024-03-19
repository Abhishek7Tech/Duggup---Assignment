import {connect} from "../db/mongo";
import { json } from "@sveltejs/kit";

const db =  connect();
export async function GET({params}) {
    console.log("PARAMS", params.userid.slice(1, params.userid.length));
    const userId = params.userid.slice(1, params.userid.length);
    const request = await (await db).collection('userData').findOne({id: +userId})
    // @ts-ignore
    const response = await request;
    return json(response);
}