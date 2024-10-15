import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import Collection from "@/lib/models/Collection";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();
    console.log("User ID:", userId);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    await connectToDB();
    console.log("MongoDB connection established");

    const { title, description, image } = await req.json();
    console.log("Received data:", { title, description, image });

    if (!title || !image) {
      return new NextResponse("Title and image are required", { status: 400 });
    }

    const existingCollection = await Collection.findOne({ title });

    if (existingCollection) {
      return new NextResponse("Collection already exists", { status: 400 });
    }

    const newCollection = new Collection({
      title,
      description,
      image,
    });

    await newCollection.save();

    console.log("New collection created:", newCollection);

    return NextResponse.json(newCollection, { status: 201 });
  } catch (err) {
    console.error("[collections_POST]", err);
    if (err instanceof mongoose.Error.ValidationError) {
      return new NextResponse(err.message, { status: 400 });
    }
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};
