const express = require("express");
const matrices = express.Router();
const {
    getAllMatrices,
    getMatrix,
    createMatrix,
    deleteMatrix,
    updateMatrix,

} = require("../queries/matrices");
const { checkBoolean, checkName} = require("../validations/checkMatrices.js");

// INDEX
matrices.get("/", async (req, res) => {
    const allMatrices = await getAllMatrices();
    // console.log(allMatrices)
    if (allMatrices[0]) {
      res.status(200).json(allMatrices);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
  matrices.get("/:id", async (req, res) => {
    const { id } = req.params;
    const matrix = await getMatrix(id);
    if (matrix) {
      res.json(matrix);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  // CREATE
  matrices.post("/", checkBoolean,checkName, async (req, res) => {
    console.log(req.body)
    try {
      const matrix = await createMatrix(req.body);
      res.json(matrix);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

// DELETE
matrices.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedMatrix = await deleteMatrix(id);
    if (deletedMatrix.id) {
      res.status(200).json(deletedMatrix);
    } else {
      res.status(404).json("Matrix undetected");
    }
  });

// UPDATE
matrices.put("/:id", checkBoolean,checkName, async (req, res) => {
    const { id } = req.params;
    const updatedMatrix = await updateMatrix(id, req.body);
    res.status(200).json(updatedMatrix);
  });

module.exports = matrices;