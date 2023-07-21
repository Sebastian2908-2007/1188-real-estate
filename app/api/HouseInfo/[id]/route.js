import dbConnect from "@/db/config/connection";
import {HouseInfo,HotLead} from '@/db/models';
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    const { id } = params;
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the HouseInfo document by ID
      const houseInfo = await HouseInfo.findById(id);
  
      if (!houseInfo) {
        return NextResponse.json({ error: 'HouseInfo not found.' }, { status: 404 }); // 404 Not Found
      }
  console.log('GET BY id working')
      return NextResponse.json({ houseInfo }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }

export async function DELETE(request,{params}) {
    const { id } = params;
    console.log(id);
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      const deletedHouseInfo = await HouseInfo.findByIdAndDelete(id);
  
      if (!deletedHouseInfo) {
        return NextResponse.json({ error: 'HouseInfo not found.' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'HouseInfo deleted successfully.' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 });
    }
  }

  export async function PUT(request,{params}) {
    const { id } = params;
    const updatedFields = await request.json();
  console.log(updatedFields);
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Find the existing HouseInfo document by ID
      const existingHouseInfo = await HouseInfo.findById(id);
  
      if (!existingHouseInfo) {
        return NextResponse.json({ error: 'HouseInfo not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Merge the existing and updated fields to preserve unchanged fields
      const mergedFields = { ...existingHouseInfo._doc, ...updatedFields };
  
      // Update the HouseInfo document
      const updatedHouseInfo = await HouseInfo.findByIdAndUpdate(id, mergedFields, {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators for updates
      });
  
      return NextResponse.json({ updatedHouseInfo }, { status: 200 }); // 200 OK
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }




  /*this post Route will be used on client side for creating HouseInfo in the user form*/
  export async function POST(request,{params}) {
    const { id } = params;
    const body = await request.json();
    const {
      garageType,
      atticType,
      occupiedStatus,
      basementType,
      lengthOwned,
      listedStatus,
      propertyCondition,
      repairs,
      walkThroughVideo,
    } = body;
  
    // Set default values for all fields if they are absent in the request
    const defaultValues = {
      garageType: 'Default Garage Type',
      atticType: 'Default Attic Type',
      occupiedStatus: 'Default Occupied Status',
      basementType: 'Default Basement Type',
      lengthOwned: 'Default Length Owned',
      listedStatus: 'Default Listed Status',
      propertyCondition: 'Default Property Condition',
      repairs: 'Default Repairs',
    };
  
    try {
      await dbConnect(); // Connect to MongoDB
  
      // Create a new HouseInfo document
      const newHouseInfo = new HouseInfo({
        garageType: garageType || defaultValues.garageType,
        atticType: atticType || defaultValues.atticType,
        occupiedStatus: occupiedStatus || defaultValues.occupiedStatus,
        basementType: basementType || defaultValues.basementType,
        lengthOwned: lengthOwned || defaultValues.lengthOwned,
        listedStatus: listedStatus || defaultValues.listedStatus,
        propertyCondition: propertyCondition || defaultValues.propertyCondition,
        repairs: repairs || defaultValues.repairs,
        walkThroughVideo: walkThroughVideo || null, // Assuming walkThroughVideo is a URL or a string.
      });
  
      // Save the new HouseInfo document to the database
      const savedHouseInfo = await newHouseInfo.save();
  
      // Find the existing HotLead document by ID and populate the HouseInfo data
      const updatedHotLead = await HotLead.findById(id).populate('houseInfo');
  
      if (!updatedHotLead) {
        return NextResponse.json({ error: 'HotLead not found.' }, { status: 404 }); // 404 Not Found
      }
  
      // Associate the HouseInfo data with the HotLead
      updatedHotLead.houseInfo = savedHouseInfo;
  
      // Save the updated HotLead document with the associated HouseInfo data
      await updatedHotLead.save();
  
      return NextResponse.json({ hotLead: updatedHotLead }, { status: 201 }); // 201 Created
    } catch (error) {
      return NextResponse.json({ error: 'Server error.' }, { status: 500 }); // 500 Internal Server Error
    }
  }