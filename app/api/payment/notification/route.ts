import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";
import crypto from "crypto";


export const POST = async(request: Request) => {
    try {
        const data : PaymentProps = await request.json();
        console.log('Received notification:', data); // Logging untuk debugging
        
        const reservationId = data.order_id;
        if (!reservationId) {
            return NextResponse.json({error: "Missing order_id"}, {status: 400});
        }
        
        let responseData = null;
        const transactionStatus = data.transaction_status;
        const paymentType = data.payment_type || null;
        const fraudStatus = data.fraud_status;
        const statusCode = data.status_code;
        const grossAmount = data.gross_amount;
        const signatureKey = data.signature_key;

        // Log data penting
        console.log('Transaction details:', {
            reservationId,
            transactionStatus,
            statusCode,
            grossAmount
        });

        const hash = crypto.createHash("sha512")
            .update(`${reservationId}${statusCode}${grossAmount}${process.env.MIDTRANS_SERVER_KEY}`)
            .digest('hex');
        
        console.log('Signature verification:', {
            received: signatureKey,
            calculated: hash
        });

        if(signatureKey !== hash){
            console.log('Signature mismatch');
            return NextResponse.json({error: "Invalid Signature Key"}, {status: 400});
        }

        try {
            let newStatus = "pending";
            if(transactionStatus === "capture" && fraudStatus === "accept") {
                newStatus = "paid";
            } else if(transactionStatus === "settlement") {
                newStatus = "paid";
            } else if(transactionStatus === "cancel" || transactionStatus === "deny" || transactionStatus === "expire") {
                newStatus = "failure";
            }

            console.log('Updating payment status to:', newStatus);

            const transaction = await prisma.payment.update({
                data: {
                    method: paymentType,
                    status: newStatus
                },
                where: {
                    reservationId
                }
            });

            console.log('Update successful:', transaction);
            responseData = transaction;
            
            return NextResponse.json({
                success: true,
                data: responseData
            }, {status: 200});
        } catch (error) {
            console.error('Error updating payment:', error);
            return NextResponse.json({
                error: "Failed to update payment",
                details: error instanceof Error ? error.message : "Unknown error"
            }, {status: 500});
        }
    } catch (error) {
        console.error('Error processing notification:', error);
        return NextResponse.json({
            error: "Failed to process notification",
            details: error instanceof Error ? error.message : "Unknown error"
        }, {status: 500});
    }
}