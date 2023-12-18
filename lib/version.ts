import semver from "semver";

const MINIMUM_VERSION = "1.2.4";

export function isValidVersion(version?: string | null) {
  return (
    version && semver.valid(version) && semver.gte(version, MINIMUM_VERSION)
  );
}
