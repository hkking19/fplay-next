// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SortOrder, Types } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Session, unstable_getServerSession } from 'next-auth';
import  "utils/connect-db"
import Room from '../../../../models/Room';
import { authOptions } from '../../auth/[...nextauth]';

export default async (
  _req: NextApiRequest,
  _res: NextApiResponse<any>
) => {

 const {
  method,
  body,
  cookies,
  query
 } = _req;
 const {room_id} = query;

 const session: Session|null = await unstable_getServerSession(_req, _res, authOptions);
//  console.log("Cookies: ", cookies)

 switch(method) {
  // @route     PUT api/room/update_room/:room_id
  // @desc      Get a Room's Complete Info
  // @access    Private
  // @status    Works Properly
  case "PUT": {
   if(!session) return _res.status(401).redirect("/login")
   const {update_room} = body;

   const {
    name,
    desc,
    active,
    is_private,
    ...rest
   } = update_room;

   const update_room_obj : {
    name?: string,
    desc?: string,
    active?: boolean,
    is_private?: boolean,
   } = {};

   if(name) update_room_obj.name = name;
   if(desc) update_room_obj.desc = desc;
   if(active) update_room_obj.active = active;
   if(is_private) update_room_obj.is_private = is_private;
   
   try {
    
    const room = 
     await Room
     .findById(room_id)
     .populate("owned_by");
    
    if(!room)
    throw new Error("No Room Found!!")

    if(room.owned_by.email !== session.user?.email)
    throw new Error("You Cannot Update the Details");

    const updated_room = await Room.findByIdAndUpdate(room_id, update_room_obj);

    return _res.status(200).json({
     type: "Success",
     data: {
      updated_room
     }
    })
   } catch(error) {
    return _res.status(500).json({
     type:"Failure",
     error,
    })
   }
  }
  default: {
   _res.setHeader("Allow", ["PUT"]);
			return _res
				.status(405)
				.json({ 
     type: "Failure",
     error: {
      message: `Method ${method} is Not Allowed for this API.`
     }
     })
  }
 }
}