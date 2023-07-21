import dbConnect from "@/db/config/connection";
import {HouseInfo} from '@/db/models';
import { NextResponse } from "next/server";


/**this route will be used to update HouseInfo documents that are attached to coldLeads the HouseInfo id comes over in the request */
export async function PUT(request) {
    const { id, ...updatedFields } = await request.json();
    console.log(id);
    console.log(updatedFields);
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HouseInfo document by ID
      const existingHouseInfo = await HouseInfo.findById(id);
  
      if (!existingHouseInfo) {
        return NextResponse.json({ error: 'HouseInfo not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Update the fields of the existing HouseInfo with the new values from the request
      Object.assign(existingHouseInfo, updatedFields);
  
      // Save the updated HouseInfo document to the database
      const updatedHouseInfo = await existingHouseInfo.save();
  
      return NextResponse.json({ updatedHouseInfo }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }