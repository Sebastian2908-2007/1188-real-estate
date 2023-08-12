import dbConnect from "@/db/config/connection";
import {ColdLead,ColdLeadEmail,Situation,HouseInfo,ColdLeadPhone,Note} from '@/db/models';
import { NextResponse } from "next/server";


  /**this route will be used to update first and last name fields along with status and address if needed */
  export async function PUT(request,{params}) {
    const { id } = params;
    const updatedFields = await request.json();
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(id);
  
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Update the fields of the existing ColdLead with the new values from the request
      if (updatedFields.firstName !== undefined) {
        existingColdLead.firstName = updatedFields.firstName;
      }
      if (updatedFields.lastName !== undefined) {
        existingColdLead.lastName = updatedFields.lastName;
      }
      if (updatedFields.status !== undefined) {
        existingColdLead.status = updatedFields.status;
      }
      if (updatedFields.address !== undefined) {
        existingColdLead.address = updatedFields.address;
      }
  
      // Save the updated ColdLead document to the database
      const updatedColdLead = await existingColdLead.save();
  
      return NextResponse.json({ updatedColdLead }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }


  
export async function DELETE(request,{params}) {
    const { id } = params;
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing ColdLead document by ID
      const existingColdLead = await ColdLead.findById(id);
      if (!existingColdLead) {
        return NextResponse.json({ error: 'ColdLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Retrieve the IDs of all notes associated with the ColdLead
      const noteIds = existingColdLead.notes;
      // Retrieve the IDs of all email addresses associated with the ColdLead
      const emailIds = existingColdLead.emailAddresses;
      // Retrieve the IDs of all phone numbers associated with the ColdLead
      const phoneIds = existingColdLead.phone;
      // Retrieve the ID of the situation associated with the ColdLead
      const situationId = existingColdLead.situation;
      // Retrieve the ID of the houseInfo associated with the ColdLead
      const houseInfoId = existingColdLead.houseInfo;
      // Delete the ColdLead document
      await existingColdLead.deleteOne();
  
      // Delete all notes associated with the ColdLead
      await Note.deleteMany({ _id: { $in: noteIds } });
  
      // Delete all email addresses associated with the ColdLead
      await ColdLeadEmail.deleteMany({ _id: { $in: emailIds } });
  
      // Delete all phone numbers associated with the ColdLead
      await ColdLeadPhone.deleteMany({ _id: { $in: phoneIds } });
  
      // Delete the situation associated with the ColdLead, if it exists
      if (situationId) {
        await Situation.findByIdAndDelete(situationId);
      }
  
      // Delete the houseInfo associated with the ColdLead, if it exists
      if (houseInfoId) {
        await HouseInfo.findByIdAndDelete(houseInfoId);
      }
  
      return NextResponse.json({ message: 'ColdLead and associated data deleted successfully.' }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error meow.' }, { status: 500 }); // 500 Internal Server Error
    }
  }