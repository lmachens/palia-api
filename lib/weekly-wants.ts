import Ajv, { JSONSchemaType } from "ajv";

const ajv = new Ajv();
export type CurrentGiftPreferences = {
  preferenceResetTime: {
    dayOfWeek: number;
    hour: number;
    minute: number;
  };
  preferenceDataVersionNumber: number;
  currentPreferenceData: Array<{
    villagerCoreId: number;
    currentGiftPreferences: Array<number>;
  }>;
};

export const currentGiftPreferencesSchema: JSONSchemaType<CurrentGiftPreferences> =
  {
    type: "object",
    properties: {
      preferenceResetTime: {
        type: "object",
        properties: {
          dayOfWeek: { type: "number" },
          hour: { type: "number" },
          minute: { type: "number" },
        },
        required: ["dayOfWeek", "hour", "minute"],
        additionalProperties: false,
      },
      preferenceDataVersionNumber: { type: "number" },
      currentPreferenceData: {
        type: "array",
        items: {
          type: "object",
          properties: {
            villagerCoreId: { type: "number" },
            currentGiftPreferences: {
              type: "array",
              items: { type: "number" },
            },
          },
          required: ["villagerCoreId", "currentGiftPreferences"],
          additionalProperties: false,
        },
      },
    },
    required: [
      "preferenceResetTime",
      "preferenceDataVersionNumber",
      "currentPreferenceData",
    ],
    additionalProperties: false,
  };

export const validateCurrentGiftPreferences = ajv.compile(
  currentGiftPreferencesSchema
);
