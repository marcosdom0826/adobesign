import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return GET(req,res)
  } else {
    return POST(req,res)
  }
}


function GET(req: NextApiRequest, res: NextApiResponse){
  const headers = req.headers
  const clientid = headers['x-adobesign-clientid']
  return res.status(200).json({xAdobeSignClientId:clientid})
}

function POST(req: NextApiRequest, res: NextApiResponse){
  const body = JSON.parse(req.body)
  console.log(body)
  return res.status(200).json({ error: "Error transforming image" })
}