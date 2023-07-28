import dbConnect from "@/db/config/connection";
import {HotLead} from '@/db/models';
import { NextResponse } from "next/server";


/**this is used to get all hotleads and populate situation and house info and note data*/
export async function GET() {
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Fetch all HotLead data and populate the associated Situation and HouseInfo data
      const hotLeads = await HotLead.find()
        .populate('situation', 'sellFastStatus openToPayments sellerGoal bestCallTime')
        .populate('houseInfo', 'garageType atticType occupiedStatus basementType lengthOwned listedStatus propertyCondition repairs walkThroughVideo')
        .populate('notes'); // Populate all Note data for each HotLead  
      return NextResponse.json({ hotLeads }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

  /**this will be used in user facing form to create the initial hot lead */
export async function POST(request) {
    const { email, phone, address } = await request.json();
    const status = 'new';
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new HotLead document with the initial fields
      const newHotLead = new HotLead({
        email,
        phone,
        address,
        status
      });
  
      // Save the new HotLead document to the database
      const savedHotLead = await newHotLead.save();
  
      return NextResponse.json({ hotLead: savedHotLead }, { status: 200 }); // 200 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }

