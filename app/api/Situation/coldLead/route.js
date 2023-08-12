import dbConnect from "@/db/config/connection";
import {Situation} from '@/db/models';
import { NextResponse } from "next/server";


/**here we are updating a situation that will be attached to a cold lead we are getting the situation id from the request
 * this will be used in admin dash
*/
export async function PUT(request) {
    const { id, ...updatedFields } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing Situation document by ID
      const existingSituation = await Situation.findById(id);
  
      if (!existingSituation) {
        return NextResponse.json({ error: 'Situation not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Update the fields of the existing Situation with the new values from the request
      Object.assign(existingSituation, updatedFields);
  
      // Save the updated Situation document to the database
      const updatedSituation = await existingSituation.save();
  
      return NextResponse.json({ updatedSituation }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }