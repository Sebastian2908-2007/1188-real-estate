import dbConnect from "@/db/config/connection";
import {Situation} from '@/db/models';
import { NextResponse } from "next/server";

export async function POST(request) {
    const { sellFastStatus, openToPayments, sellerGoal, bestCallTime } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new Situation document
      const newSituation = new Situation({
        sellFastStatus,
        openToPayments,
        sellerGoal,
        bestCallTime,
      });
  
      // Save the new Situation document to the database
      const savedSituation = await newSituation.save();
  
      return NextResponse.json({ situation: savedSituation }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }
  
  export async function GET(request) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find all Situation documents
      const situations = await Situation.find({});
  
      return NextResponse.json({ situations }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }