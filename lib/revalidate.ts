export const WEEKLY_WANTS_TAG = "weekly-wants";
export const LEADERBOARD_TAG = "leaderboard";
export const RUMMAGE_PILE_TAG = "rummage-pile";

export const revalidateByTag = (tag: string) => {
  return fetch("https://palia.th.gl/api/revalidate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REVALIDATE_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tag }),
  });
};
