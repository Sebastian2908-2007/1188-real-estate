import dbConnect from "@/db/config/connection";
import {ColdLead} from '@/db/models';
import { NextResponse } from "next/server";

/**create initial coldLead with address*/

export async function POST(request) {
    const { address } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new ColdLead document with the provided address
      const newColdLead = new ColdLead({
        address,
      });
  
      // Save the new ColdLead document to the database
      const savedColdLead = await newColdLead.save();
  
      return NextResponse.json({ coldLead: savedColdLead }, { status: 201 }); // 201 Created
    } catch (error) {
        console.log(error);
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

  export async function GET() {
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Fetch all ColdLead data and populate the associated ColdLeadEmail and ColdLeadPhone data
      const coldLeads = await ColdLead.find()
        .populate('emailAddresses', 'suspectedEmail date') // Populate ColdLeadEmail data with only the emailAddress field
        .populate('phone', 'phone date') // Populate ColdLeadPhone data with only the phoneNumber field
        .populate('houseInfo', 'garageType atticType occupiedStatus basementType lengthOwned listedStatus propertyCondition repairs walkThroughVideo')
        .populate('situation', 'sellFastStatus openToPayments sellerGoal bestCallTime');
  
      return NextResponse.json({ coldLeads }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }