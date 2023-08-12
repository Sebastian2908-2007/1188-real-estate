import dbConnect from "@/db/config/connection";
import {HouseInfo,ColdLead} from '@/db/models';
import { NextResponse } from "next/server";

/**here we use a cold lead id from the query params to add a newly created houseInfo document to an existing coldlead document */
export async function POST(request,{params}) {
    const coldLeadId  = params.id;
    const houseInfoData = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new HouseInfo document
      const newHouseInfo = new HouseInfo(houseInfoData);
  
      // Save the new HouseInfo document to the database
      const savedHouseInfo = await newHouseInfo.save();
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(coldLeadId);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Add the ID of the newly created HouseInfo document to the houseInfo field of the ColdLead
      existingColdLead.houseInfo = savedHouseInfo._id;
  
      // Save the updated ColdLead document with the new houseInfo
      await existingColdLead.save();
  
      return NextResponse.json({ houseInfo: savedHouseInfo }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }