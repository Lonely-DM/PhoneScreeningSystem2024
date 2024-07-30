const Caller = require("../Models/caller.model");

const getCallers = async (req, res) => {
  try {
    const users = await Caller.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCaller = async (req, res) => {
  try {
    const { id } = req.params;
    const caller = await Caller.findById(id);
    res.status(200).json(caller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCaller = async (req, res) => {
  try {
    const caller = await Caller.create(req.body);
    res.status(200).json(caller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCaller = async (req, res) => {
  try {
    const { id } = req.params;

    const caller = await Caller.findByIdAndUpdate(id, req.body);

    if (!caller) {
      return res.status(404).json({ message: "Caller not found" });
    }

    const updatedCaller = await Caller.findById(id);
    res.status(200).json(updatedCaller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCaller = async (req, res) => {
  try {
    const { id } = req.params;

    const caller = await Caller.findByIdAndDelete(id);

    if (!caller) {
      return res.status(404).json({ message: "Caller not found" });
    }

    res.status(200).json({ message: "Caller deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCallers,
  getCaller,
  createCaller,
  updateCaller,
  deleteCaller,
};
