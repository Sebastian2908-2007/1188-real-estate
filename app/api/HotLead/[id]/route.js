import dbConnect from "@/db/config/connection";
import {HotLead,Note,HouseInfo,Situation} from '@/db/models';
import { NextResponse } from "next/server";

/**this route will be second in the get cash offer process after user has filled out initial email,address,and phone data */
export async function PUT(request,{params}) {
    const { id } = params;
    const { firstName, lastName } = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HotLead document by ID
      const existingHotLead = await HotLead.findById(id);
  
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Merge the existing data with the updated fields
      existingHotLead.firstName = firstName || existingHotLead.firstName;
      existingHotLead.lastName = lastName || existingHotLead.lastName;
  
      // Save the updated HotLead document to the database
      const updatedHotLead = await existingHotLead.save();
  
      return NextResponse.json({ hotLead: updatedHotLead }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }
/**this will be used in admin dash to delete a hot lead and all associated data */
  export async function DELETE(request,{params}) {
    const  hotLeadId  = params.id;
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HotLead document by ID
      const existingHotLead = await HotLead.findById(hotLeadId);
      if (!existingHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Delete the associated HouseInfo if it exists
      if (existingHotLead.houseInfo) {
        const deletedHouseInfo = await HouseInfo.findByIdAndDelete(existingHotLead.houseInfo);
      }
  
      // Delete the associated Situation if it exists
      if (existingHotLead.situation) {
        const deletedSituation = await Situation.findByIdAndDelete(existingHotLead.situation);
      }
  
      // Delete the associated Notes if they exist
      if (existingHotLead.notes && existingHotLead.notes.length > 0) {
        try{
        existingHotLead.notes.forEach(note => {
            const deletedNote = Note.findByIdAndDelete({_id:note});
        });
    }catch(e){
        console.log(e);
    }
      }
  
      // Delete the HotLead document itself
      const deletedHotLead = await existingHotLead.deleteOne();
  
      return NextResponse.json({ deletedHotLeadId: deletedHotLead?._id }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }