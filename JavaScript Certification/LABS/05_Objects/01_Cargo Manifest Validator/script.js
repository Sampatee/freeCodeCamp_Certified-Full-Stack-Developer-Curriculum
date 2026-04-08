const normalizeUnits = (manifest) => ({
  ...manifest,
  weight: manifest.unit === "kg" ? manifest.weight : manifest.weight * 0.45,
  unit: "kg",
});

const validateManifest = (manifest) => {
  const validityStatus = {};

  //containerID
  if (manifest.containerId === undefined) {
    validityStatus.containerId = "Missing";
  } else if (
    Number.isNaN(manifest.containerId) ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    validityStatus.containerId = "Invalid";
  }

  //destination
  if (manifest.destination === undefined) {
    validityStatus.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    !manifest.destination.trim().length
  ) {
    validityStatus.destination = "Invalid";
  }

  //weight
  if (manifest.weight === undefined) {
    validityStatus.weight = "Missing";
  } else if (Number.isNaN(manifest.weight) || manifest.weight <= 0) {
    validityStatus.weight = "Invalid";
  }

  //unit
  if (manifest.unit === undefined) {
    validityStatus.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    validityStatus.unit = "Invalid";
  }

  //hazmat
  if (manifest.hazmat === undefined) {
    validityStatus.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validityStatus.hazmat = "Invalid";
  }

  return validityStatus;
};

const processManifest = (manifest) => {
  const errors = validateManifest(manifest);

  if (!Object.keys(errors).length) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
    return;
  }

  console.log(`Validation error: ${manifest.containerId}`);
  console.log(errors);
};
