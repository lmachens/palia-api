export const postToDiscord = (content: string) => {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    throw new Error("No webhook URL set");
  }

  return fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  });
};
