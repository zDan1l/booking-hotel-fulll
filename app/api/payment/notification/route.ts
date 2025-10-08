import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";
import crypto from "crypto";


export const POST = async(request: Request) => {
    const data : PaymentProps = await request.json();
    const reservationId = data.order_id;
    
    let responseData = null;
    const transactionStatus = data.transaction_status;
    const paymentType = data.payment_type || null;
    const fraudStatus = data.fraud_status;
    const statusCode = data.status_code;
    const grossAmount = data.gross_amount;
    const signatureKey = data.signature_key;
    const hash = crypto.createHash("sha512").update(`${reservationId}${statusCode}${grossAmount}${process.env.MIDTRANS_SERVER_KEY}`).digest('hex');

    if(signatureKey === hash){
        return NextResponse.json({error: "Missing Signature Key"}, {status: 400})
    }

    if(transactionStatus === "capture"){
        if(statusCode === "200"){
            const transaction = await prisma.payment.update({
                data : {
                    method: paymentType,
                    status : "paid"
                },
                where : {reservationId}
            }),
            responseData = transaction;
        }
    } else if(transactionStatus === "settlement"){
        if(statusCode === "200"){
            const transaction = await prisma.payment.update({
                data : {
                    method: paymentType,
                    status : "paid"
                },
                where : {reservationId}
            }),
            responseData = transaction;
        }
    }else if(transactionStatus === "cancel" || transactionStatus == "deny" || transactionStatus === "expire"){
        if(statusCode === "200"){
            const transaction = await prisma.payment.update({
                data : {
                    method: paymentType,
                    status : "failure"
                },
                where : {reservationId}
            }),
            responseData = transaction;
        }
    }else if(transactionStatus === "pending"){
        if(statusCode === "200"){
            const transaction = await prisma.payment.update({
                data : {
                    method: paymentType,
                    status : "pending"
                },
                where : {reservationId}
            }),
            responseData = transaction;
        }
    }

    return NextResponse.json({responseData}, {status: 200});
}