import dbConnect from "@/db/config/connection";
import {HouseInfo} from '@/db/models';
import { NextResponse } from "next/server";





export async function POST(request, response) {
    const body  =  await request.json();
    console.log(body);
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
    return NextResponse.json({ houseInfo: savedHouseInfo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'my Server error.' }, { status: 500 });
  }
 
}



export async function GET(request) {
    try {
      await dbConnect(); // Connect to MongoDB
  
      const houseInfoList = await HouseInfo.find();
  console.log(houseInfoList);
      return NextResponse.json({ houseInfoList }, { status: 200 });
    } catch (error) {
        console.log(error)
      return NextResponse.json({ error: 'my Server error.' }, { status: 500 });
    }
  }




  





































































