const db = require("../db/dbConfig.js");

const getAllMatrices = async () => {
    try {
        const allMatrices = await db.any("SELECT * FROM matrices");
        console.log(allMatrices)
        return allMatrices;
      }   catch (error) {
            return error
        }
    };
    //ONE MATRIX
    const getMatrix = async (id) => {
        try {
            const oneMatrix = await db.one("SELECT * FROM matrices WHERE id=$1", id);
            return oneMatrix;
        } catch (error) {
            return error;
        }
    };

    //CREATE
    const createMatrix = async (matrix) => {
        try {
            const newMatrix = await db.one(
                "INSERT INTO matrices (name, description, url, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
                [matrix.name, matrix.description, matrix.url, matrix.is_favorite]
            );
            return newMatrix
        }   catch(error) {
            return error;
        }
    };

    //DELETE
    const deleteMatrix = async (id) => {
        try {
          const deletedMatrix = await db.one(
            "DELETE FROM matrices WHERE id = $1 RETURNING *",
            id
          );
          return deletedMatrix;
        } catch (error) {
          return error;
        }
      };

    //UPDATE
const updateMatrix = async (id, matrix) => {
    try {
      const updatedMatrix = await db.one(
        "UPDATE matrices SET name=$1, description=$2, url=$3, is_favorite=$4 WHERE id =$5 RETURNING *",
        [matrix.name, matrix.description, matrix.url, matrix.is_favorite, id]
      );
      return updatedMatrix;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllMatrices,
    createMatrix,
    getMatrix,
    deleteMatrix,
    updateMatrix
  };