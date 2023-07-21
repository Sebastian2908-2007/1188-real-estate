import dbConnect from "@/db/config/connection";
import {HotLead} from '@/db/models';
import { NextResponse } from "next/server";



export async function GET() {
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Fetch all HotLead data and populate the associated Situation and HouseInfo data
      const hotLeads = await HotLead.find()
        .populate('situation', 'sellFastStatus openToPayments sellerGoal bestCallTime')
        .populate('houseInfo', 'garageType atticType occupiedStatus basementType lengthOwned listedStatus propertyCondition repairs walkThroughVideo');
  
      return NextResponse.json({ hotLeads }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

export async function POST(request) {
    const { email, phone, address } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new HotLead document with the initial fields
      const newHotLead = new HotLead({
        email,
        phone,
        address,
      });
  
      // Save the new HotLead document to the database
      const savedHotLead = await newHotLead.save();
  
      return NextResponse.json({ hotLead: savedHotLead }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }