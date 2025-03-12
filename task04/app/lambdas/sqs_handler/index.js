exports.handler = async (event) => {
    console.log("Received SQS event:", JSON.stringify(event, null, 2));

    try {
        for (const record of event.Records) {
            console.log("Processing message:", record.body);

            // Add your processing logic here
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "SQS messages processed successfully" }),
        };
    } catch (error) {
        console.error("Error processing SQS message:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to process messages" }),
        };
    }
};
