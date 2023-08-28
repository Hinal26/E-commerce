const {
  userService,
  categoryService,
  stationaryService,
} = require("../services");

/** Get E-commer list */
const getAllList = async (req, res) => {
  try {
    const userList = await userService.getUserList();
    const categoryList = await categoryService.getCategoryList();
    const stationaryList = await stationaryService.getStationaryList();

    res.status(200).json({
      success: true,
      message: "Get E-commers list successfully!",
      data: { userList, categoryList, stationaryList, },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getAllList };
