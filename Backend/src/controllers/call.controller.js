const Call = require("../Models/call.model");

const getCalls = async (req, res) => {
  try {
    const users = await Call.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCall = async (req, res) => {
  try {
    const { id } = req.params;
    const call = await Call.findById(id);
    res.status(200).json(call);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCall = async (req, res) => {
  try {
    const call = await Call.create(req.body);
    res.status(200).json(call);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCall = async (req, res) => {
  try {
    const { id } = req.params;

    const call = await Call.findByIdAndUpdate(id, req.body);

    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    const updatedCall = await Call.findById(id);
    res.status(200).json(updatedCall);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCall = async (req, res) => {
  try {
    const { id } = req.params;

    const call = await Call.findByIdAndDelete(id);

    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    res.status(200).json({ message: "Call deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCalls,
  getCall,
  createCall,
  updateCall,
  deleteCall,
};
