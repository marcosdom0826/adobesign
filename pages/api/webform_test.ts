import { handleWebForm } from "@/utils/handleWebForm";
import { NextApiRequest, NextApiResponse } from "next";
const fs = require('fs');

// File path of the JSON file
const filePath = './data.json';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    fs.readFile(filePath, 'utf8', (err:any, data:any) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(200).json({"status":"failed"});
        }
        // Parse JSON data
        try {
            const jsonData = JSON.parse(data);
            handleWebForm(jsonData).then(()=>{console.log("complete")}).catch((e)=>{
                console.log(e)
                console.log("error")
            })
            return res.status(200).json({"status":"passed"});
        } catch (error) {
            return res.status(200).json({"status":"failed"});
        }
    });
    
}
