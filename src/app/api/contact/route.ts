import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const collection = db.collection("contact_messages");

    const newMessage = {
      name,
      email,
      phone: phone || "",
      subject: subject || "General Inquiry",
      message,
      createdAt: new Date(),
      read: false,
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
      userAgent: req.headers.get("user-agent") || "",
    };

    const result = await collection.insertOne(newMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Message recorded in database successfully",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to record message in database" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const db = await getDatabase();
    const collection = db.collection("contact_messages");

    const messages = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ success: true, messages });
  } catch (error: any) {
    console.error("API /contact GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch contact messages" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, read } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing message ID" }, { status: 400 });
    }

    const db = await getDatabase();
    const collection = db.collection("contact_messages");

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { read: Boolean(read), updatedAt: new Date() } }
    );

    return NextResponse.json({ success: true, message: "Message updated" });
  } catch (error: any) {
    console.error("API /contact PATCH error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update contact message" },
      { status: 500 }
    );
  }
}
