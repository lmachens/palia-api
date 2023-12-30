export const postToDiscord = async (content: string) => {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    throw new Error("No webhook URL set");
  }

  const formData = new FormData();
  formData.append(
    "payload_json",
    JSON.stringify({
      content: content,
      flags: 4, // SUPPRESS_EMBEDS https://discord.com/developers/docs/resources/channel#message-object-message-flags
    })
  );

  const textBody = await new Response(formData).text();
  return await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${textBody
        .split("\n")[0]
        .slice(2)}`,
    },
    body: textBody,
  });
};
