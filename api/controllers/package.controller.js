import Package from "../models/package.model.js";

export const addPackage = async (req, res, next) => {
  const { name, state, disc, price, image, cabId, hotelId, placeId, noOfDay } =
    req.body;
  if (
    !name ||
    !state ||
    !disc ||
    !price ||
    !cabId ||
    !hotelId ||
    !placeId ||
    !noOfDay ||
    name !== "" ||
    state !== "" ||
    disc !== "" ||
    price !== "" ||
    cabId !== "" ||
    hotelId !== "" ||
    noOfDay !== 0
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const slug = name
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  try {
    if (!req.user.isAdmin) {
      return next(
        errorHandler(400, "You are not allowed to create a Public Package")
      );
    }

    const validPackage = await Package.findOne({ slug });
    if (validPackage) {
      return next(errorHandler(400, "Package already exists!"));
    }

    const newpackage = new Package({
      name,
      state,
      disc,
      image,
      slug,
      noOfDay,
      price,
      cabId,
      hotelId,
      placeId,
    });
    const result = await newpackage.save();
    res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
};

export const getPackage = async (req, res, next) => {
  try {
    const getPackage = await Package.findById(req.params.packageId);
    res.status(200).json(getPackage);
  } catch (error) {
    return next(error);
  }
};

export const getAllPackage = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to get all packages."));
  }
  try {
    const getPackages = await Package.find();
    res.status(200).json(getPackages);
  } catch (error) {
    return next(error);
  }
};

export const updatePackage = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      errorHandler(403, "You are not allowed to change any packages.")
    );
  }
  const { name, state, disc, price, image, cabId, hotelId, placeId, noOfDay } =
    req.body;
  if (name || name !== "") {
    const slug = name
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
    const validPackage = await Package.findOne({ slug });
    if (validPackage) {
      return next(errorHandler(400, "Package already exists!"));
    }
  }
  try {
    const updatePackage = await Package.findByIdAndUpdate(
      req.params.packageId,
      {
        $set: {
          name,
          state,
          disc,
          image,
          slug,
          noOfDay,
          price,
          cabId,
          hotelId,
          placeId,
        },
      },
      { new: true }
    );
    await updatePackage.save();
    res.status(200).json(updatePackage);
  } catch (error) {
    return next(error);
  }
};

export const deletePackage = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      errorHandler(403, "You are not allowed to delete any packages.")
    );
  }
  try {
    const deletePackage = await Package.findByIdAndDelete(
      req.params.packageId
    );
    res.status(200).json(deletePackage);
  } catch (error) {
    return next(error);
  }
};
