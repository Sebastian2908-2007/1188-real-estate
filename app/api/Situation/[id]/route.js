import dbConnect from "@/db/config/connection";
import {Situation,HotLead} from '@/db/models';
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    const { id } = params;
    const updatedFields = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing Situation document by ID
      const existingSituation = await Situation.findById(id);
  
      if (!existingSituation) {
        return NextResponse.json({ error: 'Situation not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Merge the existing and updated fields to preserve unchanged fields
      const mergedFields = { ...existingSituation._doc, ...updatedFields };
  
      // Update the Situation document
      const updatedSituation = await Situation.findByIdAndUpdate(id, mergedFields, {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators for updates
      });
  
      return NextResponse.json({ situation: updatedSituation }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }
  
  export async function DELETE(request,{params}) {
    const { id } = params;
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing Situation document by ID
      const existingSituation = await Situation.findById(id);
  
      if (!existingSituation) {
        return NextResponse.json({ error: 'Situation not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Delete the Situation document
      await Situation.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'Situation deleted successfully.' }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }


  /*this post Route will be used on client side for creating situations in the user form*/
  export async function POST(request,{params}) {
    const { id } = params;
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
  
      // Find the existing HotLead document by ID and update the situation field
      const existingHotLead = await HotLead.findById(id);
  
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Associate the Situation data with the HotLead
      existingHotLead.situation = savedSituation._id;
  
      // Save the updated HotLead document with the associated Situation data
      await existingHotLead.save();
  
      return NextResponse.json({ hotLead: existingHotLead }, { status: 201 }); // 201 Created
    } catch (error) {
        console.log(error)
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }